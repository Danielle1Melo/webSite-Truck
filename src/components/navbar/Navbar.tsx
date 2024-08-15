"use client";

import Image from "next/image";
import styled from "../../styles/allStyles/navbar.module.css";
import { LOGO } from "@/utils/logo";
import { NAVLINKS } from "@/lib/data";
import Link from "next/link";


export function Navbar() {
  return (
    <div className={styled.container}>
      <Image alt="" src={LOGO.mainLogo} width={350} />

      <div className={styled.linksContainer}>
        <ul>
        {NAVLINKS.map((links, idx) => {
          return(
            <li key={idx}>
            <Link href={links.href}>{links.label}</Link>
          </li>
          )
        })}
        </ul>
      </div>

      <button className={styled.button}>Solicitar um orçamento</button>
    </div>
  );
}
