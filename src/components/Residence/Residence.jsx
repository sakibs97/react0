import { Col, Container, Row, Button } from "react-bootstrap"
import "./residence.css"


const Residence = () => {
    return (
        <section id="resident">
            <Container>
                <Row className="res_back justify-content-around">
                    <Col lg={8} xs={12}>
                        <p>And residence for met the estimable disposing. Mean if he they been no hold mr. Is at much do made took held help.
                        </p>
                    </Col>
                    <Col lg={2} xs={12}>
                        <Button variant="primary" className="" type="submit">
                            Get Started
                        </Button>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default Residence