import React, {useState, useContext} from "react";
import { AuthContextMemorySpace } from '../../context/AuthContext';

const TestAuth = () => {
    const {user, setUser} = useContext(AuthContextMemorySpace);

    return (
        <div onClick={()=>{setUser("test")}}>
            TESTAUTH
        </div>
    );
};

export default TestAuth;
