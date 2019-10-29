Feature: Pruebas en la pagina de twitter

Scenario: Ir a la pagina de twitter y verificar que el titulo de la pagina sea twitter
        Given Quiero ir a la pagina de twitter
        Then verificar que el titulo de twitter es correcto

Scenario: Ir a la pagina de twitter y verificar que la url sea https://twitter.com/
        Given Quiero ir a la pagina de twitter
        Then verificar que la url de la pagina sea correcta  