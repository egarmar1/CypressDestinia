var elements = require('./elements')
import BasePage from '../basePage';

class HotelesPage extends BasePage {

  checkDestino(destino) {
    debugger;
    let isCorrect = true;

    cy.get(elements.HOTELESPAGE.CIUDAD_HOTELES).each(($ciudadHotel) => {
      console.log($ciudadHotel)
      if ($ciudadHotel.text() !== destino) {
        isCorrect = false;
      }
    });
    return isCorrect
  }

  checkOrden(criterio) {
    let ordered = true;
    let valoracionHotelAnterior = 5.0;
    let valoracionHotelNum = 0.0;

    switch (criterio) {
      case "Valoracion":
        cy.get(elements.HOTELESPAGE.VALORACION_HOTELES).each(($valoracionHotel) => {
          if (!$valoracionHotel.is(':visible')) {
            return false;
          }

          valoracionHotelNum = parseFloat($valoracionHotel.text().replace(',', '.').substring(0, 3));




          if (valoracionHotelNum > valoracionHotelAnterior) {
            ordered = false;
          }
          valoracionHotelAnterior = valoracionHotelNum;

        })
        break;
      case "Precio":
        let precioHotelInt = 0;
        let precioAnterior = 0;

        cy.get(elements.HOTELESPAGE.PRECIOS_HOTELES).each(($precioHotel) => {
          if (!$precioHotel.is(':visible')) {
            return false;
          }

          let precioHotelText = $precioHotel.text();
          cy.wrap($precioHotel).then(($el) => {
            debugger;
            precioHotelInt = parseInt(precioHotelText.substring(0, precioHotelText.length - 2), 10)
          });


          if (precioAnterior > precioHotelInt) {
            ordered = false;
          }
          precioAnterior = precioHotelInt
        })
        break;

      // case "Distancia":
      //   let distanciaHotelInt = 0;
      //   let distanciaAnterior = 0;

      //   cy.get(elements.HOTELESPAGE.DISTANCIAS_HOTELES).each(($distanciaHotel) => {
      //     if(!$distanciaHotel.is(':visible')){
      //       return false;
      //     }
      //     let distanciHotelText = $distanciHotel.text();
      //     distanciaHotelInt = parseInt(distanciHotelText.substring(0,distanciHotelText.length -2),10)

      //   })
      //   break;
      // // more cases...
      default:
      // Code to be executed when no case matches the expression
    }

    return ordered

  }
  clickEstrella(estrellas) {

    cy.get(elements.HOTELESPAGE.ESTRELLAS_CHECKBOX).each(($checkBoxEstrella) => {
      cy.wrap($checkBoxEstrella).invoke('attr', 'id').then((attributeCheck) => {
        const lastChar = attributeCheck.slice(-1);

        if (estrellas === lastChar) {
          cy.wait(2000);
          cy.wrap($checkBoxEstrella)
            .scrollIntoView({ force: true })
            .click();
        }
      });

    })
  }
  checkHotelesEstrella(estrellas) {
    let filtered = true;
    cy.wait(2000);
    cy.get(elements.HOTELESPAGE.ESTRELLAS_HOTELES_ICON).each(($estrellasHotelIcon) => {
      if ($estrellasHotelIcon.text() !== estrellas + "Estrellas" && $estrellasHotelIcon.text() !== estrellas + "" && $estrellasHotelIcon.text() !== estrellas + "Llaves") {
        filtered = false
      }

    })
    return filtered
  }
}

export default HotelesPage
