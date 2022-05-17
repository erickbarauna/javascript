let num = [5, 8, 2, 9, 3]
num.sort()
num.push(4)
console.log(num)
console.log(`Nosso vetor tem ${num.length} posoções`)
console.loh(`O primeiro valor do vetor é ${num[0]}`)

for(var pos=0;pos<num.length;pos++) {
    console.log(`A posição ${pos} tem o valor ${num[pos]}`)
}

for(var pos in num) {
    console.log(`A posição ${pos} tem o valor ${num[pos]}`)
}

num.indexOf(2)