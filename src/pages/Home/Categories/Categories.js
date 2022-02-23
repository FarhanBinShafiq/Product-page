import React, { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Category from '../Category/Category';
import './Categories.css'

const Categories = () => {
  
    const [categories,setCategories]=useState ([]);

    useEffect(()=>{
        fetch('https://fakestoreapi.com/products?limit=8')
            .then(res=>res.json())
            .then(data=>setCategories(data))
    },[])

    return (
        <>
       <Container>
        <Row>
        <h3>Shop by categories </h3>
      
      {
          categories.map(category=><Col lg={3} md={6} sm={12} className='pt-3'><Category category={category}></Category> </Col>)}


      
        </Row>
                          
     



       </Container>


            
        </>
    );
};

export default Categories;