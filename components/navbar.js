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
        <main>
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
                            <li><Link href="/" className={Nav.home}>Home</Link></li>
                            <li><Link href="/gallery" className={Nav.gallery}>Gallery</Link></li>
                            <li><Link href="/contact" className={Nav.contact}>Contact</Link></li>
                        </ul>
                    </div> 
            </div>
        </main>
    )
}