interface Produto{
    id: number;
    nome: String;
    preco: number;
    emEstoque: boolean;
    descricao?: String;
}

var serum: Produto = {
    id : 1,
    nome : "Sérum hidratante com vitamina C e ácido hialurônico",
    preco : 145.99,
    emEstoque : true,
    descricao : "Utilizar antes de dormir e não expor-se ao sol."
};

var blush: Produto ={
    id : 2,
    nome : "Blush Laranja Coral, Rare Beauty",
    preco : 198.99,
    emEstoque : true
};

var gloss: Produto ={
    id : 3,
    nome : "FRAMBOESA, Franciny Elke",
    preco : 69.90,
    emEstoque : false
};

coso