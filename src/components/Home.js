import React from 'react';
import styled from 'styled-components';
import { Container } from 'react-bootstrap';
import Underline from '../images/small_underline.png';

function Home() {
  return (
    <Container>
      <HOMEDIV>
        <h1>Software services for </h1>
        <img src={Underline} alt="Underline"/>
        <h1 className="startups">startups without <br/> limits..</h1>
        <br />
        <br />
        <p>We believe that great design should not be out of reach, so our services
          <br />
          are less than half the price of a full-time designer.</p>
      </HOMEDIV>
    </Container>
  )
}

const HOMEDIV = styled.div`
    margin-top: 80px;
    h1{
      font-family: Overlock;
      font-weight: 700;
      font-size: 64px;
      line-height: 77px;
    }
    img{
      margin-top: -45px;
    }
    .startups{
      margin-top: -18px;
    }
    p{
      font-family: Nunito;
      font-size: 18px;
      font-weight: 400;
      line-height: 32px;
    }
`;

export default Home