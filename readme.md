# POC - App para Demonstrar Funcionalidades do Firebase e Expo Notifications

## Introdução

O aplicativo POC, um projeto React Native criado com Expo que demonstra diversas funcionalidades do Firebase e Expo Notifications. O foco principal do aplicativo é em dispositivos Android.

## Configuração do Projeto

### Pré-requisitos:

- Node.js e npm (ou yarn) instalados em seu sistema.
- Um projeto Firebase ativo configurado com Firebase Cloud Messaging (FCM) ativado.

### Instalação:

- Clone este repositório: git clone https://github.com/kalyanbasso/notification-app.git
- Navegue para o diretório do projeto: `cd poc`
- Instale as dependências: `npm install` (ou `yarn install`)

### Configuração do Firebase

- Criar um Projeto Firebase (se ainda não o fez):
- Vá para o console do Firebase (https://console.firebase.google.com/).
- Crie um novo projeto ou selecione um existente.

### Configurar o Firebase em Seu App:

- Crie um arquivo chamado app.json ou app.config.js na raiz do seu projeto (se não existir).
- Adicione os seguintes detalhes de configuração à seção expo do arquivo, substituindo os espaços reservados com seus valores reais:

```json
"expo": {
  "name": "POC App",
  "slug": "poc",
  "version": "1.0.0",
  "orientations": ["portrait"],
  "android": {
    "package": "com.suaempresa.poc",
    "config": {
      "googleServicesFile": "./google-services.json" // Caminho para o seu arquivo Google Services JSON
    }
  }
}
```

- Baixe o arquivo Google Services JSON gerado a partir do console do Firebase e coloque-o no diretório raiz do seu projeto (./google-services.json).

## Configuração do Expo Push Notification

### Obter o Expo Push Token:

- Execute seu aplicativo no modo de desenvolvimento em um dispositivo Android usando expo start --android.
- O aplicativo solicitará permissão para receber notificações. Conceda permissão quando solicitado.
- Você pode encontrar o Expo push token nos logs do aplicativo do dispositivo Android ou usando ferramentas como o Expo XDE.

### Configuração do Firebase Cloud Messaging (FCM) Solicitar Permissão FCM:

- No código do seu aplicativo, implemente a lógica para solicitar ao usuário permissão para receber notificações FCM usando @react-native-firebase/messaging.

## Análise

### Firebase Analytics

O Firebase Analytics fornece rastreamento de comportamento do usuário e insights. Para integrá-lo, siga a documentação do Firebase (https://firebase.google.com/docs/analytics).
Crashlytics

### Firebase Crashlytics

O Firebase Crashlytics ajuda a identificar e diagnosticar falhas em seu aplicativo. Para obter instruções de configuração, consulte a documentação do Firebase (https://firebase.google.com/docs/crashlytics).

## Explicação do Código

### usePushNotification.ts

- Este arquivo gerencia as notificações Expo usando o pacote expo-notifications.
- Define o hook usePushNotifications:
- Registra-se para notificações push no carregamento do dispositivo e solicita permissão se necessário.
- Configura um manipulador de notificação para personalizar o comportamento da notificação.
- Retorna o Expo push token e a notificação recebida (se houver).

### useFcmPushNotification.ts

- Este arquivo lida com notificações FCM usando @react-native-firebase/messaging.
- Define o hook useFcmPushNotification:
- Solicita permissão do usuário para notificações FCM.
- Configura um manipulador de notificação para exibir notificações.
- Define um manipulador de mensagem em segundo plano para agendar notificações quando o aplicativo está em segundo plano.
- Retorna o token do dispositivo FCM (se disponível).

## Executando o Aplicativo

### Certifique-se de ter concluído as etapas de configuração para Expo e Firebase.
