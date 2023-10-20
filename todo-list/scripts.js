/**
 * Função para adicionar novo item na lista
 */
function addItem() {
    // Busca o texto dentro do input com o id novo-item
    var item = document.getElementById('novo-item').value
    
    const li = document.createElement('li')
    const textLi = document.createTextNode(item)
    var checkbox = document.createElement('input')
        checkbox.type = 'checkbox'
        checkbox.value = 1
        checkbox.name = "todo[]"
    li.appendChild(checkbox)
    li.appendChild(textLi)

    document.getElementById('lista-items').appendChild(li)
}


/**
 * Função copiada da internet
 */
function addItem2(){
    var ul = document.getElementById('lista-items'); //ul
    var li = document.createElement('li');//li
    
    var checkbox = document.createElement('input');
        checkbox.type = "checkbox";
        checkbox.value = 1;
        checkbox.name = "todo[]";
    
    li.appendChild(checkbox);
    
    var text = document.getElementById('novo-item');
    li.appendChild(document.createTextNode(text.value));
    ul.appendChild(li); 
}