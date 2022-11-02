import React from 'react';
import style from './Projects.module.css';
import styleContainer from '../Common/style/Container.module.css'
import {Project} from "./Project/Project";
import {Tittle} from "../Common/components/Tittle/Tittle";
import todoImage from './../assets/image/todo.jpg'
import saitImage from './../assets/image/sait.webp'
import onlineImage from './../assets/image/OnlineShop.png'
import socialImage from './../assets/image/socialNetwork.jpg'
import menuimage from './../assets/image/menu.jpg'
import testImage from './../assets/image/test.jpg'


export const Projects = () => {
    const todo = {
        backgroundImage: `url(${todoImage})`
    }
    const sait = {
        backgroundImage: `url(${saitImage})`
    }
    const online = {
        backgroundImage: `url(${onlineImage})`
    }
    const social = {
        backgroundImage: `url(${socialImage})`
    }
    const menu = {
        backgroundImage: `url(${menuimage})`
    }
    const test = {
        backgroundImage: `url(${testImage})`
    }
    return (
        <div className={style.projectsBlock} id={'projects'}>
            <div className={`${styleContainer.container} ${style.projectsContainer}`}>
                <Tittle title={'Projects'}/>
                <div className={style.projects}>

                    < Project style={todo} title={'Todolist'} href={'https://viktorvv123.github.io/Todolist/'}/>
                    < Project style={test} title={'Test'} href={'https://viktorvv123.github.io/Quiz/'}/>
                    < Project style={sait} title={'Counter'} href={'https://viktorvv123.github.io/CounterAll/'}/>
                    < Project style={social} title={'Social network'}
                              href={'https://viktorvv123.github.io/MySocialPage/'}/>
                    < Project style={menu} title={'Adaptive Menu'}
                              href={'https://viktorvv123.github.io/AdaptiveMenu/'}/>
                    < Project style={online} title={'Shop'} href={'https://viktorvv123.github.io/magazineNew/'}/>



                </div>
            </div>
        </div>
    );
};

