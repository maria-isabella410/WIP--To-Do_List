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

    atualizarTarefas();
    

    // tarefaAtual.textContent = tituloTarefa;

    // agenda.appendChild(tarefaAtual);
});

// formEd.addEventListener("submit", function(event){
//     event.preventDefault();

// });

// formEx.addEventListener("submit", function(event){
//     event.preventDefault();

// });

function mostrarTarefa(tarefa, index){
    let tarefaAtual = document.createElement("div");
    tarefaAtual.classList.add("tarefa");

    let informacoes = document.createElement("div");
    informacoes.classList.add("informacoes");    

    let titulo = document.createElement("li");
    titulo.textContent = tarefa.titulo;

    let descricao = document.createElement("p");
    descricao.textContent = tarefa.descricao;     

    informacoes.appendChild(titulo);
    informacoes.appendChild(descricao);

    let ladoDireito = document.createElement("div");
    ladoDireito.classList.add("lado_direito");

    let botoes = document.createElement("div");
    botoes.classList.add("botoes");

    let botaoEditar = document.createElement("button");
    botaoEditar.textContent = "✏️";

    let botaoExcluir = document.createElement("button");
    botaoExcluir.textContent = "🗑️";

    let botaoConcluir = document.createElement("button");
    botaoConcluir.textContent = "✅";    

    let prioridade = document.createElement("p");
    prioridade.textContent = tarefa.prioridade;
    prioridade.classList.add("prioridade"); 

    botoes.appendChild(botaoEditar);
    botoes.appendChild(botaoExcluir);
    botoes.appendChild(botaoConcluir);

    ladoDireito.appendChild(botoes);
    ladoDireito.appendChild(prioridade);    

    tarefaAtual.appendChild(informacoes);
    tarefaAtual.appendChild(ladoDireito);

    agenda.appendChild(tarefaAtual);

    botaoEditar.addEventListener("click", function(){
        console.log(index);

        editarTarefa(tarefa, index, informacoes, ladoDireito);
    })

    botaoExcluir.addEventListener("click", function(tarefa){
        tarefas.splice(index, 1);
        atualizarTarefas();
    })

    botaoConcluir.addEventListener("click", function(){        
        tarefas[index].concluida = !tarefas[index].concluida;
        atualizarTarefas();
    })

    if(tarefa.concluida){
        tarefaAtual.classList.add("concluida");
    }
}

function atualizarTarefas(){

    agenda.innerHTML = "";

    tarefas.forEach(function(tarefa, index){
        mostrarTarefa(tarefa, index);
    });

}

function editarTarefa(tarefa, index, informacoes, ladoDireito){
    informacoes.innerHTML = "";
    ladoDireito.innerHTML = "";

    let inputTitulo = document.createElement("input");
    inputTitulo.value = tarefa.titulo;

    let inputDescricao = document.createElement("input");
    inputDescricao.value = tarefa.descricao;

    let selectPrioridade = document.createElement("select");

    let baixa = document.createElement("option");
    baixa.value = "baixa";
    baixa.textContent = "Baixa";

    let media = document.createElement("option");
    media.value = "media";
    media.textContent = "Média";

    let alta = document.createElement("option");
    alta.value = "alta";
    alta.textContent = "Alta";

    selectPrioridade.appendChild(baixa);
    selectPrioridade.appendChild(media);
    selectPrioridade.appendChild(alta);

    selectPrioridade.value = tarefa.prioridade;

    let botaoSalvar = document.createElement("button");

    botaoSalvar.textContent = "💾";

    botaoSalvar.addEventListener("click", function(){
        tarefas[index].titulo = inputTitulo.value;
        tarefas[index].descricao = inputDescricao.value;
        tarefas[index].prioridade = selectPrioridade.value;

        atualizarTarefas();

    });
    informacoes.appendChild(inputTitulo);
    informacoes.appendChild(inputDescricao);

    ladoDireito.appendChild(botaoSalvar);
    ladoDireito.appendChild(selectPrioridade);

}


