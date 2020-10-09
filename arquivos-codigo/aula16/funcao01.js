function parimpar(n) {
   if (n % 2 == 0) {
      return 'PAR'
   } else {
      return 'ÍMPAR'
   }
}

// console.log(parimpar(4)) => também mostra o retorno na tela, sem precisar de variável
var res = parimpar(2)
console.log(`O número digitado é ${res}!`)
