import "./paypart.css"
import Card2 from "../../assets/Card2.png"
import { Col, Container, Row } from "react-bootstrap"
import Featurereusable from "../reusable/Featurereusable"
import Ellipse from "../../assets/small/Ellipse.png"
import Ellipse1 from "../../assets/small/Ellipse1.png"
import Ellipse2 from "../../assets/small/Ellipse2.png"

const PayPart = () => {
    return (
        <section id="paypart">
            <Container>
                <Row>
                    <Featurereusable title="Our Feature" headt="Receive payments quickly from anywhere"
                        para="Why kept very ever home mrs. Considered sympathize ten uncommonly occasional assistance sufficient not. Letter of on become he tended active enable to." />

                    <Col lg={6} xs={12} className="pay_maiimg">
                        <img src={Card2} className="w-100 mt-4" alt="Card2" />
                        <div className="pay_img">
                            <div className="pay_dtls d-flex">
                                <img src={Ellipse} alt="" />
                                <div className="pay_img_text">
                                    <h3>+ $28,900</h3>
                                    <h5>Received from Michael V</h5>
                                </div>
                            </div>
                            <div className="pay_dtls d-flex">
                                <img src={Ellipse1} alt="" />
                                <div className="pay_img_text">
                                    <h3>+ $28,900</h3>
                                    <h5>Received from Michael V</h5>
                                </div>
                            </div>
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

export default PayPart