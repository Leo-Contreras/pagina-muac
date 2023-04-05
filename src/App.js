import React from 'react';
import {Container, Row, Col, Button, Card} from 'react-bootstrap';
import logo from './imagenes/logo adbc png.png';
import logoMuac from './imagenes/BC-MUAC-mobile@4k - copia.jpg';
import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube, FaWhatsapp, FaFacebookMessenger } from 'react-icons/fa';
import './App.css';
import cardImg1 from './imagenes/card 1 img.png';
import cardImg2 from './imagenes/card img 2.png';
import cardImg3 from './imagenes/card img 3.png';
import cardImg4 from './imagenes/card img 4.png';
import cardImg5 from './imagenes/card img 5.png';




function App() {
    return (
        <>
            <Container>
            <Row className="align-items-center my-3">
                <Col xs="auto">
                    <a href="https://gestion.bajacalifornia.gob.mx/adbc/#">
                    <img src={logo} alt="Logo" className="logo" />
                    </a>
                </Col>
                <Col className="text-end">
                    <Button className="share-button">Compartir</Button>
                </Col>
            </Row>
            <Row className="my-3">
                <Col>
                    <h1 className="header-2" > Modelo Único de</h1>
                    <h1 className="header">  Atención Ciudadana BC </h1>
                </Col>
            </Row>
            <Row className="my-3">
                <Col className="text-justify">
                    <hr style={{color: "white"}}/>
                    <h6 className="texto-bienvenida">
                        Bienvenido al MUAC, donde estamos comprometidos en servirte de la mejor manera. Contamos con un equipo altamente capacitado para atenderte, resolver tus dudas e inquietudes.
                        No dudes en contactarnos, estamos siempre a tu disposición para ayudarte. ¡Gracias por confiar en nosotros!
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
                            <h1 className="contact-header">CONTÁCTANOS</h1>
                            <h5 className="contact-subheader">
                                Comunícate con nosotros y obtén la ayuda que necesitas
                            </h5>
                        </Col>
                    </Row>
                    <Row>
                        <Col md={6}>
                            <img
                                className="mb-4 custom-image card-1"
                                src={cardImg1}
                                alt="Card 1"
                                onClick={() => window.open('http://www.bajacalifornia.gob.mx', '_blank')}
                            />
                        </Col>
                        <Col md={3}>
                            <img
                                className="mb-4 custom-image card-2"
                                src={cardImg2}
                                alt="Card 2"
                                onClick={() => window.open('https://api.whatsapp.com', '_blank')}
                            />
                        </Col>
                        <Col md={3}>
                            <img
                                className="mb-4 custom-image card-3"
                                src={cardImg3}
                                alt="Card 3"
                                onClick={() => window.open('https://www.messenger.com/login.php?next=https%3A%2F%2Fwww.messenger.com%2Ft%2F120544204635995', '_blank')}
                            />
                        </Col>
                    </Row>
                    <Row>
                        <Col md={6}>
                            <img
                                className="mb-4 custom-image card-4"
                                src={cardImg4}
                                alt="Card 4"
                                onClick={() => window.open('http://sctg.bajacalifornia.gob.mx:8080/quejas/queja.jsp', '_blank')}
                            />
                        </Col>
                        <Col md={6}>
                            <img
                                className="mb-4 custom-image card-5"
                                src={cardImg5}
                                alt="Card 5"
                                onClick={() => window.open('https://linktr.ee/atencionciudadanabc?utm_source=linktree_profile_share&ltsid=0eeec74c-56b1-4e9a-8a8d-da7814867006', '_blank')}
                            />
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
                        <Col xs={12} sm={6} md={6} lg={3} className="mb-4">
                            <Card className="card-6" onClick={() => window.open('https://citas.ebajacalifornia.gob.mx/', '_blank')}>
                                <Card.Body>
                                    <Card.Text ><h1><strong>Citas del Gobierno del Estado</strong></h1></Card.Text>
                                    <Card.Text className="text-justify" >
                                        Agenda tu cita en la oficina de tu municipio más cercana para realizar el trámite o servicio que necesitas. ¡Te esperamos!
                                    </Card.Text>
                                    <Card.Link href="https://citas.ebajacalifornia.gob.mx/" target="_blank">Ir al sitio de Citas</Card.Link>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col xs={12} sm={6} md={6} lg={3} className="mb-4">
                            <Card className="card-7" onClick={() => window.open('https://tramites.ebajacalifornia.gob.mx/ventanillaunica/', '_blank')}>
                                <Card.Body>
                                    <Card.Title><h1><strong>Trámites Digitales</strong> </h1></Card.Title>
                                    <Card.Text className="text-justify">
                                        ¡Te invitamos a descubrir nuestros nuevos servicios en línea! Ahora podrás realizar más servicios desde la comodidad de tu hogar y sin necesidad de hacer filas.
                                    </Card.Text>
                                    <Card.Link href="https://tramites.ebajacalifornia.gob.mx/ventanillaunica/" target="_blank">Ir a Ventanilla digital</Card.Link>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col xs={12} sm={6} md={6} lg={3} className="mb-4">
                            <Card className="card-8" onClick={() => window.open('http://appsweb.ebajacalifornia.gob.mx/sifos/kiosko/index', '_blank')}>
                                <Card.Body>
                                    <Card.Title > <h1><strong>Kioskos Multi-Servicios </strong></h1></Card.Title>
                                    <Card.Text>
                                        Son cajeros automáticos que están distribuidos en los cinco municipios de la entidad para que puedas realizar tus trámites y pagos de manera ágil.
                                    </Card.Text>
                                    <Card.Link href="http://appsweb.ebajacalifornia.gob.mx/sifos/kiosko/index" target="_blank">Ubica los Kioskos</Card.Link>
                                </Card.Body>
                            </Card>
                        </Col>
                    <Col xs={12} sm={6} md={6} lg={3} className="mb-4">
                        <Card className="card-9" onClick={() => window.open('https://www.bajacalifornia.gob.mx/Gobierno/FAQ', '_blank')}>
                            <Card.Body>
                                <Card.Title> <h1><strong>Preguntas frecuentes</strong> </h1></Card.Title>
                                <Card.Text className="text-justify">
                                    Aquí encontrarás las preguntas más frecuentes de los ciudadanos sobre los trámites de Control Vehicular (Placas), Licencias de Conducir e Impuestos que ofrece la Secretaría de Hacienda.
                                </Card.Text>
                                <Card.Link href="https://www.bajacalifornia.gob.mx/Gobierno/FAQ" target="_blank">Ir a Preguntas frecuentes</Card.Link>
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
                                <a href="https://www.facebook.com/AgenciaDigitaldeBajaCalifornia" target="_blank" rel="noopener noreferrer" className="social-icon">
                                    <FaFacebookF size ="3x" />
                                    <p>Facebook</p>
                                </a>
                            </Col>
                            <Col className="social-icon-col">
                                <a href="https://www.instagram.com/BCGobierno/" target="_blank" rel="noopener noreferrer" className="social-icon">
                                    <FaInstagram size ="3x"/>
                                    <p>Instagram</p>
                                </a>
                            </Col>
                            <Col className="social-icon-col">
                                <a href="/" target="_blank" rel="noopener noreferrer" className="social-icon">
                                    <FaFacebookMessenger size ="3x" />
                                    <p>Messenger</p>
                                </a>
                            </Col>
                            <Col className="social-icon-col">
                                <a href="https://twitter.com/bcgobierno" target="_blank" rel="noopener noreferrer" className="social-icon">
                                    <FaTwitter  size ="3x"/>
                                    <p>Twitter</p>
                                </a>
                            </Col>
                            <Col className="social-icon-col">
                                <a href="/" target="_blank" rel="noopener noreferrer" className="social-icon">
                                    <FaWhatsapp size ="3x"/>
                                    <p>WhatsApp</p>
                                </a>
                            </Col>
                            <Col className="social-icon-col">
                                <a href="/" target="_blank" rel="noopener noreferrer" className="social-icon">
                                    <FaYoutube size ="3x"/>
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