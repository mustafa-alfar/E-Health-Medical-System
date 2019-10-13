import React from 'react';
import Styled from '@emotion/styled';
import { SearchInput } from '../pages/Home';
import { baseColor, baseBackgroundColor } from '../constant';
import search from '../static/search.svg';
import PatientCard from './PatientCard';
import useSelect from '../utils/useSelect';
import Select from 'react-select';

const PatientsResult = ({
  handleSubmit,
  patients
}: {
  handleSubmit: SearchHandlerProps;
  patients: PatientProps[];
}): JSX.Element => {
  const [
    input,
    setInput,
    optionsList,
    selectedOption,
    handleChange
  ]: any = useSelect();
  return (
    <SearchResults>
      <FromSearch
        onSubmit={(e: FormEvent) =>
          handleSubmit(e, selectedOption.value, input)
        }
      >
        <Select
          options={optionsList}
          onChange={handleChange}
          value={selectedOption}
        />

        <SearchInput
          type="text"
          placeholder="Search here"
          value={input}
          onChange={e => setInput(e.target.value)}
        />
        <button type="submit">
          <img src={search} alt="img" />
        </button>
        <ButtonShadow />
      </FromSearch>
      <ResultsCard>
        {patients && patients.length > 0 ? (
          patients.map((patient: PatientProps) => (
            <PatientCard patient={patient} key={patient.national_ID} />
          ))
        ) : (
          <ResultContent>
            <p>
              There are no relevant results, please try again with valid
              information
            </p>
          </ResultContent>
        )}
      </ResultsCard>
    </SearchResults>
  );
};

export default PatientsResult;

// START: Types

type PatientProps = {
  name: string;
  family_name: string;
  date_of_birth: string;
  national_ID: number;
  mobile_number: number;
  photo: string;
};
type FormEvent = React.FormEvent<HTMLFormElement>;

type SearchHandlerProps = (
  e: any,
  selectedOption: string,
  input: string
) => void;

// END: Types

//  START: CSS in JavaScript Components : EmotionJS.

const SearchResults = Styled.div`
  flex-basis: 25%;
  background-color: rgba(240, 240, 251, 0.7);
  padding: 2rem 1.2rem;
`;

export const FromSearch = Styled.form`
  display: flex;
  background-color: ${baseBackgroundColor};
  color: #aaaaaa;
  width: 100%;
  border-radius: 4px;
  padding: 5px 10px;
  position: relative;

  div {
    flex-basis: 40%;
    font-size: 0.8rem;
    border: none;
    color: #999;
    &:active, &:focus {
      border: 0;
    }
    span {
      display: none;
    }
  }

  button {
    position: absolute;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background-color: ${baseColor};
    color: white;
    right: 10px;
    top: 25px;
    z-index :1;

    img {
      height: 15px;
    }
  }

`;

const ButtonShadow = Styled.div`
  background-color: #ccc;
  opacity:0.2;
  position: absolute;
  right: 5px;
  top: 20px;
  width: 50px;
  height: 50px;
  border-radius: 50%;
`;

const ResultsCard = Styled.ul`
  min-height: 100px;
  max-height: 420px;
  overflow: auto;
  margin-top: 30px;
  width: 100%;
  padding: 0;
`;
export const ResultContent = Styled.div`
  color: #666;
  flex-basis: 70%;
  p {
    font-size: 0.8rem;
    margin: 2px 0;
  }
  p:nth-child(even) {
    color: #aaa;
  }
`;

//  END: CSS in JavaScript Components : EmotionJS.
