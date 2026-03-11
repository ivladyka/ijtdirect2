'use strict';
import $ from 'jquery';
import utils from '@bigcommerce/stencil-utils';

/*eslint-disable*/
export class CustomScript {
    constructor(context) {

      this.currentCatName = $('.breadcrumbs li.is-active').data('name');
       this.customCatFunc();
       this.quantityValidation();
        this.initListinsightsBlogPostsCarusel();
        this.initBlogPostsSubAutor();
        this.customAccordion();
    }  
    customAccordion() {

        $('.cartridge-usp-item').on('click', () => {
      
            if ($("#home-cartridge-finder").hasClass("show-finder")) {
               
                $("#home-cartridge-finder").removeClass('show-finder');
            } else {
                $("#home-cartridge-finder").addClass('show-finder');
         
            }
        });
    }
    initListinsightsBlogPostsCarusel()
    {        
        if ($("#recent-post-list").length > 0)
        {
            let template = "blog/recent-posts";
            let recentpostsurl = $("#recent-posts-list-main").attr('recent-posts-url');
            utils.api.getPage(recentpostsurl , { template }, (err, resp) => {
                $("#recent-post-list").html(resp);
               // $("[data-slick]", $("#recent-post-list")).slick();
            });
        }
        if ($(".item-boxes").length > 0) {
         
            $(".blog-custom-content").html($(".item-boxes").html());
            $(".item-boxes").html("");

            $('.blog-custom-content').slick({
                "dots": false,
                "infinite": false,
                "slidesToShow": 1,
                "slidesToScroll": 1,
                "mobileFirst": true,
                "autoplay": true,
                "autoplaySpeed": 3000,
                "responsive": [
                    {
                        "breakpoint": 1024,
                        "settings": {
                            "dots": false,
                            "slidesToScroll": 5,
                            "slidesToShow": 5
                        }
                    },
                    {
                        "breakpoint": 800,
                        "settings": {
                            "dots": false,
                            "slidesToScroll": 3,
                            "slidesToShow": 3
                        }
                    }
                ]
});
        }
    }
    initBlogPostsSubAutor() {
        if ($(".autor-subtext").length > 0) {
            console.log('autor-subtext');
            $(".post-author-subtext").html($(".autor-subtext").html());
        }
    }
   customCatFunc() {
      //console.log(this.currentCatName);
      //console.log($('#hidden-cat-box li[data-name="' + this.currentCatName + '"] > ul').html());
      const subCatContent = $('#hidden-cat-box li[data-name="' + this.currentCatName + '"] > ul').html();
      $('#custom-category-container').html(subCatContent);

      setTimeout(() => {
         jQuery("#custom-category-container > li > .first-level").each(function () {
            // console.log('href',)
            var url = $(this).attr('href');
            console.log('urlrlrlr', url);
            let $this = $(this);
            $.ajax({
               url: url + '?sort=bestselling',
               method: 'GET',
               success: function (data) {
                  $this.parent().next().find('.productGrid').html($(data).find('.productGrid .product:lt(4)'));
                  $this.parent().next().show();
               }
            })
         });

      }, 1000);
   }


   quantityValidation() {

      $('.form-increment .form-input').on('input',function(e){
         $(this).val($(this).val().replace(/[^0-9]/g, ''));
         if($(this).val() == '') {
            $(this).val(0);
         }
      });      
   }

}
/*eslint-enable*/
