enum Status{
    pendente = "PENDENTE",
    emAndamento = "EM_ANDAMENTO",
    concluida = "CONCLUIDA"
}

interface Tarefa{
    id: number;
    descricao: String;
    status: Status
}

var minhaTarefa: Tarefa = {
    id : 1,
    descricao : "Arrumar a cama",
    
}