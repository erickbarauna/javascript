var agora = new Date()
var diaSem = agora.getDay()
if (diaSem == 1 || diaSem == 2) {
    console.log('Tenha um ótimo começo de semana! Aproveite sua ')
} else if (diaSem == 3) {
    console.log('Você está exatamente no meio da Semana! Não desista, e aproveite sua ')
} else if (diaSem == 4 || diaSem == 5) {
    console.log('A semana está quase acabando! Aproveite sua ')
} else if (diaSem == 0 || diaSem == 6) {
    console.log('Tenha um ótimo Fim de Semana! Aproveite seu ')
}
switch(diaSem) {
    case 0:
        console.log('Domigo')
        break
    case 1:
        console.log('Segunda-Feira')
        break
    case 2:
        console.log('Terça-Feira')
        break
    case 3:
        console.log('Quarta-Feira')
        break
    case 4:
        console.log('Quinta-Feira')
        break
    case 5:
        console.log('Sexta-Feira')
        break
    case 6:
        console.log('Sábado')
        break
    default:
        console.log('[ERRO] Dia Inválido')
}