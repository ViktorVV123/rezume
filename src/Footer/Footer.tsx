import React from 'react';
import style from './Footer.module.css'
import vkIcon from '../assets/image/vk3.jpg'
import telegramIcon from '../assets/image/telegram2.svg'
// @ts-ignore
import AOS from 'aos'
import 'aos/dist/aos.css'



export const Footer = () => {
    AOS.init();
    return (
        <div className={style.footer}>
            <div  className={style.footerContainer}>
                <div data-aos="fade-down"
                     data-aos-easing="linear"
                     data-aos-duration="1000" ><h2   className={style.title}>Victor Vlasjuk</h2></div>

                    <div className={style.socialBlock}>
                        <div data-aos="zoom-in" className={style.socialIcon}><a target="_blank" href="https://t.me/gga123321"><img src={telegramIcon} alt=""/></a></div>
                        <div data-aos="zoom-in" className={style.socialIcon}><a target="_blank" href="https://vk.com/gans553"><img src={vkIcon} alt=""/></a></div>


                </div>
                <span className={style.copyRight}>© 2022 All Rights Reserved.</span>
            </div>
        </div>
    );
};

