import React, { useState } from 'react';
import Slider from "react-slick";
import '../Catalogo/catalogo.css'
import { listadePro } from '../data';
import { Modal } from '../Modal';
import styled from 'styled-components';


export function CataProd() {
    const [estadoModal3, cambiarEstadoModal3] = useState(false);


    const settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };
    return (
        <>
            <div className="contenedorTarjetas">
                <div className="catprod">
                    <Slider {...settings}>
                        {listadePro.map(item => (
                            <div className="cardPro">
                                <div className="carttopPro">
                                    <h4>{item.title}</h4>
                                    <p>{item.subtitle}</p>
                                    <p>{item.marca}</p>
                                    <img src={item.linkimg} alt={item.title} />
                                </div>
                                <div className="btnprod">
                                    <a className="cons" href=""><i class="fa fa-whatsapp "></i> CONSULTAR</a>
                                    <a className="verpro" onClick={() => cambiarEstadoModal3(!estadoModal3)}>VER PRODUCTO</a>
                                </div>
                            </div>
                        ))}
                    </Slider>
                </div>
                <div className="catprod">
                    <Slider {...settings}>
                        {listadePro.map(item => (
                            <div className="cardPro">
                                <div className="carttopPro">
                                    <h4>{item.title}</h4>
                                    <p>{item.subtitle}</p>
                                    <p>{item.marca}</p>
                                    <img src={item.linkimg} alt={item.title} />
                                </div>

                            </div>
                        ))}
                    </Slider>
                </div>
                <div className="catprod">
                    <Slider {...settings}>
                        {listadePro.map(item => (
                            <div className="cardPro">
                                <div className="carttopPro">
                                    <h4>{item.title}</h4>
                                    <p>{item.subtitle}</p>
                                    <p>{item.marca}</p>
                                    <img src={item.linkimg} alt={item.title} />
                                </div>
                                <button className="prodagot">AGOTADO</button>
                            </div>
                        ))}
                    </Slider>
                </div>
                <div className="catprod">
                    <Slider {...settings}>
                        {listadePro.map(item => (
                            <div className="cardPro">
                                <div className="carttopPro">
                                    <h4>{item.title}</h4>
                                    <p>{item.subtitle}</p>
                                    <p>{item.marca}</p>
                                    <img src={item.linkimg} alt={item.title} />
                                </div>

                            </div>
                        ))}
                    </Slider>
                </div>
                <div className="catprod">
                    <Slider {...settings}>
                        {listadePro.map(item => (
                            <div className="cardPro">
                                <div className="carttopPro">
                                    <h4>{item.title}</h4>
                                    <p>{item.subtitle}</p>
                                    <p>{item.marca}</p>
                                    <img src={item.linkimg} alt={item.title} />
                                </div>

                            </div>
                        ))}
                    </Slider>
                </div>
                <div className="catprod">
                    <Slider {...settings}>
                        {listadePro.map(item => (
                            <div className="cardPro">
                                <div className="carttopPro">
                                    <h4>{item.title}</h4>
                                    <p>{item.subtitle}</p>
                                    <p>{item.marca}</p>
                                    <img src={item.linkimg} alt={item.title} />
                                </div>

                            </div>
                        ))}
                    </Slider>
                </div>
                <div className="catprod">
                    <Slider {...settings}>
                        {listadePro.map(item => (
                            <div className="cardPro">
                                <div className="carttopPro">
                                    <h4>{item.title}</h4>
                                    <p>{item.subtitle}</p>
                                    <p>{item.marca}</p>
                                    <img src={item.linkimg} alt={item.title} />
                                </div>

                            </div>
                        ))}
                    </Slider>
                </div>
                <div className="catprod">
                    <Slider {...settings}>
                        {listadePro.map(item => (
                            <div className="cardPro">
                                <div className="carttopPro">
                                    <h4>{item.title}</h4>
                                    <p>{item.subtitle}</p>
                                    <p>{item.marca}</p>
                                    <img src={item.linkimg} alt={item.title} />
                                </div>

                            </div>
                        ))}
                    </Slider>
                </div>
                <div className="catprod">
                    <Slider {...settings}>
                        {listadePro.map(item => (
                            <div className="cardPro">
                                <div className="carttopPro">
                                    <h4>{item.title}</h4>
                                    <p>{item.subtitle}</p>
                                    <p>{item.marca}</p>
                                    <img src={item.linkimg} alt={item.title} />
                                </div>

                            </div>
                        ))}
                    </Slider>
                </div>
            </div>

            <Modal
                estado={estadoModal3}
                cambiarEstado={cambiarEstadoModal3}
                titulo="Aceite Distro DT-11"
                mostrarHeader={true}
                mostrarOverlay={true}
                posicionModal={'start'}
                padding={'20px'}
            >
                <Contenido className='divModalxd'>
                    <div className="catprod">
                        <Slider {...settings}>
                            {listadePro.map(item => (
                                <div className="cardPro">
                                    <div className="carttopPro">
                                        <h4>{item.title}</h4>
                                        <p>{item.subtitle}</p>
                                        <p>{item.marca}</p>
                                        <img src={item.linkimg} alt={item.title} />
                                    </div>
                                </div>
                            ))}
                        </Slider>
                    </div>  
                    <div className='descri'>
                    <h4>Descripción</h4> 
                    <p>Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido usó una galería de textos y los mezcló de tal manera que logró hacer un libro de textos especimen.</p>
                    </div>
                </Contenido>
            </Modal>
        </>
    );
}

const Contenido = styled.div`
	display: flex;	
	margin: auto;
    .descri{
        width: 40% ;
        margin: auto;
        float: right;
    }
	p {  
        font-size: 15px;        
	}	
    .catprod{
        margin: 40px;
        width: 30%;
    }
    
    @media screen  and (max-width: 1000px) {
        .catprod{           
            width: 80%;
            height: 550px;
            margin: 0;
            margin-bottom: 40px;
        }
        .descri{
        width: 80% ;
        margin: auto;
        float: right;
    }
    }

`;

