function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.getElementById('res')
    if (fano.value.lenght == 0 || Number(fano.value) > ano) {
        window.alert('[ERRO] Verifique os dados e tente novammente!')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked) {
            genero = 'Homem'
            if (idade >= 0 && idade < 13) {
                img.setAttribute('src', 'imagens/menino01.jpg')
            } else if (idade < 23) {
                img.setAttribute('src', 'imagens/homem-jovem01.jpg')
            } else if (idade < 50) {
                img.setAttribute('src', 'imagens/homem-adulto01.jpg')
            } else {
                img.setAttribute('src', 'imagens/homem-idoso01.jpg')
            }
        } else if (fsex[1].checked) {
            genero = 'Mulher'
            if (idade >= 0 && idade < 13) {
                img.setAttribute('src', 'imagens/menina01.jpg')
            } else if (idade < 23) {
                img.setAttribute('src', 'imagens/mulher-jovem01.jpg')
            } else if (idade < 50) {
                img.setAttribute('src', 'imagens/mulher-adulta01.jpg')
            } else {
                img.setAttribute('src', 'imagens/mulher-idosa01.jpg')
            }
        } 
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
        res.style.textAlign = 'center'
        res.appendChild(img)
        img.style.width = '350px'
        img.style.height = '350px'
        img.style.borderRadius = '50%'
        img.style.marginTop = '15px'
    }
}