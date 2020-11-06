import React, {useEffect, useState} from 'react'
import Header from '../components/Header'
import Axios from 'axios'


function Form(){
  
  const [estados, setEstados] = useState([])
  useEffect(() => {
    Axios.get('https://servicodados.ibge.gov.br/api/v1/localidades/estados').then(response => setEstados(response.data))
  },[] )


  const [campos, setCampos] = useState({
    txtNome: '',
    txtIdade: 0,
    cmbUF: '0'
  })

  function handleInputChage(event) {
    campos[event.target.name] = event.target.value
    setCampos(campos)
  }

  function handleFormSubmit(event){
    event.preventDefault()
    Axios.post('http://localhost:3010/login')
    console.log(campos)
  }


  return (
      <div>
          <Header title="React Form" />
          <form onSubmit={handleFormSubmit}>
              <fieldset>
                  <legend>
                      <h2>Dados de Cadastro</h2>
                  </legend>

                  <div>
                      <label>Nome:
                          <input type="text" name="txtNome" id="txtNome" onChange={handleInputChage} />
                      </label>
                  </div>

                  <div>
                      <label>Idade:
                          <input type="number" name="txtIdade" id="txtIdade" onChange={handleInputChage} />
                      </label>
                  </div>

                  <div>
                      <label>UF:
                          <select name="cmbUF" id="cmbUF" onChange={handleInputChage} >
                              <option value="0">Selecione uma opção</option>
                              {estados.map(estado => (<option key={estado.id} value={estado.id}>{estado.nome}</option>))}
                          </select>
                      </label>
                  </div>
                  <input type="submit" value="Salvar" />
              </fieldset>
          </form>
      </div>
  )
}

export default Form