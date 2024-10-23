import React from "react";
import styles from "./MenuButtonComponent.module.scss";
import viteLogo from "../../../assets/svg/menu2.svg"

const MenuButtonComponent = () => {
    return (
        <button className={styles.customButton}>
            <img src={viteLogo} className="logo" alt="Vite logo" />
        </button>
    );
};

export default MenuButtonComponent;
