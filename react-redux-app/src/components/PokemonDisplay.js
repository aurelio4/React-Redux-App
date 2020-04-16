import React from 'react'
import '../App.css'
import {
  Badge,

} from 'reactstrap'

function PokemonDisplay(props) {
  return(
    <div className="pokemon-display-container">
      <div className="male-pokemon">
        {/* male */}
        <Badge color="primary" pill>Male</Badge>
        <img src={props.pokemon.sprites.front_default} alt="front pokemon male" />
      </div>
      <div className="shiny-pokemon">
        {/* shiny */}
        <Badge color="dark" pill>Shiny</Badge>
        <img src={props.pokemon.sprites.front_shiny} alt="front pokemon shiny" />
      </div>
      <div className="female-pokemon">
        {/* female */}
        <Badge color="danger" pill>Female</Badge>
        <img src={props.pokemon.sprites.front_female} alt="front pokemon female" />
      </div>
    </div>
  )
}

export default PokemonDisplay