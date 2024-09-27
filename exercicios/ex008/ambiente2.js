let num1 = [2,3,5,7,8]
console.log(`o primeiro valor da array é ${num1.indexOf(2)}`)
console.log(`o primeiro valor da array é ${num1.indexOf(4)}`)

/*
for (let pos=0 ; pos < num1.length ; pos++){
    console.log(`sua posição é ${pos} e tem o valor ${num1[pos]}`)
}
*/

for (let pos in num1){
    console.log(`a posição é ${pos } e o valor é ${num1[pos]}`)
}
