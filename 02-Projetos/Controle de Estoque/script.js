// =====================================================
// PEGAR ELEMENTOS DO HTML
// =====================================================

// Pega o formulário
const formChamado = document.getElementById("formChamado");

// Pega a área onde os produtos serão exibidos
const listaChamados = document.getElementById("listaChamados");

// Pega a área onde o histórico será exibido
const listaHistorico = document.getElementById("listaHistorico");


// =====================================================
// LISTA DE PRODUTOS
// =====================================================

// Lista que armazena os produtos
let chamados = [

    {
        id: "001",
        item: "Teclado",
        categoria: "Periférico",
        preço: 80,
        quantidade: 10,
        descrição: "Teclado USB",
        status: "EM ESTOQUE"
    },

    {
        id: "002",
        item: "Mouse",
        categoria: "Periférico",
        preço: 50,
        quantidade: 15,
        descrição: "Mouse USB",
        status: "EM ESTOQUE"
    },

    {
        id: "003",
        item: "Monitor",
        categoria: "Tela",
        preço: 700,
        quantidade: 5,
        descrição: "Monitor 24 polegadas",
        status: "EM ESTOQUE"
    },

    {
        id: "004",
        item: "Notebook",
        categoria: "Computador",
        preço: 2500,
        quantidade: 3,
        descrição: "Notebook para trabalho",
        status: "EM ESTOQUE"
    }

];


// =====================================================
// HISTÓRICO
// =====================================================

// Lista que guarda as entradas e saídas
let historico = [];


// =====================================================
// CADASTRAR PRODUTO
// =====================================================

// Detecta quando o formulário for enviado
formChamado.addEventListener("submit", function(event) {

    // Impede o recarregamento da página
    event.preventDefault();


    // Pega os valores digitados no formulário
    const id = document.getElementById("Id").value;

    const item = document.getElementById("Item").value;

    const categoria =
        document.getElementById("categoria").value;

    const preço =
        Number(document.getElementById("preço").value);

    const quantidade =
        Number(document.getElementById("quantidade").value);

    const descrição =
        document.getElementById("descrição").value;


    // Verifica se já existe um produto com esse ID
    const produtoExiste = chamados.some(function(produto) {

        return produto.id === id;

    });


    // Impede ID duplicado
    if (produtoExiste) {

        alert("Já existe um produto com esse ID.");

        return;
    }


    // Cria o novo produto
    const novoProduto = {

        id: id,

        item: item,

        categoria: categoria,

        preço: preço,

        quantidade: quantidade,

        descrição: descrição,

        status:
            quantidade > 0
                ? "EM ESTOQUE"
                : "ESGOTADO"
    };


    // Adiciona o produto na lista
    chamados.push(novoProduto);


    // Atualiza os produtos
    mostrarChamados();


    // Limpa o formulário
    formChamado.reset();


    // Mostra mensagem
    alert("Produto cadastrado com sucesso!");

});


// =====================================================
// MOSTRAR PRODUTOS
// =====================================================

function mostrarChamados() {

    // Limpa a lista
    listaChamados.innerHTML = "";


    // Verifica se não existem produtos
    if (chamados.length === 0) {

        listaChamados.innerHTML =
            "<p>Nenhum produto cadastrado.</p>";

        return;
    }


    // Percorre todos os produtos
    chamados.forEach(function(chamado, index) {


        // Cria uma div para o produto
        const div = document.createElement("div");


        // Adiciona a classe CSS
        div.className = "produto";


        // Calcula o valor total do estoque
        const valorEstoque =
            chamado.preço * chamado.quantidade;


        // Define o status
        if (chamado.quantidade === 0) {

            chamado.status = "ESGOTADO";

        } else {

            chamado.status = "EM ESTOQUE";

        }


        // Define a classe do status
        const classeStatus =
            chamado.quantidade === 0
                ? "esgotado"
                : "em-estoque";


        // Coloca os dados na tela
        div.innerHTML = `

            <h3>
                Produto #${index + 1}
            </h3>

            <p>
                <strong>ID:</strong>
                ${chamado.id}
            </p>

            <p>
                <strong>Nome:</strong>
                ${chamado.item}
            </p>

            <p>
                <strong>Categoria:</strong>
                ${chamado.categoria}
            </p>

            <p>
                <strong>Preço:</strong>
                R$ ${chamado.preço.toFixed(2)}
            </p>

            <p>
                <strong>Quantidade:</strong>
                ${chamado.quantidade}
            </p>

            <p>
                <strong>Descrição:</strong>
                ${chamado.descrição}
            </p>

            <p>
                <strong>Valor em estoque:</strong>
                R$ ${valorEstoque.toFixed(2)}
            </p>

            <p>
                <strong>Status:</strong>

                <span class="status ${classeStatus}">
                    ${chamado.status}
                </span>

            </p>


            <div class="botoes">

                <button
                    class="btn-adicionar"
                    onclick="adicionarProduto(${index})"
                >
                    + Adicionar
                </button>


                <button
                    class="btn-retirar"
                    onclick="retirarProduto(${index})"
                >
                    - Retirar
                </button>


                <button
                    class="btn-excluir"
                    onclick="excluirProduto(${index})"
                >
                    Excluir
                </button>

            </div>

        `;


        // Coloca o produto na página
        listaChamados.appendChild(div);

    });

}


