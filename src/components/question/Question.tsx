"use client";

import styled from "../../styles/allStyles/question.module.css"


export function Question(){
    return (
        <div className={styled.container}>
          <div>
          
          </div>

          <div className={styled.card}>
            <h1>Ainda tem perguntas ?</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc odio in et, lectus sit lorem id integer.</p>

            <form className={styled.form}>
                <input type="text" placeholder="Digite seu nome" />
                <input type="text" placeholder="Deixe seu dúvida" />

                <button>Enviar</button>
            </form>

          </div>
        </div>
    )

}