import React from 'react';
import style from './Contact.module.css'
import styleContainer from "../Common/style/Container.module.css";
import {Tittle} from "../Common/components/Tittle/Tittle";
import {Button} from "@mui/material";
// @ts-ignore
import AOS from 'aos'
import 'aos/dist/aos.css'

export const Contact = () => {
    AOS.init();
    return (
        <div className={style.contactsBlock} id={'contacts'}>
            <div className={`${style.contactsContainer} ${styleContainer.container}`}>
                <div  data-aos="fade-left" data-aos-duration="1200">
                <Tittle title={'Contacts'}/>
                </div>
                <form className={style.contactForm}>
                    <div className={style.visibility}>
                        <input className={style.textInput} type='text' id='c_name' placeholder='Name' required/>
                    </div>
                    <div className={style.visibility}>
                        <input className={style.textInput} type='text' id='c_name' placeholder='E-mail' required/>
                    </div>
                    <div className={style.visibility}>
                        <textarea className={style.textariaStyle} id='message' name='c_message' rows={7} placeholder='Your Message' required/>
                    </div>
                    <Button className={style.button} type='submit' data-wow-delay='.3s'  variant="outlined">Send Message</Button>
                    <div className={style.line}></div>
                </form>
            </div>
        </div>
    );
};

