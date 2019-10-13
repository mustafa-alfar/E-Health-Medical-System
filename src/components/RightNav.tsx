import React from 'react';
import Styled from '@emotion/styled';
import { baseColor } from '../constant';
import calender from '../static/calendar.svg';
import checkCircle from '../static/check-circle.svg';
import thermometer from '../static/thermometer.svg';
import arrowUpRight from '../static/arrow-up-right.svg';
import rotateCcw from '../static/rotate-ccw.svg';
import { Link } from '@reach/router';

const RightNav = () => {
  return (
    <Container>
      <ul>
        <Link to="#">
          <SVG>
            <img src={calender} alt="calender" />
          </SVG>
          Book an appointment
        </Link>

        <Link to="#">
          <SVG>
            <img src={checkCircle} alt="checkCircle" />
          </SVG>
          Walk in visit
        </Link>

        <Link to="#">
          <SVG>
            <img src={thermometer} alt="thermometer" />
          </SVG>
          Order Lab Test
        </Link>
        <Link to="#">
          <SVG>
            <img src={arrowUpRight} alt="arrowUpRight" />
          </SVG>
          Transfer Patient
        </Link>
        <Link to="#">
          <SVG>
            <img src={rotateCcw} alt="rotateCcw" />
          </SVG>
          Pharmacy Undo
        </Link>
      </ul>
    </Container>
  );
};

export default RightNav;

//  START: CSS in JavaScript Components : EmotionJS.

const Container = Styled.div`
  flex-basis: 20%;
  border: thin solid white;
  background-color: ${baseColor};
  color: white;
  padding: 80px 0;
  margin:0;
  font-size: 1rem;
  @media screen and (max-width: 1250px) {
    padding: 20px 0;
  }

  ul {
    display: flex;
    flex-direction: column;
    @media screen and (max-width: 1250px) {
      max-height: 160px;
      flex-wrap: wrap;
      align-content: space-between;
      padding:0 20px;

    }
    @media screen and (max-width: 850px) {
       min-height: 250px;
       align-content: center;


    }
  }
  a {
    display: flex;
    color: white;
    margin-bottom: 30px;
    vertical-align: center;

    img {
      margin-right: 15px;
      height: 15px;
      @media screen and (max-width: 1250px) {
        margin-right: 5px;

      }
    }
  }
`;

export const SVG: React.SFC<{ small?: null | boolean }> = Styled.div`
  width: 20px;
  height: 20px;
  dispaly: flex;
  align-items: center;
  justify-content: center;
  margin-right: ${props => (props.small ? '2px' : '15px')};
`;

//  START: CSS in JavaScript Components : EmotionJS.
