import cover from "../assets/image/question book mark.png";
import Logo from "../assets/image/1. Halakah Logo Utama (P).png";

import { useState } from "react";

import { BsWhatsapp } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";
import { BsFacebook } from "react-icons/bs";

export default function MajmuBook() {
  const breadcrumbStyle = {
    "--bs-breadcrumb-divider": `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='8' height='8'%3E%3Cpath d='M2.5 0L1 1.5 3.5 4 1 6.5 2.5 8l4-4-4-4z' fill='%236c757d'/%3E%3C/svg%3E")`,
  };

  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary shadow-sm">
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
                Metode Talaqqi
              </li>
            </ol>
          </nav>
          <div className="content">
            <div className="cover">
              <img
                id="bookCover"
                src={cover}
                alt=""
              />
            </div>
            <div className="detail">
              <h2 className="roboto">Metode Talaqqi</h2>
              <div className="title ">
                <h5 className="roboto">Segera Terbit!</h5>
              </div>
              <div className="deskripsi ">
                <h6 className="roboto">Deskripsi</h6>
                <p className="inria-serif">
                    Buku Metode Talaqqi: Metode Cepat Belajar Membaca Al-Qur’an merupakan panduan praktis yang membantu pembaca memahami dan membaca Al-Qur'an dengan mudah. Buku ini terdiri atas tiga bab yang saling terkait, yaitu cara membaca Al-Qur'an, tajwid, dan motivasi membaca Al-Qur'an.<br/><br/>
                    Bab pertama membahas cara membaca Al-Qur'an, mulai dari dasar-dasar membaca hingga teknik membaca yang efektif. Bab ini juga mengulas pentingnya memahami makna dan konteks ayat-ayat Al-Qur'an.<br/><br/>
                    Bab kedua membahas tajwid, yaitu ilmu yang mempelajari cara membaca Al-Qur'an dengan benar dan tepat. Bab ini mencakup berbagai hukum tajwid, seperti hukum nun sukun, hukum mim sukun, dan lainnya.<br/><br/>
                    Bab ketiga membahas motivasi membaca Al-Qur'an, termasuk cara mempertahankan semangat serta pentingnya membaca Al-Qur'an dalam kehidupan sehari-hari.<br/><br/>
                    Dengan metode talaqqi, buku ini menawarkan cara yang mudah dan efektif untuk belajar membaca Al-Qur'an. Buku ini sangat cocok bagi pembaca yang ingin memperdalam pengetahuan dan keterampilan membaca Al-Qur'an.<br/>
                </p>
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
                    <p className="inria-serif">14 cm</p>
                  </div>
                  <div className="text">
                    <h6 className="roboto">ISBN</h6>
                    <p className="inria-serif">-</p>
                  </div>
                  <div className="text">
                    <h6 className="roboto">Halaman</h6>
                    <p className="inria-serif">-</p>
                  </div>
                  <div className="text">
                    <h6 className="roboto">Bahasa</h6>
                    <p className="inria-serif">Indonesia</p>
                  </div>
                  <div className="text">
                    <h6 className="roboto">Panjang</h6>
                    <p className="inria-serif">21 cm</p>
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
