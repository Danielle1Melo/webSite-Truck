"use client";

import Image from "next/image";
import styled from "../../../styles/allStyles/services.module.css";
import AOS from "aos";
import 'aos/dist/aos.css';
import { useEffect } from "react";


interface GenericCardProps {
  title: string;
  descripion: string;
  image: any;
}

export function GenericCard({ title, descripion, image }: GenericCardProps) {

  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);

  return (
    <div className={styled.Cardcontainer} data-aos="fade-up">
      <div className={styled.CardText}>
        <h2>{title}</h2>
        <p>{descripion}</p>
      </div>
      <Image src={image} alt=""/>
       <link rel="stylesheet" href="bower_components/aos/dist/aos.css" />
       
    </div>
  );
}
