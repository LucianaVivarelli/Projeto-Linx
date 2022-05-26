import React from 'react'
import Botao from '../Botao/Botao'
import Styles from './Cabecalho.module.css'

const Cabecalho = () => {
  return (
    <header className={Styles.container}>
      <div className={Styles.cabecalho} />
       <section>
        <h3>uma seleção de produtos</h3>
        <h1>especial para você</h1>
        <p>
          Todos os produtos desta lista foram selecionados a partir da sua navegação. Aproveite
        </p>
       </section>
            <nav className={Styles.navbutton}>
                <ul>
                    <li>
                      <Botao texto='Conheça a Linx' />
                    </li>
                    <li>
                      <Botao texto='Ajude o algoritmo' />
                    </li>
                    <li>
                      <Botao texto='Seus produtos' />
                    </li>
                    <li>
                      <Botao texto='Compartilhe' />
                    </li>
                </ul>
            </nav>
    
    </header>
  )
}

export default Cabecalho
