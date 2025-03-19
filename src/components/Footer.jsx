import { FaTiktok } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { BsInstagram } from "react-icons/bs";
import logo1 from "../assets/image/Halakah Favicon (N).png";
import { BsFillTelephoneFill } from "react-icons/bs";
import { BsFillEnvelopeFill } from "react-icons/bs";
import { BsWhatsapp } from "react-icons/bs";
import { Container, Row, Col, Nav } from "react-bootstrap";

const Footer = () => {
  return (
    <footer id="contact" className="text-white py-4">
      <Container>
        <Row className="justify-content-between align-items-center">
          <Col md={6} className="pt-4 pb-3">
            <img src={logo1} alt="Halakah Logo" /><br/>
            <small>by PT Abdi Bangun Aksara</small>
            <div className="mt-3">
              <div className="" style={{padding: "5px 0"}}>
                <a href="https://maps.app.goo.gl/8yRLm8ACmjuVgoQy8" target="_blank" className="text-white text-decoration-none">Jl. Aria Surialaga No. 83, Kota Bogor 16119</a>
              </div>
              <div className="d-flex align-items-center " style={{padding: "5px 0"}}>
                <BsFillTelephoneFill  className="fs-5" style={{ margin:"1px 15px 0 0" }} />
                <a href="tel:+622518632170" className="text-white text-decoration-none">+62 251 8632 170</a>
              </div>
              <div className="d-flex align-items-center " style={{padding: "5px 0"}}>
              <BsWhatsapp className="fs-5" style={{ margin:"1px 15px 0 0" }} />
                <a href="https://api.whatsapp.com/send?phone=6281288048052" className="text-white text-decoration-none">+62 812 8804 8052</a>
              </div>
              <div className="d-flex align-items-center " style={{padding: "5px 0"}}>
                <BsFillEnvelopeFill className="fs-5" style={{ margin:"1px 15px 0 0" }} />
                <a href="mailto:contact@halakah.co.id" className="text-white text-decoration-none">contact@halakah.co.id</a>
              </div>
            </div>
          </Col>
          <Col md={6} className="text-center text-md-end">
            <Nav className="justify-content-center justify-content-md-end mb-3" style={{gap: "38px"}}>
              <Nav.Link href="" className="text-white fs-3" style={{ marginTop:"10px" }}>
                <FaFacebook />
              </Nav.Link>
              <Nav.Link href="" className="text-white fs-3" style={{ marginTop:"10px" }}>
                <FaTiktok />
              </Nav.Link>
              <Nav.Link href="https://instagram.com/halakah.co.id" className="text-white fs-3" style={{ marginTop:"10px" }}>
                <BsInstagram />
              </Nav.Link>
            </Nav>
          </Col>
        </Row>
        <Row>
          <Col className="text-end">
          <hr/>
            <p>© 2025 PT Abdi Bangun Aksara &middot; All Rights Reserved</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
