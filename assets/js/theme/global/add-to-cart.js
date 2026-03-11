import utils from '@bigcommerce/stencil-utils';
import 'foundation-sites/js/foundation/foundation';
import 'foundation-sites/js/foundation/foundation.reveal';

import _ from 'lodash';
import '@fancyapps/fancybox/dist/jquery.fancybox.min';
import '@fancyapps/fancybox/dist/jquery.fancybox.min.css';
$.fancybox.defaults.hash = false;
import alertify from 'alertify.js/src/js/alertify';
import 'alertify.js/src/css/alertify.css';

export default function () {
    const $form = $('form[data-cart-item-add]');

    // Loop through each form on the page
    $($form).each((index) => {

        // 'this' has changed as we are using arrow functions
        $($form[index]).on('submit', event => {
            addProductToCart(event, $form[index]);
        });
    })

    if ($("div.klevuLanding").length > 0)
    {
        console.log("kuLandingAddToCartBtn click");

        setTimeout(() => {
            $("a.kuLandingAddToCartBtn").on('click', event => {

                // Prevent default
                event.preventDefault();
                const originalBtnText = $(event.target).text();

                $(event.target).text("Adding to cart...").prop('disabled', true);

                let formData = new FormData();
                formData.append('action', 'add');
                formData.append('product_id', $(event.target).closest("div.kuAddtocart").attr("data-id"));
                formData.append('qty[]', 1);

                utils.api.cart.itemAdd(filterEmptyFilesFromForm(formData), (err, response) => {
                    const errorMessage = err || response.data.error;

                    $(event.target).text(originalBtnText).prop('disabled', false);

                    if (errorMessage) {
                        return alertify.alert(errorMessage);
                    }

                    alertify.success("Success: item added to your shopping cart!");

                    utils.api.cart.getCartQuantity({}, (err, response) => {
                        var countItem = (parseInt(response) || 0) - (parseInt($("i.quantity-6667S").text()) || 0) - (parseInt($("i.quantity-6668S").text()) || 0);
                        $('.cart-item-counts strong').text(countItem);
                    });

                });
            });

        }, 2000);
    }

    function addProductToCart(event, form) {
        const $addToCartBtn = $('#form-action-addToCart', $(event.target));
        const originalBtnVal = $addToCartBtn.val();
        const waitMessage = $addToCartBtn.data('waitMessage');

        // Do not do AJAX if browser doesn't support FormData
        if (window.FormData === undefined) {
            return;
        }

        // Prevent default
        event.preventDefault();

        $addToCartBtn
            .val(waitMessage)
            .prop('disabled', true);

        // Add item to cart
        utils.api.cart.itemAdd(filterEmptyFilesFromForm(new FormData(form)), (err, response) => {
            const errorMessage = err || response.data.error;

            $addToCartBtn
                .val(originalBtnVal)
                .prop('disabled', false);

            // Guard statement
            if (errorMessage) {
                // Strip the HTML from the error message
                const tmp = document.createElement('DIV');
                tmp.innerHTML = errorMessage;

                return showAlertModal(tmp.textContent || tmp.innerText);
            }

            alertify.success("Success: item added to your shopping cart!");

            utils.api.cart.getCartQuantity({}, (err, response) => {
                // $('.cart-item-counts strong').text('(' + response + ')');
                var countItem = (parseInt(response) || 0) - (parseInt($("i.quantity-6667S").text()) || 0) - (parseInt($("i.quantity-6668S").text()) || 0);
                $('.cart-item-counts strong').text(countItem);
            });

        });
    }

    function filterEmptyFilesFromForm(formData) {
        try {
            for (const [key, val] of formData) {
                if (val instanceof File && !val.name && !val.size) {
                    formData.delete(key);
                }
            }
        } catch (e) {
            console.error(e); // eslint-disable-line no-console
        }
        return formData;
    }
}
