import Link from "next/link"
import Nav from "../styles/Nav.module.css"
import { useState, useEffect, useRef } from "react"

export default function Navbar() {
    const [display, setDisplay] = useState(true)

    const handleClick = () => {
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
                { 
                    display && 
                    
                    <div className={Nav.links} >
                        <ul>
                            <li><Link href="/" className={Nav.home}>Home</Link></li>
                            <li><Link href="/gallery" className={Nav.gallery}>Gallery</Link></li>
                            <li><Link href="/contact" className={Nav.contact}>Contact</Link></li>
                        </ul>
                    </div> 
                }
            </div>
        </main>
    )
}