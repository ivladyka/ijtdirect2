/*
 Import all product specific js
 */
import PageManager from './page-manager';
import Review from './product/reviews';
import collapsibleFactory from './common/collapsible';
import ProductDetails from './common/product-details';
import videoGallery from './product/video-gallery';
import { classifyForm } from './common/form-utils';

export default class Product extends PageManager {
    constructor(context) {
        super(context);
        this.url = window.location.href;
        this.$reviewLink = $('[data-reveal-id="modal-review-form"]');
        this.$bulkPricingLink = $('[data-reveal-id="modal-bulk-pricing"]');
    }

    onReady() {
        // Listen for foundation modal close events to sanitize URL after review.
        $(document).on('close.fndtn.reveal', () => {
            if (this.url.indexOf('#write_review') !== -1 && typeof window.history.replaceState === 'function') {
                window.history.replaceState(null, document.title, window.location.pathname);
            }
        });

        let validator;

        // Init collapsible
        collapsibleFactory();

        this.productDetails = new ProductDetails($('.productView'), this.context, window.BCData.product_attributes);
        this.productDetails.setProductVariant();

        videoGallery();

        const $reviewForm = classifyForm('.writeReview-form');
        const review = new Review($reviewForm);

        $('body').on('click', '[data-reveal-id="modal-review-form"]', () => {
            validator = review.registerValidation(this.context);
        });

        $reviewForm.on('submit', () => {
            if (validator) {
                validator.performCheck();
                return validator.areAll('valid');
            }

            return false;
        });

        this.productReviewHandler();
        this.bulkPricingHandler();

        // defaults to undefined if variable param doesn't exist
        const printerName = decodeURIComponent(this.getUrlVars().printer);
        this.updatePdpWithPrinterName(printerName);
        const categoryId = this.getCategoryId();
        if (categoryId != 0) {
            this.updatePdpWithCategoryId(categoryId);
        }
    }

    productReviewHandler() {
        if (this.url.indexOf('#write_review') !== -1) {
            this.$reviewLink.trigger('click');
        }
    }

    bulkPricingHandler() {
        if (this.url.indexOf('#bulk_pricing') !== -1) {
            this.$bulkPricingLink.trigger('click');
        }
    }

    getUrlVars() {
        var vars = {};
        var parts = window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi, function(m,key,value) {
            vars[key] = value;
        });
        return vars;
    }

    getCategoryId() {
        // Get the ID of the current product category
        const allCategories = this.context.categories;
        const allCartridges = allCategories.find(category => category.is_active);
        if (allCartridges.children != null)
        {
            const cartridgeType = allCartridges.children.find(cartridge => cartridge.is_active);
            const cartridgeBrand = cartridgeType.children.find(brand => brand.is_active);
            const cartridgeSeries = cartridgeBrand.children.find(series => series.is_active);
            const cartridgeModel = cartridgeSeries.children.find(model => model.is_active);
            return cartridgeModel.id;
        }
        return 0;
    }

    updatePdpWithPrinterName(printerName) {
        if (printerName === 'undefined') {
            printerName = '';
        }
        const optionLabelText = Object.values(document.getElementsByClassName('js-option-label'));
        optionLabelText.forEach(labelText => {
            if (labelText.textContent.trim() == 'Suitable For:') {
                // Update and hide 'suitable for' input
                const label = labelText.parentElement;
                const inputId = label.attributes.for.value;
                document.getElementById(inputId).value = printerName;
                label.parentElement.style.display = 'none';
                
                // Update product title
                if (printerName.length) {
                    document.getElementById('productViewTitleFor').innerText = ' for the ' + printerName + ' printer';
                }
            }
        });
    }

    updatePdpWithCategoryId(id) {
        if (id === 'undefined') {
            id = '';
        }
        const optionLabelText = Object.values(document.getElementsByClassName('js-option-label'));
        optionLabelText.forEach(labelText => {
            if (labelText.textContent.trim() == 'Category ID:') {
                // Update and hide 'Category ID' input
                const label = labelText.parentElement;
                const inputId = label.attributes.for.value;
                document.getElementById(inputId).value = id;
                label.parentElement.style.display = 'none';
            }
        });
    }
}
