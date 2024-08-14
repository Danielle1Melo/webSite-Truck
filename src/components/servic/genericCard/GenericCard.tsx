"use client";

import Image from "next/image";
import styled from "../../../styles/allStyles/services.module.css";


interface GenericCardProps {
  title: string;
  descripion: string;
  image: any;
}

export function GenericCard({ title, descripion, image }: GenericCardProps) {
  return (
    <div className={styled.Cardcontainer}>
      <div className={styled.CardText}>
        <h2>{title}</h2>
        <p>{descripion}</p>
      </div>
      <Image src={image} alt=""/>
    </div>
  );
}
