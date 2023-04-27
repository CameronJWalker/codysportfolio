import Link from "next/link"
import Foot from "../styles/Footer.module.css"

export default function Footer() {
    return (
        <div className={Foot.container}>
            {/* The Legal Stuff goes here - I.e. Terms of Use, Privacy Policy, Copyright Notice */}
            {/* <div>
                <p>@Some Very Legal Stuff</p>
            </div> */}

            {/* Contact Info: Email, Phone Number, Social Media Handles */}
            <div>
                <p>702 960 9714</p>
                <p>codymeyer623@gmail.com</p>
                <p>@cxdym.p</p>
            </div>

            {/* Site Map - I.e. List of all the pages on the website that they can click  */}
            <div >
                <ul>
                    <li><Link href="/" className={Foot.links}>Home</Link></li>
                    <li><Link href="/gallery" className={Foot.links}>Gallery</Link></li>
                    <li><Link href="/contact" className={Foot.links}>Contact</Link></li>
                </ul>
            </div>

            {/* Could Add Social Media Icons */}
            <div>
                <p>Icons if you want</p>
            </div>
        </div>
    )
}