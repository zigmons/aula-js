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
    moisturizer_float, 
    lip_gloss_float, 
    cleanser_float,
    subtotal,
    frete_total,
    tax,
    total,
];

console.log(`Curology Moisturizer x${qnt_moist} $ ${parseFloat(carrinho[0]).toFixed(2)}`);
console.log(`Curology Lip gloss x${qnt_lipgloss} $ ${parseFloat(carrinho[1]).toFixed(2)}`);
console.log(`Curology cleanser x${qnt_clean} $ ${parseFloat(carrinho[2]).toFixed(2)}`);
console.log(`Subtotal $ ${parseFloat(carrinho[3]).toFixed(2)}`);
console.log(`Frete $ ${parseFloat(carrinho[4]).toFixed(2)}`);
console.log(`Tax $ ${parseFloat(carrinho[5]).toFixed(2)}`);
console.log(`Total $ ${parseFloat(carrinho[6]).toFixed(2)}`);

// function ver(){
//     let nome = document.getElementById("nome")
//     let valor = document.getElementById("valor")
//     let produto = {
//         nome: nome.value,
//         valor: valor.value
//     }
//     console.log(produto)}

