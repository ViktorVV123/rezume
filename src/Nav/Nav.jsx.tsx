
import React, {useState} from 'react';
import style from './Nav.module.css';
import {Link} from "react-router-dom";
import Main from "../Main/Main";
import {ListGroupItem} from "react-bootstrap";



export const Nav = () => {



    return (
<div className={style.containerNav} >
<div className={style.nav}>

            <a className={style.text} href="#main">Main</a>
            <a className={style.text} href="#skills">Skills</a>
            <a className={style.text} href="#projects">Projects</a>
            <a className={style.text} href="#contacts">Contacts</a>
</div>


       </div>

    );
}

