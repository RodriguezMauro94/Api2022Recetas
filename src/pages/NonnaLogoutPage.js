import React from "react";
import NonnaAboutUs from "../components/NonnaAboutUs";

export default function NonnaLogoutPage() {
    return (
        <>
            {
                window.sessionStorage.clear("token")
            }
            <NonnaAboutUs />
        </>
    );
}