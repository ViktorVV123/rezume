import {Button} from '@mui/material';
import style from './Project.module.css';
// @ts-ignore
import AOS from 'aos'
import 'aos/dist/aos.css'


type ProjectType = {
    title: string
    style: any
    href:string

}

export const Project = (props: ProjectType) => {
    AOS.init();
    return (
        <div  className={style.project}>
            <div  className={style.image} style={props.style} >
                <div  data-aos="fade-down"> <Button  className={style.viewBtn}  href={props.href} variant="contained">Смотреть</Button></div>
            </div>

            <span className={style.textTitle}>{props.title}</span>
        </div>
    );
};

