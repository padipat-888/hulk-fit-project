import React from 'react'
import { useLocation } from 'react-router-dom'

const SingUp = () => {
  let { state } = useLocation();

  return (
    <div>
      <div>This is SingUp Page</div>
      <div>{ state.user + state.pass }</div>
    </div>
  )
}

export default SingUp