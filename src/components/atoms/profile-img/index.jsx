import React from "react";
import styles from "./ProfileImgComponent.module.scss";
import Logo from "../../../assets/svg/react.svg"

const ProfileImgComponent = () => {
    return (
        <div className={styles.customProfileBox}>
            <img src={Logo} alt="Avatar" className={styles.customProfileImg}/>
        </div>
    );
};

export default ProfileImgComponent;
