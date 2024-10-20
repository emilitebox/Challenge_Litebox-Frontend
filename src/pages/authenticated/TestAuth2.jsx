import React from "react";
import { useNavigate } from 'react-router-dom';

const TestAuth = () => {
    const navigate = useNavigate();

    return (
        <div onClick={()=>{navigate("/testauth")}}>
            AUTH ROUTE
        </div>
    );
};

export default TestAuth;
