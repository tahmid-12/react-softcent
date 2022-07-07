import React from 'react';
import styled from 'styled-components';
import { Container } from 'react-bootstrap';
import Logo from '../images/Logo.png';

function Navbar() {
  return (
    <Container>
        {/* <DIV> */}
         <Row>
            <IMGDIV>
                <img src={Logo} alt="Soft-Cent"/>
            </IMGDIV>
            <NAVDIV>
                <ul>
                    <li><a href="#">Home</a></li>
                    <li><a href="#">About</a></li>
                    <li><a href="#">Work</a></li>
                    <li><a href="#">Permium Products</a></li>
                    <li><a href="#">Blog</a></li>
                    <li>
                        <Button>Start a Project</Button>                  
                    </li>
                </ul>
            </NAVDIV>    
         </Row>
        {/* </DIV> */}
    </Container>
  )
}


// const DIV = styled.div`
//     margin-top: 12px;
// `;
const Row = styled.div`
    display: flex;
`;

const IMGDIV = styled.div`
     
`;

const NAVDIV = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-left: 30px;
    ul{
        list-style-type: none;
        display: flex;
        font-family: Nunito;
        text-transform: uppercase;
    }
    li{
        padding: 25px;
        display: flex;
        justify-content: space-between;
        a{
            color: #000000;
            font-size: 18px;
            font-weight: 400;
            line-height: 22px;
            &:hover{
                text-decoration: none;
                color: blue;
            }
        }
    }
`;

const Button = styled.button`
        background: #3088FF;
        box-shadow: 16px 16px 28px rgba(48, 136, 255, 0.1);
        border-radius: 8px;
        border: none;
        color: #ffffff;
        font-size: 18px;
        width: 193px;
        height: 50px;
        margin-top: -15px;
`;

export default Navbar;