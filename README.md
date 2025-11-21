📱 FlexTime – Controle de Jornada Híbrida

Global Solution – Mobile Development + Backend Integration

Este projeto implementa um aplicativo mobile desenvolvido em React Native com Expo, consumindo uma API RESTful em Java Spring Boot responsável pelo CRUD completo da jornada de trabalho dos usuários.

👥 Integrantes do Grupo
Nome	RM	Responsabilidade
Enzo Elia Tarraga	RM 560901	Mobile (React Native), Integração com API, Documentação
Rafael Terra Teodoro	RM 560955	Backend (API Java), Testes, Modelagem
Otoniel Arantes Barbado	RM 560112	Banco de Dados, Configuração de ambiente, Suporte ao backend
🚀 Tecnologias Utilizadas
Mobile (Frontend)

React Native (Expo)

React Navigation

Axios para chamadas HTTP

StyleSheet (sem bibliotecas avançadas)

Componentização simples (Input, Button)

Backend (API REST)

Java 17

Spring Boot

Spring Web

Spring Data JPA

Banco de Dados (Oracle / H2 / PostgreSQL)

Postman para testes

📌 Funcionalidades Implementadas
📱 Aplicativo Mobile

✔ Login simples
✔ Tela inicial (menu)
✔ Registro de jornada (Create)
✔ Histórico de registros (Read)
✔ Atualização (Update) — via API
✔ Exclusão (Delete) — via API
✔ Perfil do usuário
✔ Feedback visual com alerts
✔ Layout padronizado
✔ Integração com API real

🌐 API REST – CRUD Completo

A API implementa:

➤ POST /jornadas

Cria um novo registro de jornada.

➤ GET /jornadas

Lista todas as jornadas cadastradas.

➤ GET /jornadas/{id}

Busca um registro específico.

➤ PUT /jornadas/{id}

Atualiza uma jornada existente.

➤ DELETE /jornadas/{id}

Exclui uma jornada.
