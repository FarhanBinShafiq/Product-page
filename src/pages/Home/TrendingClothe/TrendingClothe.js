import React from 'react';
import { Button, Col, Container, Image, Row } from 'react-bootstrap';
import './TrendingClothe.css'
import { MdStarRate } from "react-icons/md";
import { ImHeart } from "react-icons/im";


const TrendingClothe = (props) => {
    const { title, image, category, description, price, rating } = props.clothe;

    return (
        <>

            <Container>
                <Row>
                    <Col  >
                        <Image src={image} style={{ height: '90%', width: '75%' }} ></Image>
                    </Col>

                    <Col className="pt-5 trending-product">
                        <h5> {title}</h5>
                        <p>    ${price}</p>
                        <p>{category}</p>
                        <p>{description}</p>
                        <p><MdStarRate /> <MdStarRate /> <MdStarRate /> <MdStarRate /> <MdStarRate /> <MdStarRate /> {rating.rate} ({rating.count})    <ImHeart /> </p>
                        <Button variant='outline-danger'>Add To Bag</Button>

                    </Col>
                </Row>
            </Container>

        </>
    );
};

export default TrendingClothe;