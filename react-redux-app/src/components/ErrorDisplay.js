import React from 'react'
import '../App.css'

function ErrorDisplay(props) {
  return(
    <>
      <div>
        {/* N */}
        <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/201-n.png" alt="N" />
        {/* O */}
        <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/201-o.png" alt="O" />
        {/* T */}
        <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/201-t.png" alt="T" />
      </div>

      <div id="found">
        {/* F */}
        <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/201-f.png" alt="F" />
        {/* O */}
        <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/201-o.png" alt="O" />
        {/* U */}
        <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/201-u.png" alt="U" />
        {/* N */}
        <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/201-n.png" alt="N" />
        {/* D */}
        <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/201-d.png" alt="D" />
      </div>
    </>
  )
}

export default ErrorDisplay