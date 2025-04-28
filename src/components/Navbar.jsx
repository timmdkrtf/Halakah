import Logo from "../assets/image/1. Halakah Logo Utama (P).png"

import { BsWhatsapp } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";
import { BsFacebook } from "react-icons/bs";

import { useEffect, useState } from "react";
import axios from "axios";

export default function Navbar(){
    const fetchCategories = async () => {
        try {
          const res = await axios.get("https://api-karyart-production-d31c.up.railway.app/api/categories",{
            headers: {
              Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
          });
          console.log(res.data.data); // ← penting: pakai .data.data karena Laravel resource
        } catch (err) {
          console.error("Gagal fetch kategori:", err);
        }
    };
    
    useEffect(() => {
        fetchCategories();
      }, []);

    return(
    <nav className="navbar navbar-expand-lg bg-body-tertiary shadow-sm">
        <div className="container">
            <a className="navbar-brand" href="#"><img src={Logo} alt="" style={{width: "85px"}} /></a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
                <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                        <a className="nav-link" href="#">Beranda</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#about">Tentang Kami</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#service">Layanan</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#book">Buku</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#contact">Kontak</a>
                    </li>
                </ul>
                <div className="line-horizontal">

                </div>
                <div className="d-flex gap-2">
                    <a href="https://wa.me/message/COYL226EZJTZC1" target="_blank"><BsWhatsapp className="fs-5" /></a>
                    <a href="https://www.instagram.com/halakah.co.id" target="_blank"><BsInstagram className="fs-5" /></a>
                    <a href="https://www.facebook.com/profile.php?id=61561826281024" target="_blank"><BsFacebook className="fs-5" /></a>
                </div>
            </div>
        </div>
    </nav>
    );
}