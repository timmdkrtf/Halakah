import CoverDepan from "../assets/image/Cover Majmuatul Awrod 1.png"
import CoverBelakang from "../assets/image/Cover Belakang.png"
import Logo from "../assets/image/1. Halakah Logo Utama (P).png"

import { BsWhatsapp } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";
import { BsFacebook } from "react-icons/bs";

export default function MajmuBook(){

    const breadcrumbStyle = {
        "--bs-breadcrumb-divider": `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='8' height='8'%3E%3Cpath d='M2.5 0L1 1.5 3.5 4 1 6.5 2.5 8l4-4-4-4z' fill='%236c757d'/%3E%3C/svg%3E")`,
      };

    return(
        <>
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
                <div className="container">
                    <a className="navbar-brand" href="#"><img src={Logo} alt="" style={{width: "85px"}} /></a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
                        <div class="d-flex gap-2 ms-auto">
                            <a href="https://wa.me/message/COYL226EZJTZC1" target="_blank"><BsWhatsapp className="fs-5" /></a>
                            <a href="https://www.instagram.com/halakah.co.id" target="_blank"><BsInstagram className="fs-5" /></a>
                            <a href="https://www.facebook.com/profile.php?id=61561826281024" target="_blank"><BsFacebook className="fs-5" /></a>
                        </div>
                    </div>
                </div>
            </nav>
            <div className="majmu">
                <div className="container">
                    <nav style={breadcrumbStyle} aria-label="breadcrumb">
                        <ol className="breadcrumb roboto fs-6">
                            <li className="breadcrumb-item"><a href="/">Beranda</a></li>
                            <li className="breadcrumb-item"><a href="/#book">Daftar Buku Halakah</a></li>
                            <li className="breadcrumb-item active" aria-current="page">Majmuatul Awrod</li>
                        </ol>
                    </nav>
                    <div className="d-flex justify-content-between">
                        <div className="left">
                            <h4 className="alike">Segera Terbit</h4>
                            <h2 className="roboto">Majmuatul Awrod</h2>
                            <p className="inria-serif">Majmuatul Awrod adalah buku yang berisi doa dan zikir harian yang dibaca oleh umat Islam. Buku ini membantu pembaca memperkaya amalan ibadah sehari-hari, termasuk doa-doa penting, zikir rutin, serta shalawat untuk Nabi Muhammad SAW. Dengan susunan yang rapi, buku ini memudahkan umat Islam dalam menghafal dan mengamalkan doa untuk berbagai situasi. Sebagai panduan ibadah, Majmuatul Awrod membantu umat Islam berzikir dengan disiplin dan terstruktur, serta meningkatkan kualitas ibadah mereka.</p>
                            <p className="inria-serif">Buku ini disusun oleh Majlis Al-Ihya di bawah bimbingan Guru Abi K.H. M. Husni Thamrin Padmawijaya Al-Banjari, sebagai panduan wirid yang dapat digunakan oleh jamaah dan umat Muslim secara umum. Dengan tujuan memperkuat amalan zikir dan ibadah, panduan ini dirancang untuk membantu umat Islam melaksanakan wirid harian dengan tertib dan terarah, sehingga dapat menjadi bekal spiritual yang memperkuat hubungan dengan Allah SWT.</p>
                        </div>
                        <div className="right d-flex">
                            <img src={CoverDepan} alt="" />
                            <img src={CoverBelakang} alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}