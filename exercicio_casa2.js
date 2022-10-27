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


// FILTER

function verificar(value){
    return value.preco<80
}
let resultado = carrinho.itens.filter(verificar)
console.log(resultado);

// MAP

function nomeItens() {
    return carrinho.itens.map((item) => {
        return item.nome
    })
}
console.log(nomeItens())


// REDUCE
function somapreco(){
let total = carrinho.itens.reduce((acumulador, numero, index, original) =>{
    return acumulador + numero.preco
},0)
    return total
}
console.log(somapreco());

function somapreco() {
    return carrinho.itens.reduce((acumator, value)=>{
        return acumator+=value.preco
    },0)
}
console.log(somapreco());


// FIND

// function checkNome(nome1){
//     return carrinho.itens.find(checkNome)=>{
//         return nome1.nome
//     }
    
// }
// console.log(checkNome("Produto2"))

function checkNome(){
    return carrinho.itens.find((nome1)=>{
        return nome1.nome === "Produto 2";

})
}
console.log(checkNome())
