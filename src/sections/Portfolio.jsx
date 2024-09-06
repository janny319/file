import React, { useRef} from "react";
import portfolioData from "dataJson/portfolioData.json";
import gsap from "gsap";
import { useGSAP } from "@gsap/react"
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(useGSAP, ScrollTrigger);

const Portfolio = () => {
    const list = useRef()

    useGSAP(() => {
        const items = gsap.utils.toArray('.portfolid-box__item');

        items.forEach((item) => {
            gsap.to(item, {
                x: 150,
                scrollTrigger: {
                  trigger: item,
                  start: 'bottom bottom',
                  end: 'top 20%',
                  scrub: true,
                  // markers: true,
                },
              });
            // gsap.fromTo(
            //     item,
            //     { opacity:0, y: 50 },
            //     { opacity: 1, y: 0, duration: 0.5,
            //         scrollTrigger: {
            //             trigger: item,
            //             start: 'top 80%',
            //             end: 'top 50%',
            //         }
            //     },
            // )
        });
    },
    {scope: list}
);

    return(
        <div className="portfolio">
            <div className="portfolio-box">
                <ul className="portfolio-box__list" ref={list}>
                    {portfolioData.map((item) => (
                        <li key={item.id} className="portfolio-box__item">
                            <a href="#none">
                                <div className="portfolio-box__item__thumbnail">
                                    <img src={item.thumbnail} alt={item.title} />
                                </div>
                                <div className="portfolio-box__item__text">
                                    <strong>{item.title}</strong>
                                    <span>{item.description}</span>
                                </div>
                            </a>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}

export default Portfolio;