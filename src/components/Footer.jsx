import { FaTiktok } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { BsInstagram } from "react-icons/bs";
import { IoLogoWhatsapp } from "react-icons/io";
import logo1 from "../assets/image/halakah(N).png";
import { MdEmail } from "react-icons/md";
import { MdLocalPhone } from "react-icons/md";
import { Container, Row, Col, Nav } from "react-bootstrap";

const Footer = () => {
  return (
    <footer id="contact" className="text-white py-4">
      <Container>
        <Row className="justify-content-between align-items-center">
          <Col md={6} className="py-4">
            <img src={logo1} className="w-50 mb-1" alt="Halakah Logo" /><br/>
            <small className="opacity-75" style={{ fontSize:"13px" }}>by Abdi Bangun Aksara</small>
            <div className="mt-4">
              <div className="mb-2">
                <a href="https://maps.app.goo.gl/8yRLm8ACmjuVgoQy8" target="_blank" className="text-white text-decoration-none">Jl. Aria Surialaga No.83, Kota Bogor 16119</a>
              </div>
              <div className="d-flex align-items-center mb-2">
                <MdLocalPhone className="me-2" />
                <a href="tel:+622518632170" className="text-white text-decoration-none">+62 251 8632 170</a>
              </div>
              <div className="d-flex align-items-center mb-2">
              <IoLogoWhatsapp className="me-2" />
                <a href="https://api.whatsapp.com/send?phone=6281288048052" className="text-white text-decoration-none">+62 812 8804 8052</a>
              </div>
              <div className="d-flex align-items-center mb-2">
                <MdEmail className="me-2" />
                <a href="mailto:contact@halakah.co.id" className="text-white text-decoration-none">contact@halakah.co.id</a>
              </div>
            </div>
          </Col>
          <Col md={6} className="text-center text-md-end">
            <Nav className="justify-content-center justify-content-md-end mb-3">
              <Nav.Link href="" className="text-white fs-3 me-1">
                <FaFacebook />
              </Nav.Link>
              <Nav.Link href="" className="text-white fs-3 me-1">
                <FaTiktok />
              </Nav.Link>
              <Nav.Link href="https://instagram.com/halakah.co.id" className="text-white fs-3 me-1">
                <BsInstagram />
              </Nav.Link>
            </Nav>
          </Col>
        </Row>
        <Row>
          <Col className="text-end">
          <hr/>
            <p className="mb-0 opacity-75">© 2024 PT Abdi Bangun Aksara &middot; All Rights Reserved</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
