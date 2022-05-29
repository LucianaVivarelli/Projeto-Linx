import React from 'react'
import {Botao, BotaoSubmit} from '../Botao/Botao'
import {Divisor} from '../Divisor/Divisor'
import styles from'./Compartilhe.module.css'

 export const Compartilhe = () => {
  return (
    <>
        <Divisor Styles="" texto={"Compartilhe a novidade"} />
        <p className={styles.paragrafoCompartilhe}>
          Quer que seus amigos também ganhem a lista personalizada deles? Preencha agora!</p>
      <section className={styles.containerCompartilhe}>

        
          <label className={styles.paragrafolabel}>Nome do seu amigo:</label>
        <input className={styles.paragrafoInput} type="text" name="name" />
          <label className={styles.paragrafolabel}> E-mail dele:</label>
        <input type="text" name="name" />
        </section>
        <BotaoSubmit texto='Enviar agora' />
    </>
  )
}

