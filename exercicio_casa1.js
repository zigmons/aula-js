let produto1 = "Curology Moisturizer"
let produto2 = "Curology Lip gloss"
let produto3 = "Curology cleanser"

let moisturizer = 60.00
let lip_gloss = 80.00
let cleanser = 24.00

let qnt_moist = 2
let qnt_lipgloss = 1
let qnt_clean = 3

let frete_total = 24.00
let tax = 8.25

let moisturizer_float = moisturizer*qnt_moist
let lip_gloss_float = lip_gloss*qnt_lipgloss
let cleanser_float = cleanser*qnt_clean

let subtotal = parseFloat(moisturizer_float + lip_gloss_float + cleanser_float).toFixed(2)
let total = parseFloat(subtotal) + frete_total + tax


const carrinho = [
    {
        produto: produto1,
        preco: moisturizer_float,
        qnt: qnt_moist
    },
    {
        produto: produto2,
        preco: lip_gloss_float,
        qnt: qnt_lipgloss
    },
    {
        produto: produto3,
        preco: cleanser_float,
        qnt: qnt_clean
    },
];

// adicionando itens dentro do array

let produto4 ={produto: "Mascara",preco: 10,qnt: 2};

carrinho.push(produto4)

let dinheiro = 50;


// remover apenas o ultimo elemento de um array

// carrinho.pop()

// // remover apenas o primeiro elemento de um array

// carrinho.shift()

// remover um item do meio do array atraves do numero do indice + quantidade de elementos a ser removida
// carrinho.splice(0,1)

// If e Else

// if(dinheiro >= total){
//     console.log("Consegui")
// }else{
//     console.log("Nao consegui");
// }

// let idade = 10;

// if(idade=>18){
//     console.log("Maior de idade");
// }else if(idade ==10){
//     console.log("voce tem 10 anos");
// }else{
//     console.log(idade);
// }



for(let i =0; i < carrinho.length; i++){
    console.log(`${carrinho[i].produto} x${carrinho[i].qnt} $ ${parseFloat(carrinho[i].preco).toFixed(2)}`)
};
console.log(`Subtotal $ ${subtotal}`)
console.log(`Frete $ ${parseFloat(frete_total).toFixed(2)}`)
console.log(`Tax $ ${tax}`)
console.log(`Total $ ${total}`)

function btn(){
    let nome = document.getElementById("nome")
    let valor = document.getElementById("valor")
    let nome1 = nome.value
    let valor1 = valor.value
    let div = document.getElementById("infos")
    let h3 = div.innerHTML = `<h3>O produto ${nome1} tem o valor de R$ ${valor1}</h3>`
    
}

