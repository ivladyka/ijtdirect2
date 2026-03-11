export default function () {
    const $gridItems = $(".brand-grid__item");
    const allBrandLogos = $(".brand-grid__logo");
    const allBrandButtons = $(".brand-grid__buttons");

    if (window.outerWidth <= 768) {

        $($gridItems).each(function(){
            const brandLogo = $(this).find(".brand-grid__logo");
            const brandButton = $(this).find(".brand-grid__buttons");
    
            $(brandLogo).on( "click", function(){

                // Loop through all brand logos and set to display block
                $(allBrandLogos).each(function(){
                    this.style.display = "block";
                });

                // Loop through all brand buttons and set to display none
                $(allBrandButtons).each(function(){
                    this.style.display = "none";
                });

                // Toggle the clicked brand logo
                $(this).toggle();
                $(brandButton[0]).toggle();
            });
        });
    }
}
