const novaTarefa = document.querySelector ('.nova-tarefa');
const lista = document.querySelector ('.lista');
const botaoAdd = document.querySelector ('.btn-add-tarefa');

/**
 * Comentários gerais
 * Melhorias:
 *  Na função criaLi, retornar diretamente sem precisar de constante
 *  Criar função de ação para quando clicar no checkbox (riscar o texto do item)
 *  Criar função para deletar a linha (eliminar completamente o item)
 * 
 * Lembrar de usar IDs por linha (li) para ficar fácil de idetificar.
 * 
 */



function criaLi(){
    const li = document.createElement('li');
    return li;
}

function criaTarefa(textoinput){
    const li = criaLi();
    li.innerText = textoinput;
    lista.appendChild(li);
    limpaTarefa();

}

function limpaTarefa(){
    novaTarefa.value ='';
}

botaoAdd.addEventListener('click' , function(){
    if (!novaTarefa.value) return;
    criaTarefa(novaTarefa.value);
});
