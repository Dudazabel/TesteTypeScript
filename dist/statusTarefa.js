"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Status;
(function (Status) {
    Status["pendente"] = "PENDENTE";
    Status["emAndamento"] = "EM_ANDAMENTO";
    Status["concluida"] = "CONCLUIDA";
})(Status || (Status = {}));
var minhaTarefa = {
    id: 1,
    descricao: "Arrumar a cama",
    status: Status.concluida
};
console.log(minhaTarefa);
//# sourceMappingURL=statusTarefa.js.map