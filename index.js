const prompt = require("prompt-sync")();
const { criar, atualizar, listar, remover } = require("./prova.js");

while (true) {
    console.log(`
        1. Para cadastrar residência
        2. Para listar residência
        3. Para atualizar residência
        4. Para remover residência
        5. Para sair
        `);

    const opcao = +prompt("Escolha uma opção acima: ");

    switch (opcao) {
    case 1:
        criar()
        break;
    case 2:
        listar()
        break;
    case 3:
        atualizar()
        break;
    case 4:
        remover()
        break;
    case 5:
        process.exit()
    default:
        console.log("Opção inválida")
        break;
    }
};