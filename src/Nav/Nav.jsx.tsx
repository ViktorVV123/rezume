
import React, {useState} from 'react';
import style from './Nav.module.css';
import {Link} from "react-router-dom";
import Main from "../Main/Main";



export const Nav = () => {



    return (
<div className={style.containerNav}>
        <div className={style.nav}>

            <a  href="#main">Main</a>
            <a  href="#skills">Skills</a>
            <a  href="#projects">Projects</a>
            <a  href="#contacts">Contacts</a>



        </div></div>

    );
}

