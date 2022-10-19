let produto1 = "Curology Moisturizer"
let produto2 = "Curology Lip gloss"
let produto3 = "Curology cleanser"

let moisturizer = 60.00
let lip_gloss = 80.00
let cleanser = 24.00

let qnt_moist = 2
let qnt_lipgloss = 1
let qnt_clean = 3

let frete_total = parseFloat(24.00).toFixed(2)
let tax = 8.25

let moisturizer_float = moisturizer*qnt_moist
let lip_gloss_float = lip_gloss*qnt_lipgloss
let cleanser_float = cleanser*qnt_clean

let subtotal = parseFloat(moisturizer_float + lip_gloss_float + cleanser_float).toFixed(2)
let total = parseFloat(subtotal) + frete_total + tax


const carrinho = [
    {
        produto1,
        moisturizer_float,
        qnt_moist
    },
    {
        produto2,
        lip_gloss_float,
        qnt_lipgloss
    },
    {
        produto3,
        cleanser_float,
        qnt_clean
    },
    {
        subtotal
    },
    {
        frete_total
    },
    {
        tax
    },
    {
        total
    },

];



console.log(`${carrinho[0].produto1} x${carrinho[0].qnt_moist} $ ${parseFloat(carrinho[0].moisturizer_float).toFixed(2)}`);
console.log(`${carrinho[1].produto2} x${carrinho[1].qnt_lipgloss} $ ${parseFloat(carrinho[1].lip_gloss_float).toFixed(2)}`);
console.log(`${carrinho[2].produto3} x${carrinho[2].qnt_clean} $ ${parseFloat(carrinho[2].cleanser_float).toFixed(2)}`);
console.log(`Subtotal $ ${carrinho[3].subtotal}`)
console.log(`Frete $ ${carrinho[4].frete_total}`)
console.log(`Tax $ ${carrinho[5].tax}`)
console.log(`Total $ ${carrinho[6].total}`)


// function ver(){
//     let nome = document.getElementById("nome")
//     let valor = document.getElementById("valor")
//     let produto = {
//         nome: nome.value,
//         valor: valor.value
//     }
//     console.log(produto)}

