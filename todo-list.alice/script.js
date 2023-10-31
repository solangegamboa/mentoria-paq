const novaTarefa = document.querySelector ('.nova-tarefa');
const lista = document.querySelector ('.lista');
const botaoAdd = document.querySelector ('.btn-add-tarefa');
const caixaAdd = document.querySelector ('.caixaAdd');

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
    const checkbox = document.createElement('input');//
    checkbox.type = 'checkbox';//
    li.prepend(checkbox);//
    const label = document.createElement('label');
    label.appendChild(checkbox);
    label.appendChild(document.createTextNode(textoinput));
    lista.appendChild(li);
    li.appendChild(label);
    adicionarCaixa(li);
    limpaTarefa();
    apagarTarefa(li);
    
}

function limpaTarefa(){
    novaTarefa.value ='';
}

//criando o botão apagar
function apagarTarefa(li){
    li.innerText += ' ';
    const botaoApagar = document.createElement('button');
    botaoApagar.innerText = 'apagar';
    botaoApagar.setAttribute('class' , 'apagar');
    li.appendChild(botaoApagar);
}

    //botão add tarefa
    botaoAdd.addEventListener('click' , function(){
    if (!novaTarefa.value) return;
    criaTarefa(novaTarefa.value);
    });

    //apagar a tarefa
    document.addEventListener('click' , function(e){
        const el = e.target;
        if (el.classList.contains('apagar')){
        el.parentElement.remove();
    }
    });

    function adicionarCaixa(tarefa) {
        // Acesse a tarefa recém-criada aqui
        const checkbox = tarefa.querySelector('input[type="checkbox"]');
        if (checkbox) {
            checkbox.checked = true;
        }
    }
       




//como adicionar a checkbox quando uma nova tarefa for criada++