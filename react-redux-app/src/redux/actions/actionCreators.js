import actionTypes from './actionTypes'

export const fetchPokemonDataStart = (pokemonName) => ({ type: actionTypes.FETCH_POKEMON_DATA_START, payload: pokemonName })
export const fetchPokemonDataSuccess = (pokemonData) => ({ type: actionTypes.FETCH_POKEMON_DATA_SUCCESS, payload: pokemonData })
export const fetchPokemonDataError = (error) => ({ type: actionTypes.FETCH_POKEMON_DATA_ERROR, payload: error })