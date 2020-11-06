import React, {useState} from 'react'
import {Link} from 'react-router-dom'
import Header from '../components/Header'

function Home() {

  const [contador, setContador] = useState(0)

  function increment(){
    setContador(contador+1)
  }

  return (
    <div className="App">
      <Header title="Header Param" />
      <p>
        <input type="button" value="Clique" onClick={increment} />
      </p>
      <p>{contador}</p> 
      <p>cliques!</p> 
      <Link to="/cadastro">Acessar cadastro</Link>
    </div>
  )
}

export default Home;