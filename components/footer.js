import Link from "next/link"
import Foot from "../styles/Footer.module.css"

export default function Footer() {
    return (
        <div className={Foot.container}>
            {/* The Legal Stuff goes here - I.e. Terms of Use, Privacy Policy, Copyright Notice */}
            {/* <div>
                <p>@Some Very Legal Stuff</p>
            </div> */}


            {/* Site Map - I.e. List of all the pages on the website that they can click  */}
            <div >
                <ul>
                    <li><Link href="/" className={Foot.links}>Home</Link></li>
                    <li><Link href="/gallery" className={Foot.links}>Gallery</Link></li>
                    <li><Link href="/contact" className={Foot.links}>Contact</Link></li>
                </ul>
            </div>

            {/* Contact Info: Email, Phone Number, Social Media Handles */}
            <div>
                <p>Phone: 702 960 9714</p>
                <p>Email: codymeyer623@gmail.com</p>
                <p>Instagram: @cxdym.p</p>
            </div>
            {/* Could Add Social Media Icons */}
            <div>
                <Link href="https://www.instagram.com/cxdym.p/" target="_blank">
                    <img className={Foot.instagram} src="igicon.png" alt="instagram icon"/>
                </Link>
            </div>
        </div>
    )
}