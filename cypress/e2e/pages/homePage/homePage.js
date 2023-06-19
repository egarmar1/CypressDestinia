var elements = require('./elements')

import BasePage  from '../basePage'

class HomePage extends BasePage{

  clickAdultosAddButton() {
    return cy.get(elements.HOMEPAGE.ADULTOS_ADD_BUTTON).click()
  }

  clickNinyosAddButton() {
    return cy.get(elements.HOMEPAGE.ADULTOS_ADD_BUTTON).click()
  }

  isdisableAdultosButton() {
    cy.get(elements.HOMEPAGE.OCUPACION_BUTTON).click()
    return cy.get(elements.HOMEPAGE.ADULTOS_ADD_BUTTON).should('be.disabled')

  }

  clickOcupacionButton() {
    return cy.get(elements.HOMEPAGE.OCUPACION_BUTTON).click()
  }

  
  destinoIsEmpty() {
    return cy.get(elements.HOMEPAGE.DESTINO_INPUT).invoke("val").then((text) => {
      const isEmpty = text.trim() === "";
      return cy.wrap(isEmpty);
    });
  }
  
  clickBuscar() {
    return cy.get(elements.HOMEPAGE.BUSCAR_BUTTON).click()
  }

  hasErrorBusquedaDestino() {
    //return cy.get(elements.HOMEPAGE.ERROR_MESSAGE_DESTINO).should('be.visible').then((isVisible) => {
    //  return isVisible;
    //})
    return cy.get(elements.HOMEPAGE.ERROR_MESSAGE_DESTINO).should('be.visible')


  }

  enterDestino(destino) {
    cy.get(elements.HOMEPAGE.DESTINO_INPUT).click().type(destino)
    cy.get(elements.HOMEPAGE.DESTINO_FIRST_OPTION).click()
  }

  acceptCookies() {
    cy.xpath(elements.HOMEPAGE.COOKIES_ACCEPT_BUTTON).click()
  }

}
export default HomePage
