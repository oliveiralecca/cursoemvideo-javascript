let amigo = {nome: 'José', 
sexo: 'M', 
peso: 85.4, 
engordar(p=0) {
   console.log('Engordou!')
   this.peso += p // this => autoreferência ao objeto
}}

console.log(amigo)

console.log('')

console.log(amigo.nome)

console.log('')

amigo.engordar(2)
console.log(`${amigo.nome} pesa ${amigo.peso}`)
