module.exports = {
    HOMEPAGE:{
        DESTINO_INPUT: "#hotelsearchwidget0-location",
        DESTINO_FIRST_OPTION: "//li[@id='result0_0']/span",
        COOKIES_ACCEPT_BUTTON: "button[data-qa='oil-YesButton']",
        OCUPACION_BUTTON: "button[id='hotelsearchwidget0-occupancy-customelement-menubt']",
        ADULTOS_ADD_BUTTON: "#hotelsearchwidget0-occupancy-customelement > .searchDropdown > .searchGroups > .searchGroup > :nth-child(2) > .searchCounter > .searchCounter__btn--plus",
        NINYOS_ADD_BUTTON: "((//div[@class='searchGroups']//div[contains(@class, 'searchGroup')])[1]//div[@class='searchOption'])[2]//child::button[@class='searchCounter__btn searchCounter__btn--plus']",
        EDAD_OPTIONS: "//select[@class='form-control searchAddAge__select has_error']//option",
        ERROR_MESSAGE_VIAJEROS: "//span[@class='error_textsearch_error_occupancylayer']",
        ERROR_MESSAGE_DESTINO: "//span[@class='error_text search_error_location']",
        BUSCAR_BUTTON: "#search_button_hotelsearchwidget0"
    }
}