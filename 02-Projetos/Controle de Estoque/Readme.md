# 📦 Controle de Estoque

Sistema web desenvolvido para realizar o **controle de produtos em estoque**, permitindo cadastrar produtos e controlar suas entradas e saídas.

## 📋 Sobre o projeto

O projeto foi desenvolvido utilizando **HTML, CSS e JavaScript**, com uma interface simples e fácil de utilizar.

O sistema permite cadastrar produtos informando:

* ID do produto
* Nome
* Categoria
* Preço
* Quantidade
* Descrição

Além disso, é possível controlar a quantidade de produtos através dos botões **+ Adicionar** e **- Retirar**.

As movimentações realizadas são apresentadas no **Histórico de Produtos**.

## ⚙️ Funcionalidades

### 📦 Cadastro de produtos

Permite cadastrar novos produtos no sistema.

### ➕ Entrada de produtos

O botão **+ Adicionar** permite informar uma quantidade que entrou no estoque.

### ➖ Saída de produtos

O botão **- Retirar** permite retirar uma quantidade do estoque.

O sistema verifica se existe quantidade suficiente antes de realizar a retirada.

### 🗑️ Exclusão

O botão **Excluir** permite remover um produto cadastrado.

### 📊 Controle de estoque

O sistema calcula automaticamente:

* Quantidade atual
* Valor total dos produtos em estoque
* Status do produto

O status pode ser:

```text
EM ESTOQUE
```

ou

```text
ESGOTADO
```

### 🕒 Histórico

O sistema registra as movimentações realizadas, mostrando:

* Tipo da movimentação
* Produto
* Quantidade movimentada
* Estoque atual
* Data e hora

## 🛠️ Tecnologias utilizadas

* HTML5
* CSS3
* JavaScript
* Flexbox

## 📁 Estrutura do projeto

```text
Controle-de-Estoque/
│
├── assets/
│   └── ChatGPT.png
│
├── index.html
├── style.css
├── script.js
└── README.md
```

## ▶️ Como executar

1. Baixe ou clone este repositório.
2. Abra a pasta do projeto.
3. Abra o arquivo:

```text
index.html
```

4. O sistema será aberto no navegador.

Também é possível utilizar o **Live Server** no Visual Studio Code para executar o projeto.

## 🖥️ Interface

O sistema possui três áreas principais:

```text
┌─────────────────────┐
│ Cadastrar Produto   │
│                     │
│ ID                  │
│ Nome                │
│ Categoria           │
│ Preço               │
│ Quantidade          │
│ Descrição           │
│                     │
│ Cadastrar Produto   │
└─────────────────────┘

┌─────────────────────┐
│ Produtos            │
│                     │
│ Produto #1          │
│ Quantidade: 10      │
│                     │
│ + Adicionar         │
│ - Retirar           │
│ Excluir             │
└─────────────────────┘

┌─────────────────────┐
│ Histórico           │
│                     │
│ ENTRADA             │
│ Teclado +5          │
│                     │
│ SAÍDA               │
│ Teclado -3          │
└─────────────────────┘
```

## 🎯 Objetivo

O objetivo do projeto é desenvolver um sistema simples para **gerenciar produtos e movimentações de estoque**, aplicando conhecimentos de desenvolvimento Front-End, HTML, CSS e JavaScript.

## 👨‍💻 Desenvolvedor

**Daniel Mendes**

Projeto desenvolvido para fins acadêmicos.
