import React, { useState } from 'react'
import axios from 'axios'
import PokemonInput from './components/PokemonInput'
import PokemonDisplay from './components/PokemonDisplay'
import ErrorDisplay from './components/ErrorDisplay'
import { connect } from 'react-redux'
import { fetchPokemonDataStart, fetchPokemonDataSuccess, fetchPokemonDataError } from './redux/actions/actionCreators'
import {
  Container,
  Row,
  Col
} from 'reactstrap'

function App(props) {
  const [pokemon, setPokemon] = useState('')

  const getPokemon = () => {
    props.fetchPokemonDataStart(pokemon)
    axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemon}`)
      .then(res => {
        console.log(res)
        props.fetchPokemonDataSuccess(res)
      })
      .catch(err => {
        props.fetchPokemonDataError(err)
      })
  }

  const handleChange = e => {
    setPokemon(e.target.value)
  }

  return(
    <>
      <Container>
        <Row>
          <Col><PokemonInput user={pokemon} handleChange={handleChange} getPokemon={getPokemon} /></Col>
        </Row>
      </Container>
      <Container>
        <Row>
          {props.error
          ? <ErrorDisplay error={props.error} />
          : props.pokemon ? <PokemonDisplay pokemon={props.pokemon} /> : ''
          }
        </Row>
      </Container>
    </>
  )
}

const mapStateToProps = state => {
  return {
    isLoading: state.isLoading,
    pokemon: state.pokemon,
    pokemonName: state.pokemonName,
    error: state.error
  }
}

export default connect(mapStateToProps, { fetchPokemonDataStart, fetchPokemonDataSuccess, fetchPokemonDataError })(App)
