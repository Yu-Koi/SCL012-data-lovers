import { filtrarPorTipoPokemon } from './data.js';

const seleccionTipo = document.getElementById('seleccion');

seleccionTipo.addEventListener('change', () => {
  const indexSeleccionado = seleccionTipo.selectedIndex;
  const valorIndexSeleccionado = seleccionTipo.children[indexSeleccionado].innerHTML.trim();
  const resultado = filtrarPorTipoPokemon(valorIndexSeleccionado);
  limpiar();
  tabla(resultado);
});

function tabla(resultado){
    let tabla = 
    `     <div id="poke" style="width:300px; height:300px; margin:0 auto; margin-top:30px;">
            <table style="width:300px;">
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
    document.body.appendChild(divTabla);
}

function limpiar(){
    let pokediv = document.getElementById('poke');
    if (pokediv != null){
      pokediv.remove(pokediv);
    }
}
