
function contar(){
    var inicio = document.getElementById(`txti`)
    var fim = document.getElementById(`txtf`)
    var passo = document.getElementById(`txtn`)
    var resultado = document.getElementById(`resultado`)

    if (inicio.value.length == 0 || fim.value.length == 0 || passo.value.length == 0){
        window.alert(`Erro faltam dados!`)
    }else{
        resultado.innerHTML = 'resultado '

        var i = Number(inicio.value)
        var f = Number(fim.value)
        var p = Number(passo.value)
        if (i < f){
            //contagem crescente
            for(var c = i; c <=f ; c+=p){
                resultado.innerHTML +=`${c} \u{1F449}`
            }
        } else {
            //contagem regressiva
            for (var c = i ; c >= f; c-= p){
                resultado.innerHTML += `\u{1F449}`
            }
        }
        resultado.innerHTML += `\u{1F3C1}`
    }
}