import POKEMON from './data/pokemon/pokemon.js';

export function filtrarPorTipoPokemon(TipoSeleccionado) {
  const TipoPokemonFiltrado = POKEMON.filter((pokemon) => (pokemon.type == TipoSeleccionado));
  return TipoPokemonFiltrado;
}
