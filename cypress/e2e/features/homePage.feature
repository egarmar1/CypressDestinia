@Home
Feature: test suite home

  Background: Navigate to the home page
    Given el usuario se encuentra in the home page

  @testcase01
  @maxPersonasPorHabitacion
  Scenario: Validar que no se puede seleccionar mas de 9 adultos
    When selecciona 9 adultos en el apartado ocupación
    Then no permite seleccionar más personas

  ##@testcase02
  ##@maxBebesPorHabitacion
  ##Scenario: Validar que no se pueden seleccionar más de 9 personas
  ##  When selecciona 9 personas aleatorias en el apartado ocupación
  ##  Then no permite seleccionar más personas

  ##@testcase04
  ##@BusquedaInfoCorrecta
  ##Scenario: Validar que no se puede realizar una búsqueda sin escoger destino
  ##  When el campo de destino se encuentra vacio
  ##  And el usuario realiza una busqueda
  ##  Then se muestra un mensaje de error obligando escoger destino

  ##@testcase05
  ##@BusquedaInfoCorrecta
  ##Scenario Outline: Validar que se muestra la ubicación adecuada al buscar por una ubicación concreta
  ##  When el usuario selecciona como destino "<destino>"
  ##  And el usuario realiza una busqueda
  ##  Then se muestran los hoteles con ubicacion "<destino>"
  ##  
  ##  Examples:
  ##  |destino|
  ##  |Valencia|