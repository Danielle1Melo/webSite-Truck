"use client";

import { LOGO } from "@/utils/logo";
import styled from "../../styles/allStyles/about.module.css";
import Image from "next/image";

const brands = [
  {
    name: "Brand 1",
    logo: LOGO.volvo,
  },
  {
    name: "Brand 2",
    logo: LOGO.scania,
  },
  {
    name: "Brand 3",
    logo: LOGO.renault,
  },
  {
    name: "Brand 4",
    logo: LOGO.man,
  },
];

export function About() {
  return (
    <div className={styled.container} id="about">
      <div className={styled.texts}>
        <h1>
          Você se pergunta quem somos? Deixe-me esclarecer isso para você.
        </h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc odio in
          et, lectus sit lorem id integer. Lorem ipsum dolor sit amet,
          consectetur adipiscing elit. Nunc odio in et, lectus sit lorem id
          integer. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
          odio in et, lectus sit lorem id integer.
        </p>
      </div>

      <div className={styled.brand}>
        {brands.map((brand, idx) => {
          return <Image key={idx} src={brand.logo} alt="" width={190}/>;
        })}
      </div>
    </div>
  );
}
