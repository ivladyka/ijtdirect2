/* eslint-disable */
'use strict';
import $ from 'jquery';
import utils from '@bigcommerce/stencil-utils';
import treeviewjs from 'treemenu.js/treemenu';
import 'superfish/src/js/superfish';
import alertify from 'alertify.js/src/js/alertify';
import 'alertify.js/src/css/alertify.css';

export default function () {
  var api_url = "https://bc-app.psdsandbox.xyz/ijtdirect";
  utils.api.cart.getCartQuantity({}, (err, response) => {
      // $('.cart-item-counts strong').text('(' + response + ')');
      var countItem = (parseInt(response) || 0) - (parseInt($("i.quantity-6667S").text()) || 0) - (parseInt($("i.quantity-6668S").text()) || 0);
      $('.cart-item-counts strong').text(countItem);
  });

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

  function resizefunction() {

  }
  function detach_section() {
    if ($(window).width() > 767) {
      $('#globalPromo').detach().appendTo('.main-section-block .right-block');
    }

    // if ($(window).width() <= 767) {
    //   $('.productView-details .productView-product .product-detail-first-section').detach().insertAfter('.product-inner-section .heading-title');
    // } else if ($(window).width() > 767) {
    //   $('.product-detail-first-section').detach().insertBefore('.productView-details .productView-product .detail-heading');
    // }
    if ($(window).width() <= 767) {
      $('.right-block .printer-section').detach().appendTo('.middle-block');
    } else if ($(window).width() > 767) {
      $('.printer-section').detach().appendTo('.main-section-block .right-block');
    }
  }
  /* custom template get bulk discount */
  if ($('body.type-category').length && $('.custom-category').length) {
    $('.product-listing .productGrid [data-custom-product-id]').each(function () {
      let productId = $(this).data('custom-product-id');
      let itm = this;
      utils.api.product.getById(productId, { template: 'products/bulk-discount-rates' }, (err, response) => {
        $(response).insertAfter($(itm).find('.card-body-info'));
      });
    });

  }


  const bodyElem = document.querySelector('body');
  const headerElem = document.querySelector('header');
  // mobile menu open on click event
  if (document.querySelectorAll('.mobileMenu-button').length) {
    const hamburger = document.querySelector('.mobileMenu-button');
    hamburger.addEventListener('click', () => {
      bodyElem.classList.add('mobile-menu-open');
      headerElem.classList.add('is-open');
    });
  }
  // mobile menu close on click event
  if (document.querySelectorAll('.mobile-menu-close-btn a').length) {
    const closebtn = document.querySelector('.mobile-menu-close-btn a');
    closebtn.addEventListener('click', () => {
      bodyElem.classList.remove('mobile-menu-open');
      headerElem.classList.remove('is-open');
    });
  }

  // mobile menu close on click on overlay
  if (document.querySelectorAll('.menu-open-overlay').length) {
    const bodyoverlay = document.querySelector('.menu-open-overlay');
    bodyoverlay.addEventListener('click', () => {
      bodyElem.classList.remove('mobile-menu-open');
      headerElem.classList.remove('is-open');
    });
  }


  document.addEventListener('keyup', function(e) {
    if(e.target.classList.contains('list-qty')) {
        var qtyValue = e.target.value;
        var dataSku = e.target.dataset.productSku;
        console.log(dataSku);
        $(e.target).next('a').attr('href', '/cart.php?action=add&qty='+qtyValue+'&sku='+dataSku);
    }
});

  $(document).on('click', '.cartadd', (e) => {
    e.preventDefault();
    let productId = e.target.dataset.productId;
    let quantity = 1;
    let proHref = '';

    console.log(e.target.tagName);
    if (e.target.tagName == 'use') {
      productId = $(e.target).parent().parent().data('product-id');
      proHref = $(e.target).parent().parent().attr('href');

    } else if (e.target.tagName == 'svg') {
      productId = $(e.target).parent().data('product-id');
      proHref = $(e.target).parent().attr('href');
    } else if(e.target.tagName == 'A' || e.target.tagName == 'a') {
      productId = $(e.target).attr('data-product-id');
      proHref = $(e.target).attr('href');
    }

    quantity = $('#qty-' + productId).val();
    var replace_txt = "qty="+quantity;
    proHref = proHref.replace("qty=1", replace_txt);

    let formData = new FormData();
    formData.append('action', 'add');
    formData.append('product_id', productId);
    formData.append('qty[]', quantity);

    e.target.style.pointerEvents = 'none';


    $.post(proHref, function(data, status) {
      if($(data).find('.alertBox-message').length) {
        alertify.success($(data).find('.alertBox-message span').text());
      } else {
        alertify.success("Success: item added to your shopping cart!");
      }

      utils.api.cart.getCartQuantity({}, (err, response) => {
        console.log(response);
          // $('.cart-item-counts strong').text('(' + response + ')');
          var countItem = (parseInt(response) || 0) - (parseInt($("i.quantity-6667S").text()) || 0) - (parseInt($("i.quantity-6668S").text()) || 0);
          $('.cart-item-counts strong').text(countItem);
      });

      e.target.style.pointerEvents = 'auto';

    });

   /* utils.api.cart.itemAdd(filterEmptyFilesFromForm(formData), (err, response) => {
      const errorMessage = err || response.data.error;
      e.target.style.pointerEvents = 'auto';

      if (errorMessage) {
        return alertify.alert("Message");
      }

      alertify.success("Success: item added to your shopping cart!");

      utils.api.cart.getCartQuantity({}, (err, response) => {
        console.log(response);
        $('.cart-item-counts strong').text('(' + response + ')');
      });

    }); */

  });


  $(document).on('click', '.add-to-cart-btn', (e) => {
    e.preventDefault();
    const productId = e.target.dataset.productId;

    let formData = new FormData();
    formData.append('action', 'add');
    formData.append('product_id', productId);
    formData.append('qty[]', 1);

    e.target.style.pointerEvents = 'none';

    utils.api.cart.itemAdd(filterEmptyFilesFromForm(formData), (err, response) => {
      const errorMessage = err || response.data.error;
      e.target.style.pointerEvents = 'auto';

      if (errorMessage) {
        return alertify.alert("Message");
      }

      alertify.success("Success: item added to your shopping cart!");

      utils.api.cart.getCartQuantity({}, (err, response) => {
        console.log(response);
          // $('.cart-item-counts strong').text('(' + response + ')');
          var countItem = (parseInt(response) || 0) - (parseInt($("i.quantity-6667S").text()) || 0) - (parseInt($("i.quantity-6668S").text()) || 0);
          $('.cart-item-counts strong').text(countItem);
      });

    });

  });

  $('.mobile-menu-list').treeview({
    collapsed: true,
    animated: 'medium',
    unique: true
  });

  $(document).ready(() => {

    // const $header = $('header');
    // const $sticky = $header.before($header.clone().addClass('sticky'));

    $(window).on('scroll', function () {
      const scrollFromTop = $(window).scrollTop();
      $('body').toggleClass('scroll', (scrollFromTop > 200));
    });

   /* $(document).on('keyup', '.form-input--incrementTotal.list-qty', function () {
      console.log($(this).val());
      let quantity = parseInt($(this).val())
      console.log(quantity)
      if (quantity != "" && !isNaN(quantity)) {
        var actionUrl = $(this).parent().find('.cartadd').attr('href');
        let qtyurl = actionUrl.slice(0, -1) + quantity;
        console.log(qtyurl)
        $(this).parent().find('.cartadd').attr('href', qtyurl)
      }
    }) */

    $('ul.sf-menu').superfish({
      delay: 50
    });

    detach_section();

    $('#quickSearch .close-icon').click(function (e) {
      $('#quickSearch').removeClass('is-open');
    });
    
    // brand image into the detail page
    var mcbrand = $(".productView-brand a").attr("href");
    $(".brandlogo").load(mcbrand + ' .default-img-section img');

  });

  $(window).resize(() => {
    resizefunction();
    detach_section();
  });
  $(document).ajaxComplete(() => {
    detach_section();
  });
}

/* eslint-enable */
