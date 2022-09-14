// @ts-nocheck
import React, {useState, useEffect, useRef} from 'react'
import BIRDS from 'vanta/dist/vanta.birds.min'
import style from './Main.module.css';
import styleContainer from '../Common/style/Container.module.css'
import vv from "../myphoto.jpeg";



const Main = () => {

    const [vantaEffect, setVantaEffect] = useState(0)

    const myRef = useRef(null)
    useEffect(() => {
        if (!vantaEffect) {
            setVantaEffect(BIRDS({
                el: myRef.current,
                mouseControls: true,
                touchControls: true,
                gyroControls: false,
                minHeight: 200.00,
                minWidth: 200.00,
                scale: 1.00,
                scaleMobile: 1.00,
                backgroundColor: 0x161616,
                color1: 0x160486,
                color2: 0xe836,
                colorMode: "lerpGradient",
                birdSize: 1.90,
                wingSpan: 17.00,
                separation: 86.00,
                alignment: 81.00,
                cohesion: 100.00,
                quantity: 4.00

            }))
        }
        //0x1d1d1d
        return () => {
            if (vantaEffect) vantaEffect.destroy()
        }
    }, [vantaEffect])
    return (

        <div ref={myRef} id={'main'}>

            <main>
                <div className={style.mainBlock}>
                    <div className={style.containerStyle}>

                        <div className={style.welcome}>
                            <h1 className={style.firstTitle}>Victor Vlasjuk</h1>
                            <p className={style.twoTitle}>Frontend Developer</p>

                        </div>
                        <div >
<img className={style.photo} src={vv} alt='Victor Vlasjuk'/>
                        </div>

                    </div>

                </div>
            </main>

        </div>

    );
};

export default Main;
