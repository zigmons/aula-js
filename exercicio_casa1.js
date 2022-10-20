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



for(let i =0; i < carrinho.length; i++){
    console.log(`${carrinho[i].produto} x${carrinho[i].qnt} $ ${parseFloat(carrinho[i].preco).toFixed(2)}`)
};
console.log(`Subtotal $ ${subtotal}`)
console.log(`Frete $ ${parseFloat(frete_total).toFixed(2)}`)
console.log(`Tax $ ${tax}`)
console.log(`Total $ ${total}`)


// const btn = document.getElementById("btn")

// btn.addEventListener('click',e => {
//     e.preventDefault()
//     const inputValue = document.getElementById("nome")
//     const inputValueNumber = document.getElementById("valor")
//     const nome = inputValue.value
//     const valor = inputValueNumber.value

//     const div = document.getElementById("infos")
//     const h3 = div.innerHTML = `<h3>O produto ${nome} tem o valor de R$ ${valor}</h3>`
// })


function btn(){
    let nome = document.getElementById("nome")
    let valor = document.getElementById("valor")
    let nome1 = nome.value
    let valor1 = valor.value
    let div = document.getElementById("infos")
    let h3 = div.innerHTML = `<h3>O produto ${nome1} tem o valor de R$ ${valor1}</h3>`
    
}