// =====================================================
// ADICIONAR PRODUTO
// =====================================================

function adicionarProduto(index) {

    // Pergunta a quantidade que entrou
    const quantidade = Number(
        prompt(
            "Digite a quantidade que entrou no estoque:"
        )
    );


    // Verifica se é uma quantidade válida
    if (
        quantidade <= 0 ||
        !Number.isInteger(quantidade)
    ) {

        alert("Digite uma quantidade válida.");

        return;
    }


    // Adiciona a quantidade ao estoque
    chamados[index].quantidade += quantidade;


    // Atualiza o status
    chamados[index].status = "EM ESTOQUE";


    // Registra a entrada no histórico
    historico.unshift({

        tipo: "ENTRADA",

        produto: chamados[index].item,

        quantidade: quantidade,

        estoque: chamados[index].quantidade,

        data: new Date().toLocaleString("pt-BR")

    });


    // Atualiza os produtos
    mostrarChamados();


    // Atualiza o histórico
    mostrarHistorico();

}


// =====================================================
// RETIRAR PRODUTO
// =====================================================

function retirarProduto(index) {

    // Pergunta a quantidade que saiu
    const quantidade = Number(
        prompt(
            "Digite a quantidade que saiu do estoque:"
        )
    );


    // Verifica se é válida
    if (
        quantidade <= 0 ||
        !Number.isInteger(quantidade)
    ) {

        alert("Digite uma quantidade válida.");

        return;
    }


    // Verifica se existe estoque suficiente
    if (
        quantidade >
        chamados[index].quantidade
    ) {

        alert(
            "Não há quantidade suficiente em estoque.\n\n" +
            "Estoque disponível: " +
            chamados[index].quantidade
        );

        return;
    }


    // Retira a quantidade do estoque
    chamados[index].quantidade -= quantidade;


    // Atualiza o status
    if (chamados[index].quantidade === 0) {

        chamados[index].status = "ESGOTADO";

    } else {

        chamados[index].status = "EM ESTOQUE";

    }


    // Registra a saída no histórico
    historico.unshift({

        tipo: "SAÍDA",

        produto: chamados[index].item,

        quantidade: quantidade,

        estoque: chamados[index].quantidade,

        data: new Date().toLocaleString("pt-BR")

    });


    // Atualiza os produtos
    mostrarChamados();


    // Atualiza o histórico
    mostrarHistorico();

}


// =====================================================
// EXCLUIR PRODUTO
// =====================================================

function excluirProduto(index) {

    // Pega o nome do produto
    const nome = chamados[index].item;


    // Pergunta se deseja excluir
    const confirmar = confirm(
        "Deseja realmente excluir o produto " +
        nome +
        "?"
    );


    // Se cancelar, não faz nada
    if (!confirmar) {

        return;
    }


    // Remove o produto
    chamados.splice(index, 1);


    // Atualiza a lista
    mostrarChamados();

}


// =====================================================
// MOSTRAR HISTÓRICO
// =====================================================

function mostrarHistorico() {

    // Limpa o histórico
    listaHistorico.innerHTML = "";


    // Verifica se não existe histórico
    if (historico.length === 0) {

        listaHistorico.innerHTML =
            "<p>Nenhum produto no histórico.</p>";

        return;
    }


    // Percorre o histórico
    historico.forEach(function(movimentacao) {


        // Cria uma div
        const div = document.createElement("div");


        // Adiciona classe
        div.className = "movimentacao";


        // Verifica se é entrada
        if (
            movimentacao.tipo === "ENTRADA"
        ) {

            div.innerHTML = `

                <p class="entrada">
                    ENTRADA
                </p>

                <p>
                    <strong>Produto:</strong>
                    ${movimentacao.produto}
                </p>

                <p>
                    <strong>Quantidade:</strong>
                    +${movimentacao.quantidade}
                </p>

                <p>
                    <strong>Estoque atual:</strong>
                    ${movimentacao.estoque}
                </p>

                <p>
                    <strong>Data:</strong>
                    ${movimentacao.data}
                </p>

            `;

        }


        // Verifica se é saída
        else {

            div.innerHTML = `

                <p class="saida">
                    SAÍDA
                </p>

                <p>
                    <strong>Produto:</strong>
                    ${movimentacao.produto}
                </p>

                <p>
                    <strong>Quantidade:</strong>
                    -${movimentacao.quantidade}
                </p>

                <p>
                    <strong>Estoque atual:</strong>
                    ${movimentacao.estoque}
                </p>

                <p>
                    <strong>Data:</strong>
                    ${movimentacao.data}
                </p>

            `;

        }


        // Adiciona ao histórico
        listaHistorico.appendChild(div);

    });

}


// =====================================================
// INICIALIZAÇÃO
// =====================================================

// Mostra os produtos quando o site abrir
mostrarChamados();

// Mostra o histórico quando o site abrir
mostrarHistorico();