import React, { useEffect, useState } from "react";
import './Display.css'

const Display = (props) => {
    const { ISSdata } = props;
    // const [speed, setSpeed] = useState(0);

    // const calcularVelocidad = (lat1, lon1, lat2, lon2, tiempoEnSegundos) => {
    //     const distancia = calcularDistancia(lat1, lon1, lat2, lon2);
    //     const velocidad = distancia / tiempoEnSegundos;
    //     return velocidad;
    // };
    
    // const calcularDistancia = (lat1, lon1, lat2, lon2) => {
    //     // Convertir latitudes y longitudes a radianes
    //     const lat1_rad = Math.PI * lat1 / 180;
    //     const lon1_rad = Math.PI * lon1 / 180;
    //     const lat2_rad = Math.PI * lat2 / 180;
    //     const lon2_rad = Math.PI * lon2 / 180;

    //     // Radio de la Tierra en kilómetros
    //     const radio_tierra = 6378 + 420;

    //     // Fórmula del haversine para calcular la distancia entre dos puntos en la Tierra
    //     const dlon = lon2_rad - lon1_rad;
    //     const dlat = lat2_rad - lat1_rad;
    //     const a = Math.sin(dlat / 2) ** 2 + Math.cos(lat1_rad) * Math.cos(lat2_rad) * Math.sin(dlon / 2) ** 2;
    //     const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    //     const distancia = radio_tierra * c;

    //     return distancia;
    // };

    // useEffect(() => {
    //     // Cálculo de la distancia en un segundo
    //     const speedCalc = calcularVelocidad(ISSdata.lat, ISSdata.lng, ISSInitialData.initLat, ISSInitialData.initLng, 1.5);
    //     setSpeed(speedCalc)
    // }, [ISSdata.lat, ISSdata.lng, ISSInitialData.initLat, ISSInitialData.initLng]);

    return (
        <div className="display-container-inner">
            <div className="container">
                <h1>International Space<br/> Station</h1>
                <p>Latitude: {ISSdata.lat}</p>
                <p>Longitude: {ISSdata.lng}</p>
                <p>Speed: 7,667 km/s</p>
            </div>
            <p>Project by Santiago Herrera</p>
        </div>
    )
}

export default Display;
