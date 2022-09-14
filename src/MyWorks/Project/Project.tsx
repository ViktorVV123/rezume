import {Button} from '@mui/material';
import React, {DetailedHTMLProps, HTMLAttributes} from 'react';
import style from './Project.module.css';



type ProjectType = {
    title: string
    text: string
    style: any

}

export const Project = (props: ProjectType) => {

    return (
        <div className={style.project}>
            <div className={style.image} style={props.style} >
                <Button className={style.viewBtn} variant="outlined">Смотреть</Button>
            </div>


            <h5 className={style.textTitle}>{props.title}</h5>
            <span className={style.text}>{props.text}</span>
        </div>
    );
};

