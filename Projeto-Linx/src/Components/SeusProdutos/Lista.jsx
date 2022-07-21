import React from "react";
import Styles from "./SeusProdutos.module.css";
import { Botao, BotaoSubmit, BotaoProdutos } from "../Botao/Botao";

export const Lista = ({ seusProdutos }) => {
  return (
    <div className={Styles.containerPdts}>
      {seusProdutos.map((seusProdutos, index) => (
        <li className={Styles.listaPdts} key={index}>
          <div className={Styles.pdtsUl}>
            <img src={seusProdutos.image} alt="seusProdutos" />
            <h3>{seusProdutos.name}</h3>
            <p className={Styles.Descricao}>{seusProdutos.description}</p>
            <p>{`De: R$${seusProdutos.oldPrice
              .toFixed(2)
              .replace(".", ",")}`}</p>
            <h4>{`Por: R$${seusProdutos.price
              .toFixed(2)
              .replace(".", ",")}`}</h4>
            <p>
              {`ou ${
                seusProdutos.installments.count
              }x de R$${seusProdutos.installments.value
                .toFixed(2)
                .replace(".", ",")}`}
            </p>

            <div className={Styles.BtnComprar}>
              <BotaoProdutos texto="Comprar" />
            </div>
          </div>
        </li>
      ))}
    </div>
  );
};
