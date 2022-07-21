import React from "react";
import { Botao, BotaoSubmit } from "../Botao/Botao";
import { Divisor } from "../Divisor/Divisor";
import styles from "./Compartilhe.module.css";

export const Compartilhe = () => {
  return (
    <div className={styles.containerCompartilhe} >
      <div className={styles.containerDivisor}>
      <Divisor Styles="" texto={"Compartilhe a novidade"} />
        <p className={styles.paragrafoCompartilhe}>
            Quer que seus amigos também ganhem a lista personalizada deles? Preencha
            agora!
        </p>

      </div>

<div className={styles.containerForm}>
    <div className={styles.containerFriends}>

    <div className={styles.nomeInput}>
      <label className={styles.paragrafolabel}>Nome do seu amigo:</label>
      <input className={styles.paragrafoInput} type="text" name="name" />
    </div>

    <div className={styles.nomeInput02}>
      <label className={styles.paragrafolabel}> E-mail dele:</label>
      <input className={styles.paragrafoInput} type="text" name="name" />
    </div>

</div>
    </div>

      <section className={styles.btnCompartilhe}>
      <BotaoSubmit texto="Enviar agora" />
      </section>
      
    </div>
  );
};
