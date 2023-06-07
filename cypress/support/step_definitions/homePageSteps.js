import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor'

import HomePage from '../../e2e/pages/homePage/homePage'

const homePage = new HomePage()

Given('el usuario se encuentra in the home page', () => {
    //cy.visit('/')
    cy.visit('https://destinia.com/')
    homePage.acceptCookies()
  })

When('selecciona {int} adultos en el apartado ocupación', (adultos) => {
    homePage.clickOcupacionButton()
    for (let i = 0; i < adultos - 2; i++) {
        homePage.clickAdultosAddButton().debug()
      }
    }
  )

  Then(
    'no permite seleccionar más personas', () => {
      expect(homePage.isEnableAdultosButton()).to.be.false
    }
  )  