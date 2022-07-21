import React, { useState, useEffect } from "react";
import { Botao, BotaoSubmit, BotaoProdutos } from "../Botao/Botao";
import { Lista } from "./Lista";
import { Divisor } from "../Divisor/Divisor";
import styles from "./SeusProdutos.module.css";

export const SeusProdutos = () => {
  const [seusProdutos, setSeusProdutos] = useState([]);
  const [contador, setContador] = useState(1);

  const url = `https://frontend-intern-challenge-api.iurykrieger.vercel.app/products?page=${contador}`;

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((res) => setSeusProdutos([...seusProdutos, ...res.products]));
  }, [contador]);

  return (
    <div className={styles.containerSuaSelecao}>
      <section id="produtosLista" className={styles.secaoPdts}>
        <Divisor texto={"Sua seleção especial"} />
        <ul className={styles.containerPdtos}>
          <Lista seusProdutos={seusProdutos} />
        </ul>

        <section className={styles.BtnMaisProdutos}>
          <BotaoProdutos
            texto=" Ainda mais produtos aqui!"
            onClick={() => setContador(contador + 1)}
          />
        </section>
      </section>
    </div>
  );
};
