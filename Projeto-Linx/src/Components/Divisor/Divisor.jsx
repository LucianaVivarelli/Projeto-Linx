import React from 'react'
import Styles from './Divisor.module.css'

const Divisor = (props) => {
  return (
    <h1 className={Styles.Divisor}>{props.texto}</h1>
  )
}

export default Divisor