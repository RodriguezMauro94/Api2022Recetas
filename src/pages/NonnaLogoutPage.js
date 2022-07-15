import React from "react";
import NonnaAboutUs from "../components/NonnaAboutUs";

export default function NonnaLoginPage() {
    return (
        <>
            {
                window.sessionStorage.clear("token")
            }
            <NonnaAboutUs />
        </>
    );
}