import { filtrarPorTipoPokemon } from './data.js';
const seleccionTipo = document.getElementById('seleccion'); //llamar a id y guardar en variable: SELECT
seleccionTipo.addEventListener('change', () => { //capturar evento change (cambiar) y ejecutar funcion
  const indexSeleccionado = seleccionTipo.selectedIndex; //capturar evento change (cambiar) y ejecutar funcion
  const valorIndexSeleccionado = seleccionTipo.children[indexSeleccionado].innerHTML.trim();//capturar valor del indice
  const resultado = filtrarPorTipoPokemon(valorIndexSeleccionado);
  limpiar();
  tabla(resultado);
});
function tabla(resultado){
    let tabla = 
    `   <div class="buscarTipos" id="poke">
            <table id="tamañoTabla">
                <thead>
                    <tr>
                        <td style="background-color:blue;">Nombre</td>
                        <td style="background-color:blue;">Imagen</td>
                    </tr>
                </thead>
                <tbody>
                    ${resultado.map(resultado => ` 
                        <tr> 
                            <td>
                                ${resultado.name}
                            </td> 
                            <td>
                                <img src="${resultado.img}" height="42" width="42">
                            </td>
                        </tr>`)}
                </tbody>
            </table>
        </div>
    `
    let divTabla = document.createElement('div');
    divTabla.innerHTML = tabla;
    document.getElementById("hijoDos").appendChild(divTabla);
}
function limpiar(){
    let pokediv = document.getElementById("poke");
    if (pokediv != null){
      pokediv.remove(pokediv);
    }
}