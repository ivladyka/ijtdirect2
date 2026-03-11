import PageManager from './page-manager';
import _ from 'lodash';
import giftCertCheck from './common/gift-certificate-validator';
import utils from '@bigcommerce/stencil-utils';
import ShippingEstimator from './cart/shipping-estimator';
import { defaultModal } from './global/modal';
import swal from './global/sweet-alert';

export default class Cart extends PageManager {
    onReady() {
        // Fetch coupon code from discount applied to cart
        utils.api.cart.getCart({}, (err, response) => {
            const couponCode = response?.coupons[0]?.code;
            this.applyLocalPromo(couponCode);
        })

        this.$cartContent = $('[data-cart-content]');
        this.$cartMessages = $('[data-cart-status]');
        this.$cartTotals = $('[data-cart-totals]');
        this.$overlay = $('[data-cart] .loadingOverlay')
            .hide(); // TODO: temporary until roper pulls in his cart components

        this.bindEvents();
        this.loadRelatedProducts();
    }

    applyLocalPromo(couponCode) {
        if (!couponCode) {
            return;
        }
        // Use coupon code to fetch globalPromo object for local storage
        $.ajax({
            url: `https://ijt-direct-bc-middleware.nw.r.appspot.com/v3/promotions?code=${couponCode}`,
            context: document.body
        }).done(function(res) {
            if(!res.data.length) {
                return;
            } else {
                let promoData = res.data[0];
                // Add returned discount object to global promo
                promoData.coupon_code = couponCode;
                localStorage.setItem('globalPromo', JSON.stringify(promoData));
            }
        });
    }

    cartUpdate($target) {
        const itemId = $target.data('cartItemid');
        const $el = $(`#qty-${itemId}`);
        const oldQty = parseInt($el.val(), 10);
        const maxQty = parseInt($el.data('quantityMax'), 10);
        const minQty = parseInt($el.data('quantityMin'), 10);
        const minError = $el.data('quantityMinError');
        const maxError = $el.data('quantityMaxError');
        const newQty = $target.data('action') === 'inc' ? oldQty + 1 : oldQty - 1;

        // Does not quality for min/max quantity
        if (newQty < minQty) {
            return swal({
                text: minError,
                type: 'error',
            });
        } else if (maxQty > 0 && newQty > maxQty) {
            return swal({
                text: maxError,
                type: 'error',
            });
        }

        this.$overlay.show();

        utils.api.cart.itemUpdate(itemId, newQty, (err, response) => {
            this.$overlay.hide();

            if (response.data.status === 'succeed') {
                // if the quantity is changed "1" from "0", we have to remove the row.
                const remove = (newQty === 0);
                if (remove)
                {
                    this.removeSwitchedItems(itemId);
                }
                this.refreshContent(remove);
            } else {
                $el.val(oldQty);
                swal({
                    text: response.data.errors.join('\n'),
                    type: 'error',
                });
            }
        });
    }

    cartUpdateQtyTextChange($target, preVal = null) {
        const itemId = $target.data('cartItemid');
        const $el = $(`#qty-${itemId}`);
        const maxQty = parseInt($el.data('quantityMax'), 10);
        const minQty = parseInt($el.data('quantityMin'), 10);
        const oldQty = preVal !== null ? preVal : minQty;
        const minError = $el.data('quantityMinError');
        const maxError = $el.data('quantityMaxError');
        const newQty = parseInt(Number($el.val()), 10);
        let invalidEntry;

        // Does not quality for min/max quantity
        if (!newQty) {
            invalidEntry = $el.val();
            $el.val(oldQty);
            return swal({
                text: `${invalidEntry} is not a valid entry`,
                type: 'error',
            });
        } else if (newQty < minQty) {
            $el.val(oldQty);
            return swal({
                text: minError,
                type: 'error',
            });
        } else if (maxQty > 0 && newQty > maxQty) {
            $el.val(oldQty);
            return swal({
                text: maxError,
                type: 'error',
            });
        }

        this.$overlay.show();
        utils.api.cart.itemUpdate(itemId, newQty, (err, response) => {
            this.$overlay.hide();

            if (response.data.status === 'succeed') {
                // if the quantity is changed "1" from "0", we have to remove the row.
                const remove = (newQty === 0);

                if (remove)
                {
                    this.removeSwitchedItems(itemId);
                }

                this.refreshContent(remove);
            } else {
                $el.val(oldQty);
                swal({
                    text: response.data.errors.join('\n'),
                    type: 'error',
                });
            }
        });
    }

