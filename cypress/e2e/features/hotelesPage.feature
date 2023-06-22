# @Hoteles
# Feature: test suite hoteles

#   Background: El usuario realiza una busqueda de hoteles
#     Given el usuario se encuentra in the home page
#     When el usuario selecciona como destino "Valencia"
#     And el usuario realiza una busqueda

#   @testcase6
#   @Ordenar
#   Scenario: Validar ordenamiento por Valoración en hoteles
#     And escoge la opción Valoracion
#     Then se muestran los hoteles ordenados de mayor a menor Valoracion

  # @testcase7
  # @Ordenar
  # Scenario: Validar ordenamiento por precio en hoteles
  #   And escoge la opción Mas economicos
  #   Then se muestran los hoteles ordenados de menor a mayor Precio

  # @testcase9
  # @Filtrar
  # Scenario Outline: Validar filtro por estrellas
  #   And  filtra por Categoria "<estrellas_hotel>" estrellas
  #   Then se muestran hoteles de "<estrellas_hotel>" estrellas

  #   Examples:
  #     | estrellas_hotel |
  #     | 5               |
  #     | 4               |
  #     | 2               |

  # @testcase10
  # @Filtrar
  # Scenario Outline: Validar filtro por precio
  #   And filtra por el rango de precio <X> - <Y>
  #   Then se muestran hoteles del rango <X> - <Y>

  #   Examples:
  #     | X  | Y   |
  #     | 50 | 900 |