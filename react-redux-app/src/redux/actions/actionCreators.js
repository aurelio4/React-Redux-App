import actionTypes from './actionTypes'
import axios from 'axios'

export const fetchPokemonDataStart = (pokemonName) => ({ type: actionTypes.FETCH_POKEMON_DATA_START, payload: pokemonName })
export const fetchPokemonDataSuccess = (pokemonData) => ({ type: actionTypes.FETCH_POKEMON_DATA_SUCCESS, payload: pokemonData })
export const fetchPokemonDataError = (error) => ({ type: actionTypes.FETCH_POKEMON_DATA_ERROR, payload: error })
export const updatePokemonName = (name) => ({ type: actionTypes.UPDATE_POKEMON_NAME, payload: name })

export const getPokemon = (name) => dispatch => {
  dispatch(fetchPokemonDataStart(name))
  axios.get(`https://pokeapi.co/api/v2/pokemon/${name}`)
    .then(res => {
      console.log(res)
      dispatch(fetchPokemonDataSuccess(res))
    })
    .catch(err => {
      dispatch(fetchPokemonDataError(err))
    })
}