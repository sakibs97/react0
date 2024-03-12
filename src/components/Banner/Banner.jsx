import "./banner.css"
import banner from "../../assets/banner.png"
import { Col, Container, Row } from "react-bootstrap"
import { FaCirclePlay } from "react-icons/fa6";
import { Startreusable } from "../reusable/Startreusable";
import Ellipse2 from "../../assets/small/Ellipse2.png"

const Banner = () => {
    return (
        <section id="banner">
            <Container>
                <Row>
                    <Col lg={6} xs={12} className="ban_text">
                        <h1>Managing business payments has never been easier</h1>
                        <Col lg={9}>
                            <p>End-to-end payments and financial management in a single solution. Meet the right platform to help realize.
                            </p>
                        </Col>
                        <div className="see">
                            <Startreusable />
                            <a href="#" className="seeas"><FaCirclePlay className="ban_icon" /> See How It Works</a>
                        </div>
                    </Col>
                    <Col lg={6} xs={12} className="bann_img_part">
                        <img src={banner} className="bann_img" alt="banner" />
                        <div className="banner_img">
                            <div className="pay_dtls d-flex">
                                <img src={Ellipse2} alt="" />
                                <div className="pay_img_text">
                                    <h3>+ $28,900</h3>
                                    <h5>Received from Michael V</h5>
                                </div>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default Banner