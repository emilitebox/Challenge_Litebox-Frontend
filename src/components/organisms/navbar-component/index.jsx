import React from "react";
import styles from "./NavbarComponent.module.scss";
import LogoComponent from "../../atoms/logo";
import AddMovieComponent from "../../atoms/add-movie-button";
import MenuButtonComponent from "../../atoms/menu-button";
import NotificationButtonComponent from "../../atoms/notification-button";
import ProfileImgComponent from "../../atoms/profile-img";
import CommonSpacer from "../../atoms/spacer";

const NarbarComponent = () => {
    return (
        <nav className={styles.navbar}>
            <div className={styles.divLogo}>
                <LogoComponent/>
                <CommonSpacer marginRight={"5px"}/>
                <AddMovieComponent/>
            </div>
            <div className={styles.divButtons}>
                <MenuButtonComponent/>
                <CommonSpacer marginRight={"8px"}/>
                <NotificationButtonComponent showNotification={true}/>
                <CommonSpacer marginRight={"5px"}/>
                <ProfileImgComponent/>
            </div>
        </nav>
    );
};

export default NarbarComponent;
