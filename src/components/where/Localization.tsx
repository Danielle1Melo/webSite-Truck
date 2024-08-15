"use client";

import React,{ useEffect, useRef } from "react";
import styled from "../../styles/allStyles/localization.module.css";
import { Loader }  from "@googlemaps/js-api-loader";



export function Localization() {
  const mapRef = useRef(null);

  useEffect(() => {
    const loader = new Loader({
      apiKey: "AIzaSyCIHBi4twAhPTFABRv5MOvt4XdTUU9X7QI", 
      version: "weekly",
    });

    loader.load().then((google) => {
      new google.maps.Map(mapRef.current, {
        center: { lat: -12.7406, lng: -60.1458 }, 
        zoom: 20,
      });
    });
  }, []);

  return (
    <div className={styled.container}>
      <div className={styled.texts}>
        <h1>
        Onde estamos?
        </h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc odio in
          et, lectus sit lorem id integer. Lorem ipsum dolor sit amet,
          consectetur adipiscing elit. Nunc odio in et, lectus sit lorem id
          integer. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
          odio in et, lectus sit lorem id integer.
        </p>
      </div>
        
        <div className={styled.map} ref={mapRef} style={{ height: '500px', width: '50%' }}></div>
     
    </div>
  );
}
