// @ts-nocheck
import React, {useState, useEffect, useRef} from 'react'
import BIRDS from 'vanta/dist/vanta.birds.min'
import style from './Main.module.css';
import vv2 from "../myphoto.jpg";
// @ts-ignore
import AOS from 'aos'
import 'aos/dist/aos.css'

const Main = () => {
    AOS.init();
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

        <div ref={myRef} className={style.main} id={'main'}>
            <div className={style.container}>


                    <div className={style.welcome}>
                        <h1 className={style.firstTitle}>Victor Vlasjuk</h1>
                        <p className={style.twoTitle}>Frontend Developer</p>

                    </div>
                    <div data-aos="fade-left" data-aos-easing="linear"
                         data-aos-duration="3000">
                        <img className={style.photo} src={vv2} alt='Victor Vlasjuk'/>
                    </div>



            </div>


        </div>

    );
};

export default Main;
