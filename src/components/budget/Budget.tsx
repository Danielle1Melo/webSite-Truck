"use client";

import styled from "../../styles/allStyles/services.module.css";
import { LOGO } from "@/utils/logo";
import { GenericCard } from "../servic/genericCard/GenericCard";

const itensCard = [
  {
    title: "Troca e alinhamento de pneus",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc odio in et, lectus sit lorem id integer.",
    image: LOGO.sevices,
  },
  {
    title: "Serviço de lavagem de caminhões e veículos.",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc odio in et, lectus sit lorem id integer.",
    image: LOGO.sevices,
  },
  {
    title: "Troca e alinhamento de pneus",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc odio in et, lectus sit lorem id integer.",
    image: LOGO.sevices,
  },
  {
    title: "Troca e alinhamento de pneus",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc odio in et, lectus sit lorem id integer.",
    image: LOGO.sevices,
  },
  {
    title: "Troca e alinhamento de pneus",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc odio in et, lectus sit lorem id integer.",
    image: LOGO.sevices,
  },
];

export function Budget() {
  return (
    <div className={styled.container}>
      <h1>Serviços adaptados ao seu orçamento</h1>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc odio in
        et, lectus sit lorem id integer.
      </p>

      <div className={styled.cards}>
        {itensCard.map((item, idx) => {
          return (
            <GenericCard
              title={item.title}
              descripion={item.description}
              image={item.image}
              key={idx}
            />
          );
        })}
      </div>
    </div>
  );
}
