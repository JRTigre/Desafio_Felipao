//classificador de nível de herói
const digite = require('prompt-sync')({sigint:true})
 let nome;
 let xp;
 nome = digite("Escreva o nome do herói")
 xp = parseInt(digite(" Escreve a Quantidade do nível do héroi"))  
    if( xp <= 1000){
      xp="ferro"
}else if(xp>= 1001 && xp <= 2001){
      xp="Bronze"
}else if(xp>=2001 && xp <= 6000){
      xp="Prata"
}else if(xp>=6001 && xp <=7000){
      xp="Ouro"
}else if(xp>=7001 && xp<=8001){
      xp="Platina"
}else if(xp>=8001 && xp<=9000){
      xp="Ascendente"
}else if(xp>=9001 && xp<= 10000){
      xp="Imortal"
}
else {
    xp="Radiante"
}
 console.log("O herói"+" "+nome+" "+"esta no nível"+" "+xp)
 
 


