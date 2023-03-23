import React, { useState } from 'react';
import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Particle from '../components/Particle';
import "./First.css";

const First = () => {
    const [ text, setText ] = useState("고요한");
    
    return (
        <Container id='start'>
            <Particle />
           <Link to="/home"><h1 className='first' onMouseEnter={()=>{setText("/고요한")}} onMouseLeave={()=>{setText("고요한")}}><span className='left'>{'<'}</span><span className='name'>{text}</span><span className='right'>{'>'}</span></h1></Link>
        </Container>
    );
};

export default First;