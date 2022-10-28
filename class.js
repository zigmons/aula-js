class Carrinho{
    constructor(itens =[], subtotal = 0, entrega=0, imposto=0, total=0){
        this.itens = itens
        this.subtotal = subtotal
        this.entrega = entrega
        this.imposto = imposto
        this.total = total
    }
    
    adicionarCarrinho(item){
        this.itens.push(item)
        this.atualizarCarrinho()
        
    }
    atualizarCarrinho(){
        this.subtotal = 0
        this.total = 0
        this.itens.map((item) =>{
            this.subtotal += item.preco*item.quantidade;
        
        })
        this.total = this.subtotal + this.imposto + this.entrega;
    }
    atualizarEntrega(entrega){
        this.entrega = entrega
        this.atualizarCarrinho()

    }
    atualizarImpostos(imposto){
        this.imposto = imposto
        this.atualizarCarrinho()
    }
    retornaCarrinho(){
        return this
    }
    removeProduto(sku){
        let index = this.itens.findIndex(item => item.sku == sku)
        if(index =="-1"){
            console.log("Nao foi encontrado")
        }else{
            this.itens.splice(index,1)
            console.log("Valor removido")            
        }
    }   
}

class Item{
    constructor(nome, quantidade = 0, preco=0){
        this.sku = Math.random().toString(36).substring(2)
        this.nome = nome
        this.quantidade = quantidade
        this.preco = preco
    }

    
}
// Criacao do carrinho
let meuCarrinho = new Carrinho();

// Ciarcao de itens
let item1 = new Item("Produto 1", 2, 80);
let item2 = new Item("Produto 2",1,50);
let item3 = new Item("Produto 3",3, 20)


// Atualizar preço da entrega
meuCarrinho.atualizarEntrega(10)

// Atualizar imposto
meuCarrinho.atualizarImpostos(5)

// Adicionando os itens dentro do meu carrinho
meuCarrinho.adicionarCarrinho(item1)
meuCarrinho.adicionarCarrinho(item2)
meuCarrinho.adicionarCarrinho(item3)




// Remover item
meuCarrinho.removeProduto(meuCarrinho.itens[0].sku)


console.log(meuCarrinho);
