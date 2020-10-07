function Tabuada(){
var num = document.getElementById('textnum')
var tab = document.getElementById('seltab')

    if (num.value.length == 0 ) {
     window.alert('[ERRO] Por favor , digite um numero!')
    }else {
        tab.innerHTML = ""  // Essa execucao e o mesmo que Limpatela da logica de programacao. //
        var n = Number(num.value)
        for(var i = 1; i <= 10; i++ ){
            let item = document.createElement('option')//Esse e o jeito para criar qualquer tipo de elemento no JS sem precisar usar o  HTML //
            item.text = `${n} x ${i} = ${n*i}`// Pegando a variavel item criada para ser um elemento junto com text que e a parte de dentro do opction + a expressao aritimetica//
            tab.appendChild(item)  /* Para aparecer na tela dentro do select eu vou ter que botar o a var tab,que e minha tabuada.Entao eu vou adcionar um elemento filho ,que vai ser o (item)*/                           
        }
    }
}
