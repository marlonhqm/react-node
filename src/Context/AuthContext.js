import React, {createContext} from 'react'

const Context = createContext()

function AuthProvider( { childrean } ) {
  return (
    <Context.Provider>
      {childrean}
    </Context.Provider>
  )
}

export {Context, AuthProvider}