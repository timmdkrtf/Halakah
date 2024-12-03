import { BiBookReader } from "react-icons/bi";
import { BsPencilSquare } from "react-icons/bs";
import { BsFolder2Open } from "react-icons/bs";

export default function Service(){
    return(
        <div className="service" id="service">
            <div className="container">
                <div>
                    <h2 className="roboto text-center">Layanan Kami</h2>
                </div>
                <div className="row mt-5">
                    <div className="service-card">
                        <BiBookReader />
                        <h4 className="roboto my-3">Buku Islami Berkualitas</h4>
                        <p className="inria-serif">Halakah menghadirkan berbagai buku bergenre Islami yang dirancang untuk meningkatkan pemahaman dan praktik keagamaan. Koleksi buku ini mencakup topik-topik penting dalam agama Islam dengan pendekatan yang mendalam dan informatif.</p>
                    </div>
                    <div className="service-card">
                        <BsFolder2Open />
                        <h4 className="roboto my-3">Kelas Pembelajaran Islami</h4>
                        <p className="inria-serif">Halakah menyediakan berbagai kelas pembelajaran Islami untuk berbagai tingkatan, dari pemula hingga mahir. Materi disusun secara komprehensif untuk memberikan pemahaman mendalam tentang pengetahuan Islam. Halakah juga bekerja sama dengan mentor profesional yang berpengalaman di bidangnya untuk memastikan kualitas pendidikan yang tinggi.</p>
                    </div>
                    <div className="service-card">
                        <BsPencilSquare />
                        <h4 className="roboto my-3">Lokakarya Penulisan Islami</h4>
                        <p className="inria-serif">Halakah menyelenggarakan Lokakarya Menulis Islami, sebuah program pengembangan yang dirancang untuk mendukung penulis dan calon penulis dalam memperdalam kemampuan menulis dengan nuansa Islami. Melalui bimbingan narasumber profesional yang berpengalaman dalam dunia penulisan Islami, peserta akan memperoleh wawasan, teknik, dan inspirasi untuk menghasilkan karya yang tidak hanya berkualitas, tetapi juga sarat nilai.</p>
                    </div>
                </div>
            </div>
        </div>
    );
}