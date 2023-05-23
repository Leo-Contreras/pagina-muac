import React from 'react';
import { IoPerson } from 'react-icons/io5';
import {
    FaRegCalendarAlt,
    FaLaptop,
    FaMapMarkerAlt,
    FaQuestionCircle,
    FaArrowRight,
    FaPhone,
    FaEnvelope, FaShareAlt
} from 'react-icons/fa';
import { MdEmail, MdLocalPhone, MdLocationOn } from 'react-icons/md';
import {Container, Row, Col, Card, Dropdown} from 'react-bootstrap';
import MediaQuery from 'react-responsive';
import logo from './imagenes/logo-adbc-png.webp';
import logoMuac from './imagenes/BC-MUAC-mobile@4k - copia.jpg';
import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube, FaWhatsapp, FaFacebookMessenger } from 'react-icons/fa';
import './App.css';
import cardImg2 from './imagenes/card-img-2.webp';
import cardImg3 from './imagenes/card-img-3.webp';


function App() {
    return (
        <>
            <Container>
                <Row className="align-items-center my-3">
                    <Col xs={12} sm={6} className="text-center text-md-start mb-3 mb-md-0">
                        <a href="https://www.ventanillabc.bajacalifornia.gob.mx/">
                            <img src={logo} alt="Logo" className="logo logo-small" />
                        </a>
                    </Col>
                    <Col xs={12} lg={6} className="d-flex flex-wrap justify-content-sm-end align-items-center">
                        <MediaQuery minDeviceWidth={992}>
                            <a href="https://www.facebook.com/BC.Gobierno/?locale=es_LA" target="_blank" rel="noopener noreferrer" className="social-icon">
                                <FaFacebookF className="small-icon"/>
                            </a>
                            <a href="https://www.messenger.com/login.php?next=https%3A%2F%2Fwww.messenger.com%2Ft%2F120544204635995" target="_blank" rel="noopener noreferrer" className="social-icon">
                                <FaFacebookMessenger className="small-icon" />
                            </a>
                            <a href="https://api.whatsapp.com/send/?phone=5216869009091&text&type=phone_number&app_absent=0" target="_blank" rel="noopener noreferrer" className="social-icon">
                                <FaWhatsapp className="small-icon"/>
                            </a>
                            <a href="https://twitter.com/bcgobierno" target="_blank" rel="noopener noreferrer" className="social-icon">
                                <FaTwitter className="small-icon"/>
                            </a>
                            <a href="https://www.instagram.com/BCGobierno/" target="_blank" rel="noopener noreferrer" className="social-icon">
                                <FaInstagram className="small-icon"/>
                            </a>
                            <a href="mailto:atencionciudadana@bajacalifornia.gob.mx" target="_blank" rel="noopener noreferrer" className="social-icon">
                                <FaEnvelope className="small-icon"/>
                            </a>
                            <a href="tel:+526869009091" target="_blank" rel="noopener noreferrer" className="social-icon">
                                <FaPhone className="small-icon"/>
                            </a>

                            <a href="/#" onClick={handleShare} className="social-icon">
                                <FaShareAlt className="small-icon"/>
                            </a>
                        </MediaQuery>
                        <MediaQuery maxDeviceWidth={991}>
                            {/* Contenido visible en dispositivos más pequeños */}
                            <div className="dropdown-button">
                                <Dropdown >
                                    <Dropdown.Toggle variant="danger" id="dropdown-basic">
                                        Contactanos
                                    </Dropdown.Toggle>
                                    <Dropdown.Menu>
                                        <Dropdown.Item href="https://www.facebook.com/BC.Gobierno/?locale=es_LA" target="_blank" rel="noopener noreferrer">
                                            <FaFacebookF /> Facebook
                                        </Dropdown.Item>
                                        <Dropdown.Item href="https://www.messenger.com/login.php?next=https%3A%2F%2Fwww.messenger.com%2Ft%2F120544204635995" target="_blank" rel="noopener noreferrer">
                                            <FaFacebookMessenger /> Messenger
                                        </Dropdown.Item>
                                        <Dropdown.Item href="https://api.whatsapp.com/send/?phone=5216869009091&text&type=phone_number&app_absent=0" target="_blank" rel="noopener noreferrer">
                                            <FaWhatsapp /> WhatsApp
                                        </Dropdown.Item>
                                        <Dropdown.Item href="https://twitter.com/bcgobierno" target="_blank" rel="noopener noreferrer">
                                            <FaTwitter /> Twitter
                                        </Dropdown.Item>
                                        <Dropdown.Item href="https://www.instagram.com/BCGobierno/" target="_blank" rel="noopener noreferrer">
                                            <FaInstagram /> Instagram
                                        </Dropdown.Item>
                                        <Dropdown.Item href="mailto:atencionciudadana@bajacalifornia.gob.mx" target="_blank" rel="noopener noreferrer">
                                            <FaEnvelope /> Correo
                                        </Dropdown.Item>
                                        <Dropdown.Item href="tel:+526869009091" target="_blank" rel="noopener noreferrer">
                                            <FaPhone /> Teléfono
                                        </Dropdown.Item>
                                        <Dropdown.Item onClick={handleShare}>
                                            <FaShareAlt /> Compartir
                                        </Dropdown.Item>
                                    </Dropdown.Menu>
                                </Dropdown>
                            </div>
                        </MediaQuery>
                        {/* <Button className="share-button hide-on-mobile" onClick={handleShare}>
                            Compartir
                        </Button>
                        */}
                    </Col>
                </Row>
                <Row className="my-3">
                    <Col className="col-12 col-md text-center text-md-start">
                        <h1 className="header-2"> Bienvenidos al </h1>
                        <h1 className="header"> Modelo Único de Atención Ciudadana BC </h1>
                    </Col>
                    <Col className="col-12 col-md text-center text-md-start">
                        <img src={logoMuac} alt="Logo MUAC" className="logo-muac"/>
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
                    <Row className="flex-column flex-md-row align-items-center g-4">
                        <Col lg ={6} md={12} className="d-flex justify-content-center text-center ">
                            {/*  <img
                                className="custom-image card-1 card-size"
                                src={cardImg1}
                                alt="Card 1"
                                onClick={() => window.open("http://www.bajacalifornia.gob.mx", "_blank")}
                            />
                            */}

                            <Card bg="dark" key="Dark" text="white" className="custom-card card-1 text-center">
                                <Card.Header> Sitio web oficial del Gobierno del Estado de Baja California</Card.Header>
                                <Card.Title>
                                    http://www.bajacalifornia.gob.mx
                                </Card.Title>
                                <Card.Link href="http://www.bajacalifornia.gob.mx" target="_blank" className="link-text">
                                    <FaArrowRight className="link-icon" /> Ir al sitio oficial
                                </Card.Link>
                            </Card>



                        </Col>
                        <Col lg = {6} md={12} className="d-flex justify-content-center text-center ">
                         <Row className="flex-column flex-md-row align-items-center g-4">
                            <Col sm={12} md={6} lg={6} className="d-flex justify-content-center text-center p-3">
                                    <img
                                        className="custom-image card-2"
                                        src={cardImg2}
                                        alt="Card 2"
                                        onClick={() => window.open("https://api.whatsapp.com/send/?phone=5216869009091&text&type=phone_number&app_absent=0", "_blank")}
                                    />
                                </Col>
                                <Col sm={12} md={6} lg={6} className="d-flex justify-content-center text-center p-3">
                                    <img
                                        className="custom-image card-3 card-size"
                                        src={cardImg3}
                                        alt="Card 3"
                                        onClick={() =>
                                            window.open(
                                                "https://www.messenger.com/login.php?next=https%3A%2F%2Fwww.messenger%2Ft%2F120544204635995",
                                                "_blank"
                                            )
                                        }
                                    />
                                </Col>
                            </Row>
                        </Col>





                        <Col xl={6} lg = {12} md={12} className="d-flex justify-content-center text-center margin-padding p-3">
                            <Card className="custom-card card-4 full-width-responsive">
                                <Container>
                                    <Card.Body className="card-content ">
                                        <Card.Title className="titulo-card5">
                                               <h3 className="header-2"> Atención a Quejas y Denuncias Ciudadanas</h3>

                                        </Card.Title>

                                        <Card.Text className="direccion-card5" >
                                            <br />
                                            <br />
                                                El Sistema de Atención a Quejas y Denuncias Ciudadanas es un sistema de la
                                                Secretaría de la Función Pública creado para registrar, captar, administrar,
                                                atender e investigar denuncias que cualquier persona formule en el marco de
                                                la Ley General de Responsabilidades Administrativas.


                                            <br />

                                        </Card.Text>

                                        <button
                                            className="custom-button card-btn"
                                            onClick={() =>
                                                window.open(
                                                    "http://sctg.bajacalifornia.gob.mx:8080/quejas/queja.jsp",
                                                    "_blank"
                                                )
                                            }
                                            style={{ backgroundColor: "#6A1C32" }}
                                        >
                                            Ir a sitio SCTG
                                        </button>
                                    </Card.Body>
                                </Container>
                            </Card>

                        </Col>
                        <Col xl={6} md={12} className="d-flex justify-content-center text-center margin-padding p-3">
                            <Card className="custom-card card-5 same-height-card full-width-responsive">
                                <Container>
                                    <Card.Body className="card-content">
                                        <div className="text-container">
                                            <Card.Text className="titulo-card5">Ubícanos</Card.Text>
                                            {/*   <Card.Subtitle className="mb-2 subtitle-card5">¡Estamos para ayudarte!</Card.Subtitle>*/}
                                            <Card.Text className="oficialia-card5">
                                                <MdLocationOn className="icon-card5" />
                                                Oficialía Mayor del Gobierno del Estado
                                            </Card.Text>
                                            <Card.Text className="direccion-card5">

                                                Edificio Poder Ejecutivo Calzada Independencia #994 Centro Cívico y Comercial, Mexicali, Baja California, Mexico, 21000

                                            </Card.Text>
                                            <Card.Text className="contacto-card5">
                                                <MdEmail className="icon-card5" /> atencionciudadana@bajacalifornia.gob.mx
                                            </Card.Text>
                                            <Card.Text className="contacto-card5">
                                                <MdLocalPhone className="icon-card5" /> Teléfono: 686 900 90 91
                                            </Card.Text>
                                            <Card.Link className="enlace-card5" href="https://goo.gl/maps/HUruXa2yrziLphht5" target="_blank"> <MdLocationOn className="icon-card5" />Ubicación </Card.Link>
                                            <button className="custom-button card-btn" onClick={downloadVCard}>
                                                Guardar en mis Contactos
                                                <span className="contact-icon">
                                                    <IoPerson />
                                                  </span>
                                            </button>
                                        </div>
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
                                <div style={{ marginTop: '77px' }}></div>
                                <Card.Link
                                    href="https://citas.ebajacalifornia.gob.mx/"
                                    target="_blank"
                                    className="custom-card-link"
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
                                    "https://www.ventanillabc.bajacalifornia.gob.mx/",
                                    "_blank"
                                )
                            }
                        >
                            <Card.Body className="d-flex flex-column">
                                <Card.Text>
                                    <FaLaptop />
                                    <h1>
                                        <strong>Trámites Digitales</strong>{" "}
                                    </h1>
                                </Card.Text>
                                <Card.Text className="text-justify flex-grow-1">
                                    ¡Te invitamos a descubrir nuestros nuevos servicios en línea!
                                    Ahora podrás realizar más servicios desde la comodidad de tu
                                    hogar y sin necesidad de hacer filas.
                                </Card.Text>
                                <Card.Link
                                    href="https://www.ventanillabc.bajacalifornia.gob.mx/"
                                    target="_blank"
                                    className="custom-card-link"
                                >
                                    Ir a Ventanilla Única
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
                                <Card.Text>
                                    <FaMapMarkerAlt />
                                    <h1>
                                        <strong>Kioskos Multi-Servicios </strong>
                                    </h1>
                                </Card.Text>
                                <Card.Text className="flex-grow-1">
                                    Son cajeros automáticos que están distribuidos en los cinco municipios de la entidad para que puedas realizar tus trámites y pagos de manera ágil.
                                </Card.Text>
                                <Card.Link
                                    href="http://appsweb.ebajacalifornia.gob.mx/sifos/kiosko/index"
                                    target="_blank"
                                    className="custom-card-link"
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
                                <Card.Text>
                                    <FaQuestionCircle />
                                    <h1>
                                        <strong>Preguntas frecuentes</strong>{" "}
                                    </h1>
                                </Card.Text>
                                <Card.Text className="text-justify flex-grow-1">
                                    Aquí encontrarás las preguntas más frecuentes de los ciudadanos sobre los trámites de Control Vehicular (Placas), Licencias de Conducir e Impuestos que ofrece la Secretaría de Hacienda.
                                </Card.Text>
                                <Card.Link
                                    href="https://www.bajacalifornia.gob.mx/Gobierno/FAQ"
                                    target="_blank"
                                    className="custom-card-link"
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
                            <a href="https://www.facebook.com/BC.Gobierno/?locale=es_LA" target="_blank" rel="noopener noreferrer" className="social-icon">
                                <FaFacebookF className="icon" size="3em"/>
                                <p>Facebook</p>
                            </a>
                        </Col>
                        <Col className="social-icon-col">
                            <a href="https://www.instagram.com/BCGobierno/" target="_blank" rel="noopener noreferrer" className="social-icon">
                                <FaInstagram className="icon" size="3em" />
                                <p>Instagram</p>
                            </a>
                        </Col>
                        <Col className="social-icon-col">
                            <a href="https://www.messenger.com/login.php?next=https%3A%2F%2Fwww.messenger.com%2Ft%2F120544204635995" target="_blank" rel="noopener noreferrer" className="social-icon">
                                <FaFacebookMessenger className="icon" size="3em" />
                                <p>Messenger</p>
                            </a>
                        </Col>
                        <Col className="social-icon-col">
                            <a href="https://twitter.com/bcgobierno" target="_blank" rel="noopener noreferrer" className="social-icon">
                                <FaTwitter className="icon" size="3em"/>
                                <p>Twitter</p>
                            </a>
                        </Col>
                        <Col className="social-icon-col">
                            <a href="https://api.whatsapp.com/send/?phone=5216869009091&text&type=phone_number&app_absent=0" target="_blank" rel="noopener noreferrer" className="social-icon">
                                <FaWhatsapp className="icon" size="3em"/>
                                <p>WhatsApp</p>
                            </a>
                        </Col>
                        <Col className="social-icon-col">
                            <a href="https://www.youtube.com/@gobiernodebajacalifornia718" target="_blank" rel="noopener noreferrer" className="social-icon">
                                <FaYoutube className="icon" size="3em"/>
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
                {/*   <Container>
                                <Card
                                    className="custom-card card-2 w-100"
                                    onClick={() =>
                                        window.open(
                                            "https://api.whatsapp.com/send/?phone=5216869009091&text&type=phone_number&app_absent=0",
                                            "_blank"
                                        )
                                    }
                                    style={{ cursor: 'pointer' }}
                                >
                                    <Card.Body className="text-center">
                                        <Card.Title
                                            style={{
                                                fontFamily: 'Montserrat',
                                                fontStyle: 'normal',
                                                fontWeight: 700,
                                                fontSize: '36px',
                                                lineHeight: '44px',
                                                letterSpacing: '-0.01em',
                                                color: '#131313',
                                            }}
                                        >
                                            Whatsapp de Atención Ciudadana
                                        </Card.Title>
                                        <Card.Subtitle
                                            className="mb-2"
                                            style={{
                                                fontFamily: 'Montserrat',
                                                fontStyle: 'normal',
                                                fontWeight: 400,
                                                fontSize: '18px',
                                                lineHeight: '28px',
                                                color: '#16A34A',
                                            }}
                                        >
                                            Obtén ayuda o información las 24 hrs
                                        </Card.Subtitle>
                                        <Card.Link
                                            href="https://api.whatsapp.com/send/?phone=5216869009091&text&type=phone_number&app_absent=0"
                                            target="_blank"
                                            style={{
                                                fontFamily: 'Montserrat',
                                                fontStyle: 'normal',
                                                fontWeight: 700,
                                                fontSize: '14px',
                                                lineHeight: '20px',
                                                color: '#3C3C3B',
                                            }}
                                        >

                                            Ir al WhatsApp
                                            <FaWhatsapp />
                                        </Card.Link>
                                    </Card.Body>
                                </Card>
                            </Container>

                        </Col>
                        <Col md={3} className="mb-2">
                            <Container>

                                    <Card
                                    className="custom-card card-3 w-100"
                                    onClick={() =>
                                        window.open(
                                            "https://www.messenger.com/login.php?next=https%3A%2F%2Fwww.messenger%2Ft%2F120544204635995",
                                            "_blank"
                                        )
                                    }
                                    style={{ cursor: 'pointer' }}
                                >
                                    <Card.Body className="text-center">
                                        <Card.Title
                                            style={{
                                                fontFamily: 'Montserrat',
                                                fontStyle: 'normal',
                                                fontWeight: 700,
                                                fontSize: '36px',
                                                lineHeight: '44px',
                                                letterSpacing: '-0.01em',
                                                color: '#131313',
                                            }}
                                        >
                                            Messenger de Atención Ciudadana
                                        </Card.Title>
                                        <Card.Subtitle
                                            className="mb-2"
                                            style={{
                                                fontFamily: 'Montserrat',
                                                fontStyle: 'normal',
                                                fontWeight: 400,
                                                fontSize: '18px',
                                                lineHeight: '28px',
                                                color: '#F43F5E',
                                            }}
                                        >
                                            Obtén ayuda o información las 24 hrs
                                        </Card.Subtitle>
                                        <Card.Link
                                            href="https://www.messenger.com/login.php?next=https%3A%2F%2Fwww.messenger%2Ft%2F120544204635995"
                                            target="_blank"
                                            style={{
                                                fontFamily: 'Montserrat',
                                                fontStyle: 'normal',
                                                fontWeight: 700,
                                                fontSize: '14px',
                                                lineHeight: '20px',
                                                color: '#3C3C3B',
                                            }}
                                        >

                                            Ir al Messenger
                                            <FaFacebookMessenger />
                                        </Card.Link>
                                    </Card.Body>
                                </Card>
                            </Container>
*/}
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
                url: "https://muac.bajacalifornia.gob.mx/",
            });
            console.log("Contenido compartido exitosamente");
        } catch (err) {
            console.error("Error al compartir:", err);
        }
    } else {
        try {
            // Fallback a copiar al portapapeles
            await navigator.clipboard.writeText("https://muac.bajacalifornia.gob.mx/");
            console.log("Enlace copiado al portapapeles");
        } catch (err) {
            console.error("Error al copiar al portapapeles:", err);
        }
    }
}
export default App;
