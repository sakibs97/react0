import "./banner.css"
import banner from "../../assets/banner.png"
import { Col, Container, Row } from "react-bootstrap"
import { FaCirclePlay } from "react-icons/fa6";
import { Startreusable } from "../reusable/Startreusable";

const Banner = () => {
    return (
        <section id="banner">
            <Container>
                <Row>
                    <Col lg={6} xs={12} className="ban_text p-0">
                        <h1>Managing business payments has never been easier</h1>
                        <Col lg={9}>
                            <p>End-to-end payments and financial management in a single solution. Meet the right platform to help realize.
                            </p>
                        </Col>
                        <div className="see">
                            <Startreusable />
                            <a href="#"><FaCirclePlay className="ban_icon" /> See How It Works</a>
                        </div>
                    </Col>
                    <Col lg={6} xs={12} className="p-0">
                        <img src={banner} className="bann_img" alt="banner" />
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default Banner