    cartRemoveItem(itemId) {
        this.$overlay.show();
        setTimeout(function(){
            utils.api.cart.getCartQuantity({}, (err, response) => {
                var countItem = (parseInt(response) || 0) - (parseInt($("i.quantity-6667S").text()) || 0) - (parseInt($("i.quantity-6668S").text()) || 0);
                $('.cart-item-counts strong').text(countItem);
            });
        }, 2500);
        utils.api.cart.itemRemove(itemId, (err, response) => {
            if (response.data.status === 'succeed') {
                this.removeSwitchedItems(itemId);
                this.refreshContent(true);
            } else {
                swal({
                    text: response.data.errors.join('\n'),
                    type: 'error',
                });
            }
        });
    }

    cartEditOptions(itemId) {
        const modal = defaultModal();
        const options = {
            template: 'cart/modals/configure-product',
        };

        modal.open();

        utils.api.productAttributes.configureInCart(itemId, options, (err, response) => {
            modal.updateContent(response.content);

            this.bindGiftWrappingForm();
        });

        utils.hooks.on('product-option-change', (event, option) => {
            const $changedOption = $(option);
            const $form = $changedOption.parents('form');
            const $submit = $('input.button', $form);
            const $messageBox = $('.alertMessageBox');
            const item = $('[name="item_id"]', $form).attr('value');

            utils.api.productAttributes.optionChange(item, $form.serialize(), (err, result) => {
                const data = result.data || {};

                if (err) {
                    swal({
                        text: err,
                        type: 'error',
                    });
                    return false;
                }

                if (data.purchasing_message) {
                    $('p.alertBox-message', $messageBox).text(data.purchasing_message);
                    $submit.prop('disabled', true);
                    $messageBox.show();
                } else {
                    $submit.prop('disabled', false);
                    $messageBox.hide();
                }

                if (!data.purchasable || !data.instock) {
                    $submit.prop('disabled', true);
                } else {
                    $submit.prop('disabled', false);
                }
            });
        });
    }

    refreshContent(remove) {
        const $cartItemsRows = $('[data-item-row]', this.$cartContent);
        const $cartPageTitle = $('[data-cart-page-title]');
        const options = {
            template: {
                content: 'cart/content',
                totals: 'cart/totals',
                pageTitle: 'cart/page-title',
                statusMessages: 'cart/status-messages',
            },
        };

        this.$overlay.show();

        // Remove last item from cart? Reload
        if (remove && $cartItemsRows.length === 1) {
            return window.location.reload();
        }

        utils.api.cart.getContent(options, (err, response) => {
            this.$cartContent.html(response.content);
            this.$cartTotals.html(response.totals);
            this.$cartMessages.html(response.statusMessages);

            $cartPageTitle.replaceWith(response.pageTitle);
            this.bindEvents();
            this.$overlay.hide();

            const quantity = $('[data-cart-quantity]', this.$cartContent).data('cartQuantity') || 0;

            $('body').trigger('cart-quantity-update', quantity);

            this.loadRelatedProducts();

            // Add functionality to remove coupon button that removes promo from local storage
            $('#removeCoupon').on('click', this.removeCoupon(event));
        });
    }

    bindCartEvents() {
        const debounceTimeout = 400;
        const cartUpdate = _.bind(_.debounce(this.cartUpdate, debounceTimeout), this);
        const cartUpdateQtyTextChange = _.bind(_.debounce(this.cartUpdateQtyTextChange, debounceTimeout), this);
        const cartRemoveItem = _.bind(_.debounce(this.cartRemoveItem, debounceTimeout), this);
        let preVal;

        // cart update
        $('[data-cart-update]', this.$cartContent).on('click', event => {
            const $target = $(event.currentTarget);

            event.preventDefault();

            // update cart quantity
            cartUpdate($target);
        });

        // cart qty manually updates
        $('.cart-item-qty-input', this.$cartContent).on('focus', function onQtyFocus() {
            preVal = this.value;
        }).change(event => {
            const $target = $(event.currentTarget);
            event.preventDefault();

            // update cart quantity
            cartUpdateQtyTextChange($target, preVal);
        });

        $('.cart-remove', this.$cartContent).on('click', event => {
            const itemId = $(event.currentTarget).data('cartItemid');
            const string = $(event.currentTarget).data('confirmDelete');
            swal({
                text: string,
                type: 'warning',
                showCancelButton: true,
            }).then(() => {
                // remove item from cart
                cartRemoveItem(itemId);
            });
            event.preventDefault();
        });

        $('[data-item-edit]', this.$cartContent).on('click', event => {
            const itemId = $(event.currentTarget).data('itemEdit');

            event.preventDefault();
            // edit item in cart
            this.cartEditOptions(itemId);
        });
    }

