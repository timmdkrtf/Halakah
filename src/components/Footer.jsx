import { BsWhatsapp } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";
import { BsFacebook } from "react-icons/bs";
import LogoSecondary from "../assets/image/halakah(N).png"

export default function Footer(){
    return(
        <footer id="kontak">
            <div className="container">
                <div className="row">
                    <div className="col-lg-5 col-md-6 col-12">
                        <img src={LogoSecondary} />
                        <p>bagian dari Penerbit Abdi Bangun Aksara</p>
                    </div>
                    <div className="col-lg-3 col-md-6 col-12">
                    <h4>Menu</h4>
                    <ul style={{listStyleType:"none", padding:"0"}}>
                        <li className="pb-2">Beranda</li>
                        <li className="pb-2">Tentang Kami</li>
                        <li className="pb-2">Layanan</li>
                        <li className="pb-2">Buku</li>
                    </ul>
                    </div>
                    <div className="col-lg-3 col-md-6 col-12 link-contact">
                    <h4>Kontak</h4>
                    <ul style={{listStyleType:"none", padding:"0"}}>
                        <li className="pb-2">
                            <a href="https://api.whatsapp.com/send?phone=6281288048052" target="_blank" style={{color: "white", textDecoration: "none"}}>
                                <BsWhatsapp className="me-2" />
                                62 812-8804-8052
                            </a>
                        </li>
                        <li className="pb-2">
                            <a href="https://www.instagram.com/halakah.co.id" target="_blank" style={{color: "white", textDecoration: "none"}}>
                                <BsInstagram className="me-2" />
                                halakah.co.id
                            </a>
                        </li>
                        <li className="pb-2">
                            <a href="https://www.facebook.com/profile.php?id=61561826281024" target="_blank" style={{color: "white", textDecoration: "none"}}>
                                <BsFacebook className="me-2" />
                                Halakah
                            </a>
                        </li>
                    </ul>
                    </div>
                </div>
                <div className="bottom">
                    <hr />
                    <p className="text-end mb-0 pb-3">© PT Abdi Bangun Aksara &middot; All Rights Reserved</p>
                </div>
            </div>
        </footer>
    );
}