import React from 'react';
import style from './Skill.module.css';


type skillProps={
    title:string
    style:any
}

export const Skill = (props:skillProps) => {
    return (
        <div className={style.skill}>
            <div className={style.icon} style={props.style}></div>

            <h3 className={style.textTitleSkill}>{props.title}</h3>


        </div>
    );
};

