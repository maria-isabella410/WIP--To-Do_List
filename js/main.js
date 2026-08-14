const topicos = document.querySelector(".topicos");

const esquerda = document.querySelector(".esquerda")

const cadastrarTarefa = document.getElementById("cadastrar_tarefa");
const visualizarTarefa = document.getElementById("visualizar_tarefas");
const editarTarefa = document.getElementById("editar_tarefa");
const excluirTarefa = document.getElementById("excluir_tarefa");

const formCad = document.querySelector(".formulario_cadastrar");
const formEd = document.querySelector(".formulario_editar");
const formEx = document.querySelector(".formulario_excluir");

const agenda = document.getElementById("tarefas_atuais");

const caixaFormCad = document.querySelector(".caixa_form_cad");
const caixaFormEd = document.querySelector(".caixa_form_ed");
const caixaFormEx = document.querySelector(".caixa_form_ex");

cadastrarTarefa.addEventListener("click", function(event){
    event.preventDefault();

    caixaFormCad.classList.toggle("ativa");
});

visualizarTarefa.addEventListener("click", function(event){
    event.preventDefault();

    topicos.classList.toggle("mostrar_agenda");
});

editarTarefa.addEventListener("click", function(event){
    event.preventDefault();

    caixaFormEd.classList.toggle("ativa");
});

excluirTarefa.addEventListener("click", function(event){
    event.preventDefault();

    caixaFormEx.classList.toggle("ativa");
});

formCad.addEventListener("submit", function(event){
    event.preventDefault();

    const tituloTarefa = formCad.querySelector("#titulo").value;
    const descricaoTarefa = formCad.querySelector("#descricao").value;
    const prioridadeTarefa = formCad.querySelector("#prioridade").value;
    const tarefaAtual = document.createElement("li");

    tarefaAtual.textContent = tituloTarefa;

    agenda.appendChild(tarefaAtual);
});

// agenda.addEventListener("click", function(event){
//     event.preventDefault();

//     const tituloInfoTarefa = document.createElement("h2");
//     const descInfoTarefa = document.createElement("h2");

//     //falta terminar isso
// });

