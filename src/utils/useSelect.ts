import { useState, useEffect } from 'react';
import database from '../database';
import convertKeyToReadableString from './readableString';

// Custome Hooks for Select drop menu

const useSelect = () => {
  const [input, setInput] = useState('');
  const [optionsList, setOptionsList] = useState();
  const [selectedOption, setSelectedOption] = useState({
    value: 'name',
    label: 'Name'
  });

  useEffect(() => {
    const keys = Object.keys(database[0]);

    let values = keys.map(key => ({
      value: key,
      label: convertKeyToReadableString(key)
    }));

    setOptionsList(values);
  }, []);

  const handleChange = (selectedValue: any) => {
    setSelectedOption(selectedValue);
  };
  return [input, setInput, optionsList, selectedOption, handleChange];
};

export default useSelect;
