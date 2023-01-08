// importando o sqlite3
const sqlite3 = require('sqlite3');

// importando somente o módulo open dentro do sqlite
// e salvando em uma variável com o nome do módulo "open"
const { open }  = require('sqlite');

// exportando uma arrow function
module.exports = () =>
    open({
        filename: './src/db/rocketq.sqlite',
        driver: sqlite3.Database
    })