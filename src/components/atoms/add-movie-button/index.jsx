import React from "react";
import styles from "./AddMovieComponent.module.scss";
import AddIcon from '@mui/icons-material/Add';

const AddMovieComponent = () => {
    return (
        <button className={styles.customButton}>
            <AddIcon fontSize="14px" sx={{color: "white", marginTop:"-3px"}}/>
            <p className={styles.addMovie}>AGREGAR PELÍCULA</p>
        </button>
    );
};

export default AddMovieComponent;
