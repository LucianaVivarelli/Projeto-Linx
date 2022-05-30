import React from 'react'
import Styles from './SeusProdutos.module.css'
import {Botao, BotaoSubmit,BotaoProdutos} from '../Botao/Botao'

 export const Lista = ({SeusProdutos}) => {
  return (
    <div>
        {SeusProdutos.map((SeusProdutos, index) => (
        
        <li key={index}>
            <section> className={Styles.seusProdutosEspeciais}

            <img src ={SeusProdutos.image} alt="SeusProdutos" />
            <h3>{SeusProdutos.name}</h3>
            <p></p>
            <p></p>
            <h4></h4>
            <p></p>

            <div className={Styles.BtnCompra}>
            <BotaoProdutos texto=" Comprar" />
            </div>
            </section>
            </li>

        )
        
        )}
    </div>
  )
}

