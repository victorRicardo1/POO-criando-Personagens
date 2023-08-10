class Book{
    constructor(titulo, autor){
        this.titulo = titulo;
        this.autor = autor;
        this.disponibilidade = true;
    }
    emprestar(){
        if (this.disponibilidade){
            this.disponibilidade = false;
            return true
        }else{
            console.log(`${this.titulo} não está disponível`);
        }
    }
    retornar(){
        this.disponibilidade = true;
    }
}

class Pessoa{
    constructor(nome){
        this.nome = nome;
        this.books = [];
    }
    livroEmprestado(book){
        if(book.emprestar()){
            this.books.push(book);
            console.log(`O livro emprestado por ${this.nome} foi ${book.titulo}`)
        }
    }
    devolver(book){
        const indiceBook = this.books.indexOf(book);
        this.books.splice(indiceBook, 1);
        console.log(`O livro ${book.titulo} foi devolvido para a biblioteca!`);
        book.disponibilidade = true;
   }
}

const livro1 = new Book("O hobbit", "Tolkien");
const livro2 = new Book("The call of Cthullu", "H.P Lovecraft");
const livro3 = new Book("Moby Dick", "Herman Melville");
const pessoa1 = new Pessoa("Richard");

pessoa1.livroEmprestado(livro1);
pessoa1.livroEmprestado(livro2);
pessoa1.livroEmprestado(livro3);
pessoa1.devolver(livro3)
console.log(pessoa1);