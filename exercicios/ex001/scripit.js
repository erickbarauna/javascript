var agora = new Date()
var hora = agora.getHours()
var horaSeg = agora.getMinutes()
var imagem = document.getElementById('img')
var agoraSao = document.getElementById('horario')

function manha() {
    var hora = 6
    var imagem = document.getElementById('img')
    var agoraSao = document.getElementById('horario')

    agoraSao.innerText = hora + ':00' + ' horas'
    imagem.innerHTML = '<img src="imagens/manha-recortada.jpg" alt="|"></img>'
    document.body.style.backgroundColor = '#AEB5BB'
}

function tarde() {
    var hora = 12
    var imagem = document.getElementById('img')
    var agoraSao = document.getElementById('horario')
    
    agoraSao.innerText = hora + ':00' + ' horas'
    imagem.innerHTML = '<img src="imagens/pexels-definitivo.jpg" alt="|">  </img>'
    document.body.style.backgroundColor = '#B9BF99'
    
}

function entardecer() {
    var hora = 18
    var imagem = document.getElementById('img')
    var agoraSao = document.getElementById('horario')
    
    agoraSao.innerText = hora + ':00' + ' horas'
    imagem.innerHTML = '<img src="imagens/tarde.jpg" alt="">  </img>'
    document.body.style.backgroundColor = '#B38374'
}

function noite() {
    var hora = 0
    var imagem = document.getElementById('img')
    var agoraSao = document.getElementById('horario')
    
    agoraSao.innerText = '0' + hora + ':00' + ' - meia noite'
    imagem.innerHTML = '<img src="imagens/noite-recortada-02.jpg" alt="">  </img>'
    document.body.style.backgroundColor = '#3D7A87'
}


if (hora == 00) {
    agoraSao.innerText = '0' + hora + ':' + horaSeg + ' - meia noite'
} else if (hora == 1) {
    agoraSao.innerText = '0' + hora + ':' + horaSeg + ' hora'
} else {
    agoraSao.innerText = hora + ':' + horaSeg + ' horas'
}

if (hora >= 6 && hora < 12) {
    imagem.innerHTML = '<img src="imagens/manha-recortada.jpg" alt="|"></img>'
    document.body.style.backgroundColor = '#AEB5BB'
} else if (hora >= 12 && hora < 17) {
    imagem.innerHTML = '<img src="imagens/pexels-definitivo.jpg" alt="|">  </img>'
    document.body.style.backgroundColor = '#B9BF99'
} else if (hora > 16 && hora < 20) {
    imagem.innerHTML = '<img src="imagens/tarde.jpg" alt="">  </img>'
    document.body.style.backgroundColor = '#B38374'
} else {
    imagem.innerHTML = '<img src="imagens/noite-recortada-02.jpg" alt="">  </img>'
    document.body.style.backgroundColor = '#3D7A87'
}