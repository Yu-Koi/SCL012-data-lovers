import POKEMON from './data/pokemon/pokemon.js';
export function filtrarPorTipoPokemon(TipoSeleccionado) {
  const TipoPokemonFiltrado = POKEMON.filter((pokemon) => (pokemon.type == TipoSeleccionado));
  return TipoPokemonFiltrado;
}
export function filtrarPorDebilidades(eleccionDecaracteristica) {
  const resultado = [];//array vacio para que me integre el resultado
  if (eleccionDecaracteristica=="Más débiles"){
    for(let i = 0; i <POKEMON.length; i++){
      if (POKEMON[i].weaknesses.length >= 5){
        resultado.push(POKEMON[i]);
      }
    
    }
  }else{
    for(let j = 0; j <POKEMON.length; j++){
      if(POKEMON[j].weaknesses.length <=2){
        resultado.push(POKEMON[j]);
      }
    }
  }
  return resultado;
}

export function buscarPokemonPorNombre(nameEntered) {
  let nameSearched = []; // se crea un arreglo vacio 
      for (let i= 0; i < POKEMON.length; i++) {
          // recorrer para que vaya comparando el name y si es igual al introducido retorne true
          if (POKEMON[i].name === nameEntered) {
              nameSearched.push(POKEMON[i]); // al arreglo vacio se le agrega el arreglo del pokemon
          }  
      }
      return buscarPokemonPorNombre;
    }