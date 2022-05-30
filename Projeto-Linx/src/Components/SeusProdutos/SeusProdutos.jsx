import React, { useState, useEffect} from 'react'
import {Botao, BotaoSubmit,BotaoProdutos} from '../Botao/Botao'
import {Lista} from "./Lista"
import {Divisor} from '../Divisor/Divisor'
import styles from './SeusProdutos.module.css'

  export const SeusProdutos = () => {
    const [SeusProdutos, setSeusProdutos] = useState([]);
    const [Contador, setContador] = useState([]);
    useEffect (() => {

          fetch(`https://frontend-intern-challenge-api.iurykrieger.now.sh/products?page=${Contador}`)
            .then((res) => res.json())
            .then((res) => setSeusProdutos([res]))
            .catch((err) => res.status(400).json(err));
          
          

    },[Contador]
    );
  return (
    <div className={styles.containerGlobalProdutos}>
      <section className={styles.Productos}>

           <Divisor Styles="" texto = {"Sua seleção especial"} />  

           <ul>
             <Lista SeusProdutos = {SeusProdutos} />
           </ul> 

      <section className={styles.BtnProdutos}>
             <BotaoProdutos texto=" Ainda mais produtos aqui!"
             onClick={() => setContador(Contador + 1)} />
      </section> 

      </section>

    </div>
              )
  }
