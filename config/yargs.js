const descripcion = {
    alias: 'd',
    demand: true,
    desc: 'Descripción de la tarea por hacer'
};

const completado = {
    alias: 'c',
    default: true,
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
    .help()
    .argv;


module.exports = {
    argv
}