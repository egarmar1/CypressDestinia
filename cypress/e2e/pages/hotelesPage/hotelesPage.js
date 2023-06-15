var elements = require('./elements')

class HotelesPage {
  
  checkDestino(destino){
    let isCorrect = true;

    cy.get(elements.HOTELESPAGE.CIUDAD_HOTELES).each(($ciudadHotel) =>{
        if($ciudadHotel.text() !== destino){
            isCorrect=false;
        }
    });
    return isCorrect
  }

  checkOrden(criterio){
    let ordered = true;
    let valoracionHotelAnterior = 5.0;

    switch (criterio) {
      case "Valoracion":
        cy.get(elements.HOTELESPAGE.VALORACION_HOTELES).each(($valoracionHotel) =>{
          if(!$valoracionHotel.is(':visible')){
            return false;
          }
          const valoracionHotelNum = parseFloat($valoracionHotel.text().replace(',', '.').substring(0, 3));

          if (valoracionHotelNum > valoracionHotelAnterior) {
            ordered = false;
          }
          valoracionHotelAnterior = valoracionHotelNum;

        })
        break;
      case "Precio":
        // Code to be executed when expression matches value2
        break;
      case "Distancia":
        // Code to be executed when expression matches value3
        break;
      // more cases...
      default:
        // Code to be executed when no case matches the expression
    }

    return ordered

  }
}
export default HotelesPage
