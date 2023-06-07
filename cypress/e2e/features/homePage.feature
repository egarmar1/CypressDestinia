@Home
Feature: test suite home

  Background: Navigate to the home page
    Given el usuario se encuentra in the home page

  Scenario: Validar que no se puede seleccionar mas de 9 adultos
    When selecciona 9 adultos en el apartado ocupación
    Then no permite seleccionar más personas