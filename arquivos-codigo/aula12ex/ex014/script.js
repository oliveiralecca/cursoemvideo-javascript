function carregar() {
   var msg = window.document.getElementById('msg')
   var img = window.document.getElementById('imagem')
   var turno = window.document.getElementById('turno')
   var data = new Date()
   var hora = data.getHours()

   msg.innerHTML = `Agora são ${hora} horas.`

   if (hora >= 0 && hora < 12) {
      //BOM DIA!
      img.src = 'fotomanha.png'
      document.body.style.background = '#E2CD9F'
      turno.innerHTML = `BOM DIA!`
   } else if (hora >= 12 && hora <= 18) {
      //BOA TARDE!
      img.src = 'fototarde.png'
      document.body.style.background = '#B9846F'
      turno.innerHTML = `BOA TARDE!`
   } else {
      //BOA NOITE!
      img.src = 'fotonoite.png'
      document.body.style.background = '#515154'
      turno.innerHTML = `BOA NOITE!`
   }
}

