import "./paypart.css"
import Card2 from "../../assets/Card2.png"
import { Col, Container, Row } from "react-bootstrap"
import Featurereusable from "../reusable/Featurereusable"

const PayPart = () => {
    return (
        <section>
            <Container>
                <Row>
                    <Featurereusable title="Our Feature" headt="Receive payments quickly from anywhere"
                        para="Why kept very ever home mrs. Considered sympathize ten uncommonly occasional assistance sufficient not. Letter of on become he tended active enable to." />

                    <Col lg={6} xs={12}>
                        <img src={Card2} className="w-100 mt-4" alt="Card2" />
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default PayPart