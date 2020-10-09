let num = [5, 8, 2, 9, 3]

console.log(num)
console.log(`Nosso vetor é o ${num}`)

console.log(`\nO vetor tem ${num.length} elementos`)
console.log(`O primeiro valor do vetor é ${num[0]}`)
console.log(`Meu vetor em ORDEM CRESCENTE é ${num.sort()}`)

console.log('')

num.push(1) // adicionando elemento ao final do array
console.log(num)

let pos = num.indexOf(8)
console.log(`\nO valor 8 está na posição ${pos}`)

if (pos == -1) {
   console.log(`Esse valor não existe no vetor!`)
} else {
   console.log(`Esse valor está na posição ${pos}`)
}
