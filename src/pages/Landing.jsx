import Navbar from "../components/Navbar"
import About from "../components/About"
import Service from "../components/Service"
import Book from "../components/Book"
import Footer from "../components/Footer"

export default function Landing(){
    return(
        <div>
            <Navbar />
            <About />
            <Service />
            <Book />
            <Footer />
        </div>
    );
}