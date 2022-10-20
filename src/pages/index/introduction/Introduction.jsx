import React from 'react';
import classes from "./Introduction.module.scss";
import IntroductionImg from "../../../img/introduction/Group 1174.png";
import Button from "../../../components/button/Button";

const Introduction = () => {
    return <section className={classes['container']}>
        <div>
            <div className={classes['product-name']}>away</div>
            <h1 className={classes['title']}>Sistem za upravljanje odmorima</h1>
            <p className={classes['introductory-text']}>
                Sistem za upravljanje godišnjim odmorima i slobodnim danima vaših zaposlenih, <span>jednostavan kao brojanje do 10.</span>
            </p>
            <div>input</div>
            <Button label="Try 1 month free" onClick={() => console.log("try for free")}/>
        </div>
        <div>
            <img src={IntroductionImg} alt="away Dashboard"/>
        </div>
    </section>
}

export default Introduction;