import React from "react";
import styles from "./LogoComponent.module.scss";

const LogoComponent = () => {
    return (
        <p className={styles.logo}>Lite<span className={styles.logoSpan}>flix</span></p>
    );
};

export default LogoComponent;
