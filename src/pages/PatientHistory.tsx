import React from 'react';
import Table from '../components/Table';
import { RouteComponentProps } from '@reach/router';

const data: TableData[] = Array(7).fill({
  app_date: '10-Sep-2018',
  app_time: '10:18 - 10:30',
  health_care_provider: 'Lorem Ipsum dummy text',
  location: 'Nurse'
});

const PatientHistory = (props: RouteComponentProps) => {
  return <Table data={data} />;
};

export default PatientHistory;

// START: Types

type TableData = {
  app_date: string;
  app_time: string;
  health_care_provider: string;
  location: string;
};

// END: Types
