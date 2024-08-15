"use client";

import Image from "next/image";
import styled from "../../styles/allStyles/footer.module.css";
import { LOGO } from "@/utils/logo";
import {
  FacebookLogo,
  InstagramLogo,
  MapPin,
  WhatsappLogo,
} from "phosphor-react";

export function Footer() {
  return (
    <div className={styled.container} id="contact">
      <div className={styled.session}>
        <Image src={LOGO.logoLight} alt="" width={"300"} className={styled.logo}/>

        <div className={styled.contacts}>
          <h2>Contatos</h2>
          <p>+55 (69) 98455-3652</p>
          <p>+55 (69) 98455-3652</p>
          <p>+55 (69) 98455-3652</p>
          <div className={styled.contactsLogo}>
            <WhatsappLogo size={25} />
            <p>+55 (69) 98455-3652</p>
          </div>
          <div className={styled.contactsLogo}>
            <MapPin size={25} />
           <p> Jardim das oliveiras</p>
          </div>
        </div>

        <div className={styled.socialMedia}>
          <h2>Redes Sociais</h2>
          <div className={styled.contactsLogo}>
            <FacebookLogo weight="fill" size={25} />
            <p>truck_service_ofFicIaL</p>
          </div>

          <div className={styled.contactsLogo}>
            <InstagramLogo size={25} />
            <p>truck_service_ofFicIaL</p>
          </div>
        </div>
      </div>

      <div className={styled.copyRight}>
        <p>Copyright © Truck Services 2024. </p>
      </div>
    </div>
  );
}
