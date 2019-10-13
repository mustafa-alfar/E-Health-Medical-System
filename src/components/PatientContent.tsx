import React, { useState, useEffect } from 'react';
import Styled from '@emotion/styled';
import { baseColor } from '../constant';
import database from '../database';
import { SVG } from './RightNav';
import inforamtion from '../static/patient.svg';
import history from '../static/history.svg';
import NavLink from './NavLink';
import { Router, RouteComponentProps } from '@reach/router';
import PatientInformation from '../pages/PatientInformation';
import PatientHistory from '../pages/PatientHistory';
import PatientAppointment from '../pages/PatientAppointment';

interface RouterProps extends RouteComponentProps {
  id?: string;
}

const PatientContent = ({ id }: RouterProps): JSX.Element => {
  const [patient, setPatient] = useState({
    name: '',
    family_name: '',
    date_of_birth: '',
    national_ID: 0,
    mobile_number: 0,
    photo: ''
  });

  useEffect(() => {
    const [result] = database.filter(patient => {
      return patient.national_ID === Number(id) ? patient : null;
    });

    setPatient(result);
  }, [id]);

  return (
    <Layout>
      <Container>
        <Header>
          <nav>
            <NavLink to={`/patient/${id}`}>
              <SVG small>
                <img src={inforamtion} alt="" />
              </SVG>
              Patient Information
            </NavLink>
            <NavLink to={`/patient/${id}/appointment`}>
              <SVG small>
                <img src={history} alt="" />
              </SVG>
              Patient appointments
            </NavLink>
            <NavLink to={`/patient/${id}/history`}>
              <SVG small>
                <img src={history} alt="" />
              </SVG>
              History
            </NavLink>
          </nav>
        </Header>
        <section>
          <Router>
            <PatientAppointment path="appointment" />
            <PatientHistory path="history" />
            <PatientInformation patient={patient} path="/" />
          </Router>
        </section>
      </Container>
    </Layout>
  );
};

export default PatientContent;

//  START: CSS in JavaScript Components : EmotionJS.

const Layout = Styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  flex-basis: 55%;
  background-color: #FFFFFF;
  padding: 20px 0;
  font-size: 0.8rem;
`;
const Header = Styled.nav`
  width:100%;
  display: flex;
  padding: 15px 30px;
  border-bottom: 1px solid rgba(170, 170, 170, 0.2);
  font-size: 1rem;

  @media screen and (max-width: 850px) {
    justify-content: center;
    align-items: center;
    padding-bottom: 15px;

  }

  nav {
    flex-basis: 100%;
    display: flex;
    justify-content: space-between;
    @media screen and (max-width: 850px) {
      flex-direction: column;
      justify-content: center;
      max-width: 200px;
      margin:auto;

    }
  }

  a {
    font-weight: 300;
    opacity:1;
    display: flex;
    vertical-align: center;
    color: #666;
    &:hover {
      color: ${baseColor};
  }

`;

const Container = Styled.div`
  flex-basis: 60%;
  section {
    height:100%;
    width:100%;
    dispaly: flex;
  }
`;

//  END: CSS in JavaScript Components : EmotionJS.
