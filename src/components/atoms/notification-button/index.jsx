import React from "react";
import styles from "./NotificationComponent.module.scss";
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';

const DotComponent = () => {
    return (
        <div className={styles.customDot}></div>
    );
};

const NotificationButtonComponent = ({showNotification}) => {
    return (
        <button className={styles.customButton}>
            <NotificationsNoneIcon sx={{color: "white", fontSize: "30px"}}/>
            {showNotification && <DotComponent />}
        </button>
    );
};

export default NotificationButtonComponent;
