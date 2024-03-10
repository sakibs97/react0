import { Col, Container, Row } from "react-bootstrap"
import "./choose.css"
import card from "../../assets/Cards.png"
import Featurereusable from "../reusable/Featurereusable"

const Choose = () => {
    return (
        <section>
            <Container>
                <Row>
                    <Featurereusable title="Our Feature" headt="Receive payments quickly from anywhere"
                        para="Why kept very ever home mrs. Considered sympathize ten uncommonly occasional assistance sufficient not. Letter of on become he tended active enable to." />
                    <Col lg={6} className="choose_img">
                        <img src={card} alt="card" />
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default Choose