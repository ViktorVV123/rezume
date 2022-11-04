import React from 'react';
import style from './Skill.module.css';
// @ts-ignore
import AOS from 'aos'
import 'aos/dist/aos.css'


export type skillProps={
    title:string
    style:any
}


export const Skill = (props:skillProps) => {
    AOS.init();




    return (
        <div className={style.skill}>

            <div  data-aos="fade-up" className={style.icon} style={props.style}></div>

            <h3 data-aos="fade-up-right" className={style.textTitleSkill}>{props.title}</h3>


        </div>
    );
};

