import React from 'react';
import { RouteComponentProps } from '@reach/router';
import Styled from '@emotion/styled';
import Header from '../components/Header';
import backgroundError from '../static/error.png';
import errorImage from '../static/error_image.png';

const NotFound = (props: RouteComponentProps) => {
  return (
    <Container>
      <Header />
      <img src={errorImage} alt="No Apointement" />
      <img
        src={backgroundError}
        alt="No Apointement"
        className="background-image"
      />
      <p>404, Not Found, try another URL :)</p>
    </Container>
  );
};

const Container = Styled.div`
display: flex;
height:100vh;
width:100vw;
flex-direction: column;
justify-content: center;
align-items: center;
color:#AAAAAA;
font-size: 1rem;
margin: 40px 0;

@media screen and (max-width: 850px) {
}
img {
  position:relative;
  z-index: 3;
}
.background-image {
  position: absolute;
  z-index: 1;
  max-height: 250px;

}
p {
  max-width:500px;
  @media screen and (max-width: 850px) {
    max-width:200px;
  }
}
`;

export default NotFound;
