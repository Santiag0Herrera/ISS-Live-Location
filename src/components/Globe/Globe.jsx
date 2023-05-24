import React, {useState, useEffect, useRef} from 'react';
import Globe from 'react-globe.gl';
import Stars from '../../assets/galaxy_starfield.png'
import { getISSLocation } from '../../services/getISSLocation';

const Earth = () => {

    const [ISSdata, setISSdata] = useState({})
    const [windowWidth, setWindowWidth] = useState(window.innerWidth)

    const globeEl = useRef();
    const ringsEl = useRef(null);

    async function getISSdata (){
        const data = await getISSLocation()
        setISSdata(data)
    }

    useEffect(() => {
        const globe = globeEl.current;
        // Auto-rotate
        globe.controls().autoRotate = true;
        globe.controls().autoRotateSpeed = -0.10
        if (ringsEl.current) {
            globe.scene().add(ringsEl.current);
            const ringsMaterial = ringsEl.current.material;
            if (ringsMaterial) {
                ringsMaterial.renderOrder = 1; // Valor mayor que el de los materiales del globo
            }
        }

        getISSdata()

        //get ISS location
        setInterval(getISSdata, 3000)

    }, [])

    useEffect(()=>{
        setWindowWidth(window.screen.width)
        console.log(window.screen.width)
    }, [window.screen.width])


    const gData = [{
        lat: ISSdata.lat,
        lng: ISSdata.lng,
        maxR: 2,
        propagationSpeed: 0.5,
        repeatPeriod: 1500
    }]
    
    return (
        <Globe
            width={windowWidth}
            ref={globeEl}
            ringsEl={ringsEl}
            ringAltitude={0.1}
            animateIn={false}
            ringsData={gData}
            ringColor={() => '#ff1133'}
            ringMaxRadius="maxR"
            ringPropagationSpeed="propagationSpeed"
            ringRepeatPeriod="repeatPeriod"
            bumpImageUrl="//unpkg.com/three-globe/example/img/earth-topology.png"
            globeImageUrl="//unpkg.com/three-globe/example/img/earth-night.jpg" // URL de la imagen del globo
            backgroundImageUrl={Stars}
        />
    );  
}

export default Earth