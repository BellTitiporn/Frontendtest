import React from 'react';
import { Select } from 'antd';
import { useTranslation } from 'react-i18next'; 

const Navbar: React.FC = () => {
  const { i18n } = useTranslation(); 

  const onChange = (value: string) => {
    i18n.changeLanguage(value);
  };

  const onSearch = (value: string) => {
    console.log('search:', value);
  };

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