    bindPromoCodeEvents() {
        const $couponContainer = $('.coupon-code');
        const $couponForm = $('.coupon-form');
        const $codeInput = $('[name="couponcode"]', $couponForm);

        $('.coupon-code-add').on('click', event => {
            event.preventDefault();

            $(event.currentTarget).hide();
            $couponContainer.show();
            $('.coupon-code-cancel').show();
            $codeInput.trigger('focus');
        });

        $('.coupon-code-cancel').on('click', event => {
            event.preventDefault();

            $couponContainer.hide();
            $('.coupon-code-cancel').hide();
            $('.coupon-code-add').show();
        });

        $couponForm.on('submit', event => {
            const code = $codeInput.val();

            event.preventDefault();

            // Empty code
            if (!code) {
                return swal({
                    text: $codeInput.data('error'),
                    type: 'error',
                });
            }

            utils.api.cart.applyCode(code, (err, response) => {
                if (response.data.status === 'success') {
                    this.refreshContent();
                } else if (response.data.errors.includes("Coupon does not apply")) {
                    // Display error modal if coupon isn't applicable to current cart
                    swal({
                        text: "Coupon does not apply to current cart products",
                        type: 'error',
                    });
                }
            });
        });
    }

    bindGiftCertificateEvents() {
        const $certContainer = $('.gift-certificate-code');
        const $certForm = $('.cart-gift-certificate-form');
        const $certInput = $('[name="certcode"]', $certForm);

        $('.gift-certificate-add').on('click', event => {
            event.preventDefault();
            $(event.currentTarget).toggle();
            $certContainer.toggle();
            $('.gift-certificate-cancel').toggle();
        });

        $('.gift-certificate-cancel').on('click', event => {
            event.preventDefault();
            $certContainer.toggle();
            $('.gift-certificate-add').toggle();
            $('.gift-certificate-cancel').toggle();
        });

        $certForm.on('submit', event => {
            const code = $certInput.val();

            event.preventDefault();

            if (!giftCertCheck(code)) {
                return swal({
                    text: $certInput.data('error'),
                    type: 'error',
                });
            }

            utils.api.cart.applyGiftCertificate(code, (err, resp) => {
                if (resp.data.status === 'success') {
                    this.refreshContent();
                } else {
                    swal({
                        text: resp.data.errors.join('\n'),
                        type: 'error',
                    });
                }
            });
        });
    }

    bindGiftWrappingEvents() {
        const modal = defaultModal();

        $('[data-item-giftwrap]').on('click', event => {
            const itemId = $(event.currentTarget).data('itemGiftwrap');
            const options = {
                template: 'cart/modals/gift-wrapping-form',
            };

            event.preventDefault();

            modal.open();

            utils.api.cart.getItemGiftWrappingOptions(itemId, options, (err, response) => {
                modal.updateContent(response.content);

                this.bindGiftWrappingForm();
            });
        });
    }

    bindGiftWrappingForm() {
        $('.giftWrapping-select').on('change', event => {
            const $select = $(event.currentTarget);
            const id = $select.val();
            const index = $select.data('index');

            if (!id) {
                return;
            }

            const allowMessage = $select.find(`option[value=${id}]`).data('allowMessage');

            $(`.giftWrapping-image-${index}`).hide();
            $(`#giftWrapping-image-${index}-${id}`).show();

            if (allowMessage) {
                $(`#giftWrapping-message-${index}`).show();
            } else {
                $(`#giftWrapping-message-${index}`).hide();
            }
        });

        $('.giftWrapping-select').trigger('change');

        function toggleViews() {
            const value = $('input:radio[name ="giftwraptype"]:checked').val();
            const $singleForm = $('.giftWrapping-single');
            const $multiForm = $('.giftWrapping-multiple');

            if (value === 'same') {
                $singleForm.show();
                $multiForm.hide();
            } else {
                $singleForm.hide();
                $multiForm.show();
            }
        }

        $('[name="giftwraptype"]').on('click', toggleViews);

        toggleViews();
    }

