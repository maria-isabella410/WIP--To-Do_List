const topicos = document.querySelector(".topicos");

const esquerda = document.querySelector(".esquerda")

const cadastrarTarefa = document.getElementById("cadastrar_tarefa");
const visualizarTarefa = document.getElementById("visualizar_tarefas");
const editarTarefa = document.getElementById("editar_tarefa");
const excluirTarefa = document.getElementById("excluir_tarefa");

const form = document.querySelector(".formulario");
const agenda = document.getElementById("tarefas_atuais");

const caixaForm = document.querySelector(".caixa_form");

cadastrarTarefa.addEventListener("click", function(event){
    event.preventDefault();

    caixaForm.classList.toggle("ativa");
});

visualizarTarefa.addEventListener("click", function(event){
    event.preventDefault();

    topicos.classList.toggle("mostrar_agenda");
});

const tituloTarefa = document.getElementById("titulo").value;
const descricaoTarefa = document.getElementById("descricao").value;
const prioridadeTarefa = document.getElementById("prioridade").value;
const tarefaAtual = document.createElement("li");

form.addEventListener("submit", function(event){
    event.preventDefault();

    tarefaAtual.textContent = tituloTarefa;

    agenda.appendChild(tarefaAtual);
});

agenda.addEventListener("click", function(event){
    event.preventDefault();

    const tituloInfoTarefa = document.createElement("h2");
    const descInfoTarefa = document.createElement("h2");

    //falta terminar isso
});

