module.exports = {
    HOTELESPAGE:{
        CIUDAD_HOTELES:"div.detail_information_hotel > span.city",
        VALORACION_HOTELES:"span.generic-rating__score",
        PRECIOS_HOTELES: "span.price_definitive > span.price.eur",
        DISTANCIAS_HOTELES: "span[id^='mainavailabilitywidget0-availabilitylist_template'][id$='center']",
        VALORACION_BUTTON: "//li[@class='order-item bestrate']",
        MAS_ECONOMICO_BUTTON: ".order-item.cheaper > a",
        DISTANCIA_BUTTON: ".order-item.closer > a",
        ESTRELLAS_CHECKBOX: "input[id^='mainavailabilitywidget0-filters-category_']",
        ESTRELLAS_HOTELES_ICON: "title[id^=estrellasHotel]",
        HANDLES_PRECIO: "(//div[@class='slider'])[1]//child::div[contains(@class,'handle')]",
        PRECIOS_HANDLES: "//div[@class='slider-label']//child::span[@class='price eur']"
    }
}