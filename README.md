<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="120" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

  <p align="center">A progressive <a href="http://nodejs.org" target="_blank">Node.js</a> framework for building efficient and scalable server-side applications.</p>
    <p align="center">
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/v/@nestjs/core.svg" alt="NPM Version" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/l/@nestjs/core.svg" alt="Package License" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/dm/@nestjs/common.svg" alt="NPM Downloads" /></a>
<a href="https://circleci.com/gh/nestjs/nest" target="_blank"><img src="https://img.shields.io/circleci/build/github/nestjs/nest/master" alt="CircleCI" /></a>
<a href="https://coveralls.io/github/nestjs/nest?branch=master" target="_blank"><img src="https://coveralls.io/repos/github/nestjs/nest/badge.svg?branch=master#9" alt="Coverage" /></a>
<a href="https://discord.gg/G7Qnnhy" target="_blank"><img src="https://img.shields.io/badge/discord-online-brightgreen.svg" alt="Discord"/></a>
<a href="https://opencollective.com/nest#backer" target="_blank"><img src="https://opencollective.com/nest/backers/badge.svg" alt="Backers on Open Collective" /></a>
<a href="https://opencollective.com/nest#sponsor" target="_blank"><img src="https://opencollective.com/nest/sponsors/badge.svg" alt="Sponsors on Open Collective" /></a>
  <a href="https://paypal.me/kamilmysliwiec" target="_blank"><img src="https://img.shields.io/badge/Donate-PayPal-ff3f59.svg" alt="Donate us"/></a>
    <a href="https://opencollective.com/nest#sponsor"  target="_blank"><img src="https://img.shields.io/badge/Support%20us-Open%20Collective-41B883.svg" alt="Support us"></a>
  <a href="https://twitter.com/nestframework" target="_blank"><img src="https://img.shields.io/twitter/follow/nestframework.svg?style=social&label=Follow" alt="Follow us on Twitter"></a>
</p>
  <!--[![Backers on Open Collective](https://opencollective.com/nest/backers/badge.svg)](https://opencollective.com/nest#backer)
  [![Sponsors on Open Collective](https://opencollective.com/nest/sponsors/badge.svg)](https://opencollective.com/nest#sponsor)-->

## Description

# Sistema de Gerenciamento de Festas 🎉

Este é um sistema simples para gerenciar festas e convidados, desenvolvido utilizando o framework **NestJS**. O sistema permite a criação, modificação, visualização e exclusão de festas, assim como o gerenciamento de convidados em cada festa.

## Funcionalidades

### **Rotas de Festas** (`/party`)

- **`POST /party/create`** – Criar uma nova festa.
- **`GET /party/list`** – Listar todas as festas.
- **`GET /party/token`** – Obter token de uma festa.
- **`GET /party/show/:id`** – Mostrar os detalhes de uma festa específica.
- **`PATCH /party/modify/:id`** – Modificar uma festa existente.
- **`PATCH /party/cancel/:id`** – Cancelar uma festa.
- **`POST /party/:id/add-guest`** – Adicionar um convidado a uma festa.
- **`DELETE /party/:id/remove-guest/:guestId`** – Remover um convidado de uma festa.
- **`DELETE /party/:id`** – Excluir uma festa.

### **Rotas de Convidados** (`/guest`)

- **`POST /guest/create`** – Criar um novo convidado.
- **`PATCH /guest/modify/:id`** – Modificar um convidado existente.
- **`DELETE /guest/delete/:id`** – Excluir um convidado.
- **`GET /guest/list`** – Listar todos os convidados.
- **`GET /guest/show/:id`** – Exibir os detalhes de um convidado específico.

## Tecnologias Utilizadas

- **NestJS**: Framework utilizado para o desenvolvimento da aplicação.
- **Prisma ORM**: Para a comunicação com o banco de dados.
- **PostgreSQL**: Banco de dados utilizado.


## License

Nest is [MIT licensed](https://github.com/nestjs/nest/blob/master/LICENSE).
