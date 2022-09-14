import React from 'react';
import style from './Skills.module.css';
import styleContainer from '../Common/style/Container.module.css'
import {Skill} from "./Skill/Skill";
import {Tittle} from "../Common/components/Tittle/Tittle";
import cssImage from './../assets/image/CSS.png'
import jsImage from './../assets/image/JS.png'
import miImage from './../assets/image/MI.png'
import reactImage from './../assets/image/React.png'
import reduxImage from './../assets/image/Redux.jpg'
import tsImage from './../assets/image/TYPESCRPT.png'


export const Skills = () => {
    const css = {
        backgroundImage: `url(${cssImage})`
    }
    const js = {
        backgroundImage: `url(${jsImage})`
    }
    const mi = {
        backgroundImage: `url(${miImage})`
    }
    const react = {
        backgroundImage: `url(${reactImage})`
    }
    const redux = {
        backgroundImage: `url(${reduxImage})`
    }
    const ts = {
        backgroundImage: `url(${tsImage})`
    }

    return (
        <div className={style.skillsBlock} id={'skills'}>
            <div className={`${styleContainer.container} ${style.skillContainer}`}>
                <Tittle title={'My skills'}/>
                <div className={style.skills}>
                    <Skill style={react} title={'REACT'}/>
                    <Skill style={ts} title={'TYPESCRIPT'}/>
                    <Skill style={js} title={'JAVASCRIPT'}/>
                    <Skill style={css} title={'HTML & CSS'}/>
                    <Skill style={mi} title={'MATERIAL-UI'}/>
                    <Skill style={redux} title={'REDUX'}/>
                </div>
            </div>


        </div>
    );
};