    bindEvents() {
        this.bindCartEvents();
        this.bindPromoCodeEvents();
        this.bindGiftWrappingEvents();
        this.bindGiftCertificateEvents();

        // initiate shipping estimator module
        this.shippingEstimator = new ShippingEstimator($('[data-shipping-estimator]'));
    }

    removeCoupon(event) {
        event.preventDefault();
        localStorage.removeItem('globalPromo');
        if ($(event.target).attr('href') != null) {
            window.location = $(event.target).attr('href');
        }
    }

    
    ijt_formatMoney(inputValue)
    {
        var outputValue = new Number(inputValue);
        return "&pound;" + outputValue.toFixed(2).toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,');
    }
    

    loadRelatedProducts()
    {
        var relatedProductsCount = 0;

        this.$cartContent.find("tr.cart-related-product-container div.cart-related-product span").each((index, placeholder) => {

            var ignoreRelatedProduct = false;
            if ($(placeholder).closest("tr.cart-related-product-container").prev("tr.cart-with-related-product").find("p.cart-item-brand").length > 0)
            {
                ignoreRelatedProduct = this.ignoreRelatedProductsBrand($(placeholder).closest("tr.cart-related-product-container").prev("tr.cart-with-related-product").find("p.cart-item-brand").text());
            }

            if (!ignoreRelatedProduct)
            {
                relatedProductsCount++;
            }
        });

        if (relatedProductsCount > 0 && this.$cartContent.find("tr.cart-item a.cart-item-name__label:contains('Swap & Save')").length == 0 &&
            this.$cartContent.find("tr.cart-item a.cart-item-name__label:contains('Thank you for Swapping & Saving')").length == 0)
        {
            let formDataTY = new FormData();
            formDataTY.append('action', 'add');
            formDataTY.append('product_id', 13327);
            formDataTY.append('qty[]', 1);

            utils.api.cart.itemAdd(formDataTY, (err, response) => {
                const errorMessage = err || response.data.error;

                if (errorMessage) {
                    return swal({
                        text: errorMessage,
                        type: 'error',
                    });
                }

                $("i.quantity-6668S").text("1");

                this.refreshContent(true);
            });
            return;
        }

        if (this.$cartContent.find("tr.cart-item a.cart-item-name__label:contains('Thank you for Swapping & Saving')").length > 0
            && (typeof Cookies.get('ijtd_SwitchedItems') === 'undefined' || Cookies.get("ijtd_SwitchedItems") == ""))
        {
            //Remove the Thank you for Swapping & Saving
            var aItemName = this.$cartContent.find("tr.cart-item a.cart-item-name__label:contains('Thank you for Swapping & Saving')")[0];
            var trItem = $(aItemName).closest("tr.cart-item");
            utils.api.cart.itemRemove($(trItem).find("input.cart-item-qty-input").attr("data-cart-itemid"), (err, response) =>
            {
                $("i.quantity-6667S").text("0");
                this.refreshContent(true);
            });
            return;
        }

        //this.$cartContent.find("tr.cart-item span.cart-related-product").each((i, placeholder) => {
        this.$cartContent.find("tr.cart-related-product-container div.cart-related-product span").each((index, placeholder) => {
            //Pace.ignore(() => {

            var ignoreRelatedProduct = false;
            if ($(placeholder).closest("tr.cart-related-product-container").prev("tr.cart-with-related-product").find("p.cart-item-brand").length > 0)
            {
                ignoreRelatedProduct = this.ignoreRelatedProductsBrand($(placeholder).closest("tr.cart-related-product-container").prev("tr.cart-with-related-product").find("p.cart-item-brand").text());
            }
            
            if (!ignoreRelatedProduct)
            {
                let template = 'cs-custom/ajax-products-by-category-id-result-product';
                utils.api.getPage($(placeholder).html(), { template }, (err, resp) => {
                    $(placeholder).next().html(resp);

                    var productMainPrice = parseFloat($(placeholder).closest("div.cart-related-product").attr("cart-prod-mainprice"));
                    var productRelatedPrice = parseFloat($(placeholder).closest("div.cart-related-product").find("div.cart-related-prod").attr("data-product-price"));
                    var productMainYields = 0;
                    var productRelatedYields = 0;

                    $(placeholder).closest("tr.cart-related-product-container").prev("tr.cart-with-related-product").find("div.page-yield-item-value span").each(function () {
                        productMainYields += parseFloat($(this).text());
                    });
                    $(placeholder).closest("div.cart-related-product").find("div.page-yield-item-value span").each(function () {
                        productRelatedYields += parseFloat($(this).text());
                    });


                    var qty = parseInt($(placeholder).closest("tr.cart-related-product-container").prev().find("input.cart-item-qty-input").val());
                    if ($(placeholder).closest("div.cart-related-product").find("div.bulk_discount_rates-box").length > 0) {
                        $(placeholder).closest("div.cart-related-product").find("div.bulk_discount_rates-box div[ijt-min-price-value]").each(function (index) {
                            if (qty >= parseInt($(this).attr("ijt-min-price-value"))) {
                                if (parseInt($(this).attr("ijt-max-price-value")) == 0 || qty <= parseInt($(this).attr("ijt-max-price-value"))) {
                                    productRelatedPrice = parseFloat($(this).text().replace(/\u00A3/g, ''));
                                }
                            }
                        });
                    }
                    if (productMainPrice > productRelatedPrice) {
                        var relatedSave = (Math.round((qty * (productMainPrice - productRelatedPrice)) * 100) / 100);
                        var relatedSavePerItem = (Math.round((productMainPrice - productRelatedPrice) * 100) / 100);
                        var relatedProdTotalPrice = (Math.round((qty * productRelatedPrice) * 100) / 100);

                        $(placeholder).closest("div.cart-related-product").find("span.related-save").show();
                        $(placeholder).closest("div.cart-related-product").find("span.related-save").html(this.ijt_formatMoney(relatedSave));

                        $(placeholder).closest("div.cart-related-product").find("span[data-product-price-with-tax]").html(this.ijt_formatMoney(relatedProdTotalPrice));
                        if (productMainYields == productRelatedYields) {
                            $(placeholder).closest("div.cart-related-product").find("span.related-blue-message").html("<strong>DID YOU KNOW?<br/> You could save " + this.ijt_formatMoney(relatedSavePerItem) + " per cartridge just by swapping to the IJT Recycled brand?</strong>");
                            if (qty == 1) {
                                $(placeholder).closest("div.cart-related-product").find(".cart-related-product-count-item").html("Get " + qty + " cartridge for only " + this.ijt_formatMoney(relatedProdTotalPrice) + "<br/> saving you " + this.ijt_formatMoney(relatedSave));
                            }
                            else {
                                $(placeholder).closest("div.cart-related-product").find(".cart-related-product-count-item").html("Get all " + qty + " cartridges for only " + this.ijt_formatMoney(relatedProdTotalPrice) + "<br/> saving you " + this.ijt_formatMoney(relatedSave));
                            }
                            $(placeholder).closest("div.cart-related-product").find(".switch-and-save").html("Swap & Save " + this.ijt_formatMoney(relatedSave));
                        }
                        else if (productMainYields > productRelatedYields) {
                            $(placeholder).closest("div.cart-related-product").find("span.related-blue-message").html("<strong>DID YOU KNOW?<br/> You could save " + this.ijt_formatMoney(relatedSavePerItem) + " per cartridge just by swapping to the IJT Recycled brand?</strong>");
                            if (qty == 1) {
                                $(placeholder).closest("div.cart-related-product").find(".cart-related-product-count-item").html("Get " + qty + " cartridge for only " + this.ijt_formatMoney(relatedProdTotalPrice) + "<br/> saving you " + this.ijt_formatMoney(relatedSave));
                            }
                            else {
                                $(placeholder).closest("div.cart-related-product").find(".cart-related-product-count-item").html("Get all " + qty + " cartridges for only " + this.ijt_formatMoney(relatedProdTotalPrice) + "<br/> saving you " + this.ijt_formatMoney(relatedSave));
                            }
                            $(placeholder).closest("div.cart-related-product").find(".switch-and-save").html("Swap & Save " + this.ijt_formatMoney(relatedSave));
                        } else if (productMainYields < productRelatedYields) {
                            $(placeholder).closest("div.cart-related-product").find("span.related-blue-message").html("<strong>DID YOU KNOW?<br/> You could save " + this.ijt_formatMoney(relatedSavePerItem) + " per cartridge just by swapping to the IJT Recycled brand?</strong>");
                            if (qty == 1) {
                                $(placeholder).closest("div.cart-related-product").find(".cart-related-product-count-item").html("Get " + qty + " cartridge for only " + this.ijt_formatMoney(relatedProdTotalPrice) + "<br/> saving you " + this.ijt_formatMoney(relatedSave));
                            }
                            else {
                                $(placeholder).closest("div.cart-related-product").find(".cart-related-product-count-item").html("Get all " + qty + " cartridges for only " + this.ijt_formatMoney(relatedProdTotalPrice) + "<br/> saving you " + this.ijt_formatMoney(relatedSave));
                            }
                            $(placeholder).closest("div.cart-related-product").find(".switch-and-save").html("Swap & Save " + this.ijt_formatMoney(relatedSave));
                        }
                    }
                    else if (productRelatedPrice >= productMainPrice) {
                        var relatedSave = (Math.round((qty * (productMainPrice - productRelatedPrice)) * 100) / 100);
                        var relatedSavePerItem = (Math.round((productMainPrice - productRelatedPrice) * 100) / 100);
                        var relatedProdTotalPrice = (Math.round((qty * productRelatedPrice) * 100) / 100);
                        if (relatedSave < 0) {
                            relatedSave = (-1 * relatedSave)
                        }
                        $(placeholder).closest("div.cart-related-product").find("span.related-save").show();
                        $(placeholder).closest("div.cart-related-product").find("span.related-save").html(this.ijt_formatMoney(relatedSave));
                        $(placeholder).closest("div.cart-related-product").find(".switch-and-save").html("Swap & Save " + this.ijt_formatMoney(relatedSave));
                        $(placeholder).closest("div.cart-related-product").find("span[data-product-price-with-tax]").html(this.ijt_formatMoney(relatedProdTotalPrice));

                        if (productMainYields < productRelatedYields) {
                            $(placeholder).closest("div.cart-related-product").find("span.related-blue-message").html("<strong>DID YOU KNOW?<br/> If you spend " + this.ijt_formatMoney(relatedSave) + " more by swapping to the IJT Recycled brand, you’ll get more prints which saves you money in the long run.</strong>");

                            if (qty == 1) {
                                $(placeholder).closest("div.cart-related-product").find(".cart-related-product-count-item").html("Get " + qty + " cartridge for only " + this.ijt_formatMoney(relatedProdTotalPrice));
                            }
                            else {
                                $(placeholder).closest("div.cart-related-product").find(".cart-related-product-count-item").html("Get all " + qty + " cartridges for only " + this.ijt_formatMoney(relatedProdTotalPrice));
                            }
                            $(placeholder).closest("div.cart-related-product").find(".switch-and-save").html("Swap & Get more prints ");
                        }
                        else {
                            $(placeholder).next().hide();
                        }

                    }

                    $(placeholder).closest("div.cart-related-product").find("a.switch-and-save").on('click', event => {

                        event.preventDefault();

                        let formData = new FormData();
                        formData.append('action', 'add');
                        formData.append('product_id', $(event.currentTarget).closest("div.cart-related-prod").attr("data-product-id"));
                        formData.append('qty[]', $(event.currentTarget).closest("tr.cart-related-product-container").prev().find("input.cart-item-qty-input").val());

                        event.target.style.pointerEvents = 'none';

                        utils.api.cart.itemAdd(formData, (err, response) => {
                            const errorMessage = err || response.data.error;
                            event.target.style.pointerEvents = 'auto';

                            if (errorMessage) {
                                return swal({
                                    text: errorMessage,
                                    type: 'error',
                                });
                            }

                            if (typeof Cookies.get('ijtd_SwitchedItems') === 'undefined')
                            {
                                Cookies.set("ijtd_SwitchedItems", response.data.cart_item.id, { expires: 30 });
                            }
                            else
                            {
                                var ijtd_SwitchedItems = Cookies.get("ijtd_SwitchedItems");
                                ijtd_SwitchedItems += "," + response.data.cart_item.id;
                                Cookies.set("ijtd_SwitchedItems", ijtd_SwitchedItems, { expires: 30 });
                            }

                            utils.api.cart.itemRemove($(event.currentTarget).closest("tr.cart-related-product-container").prev().find("input.cart-item-qty-input").attr("data-cart-itemid"), (err, response) => {
                                if (response.data.status === 'succeed') {
                                    $("div.raleted-product-message").show();
                                    setTimeout(function () {
                                        $("div.raleted-product-message").hide();
                                    }, 30000);

                                    if (this.$cartContent.find("tr.cart-item a.cart-item-name__label:contains('Thank you for Swapping & Saving')").length == 0)
                                    {
                                        let formDataTY = new FormData();
                                        formDataTY.append('action', 'add');
                                        formDataTY.append('product_id', 13160);
                                        formDataTY.append('qty[]', 1);

                                        utils.api.cart.itemAdd(formDataTY, (err, response) => {
                                            const errorMessage = err || response.data.error;

                                            if (errorMessage) {
                                                return swal({
                                                    text: errorMessage,
                                                    type: 'error',
                                                });
                                            }
                                            $("i.quantity-6667S").text("1");

                                            if (this.$cartContent.find("tr.cart-item a.cart-item-name__label:contains('Swap & Save')").length > 0) {
                                                var aItemName = this.$cartContent.find("tr.cart-item a.cart-item-name__label:contains('Swap & Save')")[0];
                                                var trItem = $(aItemName).closest("tr.cart-item");
                                                utils.api.cart.itemRemove($(trItem).find("input.cart-item-qty-input").attr("data-cart-itemid"), (err, response) => {
                                                    $("i.quantity-6668S").text("0");
                                                    this.refreshContent(true);
                                                });
                                            }
                                            else {
                                                this.refreshContent(true);
                                            }
                                        });
                                    }
                                    else
                                    {
                                        this.refreshContent(true);
                                    }
                                }
                                else {
                                    return swal({
                                        text: response.data.errors,
                                        type: 'error',
                                    });
                                }
                            });
                        });
                    });
                });
            }
            //});
        });

    }

