import React from 'react';
import Styled from '@emotion/styled';
import Header from '../components/Header';
import { Global, css } from '@emotion/core';
import PatientsResult from '../components/PatientsResult';
import RightNav from '../components/RightNav';
import PatientContent from '../components/PatientContent';
import { RouteComponentProps } from '@reach/router';

const Patient = ({ patients, handleSubmit, id }: RouterProps) => {
  return (
    <div>
      <Header />
      <Container>
        <Global
          styles={css`
            body {
              background-color: #00adee;
            }
          `}
        />
        <Card>
          <PatientsResult handleSubmit={handleSubmit} patients={patients} />
          <PatientContent id={id} path={`${id}/:type*`} />
          <RightNav />
        </Card>
      </Container>
    </div>
  );
};

export default Patient;

// START: Types

type PatientProps = {
  name: string;
  family_name: string;
  date_of_birth: string;
  national_ID: number;
  mobile_number: number;
  photo: string;
};

interface RouterProps extends RouteComponentProps {
  patients: PatientProps[];
  handleSubmit: SearchHandlerProps;
  id?: string;
  children: React.ReactChild;
}

type SearchHandlerProps = (
  e: any,
  selectedOption: string,
  input: string
) => void;

// START: Types

// START: CSS in JavaScript Components : EmotionJS.

const Container = Styled.div`
  padding: 0 120px;
  margin-top 200px;
  @media screen and (max-width: 1250px) {
    padding:  20px;
    padding-bottom: 0;
    border-radius: 8px;
  }
`;

const Card = Styled.div`
  background-color: white;
  min-height: 580px;
  border-radius: 4px;
  overflow: hidden;
  display: flex;
  @media screen and (max-width: 1250px) {
    flex-direction: column;
    border-radius: 4px;
  }
`;

// END: CSS in JavaScript Components : EmotionJS.
