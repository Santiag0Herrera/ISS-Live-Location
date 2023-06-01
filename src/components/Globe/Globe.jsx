import React, {useState, useEffect, useRef} from 'react';
import Globe from 'react-globe.gl';
import Stars from '../../assets/galaxy_starfield.png'
import { getISSLocation } from '../../services/getISSLocation';

const Earth = () => {

    const [ISSdata, setISSdata] = useState({})
    const [pointsArray, setPointsArray] = useState([])
    //
    const pointsData = []
    let counter = 0

    const globeEl = useRef();
    const ringsEl = useRef(null);
    const pointEl = useRef(null)

    async function getISSdata (){
        counter++
        const data = await getISSLocation()
        setISSdata(data)
        if (counter > 3){ 
            pointsData.push({ lat:data.lat, lng: data.lng, pointAltitude: 0.02 })
            setPointsArray(pointsData)
            counter = 0
        }
    }

    useEffect(() => {
        const globe = globeEl.current;
        globe.controls().autoRotate = true;
        globe.controls().autoRotateSpeed = 0.20
        console.log(globe.controls().position0);
        console.log(globe.controls().position0);
        if (ringsEl.current) {
            globe.scene().add(ringsEl.current);
            const ringsMaterial = ringsEl.current.material;
            if (ringsMaterial) {
                ringsMaterial.renderOrder = 1; // Valor mayor que el de los materiales del globo
            }
        }

        if (pointEl.current) {
            globe.scene().add(pointEl.current);
            const pointsGeometry = pointEl.current.geometry;
            if (pointsGeometry) {
              pointsGeometry.renderOrder = 2; // Valor mayor que el de los materiales del globo
            }
          }

        //get ISS location
        getISSdata()
        setInterval(getISSdata, 60000)

    }, [])


    const gData = [{
        lat: ISSdata.lat,
        lng: ISSdata.lng,
        maxR: 2,
        propagationSpeed: 0.5,
        repeatPeriod: 1500,
    }]
    
    return (
        <Globe
            ref={globeEl}
            animateIn={true}
            bumpImageUrl="//unpkg.com/three-globe/example/img/earth-topology.png"
            globeImageUrl="//unpkg.com/three-globe/example/img/earth-night.jpg" // URL de la imagen del globo
            backgroundImageUrl={Stars}
            
            pointsData={pointsArray}
            pointColor={() => 'white'}
            pointAltitude={"pointAltitude"}
            
            ringAltitude={0.1}
            ringsData={gData}
            ringColor={() => '#ff1133'}
            ringMaxRadius="maxR"
            ringPropagationSpeed="propagationSpeed"
            ringRepeatPeriod="repeatPeriod"
        />
            
    );  
}

export default Earth