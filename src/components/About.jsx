import PenerbitLogo from "../assets/image/Logo Utama Penerbit ABA (P).png"
import CoverEdit from "../assets/image/Group 8.png"

export default function About(){
    return(
        <div className="about" id="about">
            <div className="container">
                <div className="row">
                    <div className="halakah-about d-flex align-items-center justify-content-between">
                        <div className="text">
                            <h1 className="roboto">Tentang <span>Halakah</span></h1>
                            <p className="inria-serif mt-3" style={{opacity:"0.85", wordSpacing:"2px", lineHeight:"30px"}}>Halakah merupakan bagian dari Penerbit Abdi Bangun Aksara, hadir menyampaikan pesan-pesan keimanan melalui buku-buku islami yang mendalam. Setiap karya yang dihadirkan adalah jembatan untuk memahami makna agama dan menggali nilai-nilai luhur Islam, menghidupkan jiwa, dan menginspirasi perjalanan ruhani.</p>
                            <a className="btn mt-5 roboto" href="#publisher-about">Baca Selengkapnya</a>
                        </div>
                        <div className="image text-center">
                            <img src={CoverEdit} alt="" />
                        </div>
                    </div>
                    <div className="publisher-about d-flex gap-3 justify-content-between" id="publisher-about">
                        <div className="image">
                            <img src={PenerbitLogo} alt="" />
                        </div>
                        <div className="text">
                            <h2 className="roboto">Tentang Penerbit Abdi Bangun Aksara</h2>
                            <p className="inria-serif mt-3" style={{opacity:"0.85", wordSpacing:"2px", lineHeight:"30px"}}>
                                Abdi Bangun Aksara hadir untuk mendukung penulis dan pecinta
                                buku di Indonesia dengan semangat tinggi. Kami berkomitmen menerbitkan
                                karya berkualitas yang inspiratif dan bermanfaat, serta menyediakan
                                dukungan penuh bagi penulis. Selain itu, kami berfokus pada
                                peningkatan literasi sebagai kunci masa depan yang lebih cerah. Baca
                                selengkapnya untuk mengetahui lebih jauh tentang penerbit Abdi Bangun Aksara.
                            </p>
                            <a className="btn mt-5 roboto" href="https://abaksara.co.id" target="_blank">Telusuri Penerbit ABA</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}