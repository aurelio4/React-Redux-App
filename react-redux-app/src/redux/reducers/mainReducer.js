import actionTypes from '../actions/actionTypes'

export const initialState = () => ({
  isLoading: false,
  pokemon: '',
  error: ''
})

export const reducer = (state = initialState(), action) => {
  switch(action.type) {
    case actionTypes.FETCH_POKEMON_DATA_START:
      console.log('pokemn data start')
      return {
        ...state,
        isLoading: true,
        pokemon: action.payload.data,
        error: ''
      }
    case actionTypes.FETCH_POKEMON_DATA_SUCCESS:
      console.log('pokemon data success')
      return {
        ...state,
        isLoading: false,
        pokemon: action.payload.data
      }
    case actionTypes.FETCH_POKEMON_DATA_ERROR:
      console.log('pokemon data error')
      return {
        ...state,
        isLoading: false,
        pokemon: {},
        error: action.payload.response.data
      }
    default:
      return state
  }
} 