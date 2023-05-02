import Navbar from "../components/navbar"
import Footer from "../components/footer"

export default function Layout({ children }) {
    return (
        <div className="pageWrap">
            <Navbar />
            <main>
                {children}
            </main>
            <Footer />
        </div>
    )
  }