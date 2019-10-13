import React from 'react';
import Styled from '@emotion/styled';

const Table = ({ data }: { data: TableData[] }) => {
  const renderTableData = () => {
    return data.map((row: TableData, index: number) => {
      const { app_date, app_time, health_care_provider, location } = row;

      return (
        <tr key={index}>
          <td>{app_date}</td>
          <td>{app_time}</td>
          <td>{health_care_provider}</td>
          <td>{location}</td>
        </tr>
      );
    });
  };

  const renderTableHeader = () => {
    let header = Object.keys(data[0]);
    return header.map((key, index) => {
      return (
        <th key={index}>
          <span>{key.toUpperCase()}</span>
        </th>
      );
    });
  };

  return (
    <CustomTable>
      <tbody>
        <tr>{renderTableHeader()}</tr>
        {renderTableData()}
      </tbody>
    </CustomTable>
  );
};

export default Table;

type TableData = {
  app_date: string;
  app_time: string;
  health_care_provider: string;
  location: string;
};

//  START: CSS in JavaScript Components : EmotionJS.

const CustomTable = Styled.table`
  margin: 20px 0;
  text-align: center;
  font-family: "Trebuchet MS", Arial, Helvetica, sans-serif;
  border-collapse: collapse;
  width: 100%;

  td, th {
    border-bottom: 1px solid #ddd;
    padding: 1rem;
    color: #9095A4;
  }

  tr:hover {background-color: #ECECEC;}

  th {
    margin: 0 1px;
    text-align: center;
    background-color: white;
    color: #9095A4;
    padding: 1px;

    span {
      display: inline-block;
      background-color: #ECECEC;
      width: 100%;
      height: 100%;
      padding: 20px 0;
      margin: 0;

    }
  }
`;

//  END: CSS in JavaScript Components : EmotionJS.
