const prompt = require("prompt-sync")();

const residencias = [];



const validarIndice = (indice) => indice >= 0 && indice < residencias
.length;

const modelo = function (id) {
    const bairro = prompt("bairro da residência ");
    const rua  = prompt("rua da residência: ");
    const numero = +prompt("Numero da residência: ");
    const morador = prompt("quais os nomes dos moradores ")

    if (bairro !== "" && rua !== "" && numero !== "" && !isNaN(numero)) {
    return {
        bairro,
        rua,
        numero,
        morador,
    };
    } else {
    console.log("Dados inválidos");
    return undefined;
    }
};

function criar() {
    const residencia = modelo();

    if (residencia !== undefined) {
    residencias.push(residencia);
    console.log("residência cadastrada com sucesso");
    }
}

const listar = () => {
    if (residencias.length === 0) {
    console.log("Nenhuma residência encontrada");
    return false;
    } else {
    residencias.forEach((residencia, indice) => {
        console.log(`
            ${indice + 1}. 
            Bairro: ${residencia.bairro}
            Rua: ${residencia.rua}
            Numero: ${residencia.numero}
            Morador: ${residencia.morador}
            
        `);
    });

    return true;
    }
};

const atualizar = () => {
    if (!listar()) {
    return;
    }

    const indice =
    parseInt+prompt("Qual o indice que deseja atualizar? ") - 1;

    if (!validarIndice(indice)) {
    console.log("Índice inválido");
    return;
    }

    const residencia = modelo();

    if (residencia !== undefined) {
    residencias[indice] = residencia;
    console.log("residência atualizada com sucesso");
    } else {
    console.log("Falha na atualização");
    }
};

const remover = () => {
    if (!listar()) {
    return;
    }

    const indice = +prompt("Qual indice você deseja remover? ") - 1;

    if (validarIndice(indice)) {
    residencias.splice(indice, 1);
    console.log("Residencia removida com sucesso");
    } else {
    console.log("Remoção invalida");
    }
};

module.exports = {
    criar,
    atualizar,
    listar,
    remover,
};