import React from "react";
import { Botao } from "../Botao/Botao";
import Styles from "./Cabecalho.module.css";

export const Cabecalho = () => {
  return (
    <header className={Styles.container}>
      <div className={Styles.cabecalho} />
      <section>
        <h3>uma seleção de produtos</h3>
        <h1>especial para você</h1>
        <p className={Styles.paragrafoHeader}>
          Todos os produtos desta lista foram selecionados a partir da sua
          navegação. Aproveite
        </p>
      </section>
      <nav className={Styles.navcontainer}>
        <Botao className={Styles.btnHeader} texto="Conheça a Linx" />

        <Botao className={Styles.btnHeader} texto="Ajude o algoritmo" />

        <Botao className={Styles.btnHeader} texto="Seus produtos" />

        <Botao className={Styles.btnHeader} texto="Compartilhe" />
      </nav>
    </header>
  );
};
