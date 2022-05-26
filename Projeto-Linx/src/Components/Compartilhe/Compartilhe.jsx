import React from 'react'
import Styles from './Compartilhe.module.css'
import Botao from '../Botao/Botao'
import Divisor from '../Divisor/Divisor'

const Compartilhe = () => {
  return (
    <>

<Divisor Styles="" texto={"Compartilhe a novidade"} />
<p>Quer que seus amigos também ganhem a lista personalizada deles? Preencha agora!</p>

    Nome do seu amigo:
    <input type="text" name="name" />
    E-mail dele:
    <input type="text" name="name" />
    <Botao  texto='Compartilhe' />
    </>
  )
}

export default Compartilhe