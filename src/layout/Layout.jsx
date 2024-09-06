import React from "react";
import Header from "layout/Header";
import Profile from "sections/Profile";
import Portfolio from "sections/Portfolio"
import MainGate from "sections/MainGate";
import gsap from "gsap";
import { useGSAP } from '@gsap/react'

export const menuItems = [
    {
        name: 'Profile',
        link: '/profile', component: Profile,
    },
    {
        name: 'Portfolio',
        link: '/portfolio', component: Portfolio,
    },
]

const Layout = () => {

    useGSAP(() => {
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: '.profile',
                start: "top top",
                toggleActions: "play reverse play reverse",
            },
        });
        tl.to(
            '.nav__item',
            { color: 'transtions', duration: 0.5 }
        );
        tl.to(
            '.header',
            { borderBottom: 'none', duration: 0.5 }
        );
    },[]);


    return (
        <div className="container">
            <Header />
            <MainGate />
            <Profile />
            <Portfolio />
        </div>
    )
}

export default Layout;