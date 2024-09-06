import React from "react";
import gsap from "gsap";
import { useGSAP } from '@gsap/react'

const MainGate = () => {

    useGSAP(() => {
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: '.gate',
                toggleActions: 'play pause restart none',
            }
        });
        tl.fromTo(
            '.gate h1',
            { opacity: 0, y: -50 },
            { opacity: 1, y: 0, duration: 1.5}
        )
        tl.fromTo(
            '.gate p',
            {opacity: 0, y: 80 },
            {opacity: 1, y: 0, duration: 1.5 },
            '-=1'
        )
    },[]);

    return(
        <div className="gate">
            <h1>Janny's Page</h1>
            <p>
                안녕하세요. <br/>
                웹퍼블리셔 이은재입니다.
            </p>
        </div>
    )
}

export default MainGate;