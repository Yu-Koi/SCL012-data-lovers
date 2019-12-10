
import {filtrarPorTipoPokemon} from './data.js';

var seleccionTipo=document.getElementById('seleccion');
seleccionTipo.addEventListener('change',function(){
    let indexSeleccionado=seleccionTipo.selectedIndex 
    let valorIndexSeleccionado= seleccionTipo.children[indexSeleccionado].innerHTML.trim();
    let resultadoSeleccionTipo=filtrarPorTipoPokemon(valorIndexSeleccionado); 
    crearTabla(resultadoSeleccionTipo);
});

function crearTabla (resultadoSeleccionTipo){
    console.table(resultadoSeleccionTipo);
};
