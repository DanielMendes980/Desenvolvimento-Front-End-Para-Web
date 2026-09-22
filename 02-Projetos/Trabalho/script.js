// Pega o formulário através do seu ID
const formChamado = document.getElementById("formChamado");

// Pega a área onde os chamados serão exibidos
const listaChamados = document.getElementById("listaChamados");

// Cria uma lista vazia para armazenar os chamados
let chamados = [];


// Detecta quando o formulário for enviado
formChamado.addEventListener("submit", function(event) {

    // Impede que a página seja recarregada
    event.preventDefault();


    // Pega o nome do funcionário
    const funcionario = document.getElementById("funcionario").value;

    // Pega o equipamento informado
    const equipamento = document.getElementById("equipamento").value;

    // Pega o ID informado
    const id = document.getElementById("id").value;

    // Pega a descrição do problema
    const problema = document.getElementById("problema").value;


    // Cria um objeto representando o chamado
    const chamado = {

        // Nome do funcionário
        funcionario: funcionario,

        // Equipamento informado
        equipamento: equipamento,

        // ID do equipamento ou chamado
        id: id,

        // Problema informado
        problema: problema,

        // Todo novo chamado começa como "Recebido"
        status: "Recebido"
    };


    // Adiciona o novo chamado à lista
    chamados.push(chamado);

    // Atualiza a lista de chamados na tela
    mostrarChamados();

    // Limpa os campos do formulário
    formChamado.reset();
});


// Função responsável por mostrar os chamados na página
function mostrarChamados() {

    // Limpa a lista antes de mostrar os dados novamente
    listaChamados.innerHTML = "";


    // Percorre todos os chamados cadastrados
    chamados.forEach(function(chamado, index) {

        // Cria uma nova div para cada chamado
        const div = document.createElement("div");


        // Coloca as informações do chamado dentro da div
        div.innerHTML = `
            <h3>Chamado #${index + 1}</h3>

            <p>
                <strong>Funcionário:</strong>
                ${chamado.funcionario}
            </p>

            <p>
                <strong>Equipamento:</strong>
                ${chamado.equipamento || "Não informado"}
            </p>

            <p>
                <strong>ID:</strong>
                ${chamado.id}
            </p>

            <p>
                <strong>Problema:</strong>
                ${chamado.problema}
            </p>

            <p>
                <strong>Status:</strong>
                ${chamado.status}
            </p>

            <hr>
        `;


        // Adiciona o chamado na página
        listaChamados.appendChild(div);
    });
}
