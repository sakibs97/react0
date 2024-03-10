import "./footerbtn.css"
import bfwc from "../../assets/bfwc.png"
import { Col, Container, Row } from "react-bootstrap"

const FooterBtn = () => {
    return (
        <footer>
            <Container>
                <Row className="justify-content-around">
                    <Col lg={5} xs={12} className="ftr_para">
                        <img src={bfwc} alt="bfwc" />
                        <p>Yet bed any for travelling assistance indulgence unpleasing. Not thoughts all exercise blessing. Indulgence way everything joy alteration boisterous the attachment.</p>
                    </Col>
                    <Col lg={6} xs={12} className="d-flex justify-content-between">
                        <div className="foter_ul">
                            <h6>Company</h6>
                            <ul>
                                <li><a href="#">About Us</a></li>
                                <li><a href="#">Careers</a></li>
                                <li><a href="#">Blog</a></li>
                                <li><a href="#">Pricing</a></li>
                            </ul>
                        </div>
                        <div className="foter_ul">
                            <h6>Product</h6>
                            <ul>
                                <li><a href="#">Invoicing Platform</a></li>
                                <li><a href="#">Accounting Plateform</a></li>
                                <li><a href="#">Create Proposal</a></li>
                                <li><a href="#">Contracts</a></li>
                            </ul>
                        </div>
                        <div className="foter_ul">
                            <h6>Resources</h6>
                            <ul>
                                <li><a href="#">Proposal Template</a></li>
                                <li><a href="#">Invoice Template</a></li>
                                <li><a href="#">Tuturoial</a></li>
                                <li><a href="#">How to write a contract</a></li>
                            </ul>
                        </div>
                    </Col>
                </Row>
                <Row className="foter_btn">
                    <Col lg={6} xs={8}>
                        <h6>2022 AR Shakir. All rights reserved. -- Privacy Policy - Terms of Services</h6>
                    </Col>
                    <Col lg={2} xs={4}>
                        <h6>Supported by Microsoft Startup</h6>
                    </Col>
                </Row>
            </Container>
        </footer>
    )
}

export default FooterBtn