import { useEffect, useRef } from "react";
import Back_animation from "./Back_animation";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useLocation } from "react-router-dom";


const Animation = () => {

    let location = useLocation();
    let backref = useRef(null)

    useGSAP(function () {

        const tl = gsap.timeline();

        tl.from(".animation", {
            scale: 1.2,
            duration: 3,
            ease: "power2.out"
        });

        tl.from(".first", {
            y: -50,
            opacity: 0,
            duration: 1.5
        });

        tl.from(".word", {
            y: 50,
            opacity: 0,
            duration: 1.5,
            stagger: 0.3,
            ease: "power2.out"
        });

    }, { dependencies: [location.pathname] })


    return (
        <>
            <div className="animation">
                <div className="love" ref={backref}>
                    <i className="ri-heart-fill first"></i>
                    <h1 className="text">
                        {"I don’t say this often, but your presence really means something to me."
                            .split(" ")
                            .map((word, index) => (
                                <span key={index} className="word">
                                    {word}&nbsp;
                                </span>
                            ))}
                    </h1>
                </div>
            </div>
            <Back_animation elem={backref} />
        </>
    );
};

export default Animation;
