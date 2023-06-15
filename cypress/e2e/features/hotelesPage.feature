@Hoteles
Feature: test suite hoteles

  Background: El usuario realiza una busqueda de hoteles
    Given el usuario se encuentra in the home page
    When el usuario selecciona como destino "Valencia"
    And el usuario realiza una busqueda

  @testcase6
  @Ordenar
  Scenario: Validar ordenamiento por Valoración en hoteles
    And escoge la opción Valoracion
    Then se muestran los hoteles ordenados de mayor a menor Valoracion
