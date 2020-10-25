function Tabuada(){
var num = document.getElementById('textnum')
var tab = document.getElementById('seltab')

    if (num.value.length == 0 ) {
     window.alert('[ERRO] Por favor , digite um numero!')
    }else {
        tab.innerHTML = ""  
        var n = Number(num.value)
        for(var i = 1; i <= 10; i++ ){
            let item = document.createElement('option')
            item.text = `${n} x ${i} = ${n*i}`
            tab.appendChild(item)                             
        }
    }
}
