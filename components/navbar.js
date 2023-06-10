import Link from "next/link"
import Nav from "../styles/Nav.module.css"
import { useState, useRef } from "react"

export default function Navbar() {
    const [display, setDisplay] = useState(true)

    const myNavRef = useRef(null);

    const handleClick = () => {
        myNavRef.current.style.display = display ? "flex" : "none";
        setDisplay(!display)
    }

    return (
        <div className={Nav.center}>
            <div className={Nav.container}>
                <Link href="/" className={Nav.name} > 
                    CODY MEYER PHOTOGRAPHY
                </Link>
                <div className={Nav.toggleButton} onClick={handleClick}>
                    <span className={Nav.bar}></span>
                    <span className={Nav.bar}></span>
                    <span className={Nav.bar}></span>
                </div>
                    <div className={Nav.links} ref={myNavRef}>
                        <ul>
                            <li><Link href="/Gallery" className={Nav.gallery}>Gallery</Link></li>
                            <li><Link href="/about" className={Nav.contact}>About</Link></li>
                            <li><Link href="https://drive.google.com/file/d/1PooIoxK4V0Qx_nBynE3_o-_AsIohj9uy/view" target="_blank" className={Nav.contact}>Resume</Link></li>
                        </ul>
                    </div> 
            </div>
        </div>
    )
}