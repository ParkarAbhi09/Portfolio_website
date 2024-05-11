import { Container, Row, Col } from "react-bootstrap";
//import logo from "../assets/img/logo.svg";
import navIcon1 from '../assets/img/nav-icon1.svg';
import navIcon2 from '../assets/img/nav-icon2.svg';
import navIcon3 from '../assets/img/nav-icon3.svg';

export const Footer = () => {
    return (
        <footer className="footer">
            <Container>
                <Row className="align-item-center">
                     
                    <Col className="text-center"> 
                        <div className="social-icon">
                            <a href="https://www.linkedin.com/in/abhishek-gaurav-121836290/" target="_blank" rel="noreferrer"><img src={navIcon1} alt="Linked IN"/></a>
                            <a href="https://github.com/ParkarAbhi09" target="_blank" rel="noreferrer"><img src={navIcon2} alt="GitHub"/></a>
                            <a href="https://www.instagram.com/" target="_blank" rel="noreferrer"><img src={navIcon3} alt="Instagram"/></a>
                        </div>
                        <p>CopyRight 2022. All Rights Reserved</p>

                    </Col>
                </Row>
            </Container>
        </footer>
    )
}