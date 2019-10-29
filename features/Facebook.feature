Feature: Pruebas en la pagina de facebook

Background: Ir a facebook
    Given Quiero ir a la pagina de facebook

    Scenario: Loguearme en la pagina de facebook
        When inicio sesion en facebook con "franciscodotitexeira@gmail.com" y contraseña "Yosoyyo123"
        Then verificar que inicie sesion

    Scenario Outline: Loguearme en la pagina de facebook con diferentes usuarios
        When inicio sesion en facebook con <usuario> y contraseña <password>
        Then verificar que inicie sesion

        Examples:
        | usuario | password |
        | franciscodotitexeira@gmail.com | Yosoyyo123 |
        | luulidoti@hotmail.com.ar | soldecoloreslourdes |

    Scenario: Ir a la pagina de facebook
        Then verificar que estemos en la pagina de facebook 
        
    Scenario: Ir a la pagina de facebook y publicar un estado
        When  publicar un estado
        Then  verificar que el estado se haya publicado

    Scenario: Ir a la pagina de facebook y mandar una solicitud de amistad
        When mandar una solicitud de amistad
        Then verificar que la solicitud se haya mandado
    
    Scenario: Desde la pagina de facebook entrar al perfil
       When inicio sesion en facebook con "luulidoti@hotmail.com.ar" y contraseña "soldecoloreslourdes"
       And  entro al perfil
       And  mirar las notificaciones 
         