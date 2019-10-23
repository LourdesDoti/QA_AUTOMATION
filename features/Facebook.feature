Feature: Pruebas en la pagina de facebook

Background: Ir a facebook
    Given Quiero ir a la pagina de facebook

    Scenario: Ir a la pagina de facebook
        Then verificar que estemos en la pagina de facebook 
        
    Scenario: Ir a la pagina de facebook y publicar un estado
        When  publicar un estado
        Then  verificar que el estado se haya publicado

    Scenario: Ir a la pagina de facebook y mandar una solicitud de amistad
        When mandar una solicitud de amistad
        Then verificar que la solicitud se haya mandado