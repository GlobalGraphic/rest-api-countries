import React, { useState, useEffect } from "react";
import '../App.css';
import { Container, Row, Col, Image } from 'react-bootstrap';
import axios from 'axios';

const Countries = () => {

    const [country, setCountry] = useState([]);

    useEffect(() => {
       getCountries();
    }, []);

    const getCountries = async () => {
        const result = await axios(
            'https://restcountries.eu/rest/v2/all'
        );
        setCountry(result.data);
        console.log(result.data);
    }

    return (
        <Container fluid>
            <Row>
                {country.map(function(item,key){
                   return (
                       <Col id={key}>
                           <Image className='country_img' src={item.flag} alt={item.alpha2code}/>
                           <p>{item.name}</p>
                       </Col>
                   );
                })};
            </Row>
        </Container>
    );
}

export default Countries;