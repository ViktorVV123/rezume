import React from 'react';
import style from './Projects.module.css';
import styleContainer from '../Common/style/Container.module.css'
import {Project} from "./Project/Project";
import {Tittle} from "../Common/components/Tittle/Tittle";
import todoImage from './../assets/image/todo.jpg'
import saitImage from './../assets/image/sait.webp'


export const Projects = () => {
    const todo={
        backgroundImage:`url(${todoImage})`
    }
    const sait={
        backgroundImage:`url(${saitImage})`
    }
    return (
        <div className={style.projectsBlock} id={'projects'}>
            <div className={`${styleContainer.container} ${style.projectsContainer}`}>
                <Tittle title={'Projects'}/>
                <div className={style.projects}>
                    < Project style={todo} title={'First Project'} text={'i use two language witch project: css,js'}/>
                    < Project style={sait} title={'Two Project'} text={' i use three language witch project:css, js, ts'} />
                    < Project style={sait} title={'Two Project'} text={' i use three language witch project:css, js, ts'} />

                </div>
            </div>
        </div>
    );
};

