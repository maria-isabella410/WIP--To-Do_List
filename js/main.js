let tarefas = [];

const topicos = document.querySelector(".topicos");

const esquerda = document.querySelector(".esquerda");

const cadastrarTarefa = document.getElementById("cadastrar_tarefa");
const visualizarTarefa = document.getElementById("visualizar_tarefas");
// const editarTarefa = document.getElementById("editar_tarefas");
// const excluirTarefa = document.getElementById("excluir_tarefas");

const formCad = document.querySelector(".formulario_cadastrar");
// const formEd = document.querySelector(".formulario_editar");
// const formEx = document.querySelector(".formulario_excluir");

const agenda = document.getElementById("tarefas_atuais");

const caixaFormCad = document.querySelector(".caixa_form_cad");
// const caixaFormEd = document.querySelector(".caixa_form_ed");
// const caixaFormEx = document.querySelector(".caixa_form_ex");

function fecharFormularios(){
    caixaFormCad.classList.remove("ativa");
    // caixaFormEd.classList.remove("ativa");
    // caixaFormEx.classList.remove("ativa");
}

cadastrarTarefa.addEventListener("click", function(event){
    event.preventDefault();

    const formAtivo = caixaFormCad.classList.contains("ativa");

    fecharFormularios();

    if(!formAtivo) caixaFormCad.classList.add("ativa");
});

visualizarTarefa.addEventListener("click", function(event){
    event.preventDefault();
    
    topicos.classList.toggle("mostrar_agenda");
});

// editarTarefa.addEventListener("click", function(event){
//     event.preventDefault();

//     const formAtivo = caixaFormEd.classList.contains("ativa");

//     fecharFormularios();

//     if(!formAtivo) caixaFormEd.classList.add("ativa");
// });

// excluirTarefa.addEventListener("click", function(event){
//     event.preventDefault();

//     const formAtivo = caixaFormEx.classList.contains("ativa");

//     fecharFormularios();

//     if(!formAtivo) caixaFormEx.classList.add("ativa");
// });

formCad.addEventListener("submit", function(event){
    event.preventDefault();

    const tituloTarefa = document.getElementById("tituloCadastrar").value;
    const descricaoTarefa = document.getElementById("descricaoCadastrar").value;
    const prioridadeTarefa = document.getElementById("prioridadeCadastrar").value;
    // const tarefaAtual = document.createElement("li");

    let tarefa = {
        titulo: tituloTarefa,
        descricao: descricaoTarefa,
        prioridade: prioridadeTarefa,
        concluida: false
    };

    tarefas.push(tarefa);
    mostrarTarefa(tarefa);

    // tarefaAtual.textContent = tituloTarefa;

    // agenda.appendChild(tarefaAtual);
});

// formEd.addEventListener("submit", function(event){
//     event.preventDefault();

// });

// formEx.addEventListener("submit", function(event){
//     event.preventDefault();

// });

function mostrarTarefa(tarefa){
    let tarefaAtual = document.createElement("div");

    let titulo = document.createElement("li");
    titulo.textContent = tarefa.titulo;

    let botaoEditar = document.createElement("button");
    botaoEditar.textContent = "✏️";

    let botaoExcluir = document.createElement("button");
    botaoExcluir.textContent = "🗑️";

    let botaoConcluir = document.createElement("button");
    botaoConcluir.textContent = "✅";

    tarefaAtual.appendChild(titulo);
    tarefaAtual.appendChild(botaoEditar);
    tarefaAtual.appendChild(botaoExcluir);
    tarefaAtual.appendChild(botaoConcluir);

    agenda.appendChild(tarefaAtual);

    botaoExcluir.addEventListener("click", function(tarefa){
        tarefaAtual.remove(tarefa);
    })

    botaoEditar.addEventListener("click", function(){

    })
}


