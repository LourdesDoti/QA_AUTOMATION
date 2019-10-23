Feature: Pruebas en la pagina de google

    Scenario: Ir a la pagina de google
        Given Quiero ir a la pagina de google
        Then verificar que estamos en la pagina de google
        

    Scenario: Ir a la pagina de google y hacer una busqueda cualquiera
        Given Quiero ir a la pagina de google
        When Hago una busqueda cualquiera
        Then verificar que la busqueda devuelva resultados
        

    Scenario: Ir a la pagina de Google y verificar que el titulo de la pagina sea google
        Given Quiero ir a la pagina de google
        Then verificar que el titulo es correcto