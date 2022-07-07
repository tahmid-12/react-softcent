import React from 'react';
import styled from 'styled-components';
import { Container } from 'react-bootstrap';
import Document from '../images/document.png';

function Content() {
  return (
    <Container>
        <ContentDIV>
            <img src={Document} alt="Pic"/>
        </ContentDIV>
    </Container>
  )
}

const ContentDIV = styled.div`
    margin-top: 67px;
`;

export default Content