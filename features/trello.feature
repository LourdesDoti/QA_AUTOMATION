Feature: Pruebas en la pagina de Trello

Background: Ir a Trello
    Given Quiero ir a la pagina de Trello

    Scenario: Verificar el titulo
        Then verificar que el titulo sea correcto

    Scenario Outline: Loguearme en la pagina de Trello con diferentes usuarios
        When inicio sesion en Trello con <usuario> y contraseña <password>

        Examples:
        | usuario | password |
        | franciscodotitexeira@gmail.com | Yosoyyo123 |
        | lourdesdotitexeira@gmail.com | soldecolores |