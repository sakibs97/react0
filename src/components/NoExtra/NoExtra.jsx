import { Col, Container, Row } from "react-bootstrap"
import "./noextra.css"
import { FaCircle } from "react-icons/fa";

const NoExtra = () => {
    return (
        <section id="noext">
            <Container className="noextara">
                <Row className="noex_head">
                    <Col lg={5} xs={12} className="text-center">
                        <h6>Why Financy</h6>
                        <h2>Why Choose Us</h2>
                    </Col>
                </Row>
                <Row className="justify-content-around">
                    <Col lg={5} xs={12} sm={12}>
                        <div className="noex_dtls mt-5">
                            <FaCircle className="no_icon" />
                            <div className="noex_text">
                                <h4>No Extra Fee</h4>
                                <p>End-to-end payments and financial management in a single solution. Meet the right platform.
                                </p>
                            </div>
                        </div>
                    </Col>
                    <Col lg={5} xs={12} sm={12}>
                        <div className="noex_dtls mt-5">
                            <FaCircle className="no_icon2" />
                            <div className="noex_text">
                                <h4>No Extra Fee</h4>
                                <p>End-to-end payments and financial management in a single solution. Meet the right platform.
                                </p>
                            </div>
                        </div>
                    </Col>
                    <Col lg={5} xs={12} sm={12}>
                        <div className="noex_dtls mt-5">
                            <FaCircle className="no_icon3" />
                            <div className="noex_text">
                                <h4>No Extra Fee</h4>
                                <p>End-to-end payments and financial management in a single solution. Meet the right platform.
                                </p>
                            </div>
                        </div>
                    </Col>
                    <Col lg={5} xs={12} sm={12}>
                        <div className="noex_dtls mt-5">
                            <FaCircle className="no_icon4" />
                            <div className="noex_text">
                                <h4>No Extra Fee</h4>
                                <p>End-to-end payments and financial management in a single solution. Meet the right platform.
                                </p>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default NoExtra