const description = {
    demand: true,
    alias: 'd',
    desc: 'Descripción de la tarea por hacer'
}

const complete = {
    default: true,
    alias: 'c',
    desc: 'Marca como completado la tarea'
}

const argv = require('yargs')
    .command('crear', 'Crear elemento To Do', {
        description
    })
    .command('actualizar', 'Actualiza estado completo de una tarea', {
        description,
        complete
    })
    .command('eliminar', 'Borrado de tarea', {
        description
    })
    .help()
    .argv;

module.exports = {
    argv
}