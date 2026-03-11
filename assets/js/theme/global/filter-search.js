import $ from "jquery";
export default function () {
    const quickSearchLevel1 = '#selectlevel1';
    const quickSearchLevel2 = '#selectlevel2';
    const quickSearchLevel3 = '#selectlevel3';
    const quickSearchLevel4 = '#selectlevel4';
    const quickSearchSubmit = '#quickSearchSubmit';

    const convertToClassName = (string) => {
        return string.replace(/\s/g, "").replace("&", "").toLowerCase();
    };

    const populateDropdown = (selector, array) => {
        $(selector).attr("disabled", false);
        $(selector).parent().removeClass("disabled");

        if (array.length > 0) {
            for (let category of array) {
                $(selector).append(
                    $("<option>", {
                        value: category.id,
                        text: category.name,
                        "data-url": category.url,
                        "data-category-name": convertToClassName(category.name),
                        id: category.id,
                    })
                );
            }
        }
    };

    const updateSearchUrl = (url) => {
        url ? $(quickSearchSubmit).attr('href', url) : $(quickSearchSubmit).attr('href', 'javascript:void(0)')
    }

    const clearDropdowns = (levelsToClear) => {
        switch(levelsToClear) {
            case 2:
                // Clear up to level 2 dropwdowns
                $(quickSearchLevel2).find('option').not('option:first').remove();
                $(quickSearchLevel3).find('option').not('option:first').remove();
                $(quickSearchLevel4).find('option').not('option:first').remove();
                $(quickSearchLevel2, quickSearchLevel3, quickSearchLevel4).attr('disabled', true);
                $(quickSearchLevel2, quickSearchLevel3, quickSearchLevel4).parent().addClass('disabled');
                break;
            case 3:
                $(quickSearchLevel3).find('option').not('option:first').remove();
                $(quickSearchLevel4).find('option').not('option:first').remove();
                $(quickSearchLevel3, quickSearchLevel4).attr('disabled', true);
                $(quickSearchLevel3, quickSearchLevel4).parent().addClass('disabled');
                break;
            case 4:
                $(quickSearchLevel4).find('option').not('option:first').remove();
                $(quickSearchLevel4).attr('disabled', true);
                $(quickSearchLevel4).parent().addClass('disabled');
                break;
        }

    }

    $(document).ready(function () {
        // categoryData is a global variable stored in the website's footer
        if (typeof categoryData === 'undefined')
        {
            return;
        }
        const cartridgeCategoryTree = categoryData.categories.find((element) => element.name === "Cartridges");
        
        // store the currently selected categories for easy access
        let currentLevel1Data;
        let currentLevel2Data;
        let currentLevel3Data;
        
        // init the first level dropdown on page load
        populateDropdown(quickSearchLevel1, cartridgeCategoryTree.children);


        $(quickSearchLevel1).on("change", function(e) {
            const currentCategoryId = e.target.value;
            const currentCategoryData = cartridgeCategoryTree.children.find((element) => element.id === currentCategoryId);
            clearDropdowns(2);
            if (currentCategoryData) {
                currentLevel1Data = currentCategoryData;
                updateSearchUrl(currentCategoryData.url);
                populateDropdown(quickSearchLevel2, currentCategoryData.children);
            } else {
                updateSearchUrl();
            }
        });

        $(quickSearchLevel2).on("change", function(e) {
            const currentCategoryId = e.target.value;
            const currentCategoryData = currentLevel1Data.children.find((element) => element.id === currentCategoryId);
            clearDropdowns(3);
            if (currentCategoryData) {
                currentLevel2Data = currentCategoryData;
                updateSearchUrl(currentCategoryData.url);
                populateDropdown(quickSearchLevel3, currentCategoryData.children);
            }
        });

        $(quickSearchLevel3).on("change", function(e) {
            const currentCategoryId = e.target.value;
            const currentCategoryData = currentLevel2Data.children.find((element) => element.id === currentCategoryId);
            clearDropdowns(4);
            if (currentCategoryData) {
                currentLevel3Data = currentCategoryData;
                updateSearchUrl(currentCategoryData.url);
                populateDropdown(quickSearchLevel4, currentCategoryData.children);
            }
        });

        $(quickSearchLevel4).on("change", function(e) {
            const currentCategoryId = e.target.value;
            const currentCategoryData = currentLevel3Data.children.find((element) => element.id === currentCategoryId);
            updateSearchUrl(currentCategoryData ? currentCategoryData.url : null);
        });
    });
}
