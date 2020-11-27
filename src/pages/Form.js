import React, {useEffect, useState} from 'react'
import Header from '../Components/Header'
import api from '../api'
import { DataGrid } from '@material-ui/data-grid'

function Form(){

  const [campos, setCampos] = useState({
    id: 0,
    name: '',
    username: '',
    email: ''
  })
  
  function handleInputChage(event) {
    campos[event.target.name] = event.target.value
    setCampos(campos)
    setId(campos.id)
    console.log(campos)
  }

  const [clientes, setClientes] = useState([])
  const [id, setId] = React.useState(0);

  function handleGet() {
      api.get('/clients').then(response => {
        console.log(response.data)
        setClientes(response.data)
      }).catch(function (err) {
        alert(err + " Acesso Negado")
        
      })    
  }  
  function handlePost() {
      api.post('/clients', campos).then((response)=>{
        if(response){
          alert("Usuário criado com Sucesso!")
        }
      }).catch(function (err) {
        alert(err + " Acesso Negado")
      })    
  }
  function handleDelete() {
    api.delete('/clients', id).then(response => {
      console.log(response.data)
    }).catch(function (err) {
      alert(err  + " Acesso Negado" )
    })    
  }

  
  const columns = [
    {field: 'id', headerName: 'ID', width: 70 },
    {field: 'name', headerName: 'NOME', width: 150 },
    {field: 'username', headerName: 'USUÁRIO', width: 150 },
    {field: 'email', headerName: 'EMAIL', width: 250 }
  ]
  const rows = []
  clientes.map((cliente)=>rows.push(
    {
      id: cliente.id,
      name: cliente.name,
      username: cliente.username,
      email: cliente.email
    }
  ))
  
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
                  <input type="number" name="id" id="id" onChange={handleInputChage}  />
              </label>
          </div>
          <div>
              <label>Nome:
                  <input type="text" name="name" id="name" onChange={handleInputChage} />
              </label>
          </div>
          <div>
              <label>Usuario:
                  <input type="text" name="username" id="username" onChange={handleInputChage} />
              </label>
          </div>
          <div>
              <label>Email:
                  <input type="email" name="email" id="email" onChange={handleInputChage} />
              </label>
          </div>
          <input type="button" value="Salvar" onClick={handlePost}/>
          <input type="button" value="Pesquisar" onClick={handleGet} />
          <input type="button" value="Editar" />
          <input type="button" value="Deletar" onClick={handleDelete}/>
        </fieldset>
        <p></p>
        <div className="grid" style={{ height: 400, width: '100%' }}>
        <DataGrid rows={rows} columns={columns} pageSize={5} />
        </div>
      </form>
    </div>
  )
}

export default Form