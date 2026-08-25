# 🌐 Desenvolvimento Front-End Para Web

## 📚 Aula 01 — Introdução ao HTML

**Curso:** Ciência da Computação
**Semestre:** 2º semestre
**Disciplina:** Desenvolvimento Front-End Para Web
**Dia:** Segunda-feira

---

## 🧠 O que é HTML?

**HTML (HyperText Markup Language)** é a linguagem de marcação utilizada para criar a estrutura de páginas Web.

O HTML utiliza **tags** para definir elementos como:

* Títulos
* Parágrafos
* Imagens
* Links
* Listas
* Botões
* Formulários

> HTML é responsável principalmente pela **estrutura** da página.

---

## 📄 Estrutura básica de um documento HTML

Todo documento HTML normalmente começa com uma estrutura semelhante a esta:

```html
<!DOCTYPE html>
<html lang="pt-BR">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <title>Minha primeira página</title>
</head>

<body>

    <h1>Olá, mundo!</h1>

    <p>Esta é minha primeira página HTML.</p>

</body>

</html>
```

---

## 🔎 Entendendo as principais tags

### `<!DOCTYPE html>`

Informa ao navegador que o documento utiliza HTML5.

### `<html>`

É o elemento principal do documento HTML.

```html
<html>
</html>
```

### `<head>`

Contém informações sobre a página que normalmente não aparecem diretamente no conteúdo.

```html
<head>
    <title>Minha página</title>
</head>
```

### `<title>`

Define o título que aparece na aba do navegador.

```html
<title>Minha primeira página</title>
```

### `<body>`

Contém o conteúdo que será apresentado na página.

```html
<body>
    <h1>Olá, mundo!</h1>
</body>
```

---

# 📝 Títulos

O HTML possui títulos de `h1` até `h6`.

```html
<h1>Título principal</h1>
<h2>Subtítulo</h2>
<h3>Outro título</h3>
<h4>Título nível 4</h4>
<h5>Título nível 5</h5>
<h6>Título nível 6</h6>
```

O `<h1>` representa o título de maior importância.

---

# ✏️ Parágrafos

Para criar um parágrafo, utilizamos a tag `<p>`:

```html
<p>Este é um parágrafo.</p>

<p>Este é outro parágrafo.</p>
```

---

# 🔗 Links

A tag `<a>` é utilizada para criar links.

```html
<a href="https://www.google.com">
    Google
</a>
```

O atributo `href` indica para onde o link irá direcionar o usuário.

---

# 🖼️ Imagens

Para adicionar uma imagem utilizamos a tag `<img>`:

```html
<img src="imagem.jpg" alt="Descrição da imagem">
```

### Principais atributos:

* `src` → caminho da imagem.
* `alt` → descrição alternativa da imagem.

---

# 📋 Listas

## Lista não ordenada

```html
<ul>
    <li>HTML</li>
    <li>CSS</li>
    <li>JavaScript</li>
</ul>
```

Resultado:

* HTML
* CSS
* JavaScript

## Lista ordenada

```html
<ol>
    <li>HTML</li>
    <li>CSS</li>
    <li>JavaScript</li>
</ol>
```

Resultado:

1. HTML
2. CSS
3. JavaScript

---

# 🧪 Primeiro exercício

Crie uma página chamada `index.html` contendo:

1. Um título principal com seu nome.
2. Um parágrafo falando sobre você.
3. Um subtítulo chamado **"Tecnologias que estou estudando"**.
4. Uma lista com pelo menos três tecnologias.
5. Um link para um site que você utiliza para estudar.
6. Uma imagem.

### Exemplo

```html
<!DOCTYPE html>
<html lang="pt-BR">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <title>Minha Página</title>
</head>

<body>

    <h1>Daniel da Silva Mendes</h1>

    <p>
        Sou estudante de Ciência da Computação
        e estou aprendendo desenvolvimento Web.
    </p>

    <h2>Tecnologias que estou estudando</h2>

    <ul>
        <li>HTML</li>
        <li>CSS</li>
        <li>JavaScript</li>
    </ul>

    <h2>Site para estudos</h2>

    <a href="https://www.google.com">
        Acessar site
    </a>

</body>

</html>
```

---

## 🎯 Resumo da aula

| Tag     | Função                |
| ------- | --------------------- |
| `html`  | Documento HTML        |
| `head`  | Informações da página |
| `title` | Título da aba         |
| `body`  | Conteúdo da página    |
| `h1`    | Título principal      |
| `h2`    | Subtítulo             |
| `p`     | Parágrafo             |
| `a`     | Link                  |
| `img`   | Imagem                |
| `ul`    | Lista não ordenada    |
| `ol`    | Lista ordenada        |
| `li`    | Item da lista         |

---

## 🚀 Próxima aula

**Aula 02 — CSS**

Conteúdos sugeridos:

* Seletores
* Cores
* Fontes
* Margens
* Espaçamentos
* Bordas
* Classes
* IDs
* Organização de uma página Web

---

**Autor:** Daniel da Silva Mendes
**Curso:** Ciência da Computação — Universidade Braz Cubas
