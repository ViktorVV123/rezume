import React from 'react';
import style from './Title.module.css'


type TittleType = {
    title: string
}

export const Tittle = (props: TittleType) => {
    return (
        <div >
            <h3 className={style.title}>{props.title}</h3>
            <div className={style.moduleLine}></div>
        </div>
    );
};
