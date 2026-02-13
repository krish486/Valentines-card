import Suzume from "../assets/Suzume.mp3"
import { useEffect, useRef } from "react";

const Music = () => {
    const audioRef = useRef(null)
    useEffect(() => {
        const playMusic = () => {
            if (audioRef.current) {
                audioRef.current.play();
            }
            window.removeEventListener("click", playMusic);
        };

        window.addEventListener("click", playMusic);

        return () => {
            window.removeEventListener("click", playMusic);
        };
    }, []);
    return (
        <audio ref={audioRef} src={Suzume}></audio>
    )
}

export default Music
