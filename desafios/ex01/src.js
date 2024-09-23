
function contar(){
    var inicio = document.getElementById(`txti`)
    var fim = document.getElementById(`txtf`)
    var passo = document.getElementById(`txtn`)
    var resultado = document.getElementById(`resultado`)

    if (inicio.value.length == 0 || fim.value.length == 0 || passo.value.length == 0){
        window.alert(`erro!`)
    }else{
        resultado.innerHTML(`contando`)
        var i = number(inicio.value)
        var f = number(fim.value)
        var p = number(passo.value)

        for(var c = 1; resultado <=fim ; c+passo)

    }
}