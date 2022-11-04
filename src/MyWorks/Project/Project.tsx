import {Button} from '@mui/material';
import style from './Project.module.css';



type ProjectType = {
    title: string
    style: any
    href:string

}

export const Project = (props: ProjectType) => {

    return (
        <div  className={style.project}>
            <div  className={style.image} style={props.style} >
                <Button  className={style.viewBtn}  href={props.href} variant="contained">Смотреть</Button>
            </div>

            <span className={style.textTitle}>{props.title}</span>
        </div>
    );
};

