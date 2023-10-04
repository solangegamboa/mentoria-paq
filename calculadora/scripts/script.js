function lerInput() {
    //Leitura do input
    var nome = document.getElementById('nome').value
    console.log(nome)
    // Escrever na div
    var div = document.getElementById('nome-output')
    div.append(nome)
}

/**
 * Função que calcula
 * @param {string} $calc ('soma' ou 'sub' ou 'multi')
 */
function lerInputCalc($calc) {
    //Leitura do input
    var numero1 = document.getElementById('numero1-' + $calc).value
    var numero2 = document.getElementById('numero2-' + $calc).value
    console.log(numero1)
    console.log(numero2)
    // Escrever na div
    var div = document.getElementById($calc + '-output')
    if ($calc == 'soma') div.append(parseInt(numero1) + parseInt(numero2))
    else if ($calc == 'sub') div.append(parseInt(numero1) - parseInt(numero2))
    else if ($calc == 'multi') div.append(parseInt(numero1) * parseInt(numero2))
}
