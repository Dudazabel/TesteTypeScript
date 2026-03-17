interface Produto{
    id: number;
    nome: String;
    preco: number;
    emEstoque: boolean;
    descricao?: String;
}

var serum: Produto = {
    id = 1,
    nome = "Sérum hidratante com vitamina C"
};