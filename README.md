<h1 align="center">
     Teste de conhecimento prático 
</h1>

<h4 align="center"> 
	🚧  crud de contatos 🚀 Concluído 🚀 🚧
</h4>

<p align="center">
 <a href="#-sobre-o-projeto">Sobre</a> •
 <a href="#-funcionalidades">Funcionalidades</a> •
 <a href="#-layout">Layout</a> • 
 <a href="#-como-executar-o-projeto">Como executar</a> • 
 <a href="#-tecnologias">Tecnologias</a> • 
 <a href="#-autor">Autor</a> • 
</p>


## 💻 Sobre o projeto

Contatos - Criar um CRUD de uma tela de contatos, realizando suas devidas funcionalidades, sendo elas: Criar, listar, atualizar e deletar.


Projeto desenvolvido para teste prático a empresa [Alphacode](https://site.alphacode.com.br/) :office:

---

## ⚙️ Funcionalidades

- [x] Os Usuários podem cadastrar os contatos na plataforma web enviando os seguintes dados:
  - [x] Nome completo
  - [x] Data de nascimento
  - [x] Email
  - [x] Profissão
  - [x] Telefone para contato
  - [x] Celular para contato
  - [x] Se o número de celular possui Whatsapp 
  - [x] Se deseja receber notificações por SMS
  - [x] Se deseja receber notificações por email

- [x] Os usuários tem acesso a uma tabela com todos os contatos cadastrados
- [x] Os usuários podem realizar a edição dos dados de um determinado contato
- [x] Os usuários podem realizar a exlusão de um determinado contato

---

## 🎨 Layout

layout da aplicação:

### Web

<p align="center" style="display: flex; align-items: flex-start; justify-content: center;">
  <img alt="layout" title="#layout" src="./frontend/src/assets/wireframe.jpg" width="400px">
</p>

---

## 🚀 Como executar o projeto

Este projeto é divido em duas partes:
1. Backend (pasta backend) 
2. Frontend (pasta frontend)

💡O Frontend precisa que o Backend esteja sendo executado para funcionar.

### Pré-requisitos

Antes de começar, você vai precisar ter instalado em sua máquina as seguintes ferramentas:
[Git](https://git-scm.com), [PHP](https://www.php.net/), [Composer](https://getcomposer.org/), [Laravel](https://laravel.com/), [NodeJs](https://nodejs.org/en). 
Além disto é bom ter um editor para trabalhar com o código como [VSCode](https://code.visualstudio.com/)

#### 🎲 Criando o banco (banco de dados)

```bash

# Clone este repositório
$ git clone https://github.com/jennifer-cristina/contacts-crud

# Acesse a pasta do projeto
$ cd contacts-crud

# Vá para a pasta chamada database
$ cd database

# Execute o import do banco a partir do arquivo seguinte
$ backup.sql

# Configure a conexão com o banco de dados no arquivo
$ backend/.env

DB_CONNECTION=mysql
DB_HOST=127.0.0.1
DB_PORT=3306
DB_DATABASE=db_contacts
DB_USERNAME=<SEU USUARIO>
DB_PASSWORD=<SUA SENHA>

```

#### 🎲 Rodando o Backend (servidor)

```bash

# Vá para a pasta da aplicação Back End
$ cd backend

# Instale as dependências
$ composer install

# Execute a aplicação em modo de desenvolvimento
$ php artisan serve

# O servidor inciará na porta:8000

```

#### 🧭 Rodando a aplicação web (Frontend)

```bash

# Vá para a pasta da aplicação Front End
$ cd frontend

# Instale as dependências
$ npm install

# Execute a aplicação em modo de desenvolvimento
$ ng serve

# A aplicação será aberta na porta:4200 - acesse http://localhost:4200

```

---

## 🛠 Tecnologias

As seguintes ferramentas foram usadas na construção do projeto:

#### **Frontend**

-   **[Angular](https://angular.io/)**
-   **[Bootstrap](https://getbootstrap.com/)**

#### **Backend**

-   **[PHP](https://www.php.net/)**
-   **[Laravel](https://laravel.com/)**

#### **Banco de dados**

- **[MySql](https://www.mysql.com/)**

#### **Utilitários**

-   Editor:  **[Visual Studio Code](https://code.visualstudio.com/)**
-   Teste de API:  **[Postman](https://www.postman.com/)**

---

## 🦸 Autora

<a href="https://github.com/jennifer-cristina">
 <img style="border-radius: 50%;" src="./frontend/src/assets/profile.jpg" width="200px;" alt=""/>

[![Linkedin Badge](https://img.shields.io/badge/-Jennifer-blue?style=flat-square&logo=Linkedin&logoColor=white&link=https://www.linkedin.com/in/jennifer-cristina-221437207/)](https://www.linkedin.com/in/jennifer-cristina-221437207/) 
[![Gmail Badge](https://img.shields.io/badge/-cristin4.jennifer@gmail.com-c14438?style=flat-square&logo=Gmail&logoColor=white&link=mailto:cristin4.jennifer@gmail.com)](mailto:cristin4.jennifer@gmail.com)

---

Feito com ❤️ por Jennifer Cristina 👋🏽 [Entre em contato!](https://www.linkedin.com/in/jennifer-cristina/)

---
