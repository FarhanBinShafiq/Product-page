import React from 'react';
import './HomeTopSection.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Col, Container, Image, Row } from 'react-bootstrap';
import imageOne from '../../../Images/HomeTopSection/one.jpg'
import imageTwo from '../../../Images/HomeTopSection/two.JPG'
import imageThree from '../../../Images/HomeTopSection/three.JPG'
import imageFour from '../../../Images/HomeTopSection/four.JPG'
import { MdLens, MdStarRate } from "react-icons/md";
import { FaAngleRight } from "react-icons/fa";


const HomeTopSection = () => {
    return (
        <>
            <Container>
                <h6 className='pt-5'>Fashion club exlusives/Outdoor</h6>
                <Row>
                    <Col md={6} sm={12}>
                        <Image src={imageOne} className='pt-3' fluid />
                        <div>
                            <Image src={imageTwo} className="p-3" style={{ height: '30%', width: '30%' }} />
                            <Image src={imageThree} className="p-3" style={{ height: '30%', width: '30%' }} />
                            <Image src={imageFour} className="p-3" style={{ height: '30%', width: '30%' }} />

                        </div>
                    </Col>

                    <Col md={6} sm={12}>


                        <div className='pt-5'>
                            <p>Fashion club exlusives</p>
                            <h1>Russioan Jacket</h1>
                            <p>Guci</p>

                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>

                            <p> <b>$30.50</b></p>
                        </div>

                        <div className='pt-5 '>
                            <Button variant="outline-danger">s</Button>
                            <Button variant="outline-danger size">M</Button>
                            <Button variant="outline-danger size ">L</Button>
                            <Button variant="outline-danger size">XL</Button>
                        </div>

                        <div className='pt-5'>
                            <Button variant="outline-danger ">Add to bag</Button>
                            <Button variant="outline-danger size">Purchase now</Button>
                        </div>


                        <Container className='pt-5'>
                            <Row>
                                <Col>
                                    <h5>Product Details</h5>
                                </Col>
                                <Col> < MdLens />   < MdLens />  < MdLens />  <FaAngleRight />
                                </Col>
                            </Row>

                        </Container>


                        <Container className='pt-5'>
                            <Row>
                                <Col>
                                    <h5>Product reviews</h5>
                                </Col>
                                <Col>    <MdStarRate /> <MdStarRate /> <MdStarRate /> 4.8(75) <FaAngleRight />
                                </Col>
                            </Row>

                        </Container>


                        <Container className='pt-5'>
                            <Row>
                                <Col>
                                    <h5>Delivery information </h5>
                                </Col>
                                <Col>  Free shipping <FaAngleRight />
                                </Col>
                            </Row>

                        </Container>




                    </Col>
                </Row>
            </Container>
        </>
    );
};

export default HomeTopSection;