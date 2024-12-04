import coverDepan from "../assets/image/Cover Majmuatul Awrod 1.png";
import coverBelakang from "../assets/image/Cover Majmuatul Awrod.png";
import Logo from "../assets/image/1. Halakah Logo Utama (P).png";

import { useState } from "react";

import { BsWhatsapp } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";
import { BsFacebook } from "react-icons/bs";

export default function MajmuBook() {
  const breadcrumbStyle = {
    "--bs-breadcrumb-divider": `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='8' height='8'%3E%3Cpath d='M2.5 0L1 1.5 3.5 4 1 6.5 2.5 8l4-4-4-4z' fill='%236c757d'/%3E%3C/svg%3E")`,
  };

  const [showBackCover, setShowBackCover] = useState(false);
  const [price, setPrice] = useState({ current: "Rp125.000" });
  const [isSoftCover, setIsSoftCover] = useState(false);
  const [href, setHref] = useState(
    "https://api.whatsapp.com/send?phone=6281288048052&text=Halo%20kak%2C%20saya%20ingin%20memesan%20buku%20hard%20cover%20Majmuatul%20Awrod"
  );

  const toggleCover = () => setShowBackCover((prev) => !prev);

  const updatePrice = (format) => {
    if (format === "softCover") {
      setPrice({ current: "Rp100.000" });
      setIsSoftCover(true);
      setHref(
        "https://api.whatsapp.com/send?phone=6281288048052&text=Halo%20kak%2C%20saya%20ingin%20memesan%20buku%20soft%20cover%20Majmuatul%20Awrod"
      );
    } else {
      setPrice({ current: "Rp125.000" });
      setIsSoftCover(false);
      setHref(
        "https://api.whatsapp.com/send?phone=6281288048052&text=Halo%20kak%2C%20saya%20ingin%20memesan%20buku%20hard%20cover%20Majmuatul%20Awrod"
      );
    }
  };

  return (
    <>
      <div
        className="modal fade"
        id="exampleModal"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5 roboto" id="exampleModalLabel">
                Deskripsi
              </h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body inria-serif">
              <p>
                Majmuatul Awrod adalah buku yang berisi doa dan zikir harian
                yang dibaca oleh umat Islam. Buku ini membantu pembaca
                memperkaya amalan ibadah sehari-hari, termasuk doa-doa penting,
                zikir rutin, serta shalawat untuk Nabi Muhammad SAW. Dengan
                susunan yang rapi, buku ini memudahkan umat Islam dalam
                menghafal dan mengamalkan doa untuk berbagai situasi. Sebagai
                panduan ibadah, Majmuatul Awrod membantu umat Islam berzikir
                dengan disiplin dan terstruktur, serta meningkatkan kualitas
                ibadah mereka.
              </p>
              <p>
                Buku ini disusun oleh Majlis Al-Ihya di bawah bimbingan Guru Abi
                K.H. M. Husni Thamrin Padmawijaya Al-Banjari, sebagai panduan
                wirid yang dapat digunakan oleh jamaah dan umat Muslim secara
                umum. Dengan tujuan memperkuat amalan zikir dan ibadah, panduan
                ini dirancang untuk membantu umat Islam melaksanakan wirid
                harian dengan tertib dan terarah, sehingga dapat menjadi bekal
                spiritual yang memperkuat hubungan dengan Allah SWT.
              </p>
            </div>
          </div>
        </div>
      </div>

      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container">
          <a className="navbar-brand" href="#">
            <img src={Logo} alt="" style={{ width: "85px" }} />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarTogglerDemo02"
            aria-controls="navbarTogglerDemo02"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
            <div class="d-flex gap-2 ms-auto">
              <a href="https://wa.me/message/COYL226EZJTZC1" target="_blank">
                <BsWhatsapp className="fs-5" />
              </a>
              <a href="https://www.instagram.com/halakah.co.id" target="_blank">
                <BsInstagram className="fs-5" />
              </a>
              <a
                href="https://www.facebook.com/profile.php?id=61561826281024"
                target="_blank"
              >
                <BsFacebook className="fs-5" />
              </a>
            </div>
          </div>
        </div>
      </nav>
      <div className="majmu">
        <div className="container">
          <nav style={breadcrumbStyle} aria-label="breadcrumb">
            <ol className="breadcrumb roboto fs-6">
              <li className="breadcrumb-item">
                <a href="/">Beranda</a>
              </li>
              <li className="breadcrumb-item">
                <a href="/#book">Daftar Buku Halakah</a>
              </li>
              <li className="breadcrumb-item active" aria-current="page">
                Majmuatul Awrod
              </li>
            </ol>
          </nav>
          <div className="content">
            <div className="cover">
              <img
                id="bookCover"
                src={showBackCover ? coverBelakang : coverDepan}
                alt=""
              />
              <button onClick={toggleCover} className="d-flex">
                {showBackCover ? "Cover Depan" : "Cover Belakang"}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-arrow-right mt-1 ms-1"
                  viewBox="0 0 16 16"
                >
                  <path
                    fillRule="evenodd"
                    d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8"
                  />
                </svg>
              </button>
            </div>
            <div className="detail">
              <h2 className="roboto">Majmuatul Awrod</h2>
              <div className="title ">
                <h5 className="roboto">Dapatkan sekarang!</h5>
                <div className="harga">
                  <h3 className="inria-serif">{price.current}</h3>
                </div>
              </div>
              <div className="jenis-buku ">
                <h6 className="roboto">Format Buku</h6>
                <div className="button roboto">
                  <button
                    onClick={() => updatePrice("softCover")}
                    className={`format-button ${isSoftCover ? "active" : ""}`}
                    disabled
                  >
                    Soft Cover
                  </button>
                  <button
                    onClick={() => updatePrice("hardCover")}
                    className={`format-button ${!isSoftCover ? "active" : ""}`}
                  >
                    Hard Cover
                  </button>
                </div>
              </div>
              <a
                id="href"
                className="text-decoration-none"
                href={href}
                target="_blank"
              >
                <button className="d-flex ">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="bi bi-whatsapp mt-1 me-2 roboto"
                    viewBox="0 0 16 16"
                  >
                    <path d="M13.601 2.326A7.85 7.85 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.9 7.9 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.9 7.9 0 0 0 13.6 2.326zM7.994 14.521a6.6 6.6 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.56 6.56 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592m3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.73.73 0 0 0-.529.247c-.182.198-.691.677-.691 1.654s.71 1.916.81 2.049c.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232" />
                  </svg>
                  Pesan Sekarang!
                </button>
              </a>
              <div className="deskripsi ">
                <h6 className="roboto">Deskripsi</h6>
                <p className="inria-serif">
                  Majmuatul Awrod adalah buku yang berisi doa dan zikir harian
                  yang dibaca oleh umat Islam. Buku ini membantu pembaca
                  memperkaya amalan ibadah sehari-hari, termasuk doa-doa
                  penting, zikir rutin, serta shalawat untuk Nabi Muhammad SAW.
                  Dengan susunan yang rapi, buku ini memudahkan umat Islam dalam
                  menghafal dan mengamalkan doa untuk berbagai situasi. Sebagai
                  panduan ibadah, Majmuatul Awrod membantu umat Islam berzikir
                  dengan disiplin dan terstruktur, serta meningkatkan kualitas
                  ibadah mereka...
                </p>
                <button
                  type="button"
                  className="btn btn-primary d-flex roboto"
                  data-bs-toggle="modal"
                  data-bs-target="#exampleModal"
                >
                  Baca Selengkapnya
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="18"
                    fill="currentColor"
                    className="bi bi-chevron-down ms-2"
                    viewBox="0 0 16 16"
                  >
                    <path
                      fillRule="evenodd"
                      d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708"
                    />
                  </svg>
                </button>
              </div>
              <div className="info-footer ">
                <h6 className="roboto">Detail Buku</h6>
                <div className="flex-info">
                  <div className="text">
                    <h6 className="roboto">Penerbit</h6>
                    <p className="inria-serif">Abdi Bangun Aksara</p>
                  </div>
                  <div className="text">
                    <h6 className="roboto">Lebar</h6>
                    <p className="inria-serif">12,5 cm</p>
                  </div>
                  <div className="text">
                    <h6 className="roboto">ISBN</h6>
                    <p className="inria-serif">9786231044921</p>
                  </div>
                  <div className="text">
                    <h6 className="roboto">Halaman</h6>
                    <p className="inria-serif">vi + 328</p>
                  </div>
                  <div className="text">
                    <h6 className="roboto">Bahasa</h6>
                    <p className="inria-serif">Indonesia</p>
                  </div>
                  <div className="text">
                    <h6 className="roboto">Panjang</h6>
                    <p className="inria-serif">17,6 cm</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
