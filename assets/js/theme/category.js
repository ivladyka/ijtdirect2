import { hooks } from '@bigcommerce/stencil-utils';
import CatalogPage from './catalog';
import compareProducts from './global/compare-products';
import FacetedSearch from './common/faceted-search';
import { createTranslationDictionary } from '../theme/common/utils/translations-utils';
import utils from '@bigcommerce/stencil-utils';
import 'foundation-sites/js/foundation/foundation';
import 'foundation-sites/js/foundation/foundation.reveal';
import _ from 'lodash';
import '@fancyapps/fancybox/dist/jquery.fancybox.min';
import '@fancyapps/fancybox/dist/jquery.fancybox.min.css';
$.fancybox.defaults.hash = false;
import alertify from 'alertify.js/src/js/alertify';
import 'alertify.js/src/css/alertify.css';

import { defaultModal } from './global/modal';


export default class Category extends CatalogPage {
    constructor(context) {
        const $form = $('form[data-cart-item-add]');

        super(context);
        // this.validationDictionary = createTranslationDictionary(context);
    }

    setLiveRegionAttributes($element, roleType, ariaLiveStatus) {
        $element.attr({
            role: roleType,
            'aria-live': ariaLiveStatus,
        });
    }

    makeShopByPriceFilterAccessible() {
        if (!$('[data-shop-by-price]').length) return;

        if ($('.navList-action').hasClass('is-active')) {
            $('a.navList-action.is-active').focus();
        }

        $('a.navList-action').on('click', () => this.setLiveRegionAttributes($('span.price-filter-message'), 'status', 'assertive'));
    }

    // Add page yields title to any product card with page-yield custom fields
    setPageYieldsTitle() {
        const $productCards = $('.js-product');

        $productCards.each(function(){
            if ($(this).find('.js-page-yield-details').length === 0) {
                $(this).find('.js-page-yield-title').css('display', 'none');
            }
        })
    }
    
    displayBrandFilters() {
        // Perform check to see if there are multiple different brands of products, and don't display the filters if there isn't
        const productBrandsArray = this.context.products.map(product => product.brand.name);
        const productBrandsSet = new Set(productBrandsArray);

        if(productBrandsSet.size <= 1) {
            return;
        }

        const modal = defaultModal();

        // Create brand selector options at top of page
        const $brandSelector = $(this.getBrandSelectorElement());
        const $cartridgeList = $('#cartridgeListing');
        $brandSelector.insertBefore($cartridgeList);

        // Look for brandFilter parameter in URL
        const params = new URLSearchParams(window.location.search);
        const brandFilter = params.get('brandFilter');

        if (!brandFilter) {
            // Display modal to select filter if no filter already present
            this.showFilterModal(modal);
        } else if (brandFilter === 'all') {
            this.setBrandFilter('all');
        } else if (brandFilter === 'ijt') {
            this.setBrandFilter('ijt');
        } else if (brandFilter === 'original') {
            this.setBrandFilter('original');
        }

        // Set brand selector buttons to run setBrandFilter function
        $('.js-ijt-brand-selector').on('click', () => this.setBrandFilter('ijt', modal));
        $('.js-original-brand-selector').on('click', () => this.setBrandFilter('original', modal));
        $('.js-all-brand-selector').on('click', () => this.setBrandFilter('all', modal));
    }

    getBrandSelectorElement() {
        return (`<div class="brand-selector">
            <h3 class="brand-selector__header">What products would you like to view?</h3>
            <div class="brand-selector__options">
                <button class="button button--primary js-ijt-brand-selector">IJT Branded<br>Consumables</button>
                <button class="button button--primary js-original-brand-selector">Original<br>Consumables</button>
                <button class="button button--primary js-all-brand-selector">All<br>Consumables</button>
            </div>
        </div>`)
    }

    showFilterModal(modal) {
        modal.open();
        modal.updateContent(this.getBrandSelectorElement());
        $('#modal').addClass('modal--brand-filter');
        this.filterProductsByBrand('modalLoad');
    }

    setBrandFilter(filter, modal) {
        // Set brandFilter URL parameter
        let url = new URL(window.location.href);
        url.searchParams.set('brandFilter', filter);
        window.history.replaceState(null, null, url); 
        
        this.filterProductsByBrand(filter);

        if (modal) {
            modal.close();
        }
    }

