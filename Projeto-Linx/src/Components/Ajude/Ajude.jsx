import React from "react";
import Styles from "./AjudeAlgoritmo.module.css";
import {Botao, BotaoSubmit} from "../Botao/Botao";

 export const Ajude = () => {
  return (
    <main claasName={Styles.quadrado}>
      <section className={Styles.Containeralg}>
        <h2 className={Styles.tituloalg}>
          {" "}
          Ajude o Algoritmo a ser mais certeiro
        </h2>
        <p className={Styles.cortexto}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque
          ultricies tellus nec mi porta convallis sollicitudin eu urna. Mauris
          rhoncus erat sed interdum dignissim. Suspendisse semper pretium
          consectetur. Praesent bibendum arcu risus, sit amet iaculis ex tempus
          quis. Cras et erat ut tellus vulputate tincidunt. Aenean lacinia
          euismod augue vel egestas. Class aptent taciti sociosqu ad litora
          torquent per conubia nostra, per inceptos himenaeos. Vestibulum vel
          urna tortor. Vivamus et arcu non felis tristique eleifend.
        </p>
        <p className={Styles.cortexto2}>
          Morbi eu condimentum urna. Curabitur eu magna eget turpis condimentum
          ultrices. Suspendisse quis lorem ultricies, pulvinar purus sed,
          egestas erat. Etiam ultricies a ante vehicula pharetra. Quisque ut
          neque mattis, consequat velit ut, ultrices orci. Nulla varius
          elementum erat vel pharetra. Aenean sit amet nisi diam. Morbi viverra,
          magna ac luctus commodo, odio ante suscipit libero, at mattis augue
          est vel metus.
        </p>
      </section>

      <div className={Styles.formcontainer}>
        <form>
          <label className={Styles.labelcontainer}> Seu nome:</label>
            
            <input className={Styles.inputtexto} type="text" />
          

          <label>E-mail:</label>
            <input className={Styles.inputtexto} type="email" />
          

          <label>CPF:</label>
            <input className={Styles.inputtexto} type="text" />

          <section>
            <label className={Styles.labelRadio}>
              <input className={Styles.radio} name="sexo" Type="radio" />
              Feminino
            </label>

            <label className={Styles.containerRadio}>
              <input className={Styles.labelRadio} name="sexo" Type="radio" />
              Masculino
            </label>
          </section>
          <section className={Styles.btnSubmit}>
            <BotaoSubmit  texto="Enviar" />
          </section>
        </form>
      </div>
    </main>
  );
};

