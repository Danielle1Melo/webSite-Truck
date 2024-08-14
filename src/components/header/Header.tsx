"use client";
import { Clock, MapPin, Phone } from "phosphor-react";
import styled from "../../styles/allStyles/header.module.css";

export function Header() {
  return (
    <div className={styled.container}>
      <div className={styled.informationSession}>
        <div className={styled.sessionContainer}>
          <div className={styled.sessionContainer}>
            <div className={styled.session}>
              <MapPin size={25} color="#3333339c" weight="fill" />
              <p>Endereço:</p>
            </div>
            <p>Jardim das oliveiras</p>
          </div>
        </div>
        <div className={styled.sessionContainer}>
          <div className={styled.session}>
            <Clock size={25} color="#3333339c" weight="fill" />
            <p>Horários de atendimento:</p>
          </div>
          <p>08:00 - 18:00</p>
        </div>
      </div>
      <div className={styled.sessionContainer}>
        <div className={styled.session}>
          <Phone size={25} color="#3333339c" weight="fill" />
          <p>+55 (69) 98455-3652</p>
        </div>
        <p>+55 (69) 98455-3652</p>
      </div>
    </div>
  );
}
