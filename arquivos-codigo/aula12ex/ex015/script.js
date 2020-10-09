function verificar() {
   var data = new Date()
   var ano = data.getFullYear()
   var formAno = document.getElementById('txtano')
   var res = document.querySelector('div#res')
   
   if (formAno.value.length == 0 || formAno.value > ano) {
      window.alert('[ERRO] Verifique os dados e tente novamente!')
   } else {
      var formSex = document.getElementsByName('radsex')
      var idade = ano - formAno.value
      var genero = ''
      var img = document.createElement('img')
      img.setAttribute('id', 'foto')

      if (formSex[0].checked) {
         genero = `Homem`
         if (idade >= 0 && idade < 10) {
            //CRIANÇA
            img.setAttribute('src', 'foto-bebe-m.png')
         } else if (idade < 21) {
            //JOVEM
            img.setAttribute('src', 'foto-jovem-m.png')
         } else if (idade < 60) {
            //ADULTO
            img.setAttribute('src', 'foto-adulto-m.png')
         } else {
            //IDOSO
            img.setAttribute('src', 'foto-idoso-m.png')
         }
      } else {
         genero = `Mulher`
         if (idade >= 0 && idade < 10) {
            //CRIANÇA
            img.setAttribute('src', 'foto-bebe-f.png')
         } else if (idade < 21) {
            //JOVEM
            img.setAttribute('src', 'foto-jovem-f.png')
         } else if (idade < 60) {
            //ADULTO
            img.setAttribute('src', 'foto-adulto-f.png')
         } else {
            //IDOSO
            img.setAttribute('src', 'foto-idoso-f.png')
         }
      }

      res.style.textAlign = 'center'
      res.innerHTML = `Detectamos ${genero} com ${idade} ano(s).`
      res.appendChild(img)
   }
}
