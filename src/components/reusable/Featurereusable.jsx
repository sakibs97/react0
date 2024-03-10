
import { Col, Button } from "react-bootstrap"

const Featurereusable = ({ title, headt, para }) => {
    return (

        <Col lg={6} xs={12} sm={12} className="feature_text mt-5">
            <h6>{title}</h6>
            <h2>{headt}</h2>
            <p>{para}</p>
            <Button as="input" type="button" value="Get Started" />{' '}
        </Col>
    )
}

export default Featurereusable