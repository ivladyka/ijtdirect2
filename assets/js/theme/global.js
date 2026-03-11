/*eslint-disable*/
import './global/jquery-migrate';
import './common/select-option-plugin';
import PageManager from './page-manager';
import quickSearch from './global/quick-search';
import currencySelector from './global/currency-selector';
import mobileMenuToggle from './global/mobile-menu-toggle';
import menu from './global/menu';
import foundation from './global/foundation';
import quickView from './global/quick-view';
import cartPreview from './global/cart-preview';
import privacyCookieNotification from './global/cookieNotification';
import maintenanceMode from './global/maintenanceMode';
import carousel from './common/carousel';
import loadingProgressBar from './global/loading-progress-bar';
import svgInjector from './global/svg-injector';
import objectFitImages from './global/object-fit-polyfill';
import themes from './global/themes';
import globalPromo from './global/global-promo.js';
import filterSearch from './global/filter-search';
import { CustomScript } from './ck-custom/custom-scripts';
import sideMenu from './global/side-menu';
import globalAddToCart from './global/add-to-cart';
import brandGrid from './global/brand-grid';
import custom_Global from './ck-custom/custom-global';

import $ from 'jquery';


export default class Global extends PageManager {
    onReady() {
      
        new CustomScript(this.context);
        cartPreview(this.context.secureBaseUrl, this.context.cartId);
        quickSearch();
        currencySelector();
        foundation($(document));
        quickView(this.context);
        carousel();
        menu();
        mobileMenuToggle();
        privacyCookieNotification();
        maintenanceMode(this.context.maintenanceMode);
        loadingProgressBar();
        svgInjector();
        objectFitImages();
        themes();
        globalPromo(this.context.cartId);
        filterSearch();
        sideMenu();
        globalAddToCart();
        brandGrid();
     
        custom_Global();
        this.customHomeCarusel();

    }
    customHomeCarusel() {
        if ($(".home-categories").length > 0) {
            function toggleSlickSlider() {
              
                if (window.innerWidth < 1024) {
                    if ($('.home-categories-slider').hasClass('slick-initialized')) {
                      
                        $('.home-categories-slider').slick('unslick');
                    }
                } else {
                    if (!$('.home-categories-slider').hasClass('slick-initialized')) {
                      
                        $('.home-categories-slider').slick({
                            slidesToShow: 3,
                            slidesToScroll: 1,
                            arrows: true,
                            dots: false
                        });
                    }
                }
            }

          


            
              //  toggleSlickSlider();
                $(window).on('resize', function () {
                    toggleSlickSlider();
                });
           
        }
        
      
    }
  
}
/*eslint-enable*/
