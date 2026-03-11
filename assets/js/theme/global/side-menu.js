import $ from "jquery";
export default function () {
    $(document).ready(function () {
        $(".side-menu-item-link").on("click", function(event){
            const subMenu = ($(this).next());
            const arrowIcon = $(this).find(".side-menu-item-icon");

            // when menu item is clicked, if it has a sub menu then don't go to link and show sub menu
            if (subMenu.length === 1) {
                event.preventDefault();

                if(subMenu.hasClass('is-open')) {
                    arrowIcon.css("transform", "rotate(0deg)");
                    subMenu.removeClass('is-open').find('.side-menu__sub-menu').hide('slow');
                } else {
                    arrowIcon.css("transform", "rotate(180deg)");
                    subMenu.addClass('is-open').find('.side-menu__sub-menu').show('slow');   
                }
            }
        });
    });
}
