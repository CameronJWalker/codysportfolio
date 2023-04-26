import Link from "next/link"
import Foot from "../styles/Footer.module.css"

export default function Footer() {
    return (
        <div className={Foot.container}>
            {/* The Legal Stuff goes here - I.e. Terms of Use, Privacy Policy, Copyright Notice */}
            <div>
                <p>@Some Very Legal Stuff</p>
            </div>

            {/* Contact Info: Email, Phone Number, Social Media Handles */}
            <div>
                <p>Email</p>
                <p>Phone Number</p>
                <p>Any Social Media Handles</p>
            </div>

            {/* Site Map - I.e. List of all the pages on the website that they can click  */}
            <div>
                <ul>
                    <li><Link href="/">Home</Link></li>
                    <li><Link href="/gallery">Gallery</Link></li>
                    <li><Link href="/contact">Contact</Link></li>
                </ul>
            </div>

            {/* Could Add Social Media Icons */}
            <div>
                <p>Icons if you want</p>
            </div>
        </div>
    )
}