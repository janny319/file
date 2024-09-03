import React from "react";
import Header from "layout/Header";
import { Outlet } from "react-router-dom";

const Layout = () => {
    return (
        <div className="container">
            <Header />
            <div className="content">
                <Outlet />
            </div>
        </div>
    )
}

export default Layout;