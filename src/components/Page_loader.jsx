import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { useRef } from 'react'
import { useLocation } from 'react-router-dom'

const Page_loader = (props) => {

    let stairRef = useRef(null)

    let location = useLocation()

    let stairParent = useRef(null)

    let pageRef = useRef(null)

    useGSAP(function () {
        const tl = gsap.timeline()

        tl.to(stairParent.current, {
            display: "block"
        })

        tl.from(stairRef.current, {
            scale: 0,
            rotate: "360deg",
            duration: 2,
        })
        tl.to(stairRef.current, {
            scale: 0,
            duration: 2,
        })

        tl.to(stairParent.current, {
            display: "none"
        })

        tl.to(stairRef.current, {
            y: "0%",
        })


        gsap.from(pageRef.current, {
            scale: 1.5,
            opacity: 0,
            delay: 2,
            duration: 2
        })

    }, [location.pathname])

    return (
        <div>
            <div ref={stairParent} className='loaders'>
                <div className='loads'>
                    <svg viewBox="0 0 500 500" ref={stairRef} className='stair'>
                        <path
                            d="M250 400 C 100 250, 80 150, 170 120 C 220 100, 250 140, 250 170 C 250 140, 280 100, 330 120 C 420 150, 400 250, 250 400"
                            fill="#e60026"
                        />
                    </svg>
                </div>
            </div>
            <div ref={pageRef}>
                {props.children}
            </div>
        </div>
    )
}

export default Page_loader
