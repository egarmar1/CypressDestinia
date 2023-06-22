import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor'

import HomePage from '../../e2e/pages/homePage/homePage'
import HotelesPage from '../../e2e/pages/hotelesPage/hotelesPage'

const homePage = new HomePage()
const hotelesPage = new HotelesPage()

Given('el usuario se encuentra in the home page', () => {
  //cy.visit('/')
  
  cy.visit('https://destinia.com/')
  cy.wait(2000)
  homePage.acceptCookies()
  
  cy.wait(1000)
})

When('selecciona {int} adultos en el apartado ocupación', (adultos) => {
  homePage.clickOcupacionButton()
  for (let i = 0; i < adultos - 2; i++) {
    homePage.clickAdultosAddButton()
  }
}
)

Then(
  'no permite seleccionar más personas', () => {
    homePage.isdisableAdultosButton()
  }
)

When('selecciona {int} personas aleatorias en el apartado ocupación', (personas) => {
  homePage.clickOcupacionButton()
  let randomNumber = 0;

  

  for (let i = 0; i < personas - 2; i++) {
    randomNumber = Math.floor(Math.random() * 2);

    if (randomNumber === 0) {
      homePage.clickNinyosAddButton();
    } else {
      homePage.clickAdultosAddButton();
    }
  }

})
When('el campo de destino se encuentra vacio', () => {
  homePage.destinoIsEmpty().then((isEmpty) => {
    expect(isEmpty).to.be.true;
  });
});

When('el usuario realiza una busqueda', () => {
  homePage.clickBuscar()
  cy.wait(1000)
}
)

Then('se muestra un mensaje de error obligando escoger destino', () => {
  //homePage.hasErrorBusquedaDestino().then((isVisible) => {
    //expect(isVisible);
  //});
  homePage.hasErrorBusquedaDestino()
}
)
When('el usuario selecciona como destino {string}', (destination) => {
  homePage.enterDestino(destination)
});

Then('se muestran los hoteles con ubicacion {string}', (destination) => {
  debugger;
  const isCorrect = hotelesPage.checkDestino(destination);
  
  expect(isCorrect).to  .be.true;
})