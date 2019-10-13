/** @jsx jsx */
import { css, jsx } from '@emotion/core';
import React, { useState, useEffect, SFC } from 'react';
import Styled from '@emotion/styled';
import { Link } from '@reach/router';
import group from '../static/group.svg';
import { ResultContent } from './PatientsResult';
import NavLink from './NavLink';
import { baseColor } from '../constant';

const PatientCard = ({ patient }: { patient: PatientProps }): JSX.Element => {
  const [showMenu, setShowMenu] = useState(false);

  const closeOptions = () => {
    showMenu && setShowMenu(false);
  };

  const handleClikc = (e: ClickEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setShowMenu(true);
  };
  useEffect(() => {
    document.addEventListener('click', closeOptions);

    return () => {
      document.removeEventListener('click', closeOptions);
    };
  }, [showMenu]);

  return (
    <Container>
      <NavLink to={`/patient/${patient.national_ID}`} border className="active">
        <ResultImage photo={patient.photo} />
        <ResultContent>
          <p>
            {patient.name} {patient.family_name}
          </p>
          <p>Last Updated: {patient.date_of_birth}</p>
        </ResultContent>
        <ResultOptions onClick={handleClikc}>
          <img src={group} alt="" />
        </ResultOptions>
      </NavLink>
      {showMenu && (
        <DropMeny>
          <Link to="#">Action 1</Link>
          <Link to="#">Action 2</Link>
          <Link to="#">Action 3</Link>
        </DropMeny>
      )}
    </Container>
  );
};

export default PatientCard;

//  START: Types

type PatientProps = {
  name: string;
  family_name: string;
  date_of_birth: string;
  national_ID: number;
  mobile_number: number;
  photo: string;
};

type ClickEvent = React.MouseEvent<HTMLDivElement, MouseEvent>;

//  END: Types

//  START: CSS in JavaScript Components : EmotionJS.

const Container = Styled.div`
  position: relative;
  .active {
    &:before,
    &:after {
      content: '';
      width: 0;
      right: 0;
      left: 0;
      height: 100%;
      position: absolute;
      // border: 1px solid ${baseColor};
      top: 0;

}
  }
  a {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 0;
    min-height: 70px;
    margin-bottom: 20px;
    border-radius: 4px;
    padding:0 10px;
    &:hover {
      background-color:rgba(240, 240, 251, 1);
    }
  }
`;

const ResultOptions = Styled.div`
  flex-basis: 20%;
  max-width: 20px;
  max-height: 20px;
  cursor: pointer;
`;

const DropMeny = Styled.ul`
  position: absolute;
  background-color: white;
  z-index: 2;
  right: 0;
  top: 49px;
  padding: 0;
  border: 0.5px solid #dedfe1;
  border-top: 0;
  letter-spacing: 0.2px;
  &:before {
		content: "";
		position: absolute;
    top: -7px;
    right: 5px;
		width: 0;
		height: 0;
		border: 0.5px solid #dedfe1;
		border-width: 0 10px 10px 10px;
		border-color: transparent transparent white transparent;
  }
  a {
    min-height:0;
    margin: 5px 0;
    padding: 10px 20px;
    width: 100%;
  }
`;

export const ResultImage: React.SFC<{
  large?: boolean;
  photo: string;
}> = Styled.div`
  flex-basis: 20%;
  width: ${props => (props.large ? '70px' : '50px')};
  height: ${props => (props.large ? '70px' : '50px')};
  max-width: ${props => (props.large ? '70px' : '50px')};
  max-height: ${props => (props.large ? '70px' : '50px')};
  border-radius: 50%;
  background-image: ${props => `url(${props.photo})`};
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;

`;

//  END: CSS in JavaScript Components : EmotionJS.
