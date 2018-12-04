# Angular Octadesk

Módulo AngularJS para integrar Apps com o Octadesk.

Por enquanto, somente a integração com o OctaChat.

## Instalação:

Adicione o script do Octadesk no seu HTML como está na documentação do Octadesk.
   
    $ bower install angular-octadesk --save

Para adicionar no AngularJS, adicione a dependência ao seu app:

    var seuApp = angular.module(
      'seuApp', [
        'octadesk'
      ]
    );

## Uso

O módulo expõe o `OctaChatService` que pode ser usado para realizar o `auto-login` e o `toggle` na janela do Chat.

Para realizar o `auto-login`:

    OctaChatService.autoLogin({name: 'user-name', email: 'user-email'});

Se você está usando a opção `showButton=false` na url para o script do OctaChat, vai precisar dar um `toggle` no chat usando:

    OctaChatService.toggle();

