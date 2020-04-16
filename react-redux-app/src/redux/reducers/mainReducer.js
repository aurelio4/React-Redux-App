import actionTypes from '../actions/actionTypes'

export const initialState = () => ({
  isLoading: false,
  pokemonName: '',
  pokemon: null,
  error: ''
})

export const reducer = (state = initialState(), action) => {
  switch(action.type) {
    case actionTypes.FETCH_POKEMON_DATA_START:
      console.log('pokemon data start')
      return {
        ...state,
        isLoading: true,
        error: ''
      }
    case actionTypes.FETCH_POKEMON_DATA_SUCCESS:
      console.log('pokemon data success')
      return {
        ...state,
        isLoading: false,
        pokemonName: '',
        pokemon: action.payload.data
      }
    case actionTypes.FETCH_POKEMON_DATA_ERROR:
      console.log('pokemon data error')
      return {
        ...state,
        isLoading: false,
        pokemon: null,
        error: action.payload.response.data
      }
    case actionTypes.UPDATE_POKEMON_NAME:
      return {
        ...state,
        pokemonName: action.payload
      }
    default:
      return state
  }
} 