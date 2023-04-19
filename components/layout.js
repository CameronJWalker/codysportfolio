import Navbar from "../components/navbar"
import Footer from "../components/footer"

export default function Layout({ children }) {
    return (
        <div>
            <Navbar />
            <main>{children}</main>
            <Footer />
        </div>
    )
  }