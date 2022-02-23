import React, { useEffect, useState } from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import TrendingClothe from '../TrendingClothe/TrendingClothe';
import './TrendingClothes.css'

const TrendingClothes = () => {

    const [clothes, setClothes] = useState([]);

    useEffect(() => {
        fetch('https://fakestoreapi.com/products?limit=5')
            .then(res => res.json())
            .then(data => setClothes(data))
    }, [])


    return (
        <>

            <Container>
                <h5 className='pt-3'>Trending  clothes</h5>

                {
                    clothes.map(clothe => <TrendingClothe clothe={clothe}></TrendingClothe>)
                }
            </Container>


        </>
    );
};

export default TrendingClothes;