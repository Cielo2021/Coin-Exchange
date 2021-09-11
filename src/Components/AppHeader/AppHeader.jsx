import React from 'react'
import logo from  './logo.svg';
import styled from 'styled-components';

const img = styled.image`
    height: 8rem;
    pointer-events: none;
`;

const Header = styled.header`
    background-color: #282c34;
    min-height: 20vh;
    min-height: 10vh;
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    color: white;
`;

const H1 = styled.h1`
    font-size: 4rem;
    font-size: 3rem;
    line:height: 8rem;
    fold-weight: bold;
    min-width: 300px;
    `;

export default function Appheader (props) {
    return (

        <>
     <Header>
        <img src={logo} alt="React logo"/>
        <H1>Coin Exchange</H1>
        </Header>
            </>    
            
        )
    }

