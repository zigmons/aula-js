// let pratoDoDia = "Lasanha";
// let precoPratoDoDia = 24.90;
// let frete = 13.89;
// let cliente = "Rafael";

// let total = precoPratoDoDia + frete;

// console.log(`O total do pedido do ${cliente} para o pedido de ${pratoDoDia} foi de: ${total}`)

// console.log(10 >= 100);
// console.log(0 < 1000);
// console.log(888 == 889);
// console.log(20 <= 20);
// console.log(77 == "77");
// console.log(77 === "77");

// let pessoa = {
//     nome : "Rafael",
//     idade: 34,
//     sexo: "M",
//     favoritos: [
//         "Arroz",
//         "Feijao",
//         "Galinha",
//     ]
// }

// console.log(pessoa);

// function ver(){
//     let nome = document.getElementById("nome")
//     let idade = document.getElementById("idade")
//     let pessoa = {
//         nome: nome.value,
//         idade: idade.value
//     }
//     console.log(pessoa);


// }

let pergunta1 = "Você gosta de video games?"
console.log(pergunta1)

let pergunta2 = "Voce tem amigos?"
let pergunta3 = "Amigos reais ou virtuais?"


const resposta1 = "Sim"
const resposta2 = "Sim"
const resposta3 = "Reais"

if(resposta1 ==="Sim"){
    console.log(pergunta2);
    if(resposta2 === "Sim"){
        console.log(pergunta3);
        if(resposta3){
            console.log("Compre um wii")
        }else{
            console.log("Compre um Xbox");
        }
    }else{
        console.log("Compre um PS3");
    }
}else{
    console.log("Compre um pc");
}


