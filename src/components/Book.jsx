import CoverBelakang from "../assets/image/Cover Belakang.png"
import CoverDepan from "../assets/image/Cover Majmuatul Awrod 1.png"

export default function Book(){
    return(
        <div className="book" id="book">
            <div className="container">
                <div className="title">
                    <h3 className="roboto">Buku Pilihan</h3>
                </div>
                <div className="row">
                    <div className="content-book">
                        <div className="cover">
                            <img src={CoverDepan} alt="" />
                            <img src={CoverBelakang} alt="" />
                        </div>
                        <h5 className="roboto">Majmuatul Awrod</h5>
                        <p className="inria-serif">Majmuatul Awrod adalah buku yang berisi rangkaian doa, zikir, dan wirid yang dihimpun untuk diamalkan oleh umat Muslim secara rutin. Berisi bacaan dari Al-Quran, hadis, serta ajaran ulama, buku ini bertujuan memperkuat hubungan spiritual dengan Allah melalui doa-doa yang dibaca setiap hari, baik untuk perlindungan, keberkahan, maupun ketenangan jiwa.</p>
                        <a className="alike btn" href="/buku/Majmuatul-Awrod">Jelajahi Sekarang</a>
                    </div>
                </div>
            </div>
        </div>
    );
}