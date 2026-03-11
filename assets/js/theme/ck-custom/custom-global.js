import $ from 'jquery';
import utils from '@bigcommerce/stencil-utils';
export default function (context) {
  
        if ($(".isDealCategory").length > 0) {
            utils.api.getPage($(".isDealCategory").html(), { template: 'cs-custom/carousel-dealcategory', config: { category: { products: { limit: 20 } } } }, (err, resp) => {
             
                $(".dealCategoryBox").html(resp);  
                $(".dealCategoryBox").find(".card-deal-title").each(function () {
                
                    $(this).text($(this).text().split('+')[0]);
                  
                });
                if ($(".deal-featured-box").length > 0) {
               
                    $(".deal-featured-box").each(function () {
                     
                        var homefeaturedBullets = $(this).text().trim().split(",");
                        var homefeaturedBulletsLi = "";
                        for (let i = 0; i < homefeaturedBullets.length; i++) {
                         
                            if (homefeaturedBullets[i].trim() != 'Wi-Fi') {
                                homefeaturedBulletsLi += "<li>" + homefeaturedBullets[i] + "</li>";
                            }
                     
                            $(this).find(".deal-featured-ul").html("<ul>" + homefeaturedBulletsLi + "</ul>");
                          
                    }
                      
                    });
                   

                }
                    $('.dealCategorySlider').slick();
                  
            
        });    
        }    
    if ($(".isDealCategory-col").length > 0) {
        utils.api.getPage($(".isDealCategory-col").html(), { template: 'cs-custom/dealcategory', config: { category: { products: { limit: 200 } } } }, (err, resp) => {

            $(".dealCategoryBox-col").html(resp);
            $(".dealCategoryBox-col").find(".card-deal-title").each(function () {

                $(this).text($(this).text().split('+')[0]);

            });
            if ($(".dealCategoryBox-col .deal-featured-box").length > 0) {

                $(".dealCategoryBox-col .deal-featured-box").each(function () {

                    var homefeaturedBullets = $(this).text().trim().split(",");
                    var homefeaturedBulletsLi = "";
                    for (let i = 0; i < homefeaturedBullets.length; i++) {

                        if (homefeaturedBullets[i].trim() != 'Wi-Fi') {
                            homefeaturedBulletsLi += "<li>" + homefeaturedBullets[i] + "</li>";
                        }

                        $(this).find(".deal-featured-ul").html("<ul>" + homefeaturedBulletsLi + "</ul>");

                    }

                });


            }
        


        });
    }
   if ($(".isDealCategoryBundles-col").length > 0) {
        utils.api.getPage($(".isDealCategoryBundles-col").html(), { template: 'cs-custom/dealcategory', config: { category: { products: { limit: 200 } } } }, (err, resp) => {

            $(".dealCategoryBoxBundles-col").html(resp);
            $(".dealCategoryBoxBundles-col").find(".card-deal-title").each(function () {

                $(this).text($(this).text().split('+')[0]);
            });
            if ($(".dealCategoryBoxBundles-col .deal-featured-box").length > 0) {
                $(".dealCategoryBoxBundles-col .deal-featured-box").each(function () {
                    var homefeaturedBullets = $(this).text().trim().split(",");
                    var homefeaturedBulletsLi = "";
                    for (let i = 0; i < homefeaturedBullets.length; i++) {
                        if (homefeaturedBullets[i].trim() != 'Wi-Fi') {
                            homefeaturedBulletsLi += "<li>" + homefeaturedBullets[i] + "</li>";
                         
                        }
                        $(this).find(".deal-featured-ul").html("<ul>" + homefeaturedBulletsLi + "</ul>");
                    }

                });


            }



        });
    }
}
