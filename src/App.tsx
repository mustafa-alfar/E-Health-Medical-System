import React, { useState } from 'react';
import Home from './pages/Home';
import Patient from './pages/Patient';
import { Router, navigate } from '@reach/router';
import database from './database';
import PatientContent from './components/PatientContent';
import { RouteComponentProps } from '@reach/router';
import toLowserCase from './utils/toLowerCase';
import NotFound from './pages/NotFound';

function App() {
  const [searchList, setSearchList] = useState();
  const [error, setError] = useState<null | string>(null);

  const handleSubmit = (e: any, option: string, input: string) => {
    e.preventDefault();
    setError(null);
    const results = database.filter((patient: any) => {
      if (toLowserCase(patient[option]).includes(toLowserCase(input))) {
        return patient;
      }
    });
    if (input.length > 0) {
      setSearchList(results);
      navigate(`/patient/${results[0].national_ID}`);
    } else {
      setError('Please, enter a valid value');
      setSearchList([]);
    }
  };

  return (
    <div>
      <Router>
        <Home path="/" handleSubmit={handleSubmit} error={error} />
        <Patient
          path="/patient/:id"
          patients={searchList}
          handleSubmit={handleSubmit}
        >
          <PatientContent path="information" />
        </Patient>
        <NotFound default />
      </Router>
    </div>
  );
}

export default App;

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
