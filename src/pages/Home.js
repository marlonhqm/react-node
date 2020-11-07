import React, {useState} from 'react'
import {useHistory} from 'react-router-dom';
import Header from '../Components/Header'
import Axios from 'axios'
import './Home.css'


function Home(){

  let history = useHistory()
  
  const [campos, setCampos] = useState({
    user: '',
    pwd: '',
  })

  function handleInputChage(event) {
    campos[event.target.name] = event.target.value
    setCampos(campos)
  }

    
  
  const [token, setToken] = useState('')

  function handleInputToken(response) {
    const newToken = response.data.token
    setToken(newToken)
    console.log(newToken)
    alert("LOGIN REALIZADO COM SUCESSO!!")
    history.push('/clients')
  }

  function handleFormSubmit(event){
    event.preventDefault()
    Axios.post('http://localhost:3010/login', campos).then(response => {     
      console.log(response.data) 
      handleInputToken(response)
    }).catch(function error(err){
      alert(err + '\nLogin Falhou!!')
    })
    console.log(campos)
  }


  return (
    <div className='main'>
      <Header title="Login" />
      <form className='form' /* onSubmit={handleFormSubmit} */>
          <fieldset>
              <legend>
                  <h2>Entre com Usuário e Senha</h2>
              </legend>

              <div>
                  <label>Usuario:
                      <input type="text" name="user" id="user" onChange={handleInputChage} />
                  </label>
              </div>

              <div>
                  <label>Senha:
                      <input type="password" name="pwd" id="pwd" onChange={handleInputChage} />
                  </label>
              </div>
              <input type="submit" value="Entrar" id="button" onClick={handleFormSubmit} />
          </fieldset>
      </form>
    </div>
  )
}

export default Home