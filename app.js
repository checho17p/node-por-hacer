const argv = require('./config/yargs').argv;
const colors = require('colors');
const porHacer = require('./por-hacer/por-hacer');

let comando = argv._[0];


switch (comando) {

    case 'crear':
        console.log('Crea una tarea');
        let tarea = porHacer.crear(argv.descripcion);

        console.log(tarea);
        break;
    case 'listar':
        console.log('muestra las tareas');

        let listado = porHacer.getListado(argv.completado);

        for (let tarea of listado) {
            console.log('========Por Hacer========'.green);
            console.log(tarea.descripcion);
            console.log('Estado: ', tarea.completado);
            console.log('================'.green);
        }

        break;
    case 'actualizar':
        console.log('actualiza una tarea');

        let estado = porHacer.actualizar(argv.descripcion, argv.completado);

        console.log(estado);
        break;

    case 'borrar':
        console.log('borra una tarea');

        let eliminado = porHacer.borrar(argv.descripcion);

        console.log(eliminado);
        break;
    default:
        console.log('Comando no es reconocido');
}