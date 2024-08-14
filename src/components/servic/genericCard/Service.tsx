"use client";

import { LOGO } from "@/utils/logo";
import styled from "../../../styles/allStyles/services.module.css";
import { GenericCard } from "./GenericCard";

const itensCard = [
    {
        title: "Serviço de troca de óleo para carros",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc odio in et, lectus sit lorem id integer.",
        image: LOGO.sevices
    },
    {
        title: "Serviço de troca de óleo para carros",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc odio in et, lectus sit lorem id integer.",
        image: LOGO.sevices
    },
    {
        title: "Serviço de troca de óleo para carros",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc odio in et, lectus sit lorem id integer.",
        image: LOGO.sevices
    },
    {
        title: "Serviço de troca de óleo para carros",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc odio in et, lectus sit lorem id integer.",
        image: LOGO.sevices
    },
    {
        title: "Serviço de troca de óleo para carros",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc odio in et, lectus sit lorem id integer.",
        image: LOGO.sevices
    },
    {
        title: "Serviço de troca de óleo para carros",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc odio in et, lectus sit lorem id integer.",
        image: LOGO.sevices
    },
]

export function Services() {
  return (
    <div className={styled.container} id="services">
        <h1>Serviços Oferecidos</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc odio in et, lectus sit lorem id integer.</p>

        <div className={styled.cards}>
           {itensCard.map((item, idx) => {
            return (
                
                     <GenericCard title={item.title} descripion={item.description} image={item.image} key={idx}/>
              
            )
           })}
        </div>
    </div>
  );
}
