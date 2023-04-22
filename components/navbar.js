import Link from "next/link"
import Nav from "../styles/Nav.module.css"

export default function Navbar() {
    return (
        <main>
            <div className={Nav.container}>
                <Link href="/" className={Nav.name} > 
                    CODY MEYER PHOTOGRAPHY
                </Link>
                <div className={Nav.links}>
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