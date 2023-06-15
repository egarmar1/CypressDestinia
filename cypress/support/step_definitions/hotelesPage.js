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
  