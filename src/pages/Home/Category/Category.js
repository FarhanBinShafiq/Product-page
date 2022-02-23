import React from 'react';
import { Card, CardGroup, Col, Row } from 'react-bootstrap';
import './Category.css'

const Category = (props) => {
    const { image,category } = props.category;
    return (
        <>
            <CardGroup className='category-name'>
                <Card>
                    <Card.Img variant="top Image" src={image} />
                    <Card.Body className='middle'>
                    <div class="text">{category}</div>

                    </Card.Body>

                </Card>


            </CardGroup>
        </>
    );
};

export default Category;