    ignoreRelatedProductsBrand(brandName)
    {
        if (typeof ijtd_IgnoreBrands !== 'undefined')
        {
            for (var i = 0; i < ijtd_IgnoreBrands.length; i++)
            {
                if (ijtd_IgnoreBrands[i].toUpperCase() == brandName.toUpperCase() || ijtd_IgnoreBrands[i].toUpperCase() == "ALL")
                {
                    return true;
                }
            }
        }
        return false;
    }

    removeSwitchedItems(itemId)
    {
        if (typeof Cookies.get('ijtd_SwitchedItems') === 'undefined')
        {
            return;
        }
        else
        {
            var ijtd_SwitchedItems = Cookies.get("ijtd_SwitchedItems");
            var arrSwitchedItems = ijtd_SwitchedItems.split(",");
            var index = arrSwitchedItems.indexOf(itemId);
            if (index !== -1)
            {
                arrSwitchedItems.splice(index, 1);
            }
            if (arrSwitchedItems.length == 0)
            {
                Cookies.remove('ijtd_SwitchedItems');
            }
            else
            {
                ijtd_SwitchedItems = arrSwitchedItems.join(",");
                Cookies.set("ijtd_SwitchedItems", ijtd_SwitchedItems, { expires: 30 });
            }
        }
    }
}


$(document).on('click', '.button--icon', function(){
    cartItemCounter();
});

$(document).on('change', '.cart-item-qty-input', function(){
    cartItemCounter();
});

function cartItemCounter() {
    setTimeout(function(){
        utils.api.cart.getCartQuantity({}, (err, response) => {
            var countItem = (parseInt(response) || 0) - (parseInt($("i.quantity-6667S").text()) || 0) - (parseInt($("i.quantity-6668S").text()) || 0);
            $('.cart-item-counts strong').text(countItem);
      });
    }, 2500);
} 
