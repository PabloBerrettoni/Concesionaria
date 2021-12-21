const concesionaria = require('./controller.js');
let process = require('process'); // lamo al metodo process
const { buscarAuto } = require('./controller.js');
let comando = process.argv[2]; // asignamos el espacio 2 a una variable

switch (comando) {
    case 'buscarAuto':
        if (concesionaria.buscarAuto(process.argv[3])){
            console.log(concesionaria.buscarAuto(patente));
        } else {
            console.log('Esta patente no coincide con ningun auto en nuestra base de datos.');
        }
        break;
    case 'venderAuto':
        if(concesionaria.venderAuto(process.argv[3])){
            concesionaria.venderAuto(process.argv[3])
        } else {
            console.log(concesionaria.venderAuto(process.argv[3]));
        }
        break;
    case 'autosParaLaVenta':
        console.log(concesionaria.autosParaLaVenta(process.argv[3]))
        break;
    case 'autosNuevos':
        console.log(concesionaria.autosNuevos());
        break;
    case 'listaDeVentas':
        console.log(concesionaria.listaDeVentas());
        break;
    case 'totalDeVentas':
        console.log(concesionaria.totalDeVentas());
        break;
    case 'puedeComprar':
        if(concesionaria.puedeComprar(process.argv[3], process.argv[4])){
            console.log('Puedes comprar este auto.');
        } else {
            console.log('No puedes comprar este auto.');
        }
}