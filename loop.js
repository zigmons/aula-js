// let array = [
//     97,25,40,22,33
// ]

// let tamanho = array.length
// // console.log(array[tamanho-1])

// for(let i =0; i < array.length; i++){
//     console.log(i)
// };


// const carrinho = itens ={
//     itens: [
//     {
//         produto: "Mascara",
//         preco: 45.42,
//         qnt: 452
//     },
//     {
//         produto: "Batom",
//         preco: 55.32,
//         qnt: 123
//     },
// ]
// }

// let i = 0
// let tamanho = carrinho.length

// while(i<tamanho){
//     console.log(array[i]);
//     i++
// }

// for(let index = 0; index < carrinho.itens.length; index++){
//     console.log(carrinho.itens[index].preco)
// }

// function soma(primeiro, segundo){
//     let resultado = primeiro+segundo
//     if (primeiro<10){
//         return "Nao deu"
//     }
//     return resultado
// }

// let valor = soma(11,8)

// console.log(valor)

// function exibirNome(nome) {
//     alert("Ola " + nome)
// }

// function digiteNome(callback) {
//     let nome = prompt("Insira seu nome: ")

//     callback(nome)
// }

// digiteNome(exibirNome)


// EXERCICIO UTILIZANDO FUNÇAO ///////////////////////////////////

const carrinho = {
    itens: [
    {
        nome: "Produto 1",
        preco: 80.0,
        qnt: 2
    },
    {
        nome: "Produto 2",
        preco: 50.0,
        qnt: 1
    },
    {
        nome: "Produto 3",
        preco: 40.0,
        qnt: 3
    },
],
subtotal: 100.0,
entrega: 30.0,
impostos:7.0,
total: 137.0,
};

// function itensQtd(itens) {
//     let soma= 0;
//     for (let index = 0; index < itens.length; index++) {
//     soma += itens[index].qnt;          
//     }
//     return soma;
// }

// console.log(itensQtd(carrinho.itens));

// function itensSubtotal(itens) {
//     let soma= 0;
//     for (let index = 0; index < itens.length; index++) {
//     soma += itens[index].preco * itens[index].qnt          
//     }
//     return soma;
// }

// console.log(itensSubtotal(carrinho.itens));





// MAPS///////

// let numeros = [555,543,598,666] 
// let numero= numeros.map((numero) =>{
//     return numero
// })
// console.log(numero);

// carrinho.itens.map((item) => {
//     console.log(item.qnt);
// })

// FILTER ////////


// function verificar(value){
//     return value.preco<70
// }
// let resultado = carrinho.itens.filter(verificar)
// console.log(resultado);


// // FIND////// - > RETORNA O PRIMEIRO PRODUTO QUE ELE ACHAR


// let resultFind = carrinho.itens.find(verificar)
// console.log(resultFind);



// REDULCE??

let numeros = [0,1,2,3]
let total = numeros.reduce((acumulador, numero, index, original) =>{
    return acumulador + numero
},0)
console.log(total);