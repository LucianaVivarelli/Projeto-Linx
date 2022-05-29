import React from 'react'
import Styles from './Botao.module.css'

 export const Botao = (props) => {
  
    return (
      <div>
      <button className={Styles.btn}>
      {props.texto}
      </button>
      </div>
    )
}

 export const BotaoSubmit = (props) => {
  return (
<div>
<button className={Styles.btnSubmit}>
      {props.texto}
      </button>
</div>

  )
}
export const BotaoProdutos = (props) => {
  return (
<div>
<button className={Styles.btnProdutos}>
      {props.texto}
      </button>
</div>

  )
}