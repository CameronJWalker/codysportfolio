import Link from "next/link"
import Nav from "../styles/Navbar.module.css"

export default function Navbar() {
    return (
        <main className={Nav.container}>
            <Link href="/" className={Nav.name}> Cody Meyer Photography </Link>
            <Link href="/gallery" className={Nav.gallery}> Gallery </Link>
            <Link href="/contact" className={Nav.contact}> Contact </Link>
        </main>
    )
}