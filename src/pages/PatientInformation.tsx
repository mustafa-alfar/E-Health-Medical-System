import React from 'react';
import Styled from '@emotion/styled';
import { ResultImage } from '../components/PatientCard';
import edit from '../static/edit.svg';
import { Button } from './PatientAppointment';
import { RouteComponentProps } from '@reach/router';

const PatientInformation = ({ patient }: RouterProps) => {
  return (
    <Content>
      <InfomationContainer>
        <ResultImage photo={patient.photo} large />
        <div>
          <Label>
            Name:{' '}
            <span>
              {patient.name} {patient.family_name}
            </span>
          </Label>
          <Label>
            Address: <span>Gaza, Naser Street</span>
          </Label>
        </div>
      </InfomationContainer>
      <FlexBox>
        <div>
          <Label>
            Naitonal ID: <span> {patient.national_ID}</span>
          </Label>
          <Label>
            Mobile Number: <span> {patient.mobile_number}</span>
          </Label>
        </div>
        <div>
          <Label>
            Date of Birth: <span> {patient.date_of_birth}</span>
          </Label>
          <Label>
            Mobile Number: <span> {patient.mobile_number}</span>
          </Label>
        </div>
      </FlexBox>
      <div>
        <Label>Family Remark</Label>
        <Value>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ad id
          cupiditate in earum molestias provident dolores quia quidem maxime,
          esse assumenda nobis, nisi, ipsa veniam doloremque ratione unde
          dignissimos pariatur.
        </Value>
      </div>
      <Footer>
        <Button>
          <img src={edit} alt="" />
          Edit Patient
        </Button>
      </Footer>
    </Content>
  );
};

export default PatientInformation;

// START: Types

interface RouterProps extends RouteComponentProps {
  patient: PatientProps;
}
type PatientProps = {
  name: string;
  family_name: string;
  date_of_birth: string;
  national_ID: number;
  mobile_number: number;
  photo: string;
};

// END: Types

// START: CSS in JavaScript Components : EmotionJS.

const InfomationContainer = Styled.div`
  display: flex;
  div {
    margin-right: 1rem;
  }
`;

const Content = Styled.div`
  min-height: 400px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-top: 40px;
  color: #666;
  padding: 0 30px;

  @media screen and (max-width: 1250px) {
    min-height: 300px;
  }
`;

const Label = Styled.p`
  display: flex;
  align-items:center;
  color: #666;
  span {
    margin-left: 1rem;
    padding:0;
    color: #999;

  }
`;
const Value = Styled.p`
  color: #999;
`;

const FlexBox = Styled.div`
  display:flex;
  justify-content:space-between;
  p {
    padding: 10px 0;
  }
`;

const Footer = Styled.div`
  flex-basis: 20%;
  display: flex;
  justify-content: flex-end;
  align-items: center;

  @media screen and (max-width: 1250px) {
    justify-content: center;
  }
`;

// END: CSS in JavaScript Components : EmotionJS.
