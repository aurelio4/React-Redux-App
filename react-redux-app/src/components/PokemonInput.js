import React from 'react'
import { 
  InputGroup,
  Input,
  InputGroupAddon,
  Button
} from 'reactstrap'
import '../App.css'

function PokemonInput(props) {
  return(
    <div className="get-user-container">
      <InputGroup>
        <Input placeholder="Pokemon Name" value={props.user} onChange={props.handleChange} />
        <InputGroupAddon addonType="append"><Button onClick={() => props.getPokemon()}>Get Pokemon</Button></InputGroupAddon>
      </InputGroup>
    </div>
  )
}

export default PokemonInput