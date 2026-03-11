/* eslint-disable */
import { hooks, api } from '@bigcommerce/stencil-utils';
import utils from '@bigcommerce/stencil-utils';
import _ from 'lodash';


export default class CommonJS {

    constructor($container) {

   }

   initForProduct() {
      this.productDetails();
   }

   initForCategory() {
      this.categoryJs()
      //this.addProductUtil()
   }

   categoryJs() {
      if($('.breadcrumbs li.breadcrumb:first').next().find('a').length) {
         const parentCat = $('.breadcrumbs li.breadcrumb:first').next().find('a').attr('href');
         if(!$(".default-img-section").find('img').length) {
            $.get(parentCat, (response) => {
               if($(response).find('.default-img-section img').length) {
                  $('.default-img-section').html($(response).find('.default-img-section').html());
               } else {
                  $('.default-img-section').find('h2').show();
               }  
            });
         }
      } else {
         $('.default-img-section').find('h2').show();
      }
   }

   productDetails() {
     $('.responsive-img-box').slick();
   }

   filterEmptyFilesFromForm(formData) {
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

   addProductUtil() {
      $(document).on('click', '.add-to-cart-btn', (e) => {
         alert(1);
         e.preventDefault();
         const productId = e.target.dataset.productId;

         let formData = new FormData();
         formData.append('action', 'add');
         formData.append('product_id', productId);
         formData.append('qty[]', 1);

         e.target.style.pointerEvents = 'none';

         utils.api.cart.itemAdd(this.filterEmptyFilesFromForm(formData), (err, response) => {
            const errorMessage = err || response.data.error;
            e.target.style.pointerEvents = 'auto';

            if (errorMessage) {
               return alertify.alert("Message");
            }

            alertify.success("Success: item added to your shopping cart!");

         });

      });
   }
}

