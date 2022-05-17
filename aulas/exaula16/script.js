function Adicionar() {
    var numero = document.getElementById('numero')
    var lista = document.getElementById('lista')
    lista.innerHTML = ''
    if (numero.value < 1 || numero.value > 100)


    var texto = document.createElement('option')
    texto.text = `Número ${numero.value} adicionado`
    lista.appendChild(texto)
}