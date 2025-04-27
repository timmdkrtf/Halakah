import CoverBelakang from "../assets/image/Cover Majmuatul Awrod.png"
import CoverDepan from "../assets/image/Cover Majmuatul Awrod 1.png"
import CoverDepanMetodeTalaqqi from "../assets/image/Cover-depan-metode-talaqqi.png"
import CoverBelakangMetodeTalaqqi from "../assets/image/Cover Talaqqi.png"

import CountdownTimer from "../components/CountdownTimer"

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
                        <p className="inria-serif">Majmuatul Awrod adalah buku yang berisi rangkaian doa, zikir, dan wirid yang dihimpun untuk diamalkan oleh umat Muslim secara rutin. Berisi bacaan dari Al-Qur'an, hadis, serta ajaran ulama, buku ini bertujuan memperkuat hubungan spiritual dengan Allah melalui doa-doa yang dibaca setiap hari, baik untuk perlindungan, keberkahan, maupun ketenangan jiwa.</p>
                        <a className="alike btn" href="/buku/Majmuatul-Awrod">Jelajahi Sekarang</a>
                    </div>
                    <div className="content-book kedua">
                        <div className="cover">
                            <img src={CoverDepanMetodeTalaqqi} alt="" />
                            <img src={CoverBelakangMetodeTalaqqi} alt="" />
                        </div>
                        <h5 className="roboto">Metode Talaqqi: Metode Cepat Belajar Membaca Al-Qur'an</h5>
                        <p className="inria-serif">Buku Metode Talaqqi adalah panduan praktis untuk belajar membaca Al-Qur'an dengan mudah dan cepat. Terdiri dari tiga bab, buku ini membahas cara membaca Al-Qur'an, hukum tajwid, dan motivasi dalam membacanya. Dengan metode talaqqi, buku ini membantu pembaca memahami Al-Qur’an secara efektif dan mendalam.</p>
                        <a className="alike btn" href="/buku/Metode-Talaqqi">Jelajahi Sekarang</a>
                    </div>
                </div>
                {/* <div className="OnGoingProject">
                    <CountdownTimer targetDate="2025-02-26T12:00:00" />
                </div> */}
            </div>
        </div>
    );
}