"use client";

import Image from "next/image";
import styled from "../../styles/allStyles/navbar.module.css";
import { LOGO } from "@/utils/logo";
import { NAVLINKS } from "@/utils/data";

export function Navbar() {
  return (
    <div className={styled.container}>
      <Image alt="" src={LOGO.mainLogo} width={350} />

      <div className={styled.linksContainer}>
        {NAVLINKS.map((links, idx) => {
          return <p key={idx}>{links.label}</p>;
        })}
      </div>

      <button className={styled.button}>Solicitar um orçamento</button>
    </div>
  );
}
