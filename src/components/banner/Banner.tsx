"use client";

import Image from "next/image";
import styled from "../../styles/allStyles/banner.module.css";
import { LOGO } from "@/utils/logo";

export function Banner() {
  return (
    <div className={styled.container}>
      <div className={styled.texts}>
        <h1>Serviço de caminhão acessível</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc odio in et, lectus sit lorem id integer.</p>
        <button>Saiba mais</button>
      </div>
      <div>
        <Image alt="" src={LOGO.truck} width={1250} />
      </div>
    </div>
  );
}
