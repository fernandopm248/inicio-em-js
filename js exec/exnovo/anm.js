let etr = document.getElementById('anaid')
let array = []
let exibicao = document.getElementById('res')
let exibicao1 = document.getElementById('res1')
let exibicao2 = document.getElementById('res2')
let exibicao3 = document.getElementById('res3')
let exibicao4 = document.getElementById('res4')
let historico = document.getElementById('anali')
function analise(){
   if (etr.value.length==0||etr.value < 0 || etr.value > 100){
  alert('tu é burro')    
   }else {
let ultimo_valor=document.createElement('option')
ultimo_valor.text = `valor ${etr.value} adicionado `
historico.appendChild(ultimo_valor)
// agora a analise de fato
   let vetornum_analise = Number(etr.value)
   let tamanhovet = array.length
   
   array.push(vetornum_analise)
   array.sort()
   
let total = array.reduce( ( zero, elem ) => {
   return zero + elem
} , 0 )





exibicao.innerHTML=` foram ${tamanhovet + 1 } cadastrados`
exibicao1.innerHTML=`o maior numero é ${array[tamanhovet]}`
exibicao2.innerHTML=`o menor numero é ${array[0]}`
exibicao3.innerHTML=`a soma é ${total}`
exibicao4.innerHTML =`a media é ${total /(tamanhovet+1)}`
   }
   
}
function finalizar(){

array.length = 0
exibicao.innerHTML=` `
exibicao1.innerHTML=``
exibicao2.innerHTML=``
exibicao3.innerHTML=``
exibicao4.innerHTML =``

historico.length = 1
}