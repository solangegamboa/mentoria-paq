

function lerInput() {
    //Leitura do input
    var nome = document.getElementById('nome').value
    console.log(nome)
    // Escrever na div
    var div = document.getElementById('nome-output')
    div.append(nome)
}


function lerInputSoma() {
    //Leitura do input
    var numero1 = document.getElementById('numero1').value
    var numero2 = document.getElementById('numero2').value
    console.log(numero1)
    console.log(numero2)
    // Escrever na div
    var div = document.getElementById('soma-output')
    div.append(parseInt(numero1) + parseInt(numero2))
}


function lerInputSub() {
    //Leitura do input
    var numero1 = document.getElementById('numero1-sub').value
    var numero2 = document.getElementById('numero2-sub').value
    // Escrever na div
    var div = document.getElementById('sub-output')
    div.append(parseInt(numero1) - parseInt(numero2))
}