const argv = require('./config/yargs').argv
const toDo = require('./por-hacer/por-hacer');
const colors = require('colors');

let comand = argv._[0];

switch (comand) {
    case 'crear':
        let task = toDo.create(argv.description);
        console.log(task);
        break;
    case 'listar':
        let list = toDo.getList();

        for (let task of list) {
            console.log('=== Por hacer ==='.blue);
            console.log(task.description);
            console.log(task.complete);
            console.log('================='.blue);
        }
        break;
    case 'actualizar':
        let update = toDo.updateList(argv.description, argv.complete);

        console.log(update);
        break;
    case 'borrar':
        let deleteItem = toDo.deleteList(argv.description);
        break;
    default:
        console.log('Comando no conocido');
        break;
}
