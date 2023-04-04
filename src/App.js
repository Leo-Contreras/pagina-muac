import React from 'react';
import {Container, Row, Col, Button, Card} from 'react-bootstrap';
import logo from './imagenes/logo guinda bc - copia.png';
import logoMuac from './imagenes/BC-MUAC-mobile@4k - copia.jpg';
import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube, FaWhatsapp, FaFacebookMessenger } from 'react-icons/fa';
import './App.css';



function App() {
    return (
        <>
            <Container>
            <Row className="align-items-center my-3">
                <Col xs="auto">
                    <img src={logo} alt="Logo" className="logo" />
                </Col>
                <Col className="text-end">
                    <Button className="share-button">Compartir</Button>
                </Col>
            </Row>
            <Row className="my-3">
                <Col>
                    <h1 className="header">Atención Ciudadana BC</h1>
                </Col>
            </Row>
            <Row className="my-3">
                <Col className="text-justify">
                    <h6 className="texto-bienvenida">
                        ¡Bienvenido a nuestra página del Modelo Único de Atención Ciudadana (MUAC)! En el Estado de Baja California, nuestra prioridad es servirte de la mejor manera posible. Nuestro equipo de atención ciudadana está formado por profesionales altamente capacitados y comprometidos con tu bienestar.
                        Estamos aquí para escucharte, orientarte y resolver cualquier duda o inquietud que puedas tener. No dudes en contactarnos, estamos siempre a tu disposición para ayudarte en todo lo que necesites. ¡Gracias por confiar en nosotros!
                    </h6>
                </Col>
                <Col className="text-center">
                    <img src={logoMuac} alt="Logo MUAC" className="logo-muac" />
                </Col>
            </Row>

        </Container>

            <div className="grey-background">
                <Container>
                    <Row className="my-5">
                        <Col className="text-center">
                            <h2 className="contact-header">CONTÁCTANOS</h2>
                            <h5 className="contact-subheader">
                                Comunícate con nosotros y obtén la ayuda que necesitas
                            </h5>
                        </Col>
                    </Row>
                    <Row>
                        <Col md={6}>
                            <Card className="mb-4 card-1">
                                <Card.Body>
                                    <Card.Title>Card 1</Card.Title>
                                    <Card.Text>Descripción del card 1.</Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col md={3}>
                            <Card className="mb-4 card-2">
                                <Card.Body>
                                    <Card.Title>Card 2</Card.Title>
                                    <Card.Text>Descripción del card 2.</Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col md={3}>
                            <Card className="mb-4 card-3">
                                <Card.Body>
                                    <Card.Title>Card 3</Card.Title>
                                    <Card.Text>Descripción del card 3.</Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                    <Row>
                        <Col md={6}>
                            <Card className="mb-4 card-4">
                                <Card.Body>
                                    <Card.Title>Card 4</Card.Title>
                                    <Card.Text>Descripción del card 4.</Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col md={6}>
                            <Card className="mb-4 card-5">
                                <Card.Body>
                                    <Card.Title>Card 5</Card.Title>
                                    <Card.Text>Descripción del card 5.</Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </Container>
            </div>

            <Container>
                <Row className="my-5">
                    <Col className="text-center">
                        <h2 className="tramites-header">TRÁMITES Y SERVICIOS</h2>
                        <h5 className="tramites-subheader">Simplifica tus trámites gubernamentales</h5>
                    </Col>
                </Row>
                <Row>
                    <Col sm={6} md={3} >
                        <Card className="mb-4 card-6">
                            <Card.Body>
                                <Card.Title>Card 6</Card.Title>
                                <Card.Text>Descripción del card 6.</Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col sm={6} md={3}>
                        <Card className="mb-4 card-7">
                            <Card.Body>
                                <Card.Title>Card 7</Card.Title>
                                <Card.Text>Descripción del card 7.</Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col sm={6} md={3}>
                        <Card className="mb-4 card-8">
                            <Card.Body>
                                <Card.Title>Card 8</Card.Title>
                                <Card.Text>Descripción del card 8.</Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col sm={6} md={3}>
                        <Card className="mb-4 card-9">
                            <Card.Body>
                                <Card.Title>Card 9</Card.Title>
                                <Card.Text>Descripción del card 9.</Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
            <div className="footer-background">
                    <Container>
                        <Row className="my-5">
                            <Col className="text-center">
                                <h2 className="social-header">Consulta nuestras redes sociales oficiales</h2>
                            </Col>
                        </Row>
                            <Row className="social-icons">
                                <Col className="social-icon-col">
                                    <a href="/" target="_blank" rel="noopener noreferrer">
                                        <FaFacebookF />
                                        <p>Facebook</p>
                                    </a>
                                </Col>
                                <Col className="social-icon-col">
                                    <a href="/" target="_blank" rel="noopener noreferrer">
                                        <FaInstagram />
                                        <p>Instagram</p>
                                    </a>
                                </Col>
                                <Col className="social-icon-col">
                                    <a href="/" target="_blank" rel="noopener noreferrer">
                                        <FaFacebookMessenger />
                                        <p>Messenger</p>
                                    </a>
                                </Col>
                                <Col className="social-icon-col">
                                    <a href="/" target="_blank" rel="noopener noreferrer">
                                        <FaTwitter />
                                        <p>Twitter</p>
                                    </a>
                                </Col>
                                <Col className="social-icon-col">
                                    <a href="/" target="_blank" rel="noopener noreferrer">
                                        <FaWhatsapp />
                                        <p>WhatsApp</p>
                                    </a>
                                </Col>
                                <Col className="social-icon-col">
                                    <a href="/" target="_blank" rel="noopener noreferrer">
                                        <FaYoutube />
                                        <p>YouTube</p>
                                    </a>
                                </Col>
                            </Row>
                        <Row className="my-5">
                            <Col>
                                <p className="copyright-text">
                                    © 2023 - Gobierno del Estado de Baja California | Políticas de Privacidad y Seguridad | Accesibilidad
                                </p>
                            </Col>
                        </Row>
                    </Container>
                </div>


        </>
    );
}

export default App;