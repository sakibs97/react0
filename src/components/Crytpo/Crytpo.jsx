import { Col, Container, Row, Form, Button } from "react-bootstrap"
import "./crytpo.css"


const Crytpo = () => {
    return (
        <section id="crytpo">
            <Container>
                <Row className="justify-content-around">
                    <Col lg={6}>
                        <div className="crytpo_text">
                            <h6>Why Choose Us</h6>
                            <h2>Track your crytpo portfolio on the best way possible</h2>
                            <p>End-to-end payments and financial management in a single solution. Meet the right platform to help realize.</p>
                        </div>
                    </Col>
                    <Col lg={4} className="from_reg">
                        <div className="from_text">
                            <Form>
                                <Form.Group className="mb-3" controlId="formBasicEmail">
                                    <Form.Control type="email" placeholder="Enter email" />
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="formBasicPassword">
                                    <Form.Control type="password" placeholder="Password" />
                                </Form.Group>
                                <Button variant="primary" type="submit">
                                    Get Started
                                </Button>
                            </Form>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default Crytpo