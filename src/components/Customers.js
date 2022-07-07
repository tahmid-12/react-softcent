import React from 'react';
import { Container } from 'react-bootstrap';
import styled from 'styled-components';
import Underline from '../images/small_underline.png';
import UBS from '../images/usb.png';
import HSBC from '../images/hsbc.png';
import FITLAB from '../images/myfitlab.png';
import APPSERO from '../images/appsero.png';




function Customers() {
  return (
    <CustomerDIV>
        <Container>
            <div className="header-section">
                <p>Our Customers</p>
                <img src={Underline} alt="Underline"/>
            </div>

            <div className="logos">
                <img src={UBS} alt="UBS"/>
                <img src={HSBC} alt="HSBC"/>
                <img src={FITLAB} alt="FITLAB"/>
                <img src={APPSERO} alt="APPSERO"/>
            </div>
        </Container>
    </CustomerDIV>
  )
}

const CustomerDIV = styled.div`

    @import url('https://fonts.googleapis.com/css2?family=Dancing+Script&family=Overlock&display=swap');
    margin-top: 126px;
    
    .header-section{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        p{
            font-family: 'Overlock';
            // font-style: normal;
            font-weight: 700;
            font-size: 36px;
            line-height: 46px;
        }
        img{
            margin-top: -20px;
        }
    }
    .logos{
        margin-top: 99px;
        display: flex;
        justify-content: space-between;
    }
`;

export default Customers;