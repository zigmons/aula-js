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

function ver(){
    let nome = document.getElementById("nome")
    let idade = document.getElementById("idade")
    let pessoa = {
        nome: nome.value,
        idade: idade.value
    }
    console.log(pessoa);


}