    filterProductsByBrand(filter) {
        const $ijtCartridgeList = $('#ijt-brand-cartridge-list');
        const $brandedCartridgeList = $('#original-brand-cartridge-list');
        const $ijtBrandButton = $('.js-ijt-brand-selector');
        const $originalBrandButton = $('.js-original-brand-selector');
        const $allBrandButton = $('.js-all-brand-selector');

        switch (filter) {
            case "modalLoad":
                // Place original brand cartridges before IJT brand
                $ijtCartridgeList.show();
                $brandedCartridgeList.show();
                // $ijtCartridgeList.insertAfter($brandedCartridgeList);
                $('#ijt-brand-cartridge-list').removeClass('all-order');
                $('#original-brand-cartridge-list').removeClass('all-order');
                $('#original-brand-cartridge-list').addClass('all-order');
                $('#ijt-brand-cartridge-list').addClass('all-order');
                break;
            case "all":
                // Place original brand cartridges before IJT brand
                $ijtCartridgeList.show();
                $brandedCartridgeList.show();
                $('#ijt-brand-cartridge-list').removeClass('all-order');
                $('#original-brand-cartridge-list').removeClass('all-order');
                $('#original-brand-cartridge-list').addClass('all-order');
                $('#ijt-brand-cartridge-list').addClass('all-order');
               // $ijtCartridgeList.insertAfter($brandedCartridgeList);

                // Set selected styles on buttons in the filter
                $allBrandButton.addClass('filter-selected');
                $originalBrandButton.removeClass('filter-selected');
                $ijtBrandButton.removeClass('filter-selected');
                break;
            case "ijt":
                // Show IJT cartridges and hide original brand cartridges
                $ijtCartridgeList.show();
                $brandedCartridgeList.hide();
                $('#ijt-brand-cartridge-list').removeClass('all-order');
                $('#original-brand-cartridge-list').removeClass('all-order');
                // Set selected styles on buttons in the filter
                $ijtBrandButton.addClass('filter-selected');
                $originalBrandButton.removeClass('filter-selected');

                $allBrandButton.removeClass('filter-selected');
                break;
            case "original":
                // Show original cartridges and hide IJT brand cartridges
                $ijtCartridgeList.hide();
                $brandedCartridgeList.show();
                $('#ijt-brand-cartridge-list').removeClass('all-order');
                $('#original-brand-cartridge-list').removeClass('all-order');

                // Set selected styles on buttons in the filter
                $originalBrandButton.addClass('filter-selected');
                $ijtBrandButton.removeClass('filter-selected');
                $allBrandButton.removeClass('filter-selected');
        }
    }

    onReady() {
        this.arrangeFocusOnSortBy();

        this.setPageYieldsTitle()

        this.arrangeCategoryDescription();

        $('[data-button-type="add-cart"]').on('click', (e) => this.setLiveRegionAttributes($(e.currentTarget).next(), 'status', 'polite'));

        this.makeShopByPriceFilterAccessible();

        if ($('#facetedSearch').length > 0) {
            // this.initFacetedSearch();
        } else {
            this.onSortBySubmit = this.onSortBySubmit.bind(this);
            hooks.on('sortBy-submitted', this.onSortBySubmit);
        }

        $('a.reset-btn').on('click', () => this.setLiveRegionsAttributes($('span.reset-message'), 'status', 'polite'));

        this.ariaNotifyNoProducts();

        this.toggleFacets();

        this.toggleQuantity();
        this.arrangeCategorySeo();
        // Check if cartridge lister page is for a HP brand printer
        if (this.context.cartridgeBrand === 'HP') {
            this.displayBrandFilters();
        }
        $('#button-showmore-category').on('click', function () {
            $("ul.cartridge-series-list li:hidden").slice(0, 10).show();
            if ($("ul.cartridge-series-list li:hidden").length == 0)
            {
                $('#button-showmore-category').hide();
            }
        });
    }
    arrangeCategorySeo() { 
        if ($('#seotext').length > 0) {           
            const specSeo = document.getElementById("seotext");
            const specElementSeo = document.getElementById("cartridge-series-seo");
            specSeo && specElementSeo?.append(specSeo);
        }
        
    }

    arrangeCategoryDescription() {
        const categoryDescriptionSection2 = document.getElementById("category-section2");
        const categoryDescriptionSection3 = document.getElementById("category-section3");
        const seriesListerSection = document.getElementById("seriesLister");
        const modelListerSection = document.getElementById("modelLister");

        if (categoryDescriptionSection2) {
            seriesListerSection.after(categoryDescriptionSection2);
        }
        
        if (categoryDescriptionSection3) {
            modelListerSection.after(categoryDescriptionSection3);
        }
    }

