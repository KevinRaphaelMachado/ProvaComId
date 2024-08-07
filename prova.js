const prompt = require("prompt-sync")();

const residencias = [];

let ultimoId = 1;

function getIndice(id) {
    const indice = residencias.findIndex((el) => el.id == id);

    if (indice == -1) {
    console.log("ID inexistente");
    }
    return indice;
}



const validarIndice = (indice) => indice >= 0 && indice < residencias
.length;

const modelo = function (id) {
    const bairro = prompt("bairro da residência ");
    const rua  = prompt("rua da residência: ");
    const numero = +prompt("Numero da residência: ");
    const morador = prompt("quais os nomes dos moradores ")

    if (bairro !== "" && rua !== "" && numero !== "" && !isNaN(numero)) {
        if (id !== undefined) {
            return {
                bairro,
                rua,
                numero,
                morador,
                id
            };
        }else {
            return {
                bairro,
                rua,
                numero,
                morador,
                id: ultimoId++
            };
        }
    } else {
    console.log("Dados inválidos");
    return undefined;
    }
};

function criar() {
    const residencia = modelo();
    console.log(residencia);

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
            Id: ${residencia.id}
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
    listar()

    const id = +prompt("Qual Id que deseja atualizar? ");

    const indice = getIndice(id)

    if (!validarIndice(indice)) {
        console.log("Índice inválido");
        return;
    }

    const residencia = modelo(id);

    if (residencia !== undefined) {
        residencias[indice] = residencia;
        console.log("residência atualizada com sucesso");
    } else {
        console.log("Falha na atualização");
    }
};

const remover = () => {
    listar() 
    
    const id = +prompt("Qual Id você deseja remover? ");

    const indice = getIndice(id)

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
    getIndice,
};
    
