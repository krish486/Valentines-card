import { useRef, useState } from "react";
import rose from "../assets/rose.png";
import { Link } from "react-router-dom";
import Back_animation from "./Back_animation";

const Card = () => {

  let backref = useRef(null)
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => {
    setIsOpen(prev => !prev);
  };


  return (
    <>
      <div className="wrapper" ref={backref}>
        <div className={`card ${isOpen ? "open" : ""}`}>
          <div className="front">
            <div className="front-face">
              <h2>Warning: This card contains feelings.🤧🤧</h2>
              <h3>And they’re all for you.
                Will you be my Valentine? 💕</h3>
              <button onClick={() => setIsOpen(!isOpen)}>
                yes
              </button>
            </div>
            <div className="back-face">
              <h2>I</h2>
              <div className="heart">
                <svg viewBox="0 0 500 500">
                  <path
                    d="M250 400 C 100 250, 80 150, 170 120 C 220 100, 250 140, 250 170 C 250 140, 280 100, 330 120 C 420 150, 400 250, 250 400"
                    fill="#e60026"
                  />
                </svg>
              </div>
              <h2>you</h2>
              <button onClick={() => setIsOpen(!isOpen)}>
                Close
              </button>
            </div>
          </div>
          <div className="inside">
            <img src={rose} alt="" />
            <button>
              <Link to="/animation">Click Me</Link>
            </button>
          </div>
        </div>
      </div>
      <Back_animation elem={backref}/>
    </>
  )
}

export default Card
