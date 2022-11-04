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
// @ts-ignore
import AOS from 'aos'
import 'aos/dist/aos.css'


export const Projects = () => {
    AOS.init();
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
                <div  data-aos="fade-right" data-aos-duration="1200">
                <Tittle title={'Projects'}/>
                </div>
                <div className={style.projects}>

                    <div data-aos="flip-left">< Project style={todo} title={'Todolist'}
                                                        href={'https://viktorvv123.github.io/Todolist/'}/></div>
                    <div data-aos="flip-left">< Project style={test} title={'Test'}
                                                        href={'https://viktorvv123.github.io/Quiz/'}/></div>
                    <div data-aos="flip-left">< Project style={sait} title={'Counter'}
                                                        href={'https://viktorvv123.github.io/CounterAll/'}/></div>
                    <div data-aos="flip-right">< Project style={social} title={'Social network'}
                                                        href={'https://viktorvv123.github.io/MySocialPage/'}/></div>
                    <div data-aos="flip-right">< Project style={menu} title={'Adaptive Menu'}
                                                        href={'https://viktorvv123.github.io/AdaptiveMenu/'}/></div>
                    <div data-aos="flip-right">< Project style={online} title={'Shop'}
                                                        href={'https://viktorvv123.github.io/magazineNew/'}/></div>


                </div>
            </div>
        </div>
    );
};

