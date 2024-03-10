import { Col, Container, Row } from "react-bootstrap"
import "./feature.css"
import group1 from "../../assets/Feature/Group1.png"
import group2 from "../../assets/Feature/Group2.png"
import group3 from "../../assets/Feature/Group3.png"
import group4 from "../../assets/Feature/Group4.png"
import group5 from "../../assets/Feature/Group5.png"
import group6 from "../../assets/Feature/Group6.png"
import Featurereusable from "../reusable/Featurereusable"
import feature from "../../assets/Feature/feature.png"

const Feature = () => {
    return (
        <section id="feature">
            <Container>
                <Row>
                    <Col lg={6} className="fetre_text mx-auto">
                        <p>Over 32k+ software  businesses growing with AR Shakir</p>
                    </Col>
                </Row>
                <Row className="feature_img mx-auto mt-3 text-center">
                    <Col lg={2} xs={6} sm={4}>
                        <a href="#"><img src={group1} alt="" /></a>
                    </Col>
                    <Col lg={2} xs={6} sm={4}>
                        <a href="#"><img src={group2} alt="" /></a>
                    </Col>
                    <Col lg={2} xs={6} sm={4}>
                        <a href="#"><img src={group3} alt="" /></a>
                    </Col>
                    <Col lg={2} xs={6} sm={4}>
                        <a href="#"><img src={group4} alt="" /></a>
                    </Col>
                    <Col lg={2} xs={6} sm={4}>
                        <a href="#"><img src={group5} alt="" /></a>
                    </Col>
                    <Col lg={2} xs={6} sm={4}>
                        <a href="#"><img src={group6} alt="" /></a>
                    </Col>
                </Row>
                <Row className="fict">
                    <Col lg={6} xs={12}>
                        <img src={feature} className="w-100" alt="feature" />
                    </Col>
                    <Featurereusable title="Our Feature" headt="Receive payments quickly from anywhere"
                        para="Why kept very ever home mrs. Considered sympathize ten uncommonly occasional assistance sufficient not. Letter of on become he tended active enable to." />
                </Row>
            </Container>
        </section>
    )
}

export default Feature