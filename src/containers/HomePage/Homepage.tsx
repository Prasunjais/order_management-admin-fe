import { Fragment } from "react";
import {
    HpContainer
} from "./style";
import { Row, Col, Container, Button } from 'react-bootstrap';
import Logo from '../../assests/images/ximkart.png';
import { Link } from "react-router-dom";
/**
 * 
 * @returns {ReactElement}
 */
const Homepage = () => {
    return (
        <Fragment>
            <HpContainer>
                <Container className="hed-container" fluid>
                    <Row>
                        <Col md={6}>
                            <p className="hed">Welcome To</p>
                            <p className="byline">Ximkart's Order Management Portal</p>
                            <hr className="bylineHr" />
                        </Col>
                        <Col md={6}>
                            <span className="dot"></span>
                            <img className="comp-logo" src={Logo} alt="Company Logo" />
                        </Col>
                    </Row>
                    <Row>
                        <Col md={3}>
                            <div className="hed-buttons">
                                <Link to="/login">
                                    <Button variant="warning" className="hp-btn shadow" size="lg">Login</Button>
                                </Link>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </HpContainer>
        </Fragment>
    )
}

export default Homepage;
