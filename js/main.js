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

let visualizarAtivo = false;

visualizarTarefa.addEventListener("click", function(event){
    event.preventDefault();

    
    if (!visualizarAtivo){
        visualizarTarefa.addEventListener("click", function(event){
        event.preventDefault();

        topicos.classList.add("mostrar_agenda");
        
        visualizarAtivo = true;
        });
    }

    if (visualizarAtivo){
        visualizarTarefa.addEventListener("click", function(event){
        event.preventDefault();

        topicos.classList.remove("mostrar_agenda");
        
        visualizarAtivo = false;
        });
    }

});

form.addEventListener("submit", function(event){
    event.preventDefault();

    const tituloTarefa = document.getElementById("titulo").value;
    const descricaoTarefa = document.getElementById("descricao").value;
    const tarefaAtual = document.createElement("li");

    tarefaAtual.textContent = tituloTarefa;

    agenda.appendChild(tarefaAtual);
});

