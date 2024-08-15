"use client";

import Image from "next/image";
import styled from "../../styles/allStyles/footer.module.css"
import { LOGO } from "@/utils/logo";
import { FacebookLogo, InstagramLogo, MapPin, WhatsappLogo } from "phosphor-react";


export function Footer(){
    return (
        <div className={styled.container}>
          <div className={styled.session}>
         
                <Image src={LOGO.mainLogo} alt="" />
         
            <div className={styled.contacts}>
                <h2>Contatos</h2>
                <p>+55 (69) 98455-3652</p>
                <p>+55 (69) 98455-3652</p>
                <p>+55 (69) 98455-3652</p>
                <div>
                    <WhatsappLogo size={20}/>
                    +55 (69) 98455-3652
                </div>
                <div>
                    <MapPin size={20}/>
                    Jardim das oliveiras
                </div>
            </div>

            <div className={styled.socialMedia}>
                <h2>Redes Sociais</h2>
                <div>
                    <FacebookLogo weight="fill" size={20}/>
                    truck_service_ofFicIaL
                </div>

                <div>
                    <InstagramLogo size={20}/>
                    truck_service_ofFicIaL
                </div>

            </div>
          </div>
        </div>
    )

}