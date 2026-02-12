
import { useRef, useEffect } from 'react';
import gsap from "gsap";

const Back_animation = (props) => {

    useEffect(() => {
        const love = props.elem.current;

        //  Function to create floating hearts
        function createHeart() {
            const heart = document.createElement("i");
            heart.className = "ri-heart-fill";
            heart.style.position = "absolute";

            const size = gsap.utils.random(20, 60);
            heart.style.fontSize = `${size}px`;

            heart.style.left = gsap.utils.random(0, 99) + "%";

            const colors = ["#ff4d6d", "#ff758f", "#ffb3c6", "#ff006e"];
            heart.style.color =
                colors[Math.floor(Math.random() * colors.length)];

            heart.style.bottom = "-10%";
            heart.style.opacity = 1;

            love.appendChild(heart);

            gsap.to(heart, {
                y: -window.innerHeight - 200,
                duration: gsap.utils.random(5, 8),
                ease: "power1.out",
                opacity: 0,
                onComplete: () => heart.remove()
            });
        }

        // ⏳ Create hearts continuously
        const interval = setInterval(createHeart, 200);


        // 🧹 Cleanup when component unmounts
        return () => {
            clearInterval(interval);
        };
    }, []);
}

export default Back_animation
