
function v() {
    composta.push(2)//passa um numero para o final da memoria da variavel
    composta.length//equivale ao comprimento do vetor 
    composta.sort()//deixa os numeros em ordem crescente
}
//variaveis compostas conseguem armazenar varias valores distintos 
var composta = [2,3,4,5,67,]
composta [3] = 2
composta.push(2)


//variaveis simples armazenan apenas um valor fixo 
var simples = 27


console.log(`O valor da variavel composta é ${composta}`)//variavel
console.log(`E o valor da variavel simples é ${simples}`)//array

console.log(`o vetor possui ${composta.length} posições`)//lenght exemplificação do uso
console.log(`o vertor estar em ordem crescente ${composta.sort()}`)//exemplificação do uso de {sort} 

console.log(`o primeiro valor do vetor é ${composta [0]} `)
console.log(`o segundo valor do vetor é ${composta[1]}`)
console.log(`o terceiro valor do vetor é ${composta [2]} `)
console.log(`o quarto valor do vetor é ${composta [3]}`)
console.log(`o quinto valor do vetor é ${composta [4]}`)
console.log(`o sexto valor do vetor é ${composta [5]}`)