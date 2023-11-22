
import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import logo from './escudo-baja-california.png';
import './PiePagina.css';


const PiePagina = () => {
    const enlaces = [
        {
            titulo: 'BAJA CALIFORNIA',
            items: [
                { texto: 'Mexicali', url: 'https://www.mexicali.gob.mx/' },
                { texto: 'Tijuana', url: 'https://www.tijuana.gob.mx/' },
                { texto: 'Ensenada', url: 'http://www.ensenada.gob.mx/' },
                { texto: 'Rosarito', url: 'http://www.rosarito.gob.mx/' },
                { texto: 'Tecate', url: 'https://tecate.gob.mx/' },

            ],
        },
        {
            titulo: 'ENLACES',
            items: [
                { texto: 'Estadisticas e indicadores', url: 'http://www.monitorbc.gob.mx/' },
                { texto: 'Compras,Proveedores y Licitaciones', url: 'https://tramites.ebajacalifornia.gob.mx/Compras/'},
                { texto: 'Impuestos federales', url: 'https://www.sat.gob.mx/' },
                { texto: 'Acerca del Portal' , url: 'https://bajacalifornia.gob.mx/Gobierno/Acerca'},
                { texto: 'Trámites y Servicios en Línea' , url: 'http://retys.bajacalifornia.gob.mx/Portal/TySEnLinea'}

            ],
        },
        {
            titulo: 'CONTACTO',
            items: [
                { texto: 'Oficinas de Gobierno', url: 'https://bajacalifornia.gob.mx/Gobierno/Oficinas' },
                { texto: 'Directorio de Funcionarios', url: 'https://bajacalifornia.gob.mx/Gobierno/Directorio_Funcionarios'},
                { texto: 'Cajeros electrónicos', url: 'http://appsweb.ebajacalifornia.gob.mx/SIFOS/Kiosko/' },
                { texto: 'Preguntas frecuentes', url: 'https://bajacalifornia.gob.mx/Gobierno/FAQ' },
                { texto: 'Transparencia B.C.', url: "http://www.transparenciabc.gob.mx/"},


            ],
        },
    ];

    return (
        <footer>
            <Container fluid className="bg-3f3f3d text-white pt-4 pb-4">
                <Container>
                    <Row className="pt-4">
                        <Col xs={12} sm={3} className="mb-4 mb-sm-0 text-center">
                            <a href="https://www.bajacalifornia.gob.mx/">
                                <img src={logo} alt="Logo" style={{ width: '100%', maxWidth: '150px' }} />
                            </a>
                        </Col>
                        {enlaces.map((columna, index) => (
                            <Col key={index} xs={12} sm={3} className="mb-3 mb-sm-0">
                                <h6 className="mb-3"><strong>{columna.titulo}</strong></h6>
                                <div style={{ height: '2px', backgroundColor: 'rgb(177,122,69)',width: '10%' ,marginBottom: '5px' }}></div> {/* Línea dorada */}
                                <ul className="list-unstyled">
                                    {columna.items.map((item, idx) => (
                                        <li key={idx} className="mb-1 ">
                                            <a
                                                href={item.url}
                                                className="text-decoration-none enlaces-footer larger-text"
                                                target="_blank"
                                                rel="noopener noreferrer"
                                            >
                                                {item.texto}
                                            </a>
                                        </li>
                                    ))}
                                </ul>
                            </Col>
                        ))}
                    </Row>
                </Container>
            </Container>

            <Container fluid className="bg-gold" style={{ height: '4px' }} /> {/* Contenedor dorado */}


            <Container fluid className="bg-6a1c32 text-white py-3 pt-4">
                <Container className="text-center">
                    <p className="font-weight-bold small-text mb-0">
                        Copyright © 2023  Portal de Gobierno de Baja California | Agencia Digital | Politicas de Privacidad y Seguridad
                        última fecha de actualización del día 05 de Junio del 2023
                    </p>
                </Container>
            </Container>
        </footer>

    );
};

export default PiePagina;