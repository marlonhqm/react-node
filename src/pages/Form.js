import React, {useEffect, useState} from 'react'
import Header from '../Components/Header'
import Axios from 'axios'
import { DataGrid } from '@material-ui/data-grid'

const columns = [
  {field: 'id', headerName: 'ID', width: 70 }
]
const rows = [
  {id: 1, lastName: 'Snow', firstName: 'Jon', age: 35}
]

function Form(){
  const [campos, setCampos] = useState({
    txtId: 0,
    txtNome: '',
    txtUserName: '',
    txtEmail: ''
  })
  
  function handleInputChage(event) {
    campos[event.target.name] = event.target.value
    setCampos(campos)
  
  }
  const [clientes, setClientes] = useState([])

  /* function handleSubmitGetAll() {
    Axios.get('http://localhost:3010/clients', {
      headers: 
    }).then(response => {
      setClientes(response.data)
      console.log(clientes)
      
    })
  } */

    /* useEffect(() => {
      Axios.get('http://localhost:3010/clients').then(response => setClientes(response.data))
    },[] ) */    
  
  
  function handleSubmitSearch(event){
    event.preventDefault()
    Axios.post('http://localhost:3010/login', campos).then(response => {

    })
    console.log(campos)
  }


  return (
    <div>
      <Header title="Formulário Cliente" />
      <form className="formClients">
        <fieldset>
          <legend>
              <h2>Preencha os campos</h2>
          </legend>
          <div>
              <label>Id:
                  <input type="number" name="txtId" id="txtId" onChange={handleInputChage}  />
              </label>
          </div>
          <div>
              <label>Nome:
                  <input type="text" name="txtNome" id="txtNome" onChange={handleInputChage} />
              </label>
          </div>
          <div>
              <label>Usuario:
                  <input type="text" name="txtUserName" id="txtUserName" onChange={handleInputChage} />
              </label>
          </div>
          <div>
              <label>Email:
                  <input type="email" name="txtEmail" id="txtEmail" onChange={handleInputChage} />
              </label>
          </div>
          <input type="submit" value="Salvar" />
          <input type="submit" value="Pesquisar" />
          <input type="submit" value="Editar" />
          <input type="submit" value="Deletar" />
        </fieldset>
        <p></p>
        <div className="grid" style={{ height: 400, width: '100%' }}>
        <DataGrid rows={rows} columns={columns} pageSize={5} checkboxSelection />
        </div>
      </form>
    </div>
  )
}

export default Form