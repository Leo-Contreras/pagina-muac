import React from 'react';
import { IoPerson } from 'react-icons/io5';
import { FaRegCalendarAlt, FaLaptop, FaMapMarkerAlt, FaQuestionCircle } from 'react-icons/fa';
import { MdEmail, MdLocalPhone, MdLocationOn, MdLanguage } from 'react-icons/md';
import {Container, Row, Col, Button, Card} from 'react-bootstrap';
import logo from './imagenes/logo adbc png.png';
import logoMuac from './imagenes/BC-MUAC-mobile@4k - copia.jpg';
import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube, FaWhatsapp, FaFacebookMessenger } from 'react-icons/fa';
import './App.css';
import cardImg1 from './imagenes/card 1 img.png';
import cardImg2 from './imagenes/card img 2.png';
import cardImg3 from './imagenes/card img 3.png';
import cardImg4 from './imagenes/card img 4.png';





function App() {
    return (
        <>
            <Container>
                <Row className="align-items-center my-3">
                    <Col xs="auto">
                        <a href="https://gestion.bajacalifornia.gob.mx/adbc/#">
                            <img src={logo} alt="Logo" className="logo logo-small" />
                        </a>
                    </Col>
                    <Col className="text-end">
                        <Button className="share-button hide-on-mobile" onClick={handleShare}>
                            Compartir
                        </Button>
                    </Col>
                </Row>
                <Row className="my-3">
                    <Col>
                        <h1 className="header-2"> Modelo Único de</h1>
                        <h1 className="header"> Atención Ciudadana BC </h1>
                    </Col>
                </Row>
                <Row className="my-3 stack-on-tablet">
                    <Col md={6} xs={12} className="text-justify">
                        <hr style={{ color: "white" }} />
                        <h6 className="texto-bienvenida">
                            Bienvenido al MUAC, donde estamos comprometidos en servirte de la
                            mejor manera. Contamos con un equipo altamente capacitado para
                            atenderte, resolver tus dudas e inquietudes. No dudes en
                            contactarnos, estamos siempre a tu disposición para ayudarte.
                            ¡Gracias por confiar en nosotros!
                        </h6>
                    </Col>
                    <Col md={6} xs={12} className="text-center">
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
                        <Col md={6} className="mb-4">
                            <img
                                className="custom-image card-1 w-100"
                                src={cardImg1}
                                alt="Card 1"
                                onClick={() =>
                                    window.open("http://www.bajacalifornia.gob.mx", "_blank")
                                }
                            />
                        </Col>
                        <Col md={3} className="mb-4">
                            <img
                                className="custom-image card-2 w-100"
                                src={cardImg2}
                                alt="Card 2"
                                onClick={() =>
                                    window.open("https://api.whatsapp.com", "_blank")
                                }
                            />
                        </Col>
                        <Col md={3} className="mb-4">
                            <img
                                className="custom-image card-3 w-100"
                                src={cardImg3}
                                alt="Card 3"
                                onClick={() =>
                                    window.open(
                                        "https://www.messenger.com/login.php?next=https%3A%2F%2Fwww.messenger                %2Ft%2F120544204635995",
                                        "_blank"
                                    )
                                }
                            />
                        </Col>
                    </Row>
                    <Row>
                        <Col md={6} className="mb-4">
                            <img
                                className="custom-image card-4 w-100"
                                src={cardImg4}
                                alt="Card 4"
                                onClick={() =>
                                    window.open(
                                        "http://sctg.bajacalifornia.gob.mx:8080/quejas/queja.jsp",
                                        "_blank"
                                    )
                                }
                            />
                        </Col>
                        <Col md={6} className="d-flex justify-content-center text-center">
                            <Card className="custom-card card-5">
                                <Container>
                                  <Card.Body className="card-content">
                                    <Card.Text className="titulo-card5">Ubícanos</Card.Text>
                                    <Card.Subtitle className="mb-2 subtitle-card5">¡Estamos para ayudarte!</Card.Subtitle>
                                    <Card.Text className="oficialia-card5">
                                        <MdLocationOn className="icon-card5" /> Edificio Poder Ejecutivo Calzada Independencia #994 Centro Cívico y Comercial, Mexicali, Baja California, Mexico, 21000
                                    </Card.Text>
                                    <Card.Text className="contacto-card5">
                                        <MdEmail className="icon-card5" /> atencionciudadana@bajacalifornia.gob.mx
                                    </Card.Text>
                                    <Card.Text className="contacto-card5">
                                        <MdLocalPhone className="icon-card5" /> Teléfono: 686 900 90 91
                                    </Card.Text>
                                    <Card.Link className="enlace-card5" href="https://linktr.ee/atencionciudadanabc" target="_blank"><MdLanguage className="icon-card5" /> linktr.ee/atencionciudadanabc</Card.Link>
                                      <button className="custom-button card-btn" onClick={downloadVCard}>
                                          Guardar en mis Contactos
                                          <span className="contact-icon">
                                            <IoPerson />
                                          </span>
                                      </button>

                                  </Card.Body>
                                </Container>
                            </Card>

                        </Col>
                    </Row>
                </Container>
            </div>

            <Container>
                <Row className="my-5">
                    <Col className="text-center">
                        <h2 className="tramites-header">TRÁMITES Y SERVICIOS</h2>
                        <h5 className="tramites-subheader">
                            Simplifica tus trámites gubernamentales
                        </h5>
                    </Col>
                </Row>
                <Row className="gx-4 gy-4">
                    <Col xs={12} sm={6} md={6} lg={3} className="mb-4 d-flex justify-content-center">
                            <Card
                            className="card-6 h-100"
                            onClick={() =>
                                window.open("https://citas.ebajacalifornia.gob.mx/", "_blank")
                            }
                        >
                            <Card.Body className="d-flex flex-column">
                                <Card.Text>
                                    <FaRegCalendarAlt />
                                    <h1>
                                        <strong>Citas del Gobierno del Estado</strong>
                                    </h1>
                                </Card.Text>
                                <Card.Text className="text-justify flex-grow-1">
                                    Agenda tu cita en la oficina de tu municipio más cercana para
                                    realizar el trámite o servicio que necesitas. ¡Te esperamos!
                                </Card.Text>
                                <Card.Link
                                    href="https://citas.ebajacalifornia.gob.mx/"
                                    target="_blank"
                                >
                                    Ir al sitio de Citas
                                </Card.Link>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col xs={12} sm={6} md={6} lg={3} className="mb-4 d-flex justify-content-center">
                    <Card
                            className="card-7 h-100"
                            onClick={() =>
                                window.open(
                                    "https://tramites.ebajacalifornia.gob.mx/ventanillaunica/",
                                    "_blank"
                                )
                            }
                        >
                            <Card.Body className="d-flex flex-column">
                                <Card.Title>
                                    <FaLaptop />
                                    <h1>
                                        <strong>Trámites Digitales</strong>{" "}
                                    </h1>
                                </Card.Title>
                                <Card.Text className="text-justify flex-grow-1">
                                    ¡Te invitamos a descubrir nuestros nuevos servicios en línea!
                                    Ahora podrás realizar más servicios desde la comodidad de tu
                                    hogar y sin necesidad de hacer filas.
                                </Card.Text>
                                <Card.Link
                                    href="https://tramites.ebajacalifornia.gob.mx/ventanillaunica/"
                                    target="_blank"
                                >
                                    Ir a Ventanilla digital
                                </Card.Link>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col xs={12} sm={6} md={6} lg={3} className="mb-4 d-flex justify-content-center">
                     <Card
                            className="card-8 h-100"
                            onClick={() =>
                                window.open(
                                    "http://appsweb.ebajacalifornia.gob.mx/sifos/kiosko/index",
                                    "_blank"
                                )
                            }
                        >
                            <Card.Body className="d-flex flex-column">
                                <Card.Title>
                                    <FaMapMarkerAlt />
                                    <h1>
                                        <strong>Kioskos Multi-Servicios </strong>
                                    </h1>
                                </Card.Title>
                                <Card.Text className="flex-grow-1">
                                    Son cajeros automáticos que están distribuidos en los cinco municipios de la entidad para que puedas realizar tus trámites y pagos de manera ágil.
                                </Card.Text>
                                <Card.Link
                                    href="http://appsweb.ebajacalifornia.gob.mx/sifos/kiosko/index"
                                    target="_blank"
                                >
                                    Ubica los Kioskos
                                </Card.Link>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col xs={12} sm={6} md={6} lg={3} className="mb-4 d-flex justify-content-center">
                    <Card
                            className="card-9 h-100"
                            onClick={() =>
                                window.open(
                                    "https://www.bajacalifornia.gob.mx/Gobierno/FAQ",
                                    "_blank"
                                )
                            }
                        >
                            <Card.Body className="d-flex flex-column">
                                <Card.Title>
                                    <FaQuestionCircle />
                                    <h1>
                                        <strong>Preguntas frecuentes</strong>{" "}
                                    </h1>
                                </Card.Title>
                                <Card.Text className="text-justify flex-grow-1">
                                    Aquí encontrarás las preguntas más frecuentes de los ciudadanos sobre los trámites de Control Vehicular (Placas), Licencias de Conducir e Impuestos que ofrece la Secretaría de Hacienda.
                                </Card.Text>
                                <Card.Link
                                    href="https://www.bajacalifornia.gob.mx/Gobierno/FAQ"
                                    target="_blank"
                                >
                                    Ir a Preguntas frecuentes
                                </Card.Link>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
            <div className="footer-background">
                <Container>
                    <Row className="my-5">
                        <Col className="text-center">
                            <h2 className="social-header">
                                Consulta nuestras redes sociales oficiales
                            </h2>
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
                                © 2023 - Gobierno del Estado de Baja California | Políticas de
                                Privacidad y Seguridad | Accesibilidad
                            </p>
                        </Col>
                    </Row>
                </Container>
            </div>
        </>

    );


}

function downloadVCard() {
    const vCardData = [
        "BEGIN:VCARD",
        "VERSION:3.0",
        "N:Ciudadana;Atención;;;",
        "FN:Modelo Unico",
        "ORG:Modelo Unico de Atención Ciudadana",
        "TITLE:MUAC",
        "TEL;TYPE=work,voice;VALUE=uri:tel:+52 686 900 90 91",
        "EMAIL:atencionciudadana@bajacalifornia.gob.mx",
        "END:VCARD",
    ].join("\n");

    const blob = new Blob([vCardData], { type: "text/vcard" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = "contacto.vcf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
}

async function handleShare() {
    if (navigator.share) {
        try {
            await navigator.share({
                title: "Comparte este enlace",
                text: "Echa un vistazo a este enlace: ",
                url: "https://www.ejemplo.com",
            });
            console.log("Contenido compartido exitosamente");
        } catch (err) {
            console.error("Error al compartir:", err);
        }
    } else {
        // Alternativa para navegadores que no soportan la Web Share API
        alert("La Web Share API no está soportada en este navegador.");
    }
}



export default App;