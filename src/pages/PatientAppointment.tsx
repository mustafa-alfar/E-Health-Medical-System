import React from 'react';
import Styled from '@emotion/styled';
import backgroundError from '../static/error.png';
import errorImage from '../static/error_image.png';
import { baseColor } from '../constant';
import { RouteComponentProps } from '@reach/router';

const PatientAppointment = (props: RouteComponentProps) => {
  return (
    <Container>
      <img src={errorImage} alt="No Apointement" />
      <img
        src={backgroundError}
        alt="No Apointement"
        className="background-image"
      />
      <p>
        There is no appointments saved for this patient's, Click on book an
        appointment to add one.
      </p>
      <Button>Book Appointment</Button>
    </Container>
  );
};

export default PatientAppointment;

// START: Types

type PatientProps = {
  name: string;
  family_name: string;
  date_of_birth: string;
  national_ID: number;
  mobile_number: number;
  photo: string;
};

// START: Types

// START: CSS in JavaScript Components : EmotionJS.

const Container = Styled.div`
  min-height:400px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  color:#AAAAAA;
  font-size: 1rem;
  margin: 40px 0;

  @media screen and (max-width: 850px) {
    min-height:300px;
  }
  img {
    position:relative;
    z-index: 3;
    max-height: 150px;
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

export const Button = Styled.button`
  // height: 40px;
  padding: 18px 50px;
  color: white;
  background-color: ${baseColor};
  border-radius: 8px;
  font-size: 0.8rem;
  font-weight: 300;
  display: flex;

  img {
    margin-right: 10px;
  }

`;

// END: CSS in JavaScript Components : EmotionJS.
