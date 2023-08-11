class Produto{
    constructor(nome, preco, quantidadeEstoque){
        this.nome = nome;
        this.preco = preco;
        this.quantidadeEstoque = quantidadeEstoque;
    }

    vender(quantidade){
        if(quantidade <=this.quantidadeEstoque){
            this.quantidadeEstoque -= quantidade;
            console.log(`${quantidade} unidades de ${this.nome} foram vendidas`);
        }else console.log(`Não há ${quantidade} peças disponiveis`);
    }

    reabastecer(quantidade){
        this.quantidadeEstoque += quantidade;
        console.log(`${this.nome} foi reabastecido em ${quantidade} quantidades`);
    }

    informacao(){
        return `Nome: ${this.nome}, Preço: ${this.preco}, Estoque: ${this.quantidadeEstoque}`
    }
}


class Roupa extends Produto{
    constructor(nome, preco, quantidadeEstoque, cor, tamanho){
        super(nome, preco, quantidadeEstoque);
        this.cor = cor;
        this.tamanho = tamanho;
    }
    informacoes(){
        const info = super.informacao();
        return `${info}, tamanho: ${this.tamanho}, cor: ${this.cor}`
    }
}

class Eletronico extends Produto{
    constructor(nome, preco, quantidadeEstoque, marca, memoria){
        super(nome, preco, quantidadeEstoque, marca, memoria);
        this.marca = marca;
        this.memoria = memoria;
    }
    informacoes(){
        const info = super.informacao();
        return `${info}, Marca: ${this.marca}, Espaço: ${this.memoria}`;
    }
}

class Alimento extends Produto{
    constructor(nome, preco, quantidadeEstoque, dataValidade){
        super(nome, preco, quantidadeEstoque, dataValidade);
        this.dataValidade = dataValidade;
    }
    informacoes(){
        const info = super.informacao();
        return `${info}, Data de validade: ${this.dataValidade}`;
    }
}

const comida = new Alimento('Croissant', 5.00, 11, '11/09/2023');
console.log(comida);
const infoComida = comida.informacoes();
console.log(infoComida);

const roupaNova = new Roupa('Camisa Drip', 55, 1, 'preto/branco', 'gg');
const infoRoupa = roupaNova.informacoes();
console.log(roupaNova);
console.log(infoRoupa);