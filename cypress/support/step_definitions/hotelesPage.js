import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor'

import HomePage from '../../e2e/pages/homePage/homePage'
import HotelesPage from '../../e2e/pages/hotelesPage/hotelesPage'

const homePage = new HomePage()
const hotelesPage = new HotelesPage()

When('escoge la opción Valoracion', () => {
    cy.location().then((location) => {
        const newLocation = new URL(location);
        newLocation.searchParams.set('sortType', 'rating');
        cy.visit(newLocation.toString());
      });
  });
  
Then('se muestran los hoteles ordenados de mayor a menor Valoracion', () => {
    const isCorrect = hotelesPage.checkOrden("Valoracion"); 
    expect(isCorrect).to.be.true;
  })

  When('escoge la opción Mas economicos', () => {
    cy.location().then((location) => {
        const newLocation = new URL(location);
        newLocation.searchParams.set('sortType', 'price');
        cy.visit(newLocation.toString());
      });
  });

  Then('se muestran los hoteles ordenados de menor a mayor Precio', () => {
    const isCorrect = hotelesPage.checkOrden("Precio"); 
    expect(isCorrect).to.be.true;
  })

  When('filtra por Categoria {string} estrellas', (estrellas) => {
    hotelesPage.clickEstrella(estrellas)
  });

  Then('se muestran hoteles de {string} estrellas', (estrellas) => {
    const isFiltered = hotelesPage.checkHotelesEstrella(estrellas);
    expect(isFiltered).to.be.true;
  })
  When('filtra por el rango de precio {int} - {int}', (X,Y) => {
    hotelesPage.deslizarHandles(X,Y);
  })
  Then('se muestran hoteles del rango {int} - {int}', (X,Y) => {
    const isFiltered = hotelesPage.checkPriceFilter(X,Y);
    expect(isFiltered).to.be.true;
  })
  