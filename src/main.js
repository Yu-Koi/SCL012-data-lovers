
import POKEMON from './data/pokemon/pokemon.js'
console.log(POKEMON);


//llamo al botton buscar
const btnBuscar = document.getElementById("search-name");
//llamo al en¡vento de click del botton y le indico que ejcute la funcion
btnBuscar.addEventListener("click", function() {
    const namePokemon = document.getElementById("name-entered").value;
    
    let nameSearched = [];
    for (let i= 0; i < POKEMON.length; i++) {
        //le indico que de la cadena me compare el name y si es igual al introducido me de true
        if (POKEMON[i].name === namePokemon) {
            nameSearched
            .push(POKEMON[i])
    
        }  
        //imprimo el pokemon en el div
        //document.getElementById("root").innerHTML = nameSearched; 
    }
    console.log(nameSearched);
})



//.....................
//OTRA FORMA CON FILTER

//const btnBuscar = document.getElementById("search-name");   

let nameSearched = POKEMON.filter(elemento => (elemento.name === "Pikachu"));
console.log(nameSearched)
    //btnBuscar.addEventListener("click", function() {
        //const namePokemon = document.getElementById("name-entered").value;
//     console.log(namePokemon)
//     return POKEMON[i].name === namePokemon; 
// })
// .map (function (pokemon){
//     return pokemon.img
// })
// btnBuscar.addEventListener("click", nameSearched);
// console.log(nameSearched);
