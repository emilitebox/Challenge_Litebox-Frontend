import React, { useEffect, useState } from "react";
import styles from "./Home.module.scss";
import VertigoEffectComponent from "../../../components/vertigo-effect-component";

const Home = () => {
    return (
        <div className={styles.home}>
            <div style={{zIndex: "-5000", position: "absolute", width:"100%"}}>
                <VertigoEffectComponent/>
            </div>
            <div style={{border: "0px solid red", position: "absolute", width: "100%"}}>NAVBAR</div>
            <div>CONTENT</div>
            <div>CONTENT</div>
        </div>
    );
};

export default Home;
