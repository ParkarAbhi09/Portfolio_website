import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import colorSharp2 from "../assets/img/color-sharp2.png";
import projImg1 from "../assets/img/img2.PNG";
import projImg2 from "../assets/img/portfolio-image.PNG";
import projImg3 from "../assets/img/project-img3.png";
import TrackVisibility from 'react-on-screen';
import 'animate.css';


export const Projects = () => {
    const projects = [
        {   
            title: "Weather App",
            description: "Accurate forecasts, real-time updates, intuitive interface, customizable alerts, user-friendly.",
            imgUrl: projImg1,
            link: "https://github.com"
        },
        {
            title: "Portfolio Website",
            description: "It is my portfolio website. It is a React website which is used to showcase my skills and projects.",
            imgUrl: projImg2,
            link: "https://hrsh22.github.com"
        },
        // {
        //     title: "Calculator",
        //     description: "It is a basic calculator which is used to perform basic mathematical operations. It is made using Javascript, HTML and CSS.",
        //     imgUrl: projImg3,
        //     link: "https://hrsh22.github.io/Calculator/"
        // }//,
        // {
        //     title: "Business Startup",
        //     description: "Design & Development",
        //     imgUrl: projImg1,
        // },
        // {
        //     title: "Business Startup",
        //     description: "Design & Development",
        //     imgUrl: projImg2,
        // },
        // {
        //     title: "Business Startup",
        //     description: "Design & Development",
        //     imgUrl: projImg3,
        // },
    ];

    return (
        <section className="project" id="project">
            <Container>
                <Row>
                    <Col size={12}>
                    <TrackVisibility>
                        {({isVisible}) => 
                        <div className={isVisible ? "animate__animated animate__slideInUp" : ""}>

                        <h2>Projects</h2>
                        <p>This section contains the description and links of the projects which I did.</p>
                        </div>}
                    </TrackVisibility>
                        <Tab.Container id="projects-tabs" defaultActiveKey="first">
                            <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                            <Nav.Item>
                            <Nav.Link eventKey="first">Tab 1</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                            <Nav.Link eventKey="second">Tab 2</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                            <Nav.Link eventKey="third">Tab 3</Nav.Link>
                            </Nav.Item>
                            </Nav>
                            <Tab.Content>
                                <Tab.Pane eventKey="first">
                                    <Row>{
                                        projects.map((project, index) => {
                                            return (
                                                <ProjectCard
                                                    key={index}
                                                    {...project}
                                                />
                                            )
                                        })
                                    }
                                    </Row>
                                </Tab.Pane>
                                <Tab.Pane eventKey="second">To be added soon!</Tab.Pane>
                                <Tab.Pane eventKey="third">To be added soon!</Tab.Pane>

                            </Tab.Content>
                        </Tab.Container>
                    </Col>
                </Row>
            </Container>
            <img className="background-image-right" src={colorSharp2} alt="" />
        </section>
    )
}