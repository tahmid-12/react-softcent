import React from 'react';
import { Container } from 'react-bootstrap';
import styled from 'styled-components';
import Underline from '../images/Do_Underline.png';
import Branding from '../images/branding.png';
import UX from '../images/UX.png';

function Work() {
  return (
    <WORKDIV>
      <Container>
        <p>What We Do</p>
        <img src={Underline} alt="Underline" className="underline"/>

        <div className="contents">
           <div className="branding">
             <div className="branding-contents">
                <img src={Branding} alt="Branding"/>
                <p className="heading">Branding</p>
             </div>
           </div>
           <div className="design">
             <div className="design-contents">
               <img src={UX} alt="UX"/>
               <p className="heading">UI/UX Design</p>
             </div>
           </div>
           <div className="development">
             <div className="development-contents">
               <img src={UX} alt="Development"/>
                <p className="heading">Development</p>
             </div>
           </div>
        </div>
      </Container>
    </WORKDIV>
  )
}

const WORKDIV = styled.div`
    margin-top: 165px;
    p{
      font-family: 'Overlock';
      font-style: normal;
      font-weight: 700;
      font-size: 36px;
      line-height: 46px;
      color: #040415;
    }
    .underline{
      margin-top: -40px;
    }

    .contents{
      display: flex;
      justify-content: space-between;
      .branding-contents, .design-contents, .development-contents{
        display: flex;
      }
      .heading{
        font-size: 28px;
        line-height: 32px;
        font-weight: 700;
        color: rgba(4, 4, 21, 0.8);
        padding-top: 20px;
        padding-left: 5px;
      }
    }
`;

export default Work;