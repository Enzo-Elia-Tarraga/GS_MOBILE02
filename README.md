📱 FlexTime – Controle de Jornada Híbrida

Sistema mobile simples para registro e consulta de horários de trabalho presencial e home-office, desenvolvido para a Global Solution – Mobile Development (FIAP).

O aplicativo permite:

Registrar o local da jornada e o horário

Visualizar histórico de registros

Acessar uma tela de perfil

Consumir uma API externa usando Axios

Navegar entre telas via React Navigation

👨‍💻 Integrantes do Grupo
Nome	RM	Função
Enzo Elia Tarraga	560901	Desenvolvimento Mobile
Rafael Terra Teodoro	560955	Backend / Suporte técnico
Otoniel Arantes Barbado	560112	Desenvolvimento Mobile / Estrutura
📂 Estrutura de Pastas
flextime-mobile/
 ├── App.js
 ├── package.json
 └── src/
       ├── routes/
       │     └── AppRoutes.js
       ├── screens/
       │     ├── LoginScreen.js
       │     ├── HomeScreen.js
       │     ├── RegisterWorkScreen.js
       │     ├── HistoryScreen.js
       │     └── ProfileScreen.js
       ├── components/
       │     ├── Button.js
       │     └── Input.js
       └── services/
             └── api.js

⚙️ Tecnologias Utilizadas

React Native (Expo)

Axios (requisições HTTP)

React Navigation

JavaScript ES6

API externa JSONPlaceholder (temporário até integrar com API própria)

▶️ Como rodar o projeto
1️⃣ Pré-requisitos

Instalar:

Node.js LTS

Expo CLI (use sempre via npx)

Android Studio OU aplicativo Expo Go no celular

2️⃣ Instalar dependências

No diretório do projeto, rodar:

npm install


Se o Expo pedir correção de dependências:

npx expo doctor --fix-dependencies

3️⃣ Rodar o projeto
npx expo start


Ao iniciar:

Pressione A → abre no emulador Android

Pressione W → abre no navegador (precisa instalar dependências web)

Escaneie o QR code com o Expo Go (Android)

📲 Como rodar no Android Studio (emulador)

Abra o Android Studio

Vá em Device Manager

Inicie um emulador Pixel

Com o emulador ligado, volte ao terminal e rode:

npx expo start
a

🌐 Configuração da API (temporária)

O app atualmente está consumindo:

https://jsonplaceholder.typicode.com


Arquivo:

src/services/api.js

import axios from "axios";

const api = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com",
});

export default api;


Em breve será substituída pela API real (Java Spring Boot) do projeto FlexTime.

🧪 Testes

O professor poderá testar:

Login

Registro de jornada

Listagem de registros

Navegação entre telas

Se estiver usando a API real (Java), rodá-la antes do app mobile.

📝 Observações

Este projeto é um protótipo funcional alinhado ao escopo da disciplina.

O layout foi simplificado para evitar uso de libs avançadas e garantir compatibilidade total com o Expo.

Comentários foram adicionados para facilitar correções e avaliação do professor.

🎓 Status da Entrega

✔ App funcional
✔ CRUD simulados via API externa
✔ UI limpa e organizada
✔ README completo
⬜ Integração com API real (em desenvolvimento)
