import $ from 'jquery';
import { showAlertModal } from './modal';
import alertify from 'alertify.js/src/js/alertify';

export default function (cartId) {
    // ------------------------------------------------
    // GLOBAL PROMOTION
    // ------------------------------------------------
    class Observer {
        constructor() {
            this.subscribers = [];
        }

        subscribe(subscriber) {
            this.subscribers.push(subscriber);
        }

        publish(event, data) {
            this.subscribers
                .filter(
                    subscriber =>
                        subscriber.event === event
                )
                .forEach(
                    subscriber =>
                        subscriber.action(data)
                )
        }
    }

    const promoPriceObserver = new Observer();

    function getPromoData(couponCode) {
        if (!couponCode) {
            $('#couponMessage').text('Please enter coupon code');
            setTimeout(() => {
            $('#couponMessage').text('');
            }, 2000);
            return false;
        }

        showPromoLoader();
        $.ajax({
            url: `https://ijt-direct-bc-middleware.nw.r.appspot.com/v3/promotions?code=${couponCode}`,
            context: document.body
        }).done(function(res) {
            let promoData = res.data[0];
            hidePromoLoader();
            if(!res.data.length || !isPromoValid(promoData)) {
                showAlertModal("There’s a problem with this coupon code. Please call our sales team on 0800 083 4555");
            } else {
                // Don't display alertify message if on the cart page
                if (window.location.pathname !== '/cart.php') {
                    alertify.success(`"${couponCode}" applied`);
                }

                // Add coupon code to the promo object
                promoData.coupon_code = couponCode;
                updateGlobalPromo(promoData);
            }
        });
    }

    function isPromoValid(promoData) {
        if (
            promoData.redemption_type === 'COUPON' &&
            (promoData.end_date === null || Date.parse(promoData.end_date) > Date.now()) &&
            promoData.status === 'ENABLED'
        ) {
            return true;
        } else {
            return false;
        }
    }

    function updateGlobalPromo(promoData) {
        if (isPromoValid(promoData)) {
            localStorage.setItem('globalPromo', JSON.stringify(promoData));
            promoPriceObserver.publish('update', promoData);
        }
    }
    
    function removeGlobalPromo() {
        const couponCode = JSON.parse(localStorage.getItem('globalPromo')).coupon_code;
        promoPriceObserver.publish('remove', couponCode);
        $('.price__saving').remove();
    }

    function applyExisitngPromo() {
        const clientGlobalPromo = localStorage.getItem('globalPromo');

        if (clientGlobalPromo) {
            promoPriceObserver.publish('update', JSON.parse(clientGlobalPromo));
        }
    }

    function hasUrlPromo() {
        const urlParams = new URLSearchParams(window.location.search);
        return urlParams.get('promocode') ? true : false;
    }

    function applyUrlPromo() {
        const urlParams = new URLSearchParams(window.location.search);
        const couponCode = urlParams.get('promocode');

        getPromoData(couponCode);
    }

    function initGlobalPromoBanner() {
        const banner = document.getElementById('globalPromoBanner');
        if (!banner) {
            return;
        }

        const bannerMessage = document.getElementById('globalPromoBannerMessage');

        promoPriceObserver.subscribe({
            event: 'update',
            action: (data) => {
                bannerMessage.textContent = data.name;
                banner.classList.add('show');
            }
        });

        promoPriceObserver.subscribe({
            event: 'remove',
            action: (data) => {
                banner.classList.remove('show');
                bannerMessage.textContent = '';
            }
        });
    }

    function initGlobalPromoInput() {
        const promoForm = document.getElementById('globalPromoForm');
        if (!promoForm) {
            return;
        }

        const promoRemove = document.getElementById('globalPromoRemove');
        const appliedPromoCode = document.getElementById('globalPromoApplied');
        const promoInput = document.getElementById('globalPromoInput');

        promoPriceObserver.subscribe({
            event: 'update',
            action: (data) => {
                promoForm.classList.add('hide');
                promoRemove.classList.add('show');
                appliedPromoCode.innerText = data.coupon_code;
            }
        });

        promoPriceObserver.subscribe({
            event: 'remove',
            action: (couponCode) => {
                promoForm.classList.remove('hide');
                promoRemove.classList.remove('show');
                appliedPromoCode.innerText = '';
                promoInput.value = '';
                localStorage.removeItem('globalPromo');
                removePromoFromCart(couponCode);
            }
        });
    }

    function removePromoFromCart(couponCode) {
        if (cartId) {
            $.ajax({
                url: `/api/storefront/checkouts/${cartId}/coupons/${couponCode}`,
                type: 'DELETE',
                context: document.body
            }).done(function(res) {
                console.log('removed');
            });
        }
    }

    function getPercentageDiscount(rule) {
            return rule.action.cart_items.discount.percentage_amount;
    }

    function ifPromoCategoryIsIncludedInRule(rule, promoCategory) {
        if ( (rule.action?.cart_items?.items?.categories.indexOf(promoCategory)) > -1 ) {
            return true;
        } else {
            return false;
        }
    }

    function initProductPriceObserver(priceElements) {
        // Check if promo category exists for the product
        const priceElement = $(priceElements).find('[data-promo-category]');
        const promoCategory = parseInt(priceElement.attr('data-promo-category'));
        if (!promoCategory) {
            return;
        }

        promoPriceObserver.subscribe({
            event: 'update',
            action: (data) => {
                updateProductPrice(priceElements);
            }
        });

        promoPriceObserver.subscribe({
            event: 'remove',
            action: (data) => {
                revertProductPrice(priceElements);
            }
        });
    }

    function updateProductPrice(priceElements) {     
        // Check if promo category exists for the product
        const priceElement = $(priceElements).find('[data-promo-category]');
        const promoCategory = parseInt(priceElement.attr('data-promo-category'));
        if (!promoCategory) {
            return;
        }
        const sessionPromo = localStorage.getItem('globalPromo');

        if (promoCategory && sessionPromo) {
            const promoRules = JSON.parse(sessionPromo).rules;
            // Loop through the promo rules
            for (const rule of promoRules) {
                if (ifPromoCategoryIsIncludedInRule(rule, promoCategory)) {
                    // Check if promo category is included in promo rule
                    const percentDiscount = getPercentageDiscount(rule);

                    if (percentDiscount) {
                        updateProductPriceDOM(priceElement, percentDiscount);
                    }
                    if (rule.stop) {
                        return;
                    }
                }
            }
        }
    }

    function updateProductPriceDOM(priceElement, percentDiscount) {
        const initialPriceNum = parseFloat(priceElement.attr('data-price')).toFixed(2);
        const initialPriceString = priceElement.text();
        const pricePercentage = 1 - (percentDiscount / 100);
        const newPrice = (initialPriceNum * pricePercentage).toFixed(2);

        priceElement.html(`
            <span class="price__initial">${initialPriceString}</span>
            <span class="price__new textclass1">£${newPrice}</span>
        `);

        priceElement.addClass('global-promo-applied');
        priceElement.removeClass('pre-check');
    }

    function revertProductPrice(priceElements) {
        const priceElement = $(priceElements).find('[data-promo-category]');
        const initialPriceNum = parseFloat(priceElement.attr('data-price')).toFixed(2);
        priceElement.html('£' + initialPriceNum);
    }
    
    function initBulkPriceObserver(bulkPriceTable) {
        // Check if promo category exists for the product
        const promoCategory = parseInt(bulkPriceTable.getAttribute('data-promo-category'));
        if (!promoCategory) {
            return;
        }

        promoPriceObserver.subscribe({
            event: 'update',
            action: (data) => {
                updateProductBulkPrice(bulkPriceTable);
            }
        });

        promoPriceObserver.subscribe({
            event: 'remove',
            action: (data) => {
                revertProductBulkPrice(bulkPriceTable);
            }
        });
    }

    function updateProductBulkPrice(bulkPriceTable) {
        const bulkPriceElements = $(bulkPriceTable).find('.js-bulk-price');
        const sessionPromo = localStorage.getItem('globalPromo');
        const promoCategory = parseInt(bulkPriceTable.getAttribute('data-promo-category'));
        if (!promoCategory) {
            return;
        }

        if (promoCategory && sessionPromo) {
            const promoRules = JSON.parse(sessionPromo).rules;
            // Loop through the promo rules
            for (const rule of promoRules) {
                if (ifPromoCategoryIsIncludedInRule(rule, promoCategory)) {
                    // Check if promo category is included in promo rule
                    const percentDiscount = getPercentageDiscount(rule);

                    if (percentDiscount) {
                        updateProductBulkPriceDOM(bulkPriceElements, percentDiscount);
                    }
                    if (rule.stop) {
                        return;
                    }
                }
            }
        }
    }

    function updateProductBulkPriceDOM(bulkPriceElements, percentDiscount) {
        let initialPriceString;
        let initialPriceNum;

        $(bulkPriceElements).each(function( index ) {
            initialPriceString = $(this).text();
            // convert price to number
            initialPriceNum = parseFloat(initialPriceString.substring(1)).toFixed(2);

            const pricePercentage = 1 - (percentDiscount / 100);
            const newPrice = (initialPriceNum * pricePercentage).toFixed(2);

            $(this).html(`
                <span class="price__initial">${initialPriceString}</span>
                <span class="price__new textclass1">£${newPrice}</span>
            `);

            $(this).addClass('global-promo-applied');
            $(this).removeClass('pre-check');
        });
    }

    function revertProductBulkPrice(bulkPriceTable) {
        const bulkPriceElements = $(bulkPriceTable).find('.js-bulk-price');
        let initialPriceString;
        let initialPriceNum;

        $(bulkPriceElements).each(function( index ) {
            initialPriceString = $(this).find(".price__initial").text();
            initialPriceNum = parseFloat(initialPriceString.substring(1)).toFixed(2);

            $(this).html('£' + initialPriceNum);
        });
    }

    function initPromoBannerObserver(productElement) {
        // Check if promo category exists for the product
        const priceElement = $(productElement).find('[data-promo-category]');
        const promoCategory = parseInt(priceElement.attr('data-promo-category'));
        if (!promoCategory) {
            return;
        }

        promoPriceObserver.subscribe({
            event: 'update',
            action: (data) => {
                updatePromoBanner(productElement);
            }
        });

        promoPriceObserver.subscribe({
            event: 'remove',
            action: (data) => {
                revertPromoBanner(productElement);
            }
        });
    }

    function updatePromoBanner(productElement) {
        // Check if promo category exists for the product
        const productCard = $(productElement);
        const cardImage = $(productElement).find(".card-figure");
        const productImage = $(productElement).find(".productView-image");
        const priceElement = $(productElement).find('[data-promo-category]');
        const promoCategory = parseInt(priceElement.attr('data-promo-category'));
        if (!promoCategory) {
            return;
        }
        const sessionPromo = localStorage.getItem('globalPromo');

        if (promoCategory && sessionPromo) {
            const promoRules = JSON.parse(sessionPromo).rules;
            // Loop through the promo rules
            for (const rule of promoRules) {
                if (ifPromoCategoryIsIncludedInRule(rule, promoCategory)) {
                    // Check if promo category is included in promo rule
                    const percentDiscount = getPercentageDiscount(rule);

                    if (percentDiscount) {
                        updatePromoBannerDOM(productImage, cardImage, percentDiscount);
                    }
                    if (rule.stop) {
                        return;
                    }
                }
            }
        }
    }

    function updatePromoBannerDOM(productImage, cardImage, percentDiscount) {
        cardImage.append(`
            <div class="price__saving">${percentDiscount}%<br> off!</div>
        `);

        productImage.append(`
            <div class="price__saving">${percentDiscount}%<br> off!</div>
        `);
    }

    function revertPromoBanner(productElement) {
        const promoBanner = $(productElement).find(".price__saving");
        promoBanner.html("");
    }

    function showPromoLoader() {
        $('#globalPromo .loadingOverlay').show();
    }
    
    function hidePromoLoader() {
        $('#globalPromo .loadingOverlay').hide();

    }

    // ------------------------------------------------
    // DOM READY
    // ------------------------------------------------
    $(function() {
        initGlobalPromoInput();
        initGlobalPromoBanner();

        if (hasUrlPromo()) {
            applyUrlPromo();
        } else {
            applyExisitngPromo();
        }

        // User adds new promo
        $('#globalPromoForm').on('submit', function(e) {
            e.preventDefault();
            getPromoData($('#globalPromoInput').val());
        });
        // User adds new promo
        $('#globalPromoSubmit').on('click', function() {
            getPromoData($('#globalPromoInput').val());
        });
        // Users removes promo
        $('#globalPromoRemoveCode').on('click', function() {
            removeGlobalPromo();
        });
        // Update prices on page
        $('.js-product-price').each(function(){
            initProductPriceObserver(this);
            updateProductPrice(this);
        });
        // Update promo banners on page
        $('.js-product').each(function(){
            initPromoBannerObserver(this);
            updatePromoBanner(this);
        });
        // User adds promo to cart
        $('#couponCodeForm').on('submit', function(e){
            const couponCode = $(e.target).find($('#couponcode')).val();
            getPromoData(couponCode)
        });
    });

    $(window).load(function() {
        // Update bulk prices on page
        $('.js-bulk-price-table').each(function(){
            initBulkPriceObserver(this);
            updateProductBulkPrice(this);
        });
    });
}
