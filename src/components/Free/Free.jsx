import { Col, Container, Row, Form, Button } from "react-bootstrap"
import "./free.css"
import bird from "../../assets/bird.png"


const Free = () => {
    return (
        <section id="free">
            <Container>
                <Row className="reee">
                    <Col lg={6} xs={12}>
                        <h6>Our Feature</h6>
                        <h2>Receive payments quickly from anywhere</h2>
                        <p>Why kept very ever home mrs. Considered sympathize ten uncommonly occasional assistance sufficient not. Letter of on become he tended active enable to. </p>

                    </Col>
                    <Col lg={4} xs={12} className="from_reg">
                        <h5>Get Started for Free</h5>
                        <div className="from_text">
                            <Form>
                                <Form.Group className="mb-3" controlId="formBasicEmail">
                                    <Form.Control type="email" placeholder="Enter email" />
                                </Form.Group>

                                <Form.Group className="mb-3" controlId="formBasicPassword">
                                    <Form.Control type="password" placeholder="Password" />
                                </Form.Group>
                                <Button variant="primary" className="free_btn" type="submit">
                                    Get Started
                                </Button>
                            </Form>
                        </div>
                        <div className="bird_log">
                            <img src={bird} className="bird" alt="bird" />
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default Free