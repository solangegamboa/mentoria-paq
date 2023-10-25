const novaTarefa = document.querySelector ('.nova-tarefa');
const lista = document.querySelector ('.lista');
const botaoAdd = document.querySelector ('.btn-add-tarefa');

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
