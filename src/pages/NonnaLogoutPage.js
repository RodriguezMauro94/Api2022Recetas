import React from "react";
import { useNavigate } from "react-router-dom";

export default function NonnaLoginPage() {
    let navigate = useNavigate();
    return (
        <>
            {
                window.sessionStorage.clear("token")
            }
            {
                navigate("../", { replace: true })
            }
        </>
    );
}