import React, {useState} from 'react';
import './App.css';
import {Header} from "./Header/Header.jsx";
import Main from "./Main/Main";
import {Skills} from "./Skills/Skills";
import {Projects} from "./MyWorks/Projects";
import {Contact} from "./Contact/Contact";
import {Footer} from "./Footer/Footer";
import {Nav} from "./Nav/Nav.jsx";






function App() {



    return (

        <div className="App">

            <Nav/>
            <Main/>
            <Skills/>
            <Projects/>
            <Contact/>
            <Footer/>

        </div>

    );
}

export default App;
