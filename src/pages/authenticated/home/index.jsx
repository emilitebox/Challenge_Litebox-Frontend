import React, { useEffect, useState } from "react";
import styles from "./Home.module.scss";
import VertigoEffectComponent from "../../../components/templates/vertigo-effect-component";
import NarbarComponent from "../../../components/organisms/navbar-component";

const Home = () => {
    return (
        <div className={styles.page}>
            <div className={styles.pageBackground}>
                <VertigoEffectComponent/>
            </div>
            <div className={styles.pageContent}>
                {/* <NarbarComponent/>
                <div>test</div> */}
                <div style={{width: "90%", minHeight: "100vh"}}>
                    <NarbarComponent/>
                </div>
                <div style={{border: "1px solid red"}}>MOBILE CONTENT</div>
            </div>
        </div>
    );
};

export default Home;
