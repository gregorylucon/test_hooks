import React, { useContext } from 'react'
import { ContatoreContext } from './context'

const Login = () => {
  const {state:{contatore}}=useContext(ContatoreContext)
  return (
    <div>nel Login il contatore e'{contatore}</div>
  )
}

export default Login