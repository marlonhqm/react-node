import React, {useState} from 'react'
import {useHistory} from 'react-router-dom';
import Header from '../Components/Header'
import api from '../api'
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

  function handleLogin(event){
    event.preventDefault()
    api.post('/login', campos).then(response => {
      console.log(response.data)
      setToken(response.data.token) 
      alert("LOGIN REALIZADO COM SUCESSO!!")
      history.push('/clients')

    }).catch(err => {
      console.log()
      alert(err + '\nLogin Falhou!!')
    })
  }

  api.defaults.headers['x-access-token'] = token
  console.log(api.defaults.headers)

  return (
    <div className='main'>
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
              <input type="submit" value="Entrar" id="button" onClick={handleLogin} />
          </fieldset>
      </form>
    </div>
  )
}

export default Home