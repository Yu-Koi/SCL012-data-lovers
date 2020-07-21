import {buscarPokemonPorNombre} from './data.js';
const btnBuscar = document.getElementById("button-search-name");// llamar al botton buscar
btnBuscar.addEventListener("click", function() { // escuchar el evento para indicarle que ejecute la funcion
    const namePokemon = document.getElementById("name-entered").value; // rescata el nombre del pokemon a buscar
    
    const evolucionesPokemon = buscarPokemonPorNombre(namePokemon);
    console.log(evolucionesPokemon);
    let divPokeIndividual = ` 
         <div class="buscarTipos" id="poke">
            <table id="tamañoTabla">
                <thead>
                ${evolucionesPokemon.map(evolucionesPokemon => ` 
                <tr> 
                    <td>
                        ${evolucionesPokemon.name}
                    </td>
                </tr>`)}
                </thead>
                <tbody>
            
                </tbody>
            </table>
        </div>
    `;
    let divPoke = document.createElement('divPokeIn');
    divPoke.innerHTML = divPokeIndividual;
    document.getElementById("hijo-recolector").appendChild(divPoke);
})