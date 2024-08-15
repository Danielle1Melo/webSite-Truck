"use client";
import Image from "next/image";
import styled from "../../styles/allStyles/photos.module.css"
import { LOGO } from "@/utils/logo";

export function Photos(){
    return (
        <div className={styled.container}>
            <h1>Fotos</h1>

            <Image alt="" src={LOGO.photo} width={1500}/>
        </div>
    )

}