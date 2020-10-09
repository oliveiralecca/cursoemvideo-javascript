function contar() {
   var i = document.querySelector('input#init').value
   var init = Number(i)
   var f = document.querySelector('input#fim').value
   var fim = Number(f)
   var p = document.querySelector('input#pass').value
   var pass = Number(p)
   var res = document.querySelector('div#res')

   if (i.length == 0 || f.length == 0) {
      res.innerHTML = `Impossível contar!`
   } else if (pass == 0) {
      window.alert(`Passo inválido! Considerando PASSO 1...`)

      if (fim < init) {
         res.innerHTML = `Contando:<br>`

         while (init >= fim) {
            res.innerHTML += ` ${init} 👉 `
            init -= 1
         }
         res.innerHTML += ` 🏁`
      } else {
         res.innerHTML = `Contando:<br>`
         
         while (init <= fim) {
            res.innerHTML += ` ${init} 👉 `
            init += 1
         }
         res.innerHTML += ` 🏁`
      }
   } else if (fim < init) {
      res.innerHTML = `Contando:<br>`

      while (init >= fim) {
         res.innerHTML += ` ${init} 👉 `
         init -= pass
      }
      res.innerHTML += ` 🏁`
   } else {
      res.innerHTML = `Contando:<br>`

      while (init <= fim) {
         res.innerHTML += ` ${init} 👉 `
         init += pass
      }
      res.innerHTML += ` 🏁`
   }
}
