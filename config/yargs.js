const descripcion = {
    alias: 'd',
    demand: true,
    desc: 'Descripción de la tarea por hacer'
};

const completado = {
    alias: 'c',
    default: true,
    type: 'boolean',
    desc: 'Marca como completado la tarea'
};

const argv = require('yargs')
    .command('crear', 'Crea un elemento por hacer.', {
        descripcion
    })
    .command('actualizar', 'Actualiza el estado completo de una tarea.', {
        descripcion,
        completado
    })
    .command('borrar', 'Borra una tareas', {
        descripcion
    })
    .command('listar', 'Lista las tareas', {
        completado: {
            alias: 'c',
            default: undefined,
            type: 'boolean',
            desc: 'Marca como completado la tarea'
        }
    })
    .help()
    .argv;


module.exports = {
    argv
}