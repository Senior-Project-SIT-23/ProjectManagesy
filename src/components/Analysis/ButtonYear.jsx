import React from 'react';

import Select from 'react-select';


const yearOptions = [
  {
    value: 'ปีการศึกษา 2563',
    label: 'ปีการศึกษา 2563'
  },
  {
    value: 'ปีการศึกษา 2562',
    label: 'ปีการศึกษา 2562'
  },
  {
    value: 'ปีการศึกษา 2561',
    label: 'ปีการศึกษา 2561'
  },
  {
    value: 'ปีการศึกษา 2560',
    label: 'ปีการศึกษา 2560'
  },
]

const groupStyles = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
};
const groupBadgeStyles = {
  backgroundColor: '#EBECF0',
  borderRadius: '2em',
  color: '#172B4D',
  display: 'inline-block',
  fontSize: 12,
  fontWeight: 'normal',
  lineHeight: '1',
  minWidth: 1,
  padding: '0.16666666666667em 0.5em',
  textAlign: 'center',
};

const formatGroupLabel = data => (
  <div style={groupStyles}>
    <span>{data.label}</span>
    <span style={groupBadgeStyles}>{data.options.length}</span>
  </div>
);

export default () => (
  <Select
    defaultValue={yearOptions[0]}
    options={yearOptions}
    formatGroupLabel={formatGroupLabel}
  />
);