    ariaNotifyNoProducts() {
        const $noProductsMessage = $('[data-no-products-notification]');
        if ($noProductsMessage.length) {
            $noProductsMessage.focus();
        }
    }

    toggleFacets() {
        const facetToggles = document.getElementsByClassName("facetedSearch-toggle");
        const facetLists = document.getElementsByClassName("facetedSearch-navList");
        const facetTitles = document.getElementsByClassName("accordion-navigation");

        for (let i = 0; i < facetToggles.length; i++) {
            $(facetToggles[i]).click(function(event){
                event.preventDefault();
                $(facetLists[i]).toggle();
            });
        }

        // Loop through each facet on PLP
        for (let i = 0; i < facetTitles.length; i++) {
            facetTitles[i].addEventListener("click", function() {
                // If facet is already open then close it
                if (facetTitles[i].classList.contains("is-open")) {
                    facetTitles[i].classList.remove("is-open");
                    facetTitles[i].nextElementSibling.classList.remove("is-open");
                } else { // If facet is already closed then open it
                    facetTitles[i].classList.add("is-open");
                    facetTitles[i].nextElementSibling.classList.add("is-open");
                }
            }); 
        }
    }

    initFacetedSearch() {
        // const {
        //     price_min_evaluation: onMinPriceError,
        //     price_max_evaluation: onMaxPriceError,
        //     price_min_not_entered: minPriceNotEntered,
        //     price_max_not_entered: maxPriceNotEntered,
        //     price_invalid_value: onInvalidPrice,
        // } = this.validationDictionary;
        const $productListingContainer = $('#product-listing-container');
        const $facetedSearchContainer = $('#faceted-search-container');
        const productsPerPage = this.context.categoryProductsPerPage;
        const requestOptions = {
            config: {
                category: {
                    shop_by_price: true,
                    products: {
                        limit: productsPerPage,
                    },
                },
            },
            template: {
                productListing: 'category/product-listing',
                sidebar: 'category/sidebar',
            },
            showMore: 'category/show-more',
        };

        this.facetedSearch = new FacetedSearch(requestOptions, (content) => {
            $productListingContainer.html(content.productListing);
            $facetedSearchContainer.html(content.sidebar);

            $('body').triggerHandler('compareReset');

            $('html, body').animate({
                scrollTop: 0,
            }, 100);
        }, {
            // validationErrorMessages: {
            //     onMinPriceError,
            //     onMaxPriceError,
            //     minPriceNotEntered,
            //     maxPriceNotEntered,
            //     onInvalidPrice,
            // },
        });
    }

    /**
     *
     * Handle action when the shopper clicks on + / - for quantity
     *
     */
     toggleQuantity() {
        const quantityInput = document.getElementsByClassName("js-qty-input");
        let currentQuantity;
        let quantityMin;
        let quantityMax;
        const incToggle = document.querySelectorAll('.js-inc-qty');
        const decToggle = document.querySelectorAll('.js-dec-qty');

        // Get min and max quantity values
        $(quantityInput).each(function(index, value){
            quantityMin = value.dataset.quantityMin;
            quantityMax = value.dataset.quantityMax;
        })

        // When inc qty is clicked
        $(incToggle).each(function(index, value) {
            value.addEventListener("click", function(){
                // Set currentQuantity variable
                currentQuantity = quantityInput[index].value;
                // If max quantity is set
                if (quantityMax > 0) {
                    // Check quantity does not exceed max
                    if ((currentQuantity + 1) <= quantityMax) {
                        currentQuantity++;
                    }
                } else {
                    currentQuantity++;
                }
                // Update value of quantity input with new qty
                currentQuantity = quantityInput[index].value = currentQuantity;
            });
        });

        // When dec qty is clicked
        $(decToggle).each(function(index, value) {
            value.addEventListener("click", function(){
                // Set currentQuantity variable
                currentQuantity = quantityInput[index].value;
                // If min quantity is set
                if (currentQuantity > 1) {
                    // If quantity min option is set
                    if (quantityMin > 0) {
                        // Check quantity does not fall below min
                        if ((currentQuantity - 1) >= quantityMin) {
                            currentQuantity--;
                        }
                    } else {
                        currentQuantity--;
                    }
                }
                // Update value of quantity input with new qty
                currentQuantity = quantityInput[index].value = currentQuantity;
            });
        });
    }
}
