import React from 'react';
import { Select } from 'antd';
import { useTranslation } from 'react-i18next'; // Importing useTranslation hook

const Navbar: React.FC = () => {
  const { i18n } = useTranslation(); // Using useTranslation hook to access translation functions

  // Function to handle language change
  const onChange = (value: string) => {
    i18n.changeLanguage(value); // Change the language when the user selects a new language
  };

  // Function to handle search
  const onSearch = (value: string) => {
    console.log('search:', value);
  };

  // Filter `option.label` match the user type `input`
  const filterOption = (input: string, option?: { label: string; value: string }) =>
    (option?.label ?? '').toLowerCase().includes(input.toLowerCase());

  return (<div>
    <Select
    className='select-lang'
      showSearch
      placeholder={"Select Language"}
      optionFilterProp="children"
      onChange={onChange}
      onSearch={onSearch}
      filterOption={filterOption}
      options={[
        {
          value: 'en',
          label: 'EN',
        },
        {
          value: 'th',
          label: 'TH',
        },
      ]}
    /></div>
  );
};

export default Navbar;
