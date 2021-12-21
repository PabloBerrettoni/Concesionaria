const autos = require('./autos');

let concesionaria = {
    autos: autos,

    buscarAuto: function (patente) {
        let autosFiltrado = autos.filter((auto) => {
            return auto.patente == patente;
        })
        if (autosFiltrado != 0){
            return autosFiltrado[0];
        }else{
            return null;
        }
    },

    venderAuto: function(patente){
        let auto = this.buscarAuto(patente);
        if(auto){
            auto.vendido = true;
            return true
        }else{
            return ("No se encotro el auto.")
        }
    },

    autosParaLaVenta: function(vendido){
        let autoDisponibles = autos.filter((auto) => {
            return auto.vendido == vendido;
        })
        return autoDisponibles;
    },

    autosNuevos: function(){        
        let ceroKm = this.autosParaLaVenta(false).filter((auto) => {            
            return auto.km < 100;
        })
        return ceroKm;
    },

    listaDeVentas: function(){
        let autoVendido = this.autosParaLaVenta(true);
        let listaDeVentas = [];
        autoVendido.forEach((auto) => {
            listaDeVentas.push(auto.precio);
        })
        return listaDeVentas;
    },

    totalDeVentas: function(){
        let totalDeVentas = this.listaDeVentas();
        return totalDeVentas.reduce((total, valor) => {
            return total += valor;
        }, 0)
    },

    puedeComprar: function(auto, capacidadDePagoTotal){
        let cuotas = auto.precio / auto.cuotas;
        if(auto.precio <= capacidadDePagoTotal && cuotas <= capacidadDePagoEnCuotas){
            return true;
        }else{
            return false;
        }
    }

}

module.exports = concesionaria;