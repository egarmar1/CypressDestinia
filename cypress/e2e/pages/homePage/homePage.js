var elements = require('./elements')

class HomePage {

  clickAdultosAddButton() {
    return cy.get(elements.HOMEPAGE.ADULTOS_ADD_BUTTON).click()
  }

  clickNinyosAddButton() {
    return cy.get(elements.HOMEPAGE.ADULTOS_ADD_BUTTON).click()
  }

  isEnableAdultosButton() {
    cy.get(elements.HOMEPAGE.OCUPACION_BUTTON).click()
    return cy.get(elements.HOMEPAGE.ADULTOS_ADD_BUTTON).should('be.enabled');
  }

  clickOcupacionButton(){
    return cy.get(elements.HOMEPAGE.OCUPACION_BUTTON).click()
  }

  destinoIsEmpty(){
    return cy.get(elements.HOMEPAGE.DESTINO_INPUT).invoke("text")
  }

  clickBuscar(){
    return cy.get(elements.HOMEPAGE.BUSCAR_BUTTON).click()
  }

  hasErrorBusquedaDestino(){
    return cy.get(elements.HOMEPAGE.ERROR_MESSAGE_DESTINO).should('be.enabled');
  }

  enterDestino(destino){
    cy.get(elements.HOMEPAGE.DESTINO_INPUT).click()
    cy.get(elements.HOMEPAGE.DESTINO_INPUT).type(destino)
    cy.get(elements.HOMEPAGE.DESTINO_FIRST_OPTION).click()
  }
  
  acceptCookies(){
    cy.get(elements.HOMEPAGE.COOKIES_ACCEPT_BUTTON).click()
    
  }
  }
  export default HomePage
