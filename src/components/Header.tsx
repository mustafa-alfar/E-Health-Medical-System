import React from 'react';
import Styled from '@emotion/styled';
import logo from '../static/logo.png';
import whiteLogo from '../static/whiteLogo.png';
import { Link } from '@reach/router';
import { baseBackgroundColor, baseColor } from '../constant';

type HeaderProps = { homePage?: boolean };

const Header = ({ homePage }: HeaderProps): JSX.Element => {
  return (
    <Container homePage={homePage}>
      <Item>
        <Link to="/">
          <Image src={homePage ? logo : whiteLogo} alt="Logo" />
        </Link>
      </Item>
      <Ul>
        <Item>
          <Link to="/">Home</Link>
        </Item>
        <Item>
          <Link to="/our" style={{ pointerEvents: 'none' }}>
            Our Services
          </Link>
        </Item>
        <Item>
          <Link to="/about" style={{ pointerEvents: 'none' }}>
            About System
          </Link>
        </Item>
        <Item>
          <Link to="/how" style={{ pointerEvents: 'none' }}>
            How to works
          </Link>
        </Item>
        <Item>
          <Link to="/contact" style={{ pointerEvents: 'none' }}>
            Contact us
          </Link>
        </Item>
      </Ul>
    </Container>
  );
};

export default Header;

//  START: CSS in JavaScript Components : EmotionJS.

const Container: React.SFC<HeaderProps> = Styled.header`
  position: absolute;
  width:100%;
  z-index: 1;
  top: 0;
  padding: 20px 120px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 1rem;
  font-weight: 500;
  background-color: ${props =>
    props.homePage ? baseBackgroundColor : baseColor};

  @media screen and (max-width: 1250px) {
      padding: 20px;
      flex-wrap: wrap;
      justify-content: center;
  }

  a {
    text-align: left;
    color: ${props => (props.homePage ? baseColor : 'white')};
  }
`;

const Ul = Styled.ul`
  flex-grow:1;
  display: flex;
  align-items: center;
  justify-content:space-between;
  padding: 0;
  list-style: none;

  @media screen and (max-width: 850px) {
    flex-basis: 100%;
    flex-wrap: wrap;
    justify-content: space-between;

  }

  a {
    text-align: center;
  }
`;
const Item = Styled.li`
  list-style: none;
  flex-basis:40%;
  @media screen and (max-width: 1250px) {
    flex-basis:30%;
  }
  @media screen and (max-width: 850px) {
    flex-basis:20%;
  }

`;

const Image = Styled.img`
  max-width: 200px;
`;

//  END: CSS in JavaScript Components : EmotionJS.
