import Suzume from "../assets/Lover.mp4";
import { useEffect, useRef } from "react";

const Music = () => {
    const audioRef = useRef(null);

    useEffect(() => {
        audioRef.current.play().catch(() => {
            console.log("Autoplay blocked by browser");
        });
    }, []);

    return (
        <audio
            ref={audioRef}
            src={Suzume}
            loop
            style={{ display: "none" }}
        />
    );
};

export default Music;