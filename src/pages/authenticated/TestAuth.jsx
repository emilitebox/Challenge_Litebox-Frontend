import React from "react";
import { useNavigate } from 'react-router-dom';

const TestAuth = () => {
    const navigate = useNavigate();

    return (
        <div>
            <div onClick={()=>{navigate("/testauth2")}}>
                AUTH2 ROUTE
            </div>
            <div onClick={()=>{navigate("/test")}}>
                TEST ROUTE
            </div>
        </div>
    );
};

export default TestAuth;
