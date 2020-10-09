function calcular() {
   var n = document.querySelector('input#num').value
   var num = Number(n)
   var tab = document.querySelector('select#tab')
   
   if (n.length == 0) {
      window.alert(`Por favor, digite um número!`)
   } else {
      var c = 1
      tab.innerHTML = ''
      for (num; c <= 10; c++) {
         var item = document.createElement('option')
         item.text = `${num} x ${c} = ${num*c}`
         tab.appendChild(item)
      }
   }
}
