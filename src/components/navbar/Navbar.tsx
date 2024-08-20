"use client";

import Image from "next/image";
import styled from "../../styles/allStyles/navbar.module.css";
import { LOGO } from "@/utils/logo";
import { NAVLINKS } from "@/lib/data";
import Link from "next/link";
import { useState } from "react";
import { List, X } from "phosphor-react";

export function Navbar() {
  const [navbar, setNavbar] = useState(false);

  function handleClick() {
    setNavbar(!navbar);
    console.log("clicked");
  }

  return (
    <div className={styled.container}>
      <Image alt="" src={LOGO.mainLogo} className={styled.logoImg} />

      <button className={styled.menu} onClick={() => handleClick()}>
        <List size={40} />
      </button>

      <div
        className={styled.linksContainer}
        style={
          navbar
            ? {
                transform: "translateX(100%)",
                transition: "transform 0.4s ease-in-out",
              }
            : {}
        }
      >
        <button className={styled.closeButton} onClick={() => setNavbar(false)}>
          <X size={40} color="#000"/>
        </button>
        <ul>
          {NAVLINKS.map((links, idx) => {
            return (
              <li key={idx}>
                <Link href={links.href } onClick={() => setNavbar(false)}>{links.label}</Link>
              </li>
            );
          })}
        </ul>
      </div>

      <button className={styled.button}>Solicitar um orçamento</button>
    </div>
  );
}
