import React from 'react'
import PokemonInput from './components/PokemonInput'
import PokemonDisplay from './components/PokemonDisplay'
import ErrorDisplay from './components/ErrorDisplay'
import { connect } from 'react-redux'
import { updatePokemonName, getPokemon } from './redux/actions/actionCreators'
import {
  Container,
  Row,
  Col
} from 'reactstrap'

function App(props) {
  const handleChange = e => {
    props.updatePokemonName(e.target.value)
  }

  return(
    <>
      <Container>
        <Row>
          <Col><PokemonInput user={props.pokemonName} handleChange={handleChange} getPokemon={props.getPokemon} pokemonName={props.pokemonName} /></Col>
        </Row>
      </Container>
      <Container>
        <Row>
          {props.error
          ? <ErrorDisplay error={props.error} />
          : props.pokemon ? <PokemonDisplay pokemon={props.pokemon} /> : null
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

export default connect(mapStateToProps, { updatePokemonName, getPokemon })(App)
