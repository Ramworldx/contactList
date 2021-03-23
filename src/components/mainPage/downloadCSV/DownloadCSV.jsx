import React from 'react';
import { CSVLink } from 'react-csv';
import { useSelector } from 'react-redux';

export const DownloadCSV = () => {

  const headers = [
    { label: 'Name', key: 'name' },
    { label: 'Number', key: 'number' }
  ];
  const data = useSelector(s => s.mainPage.contactsData)

  const csv = {
    data: data,
    headers: headers,
    filename: 'Contacts.csv'
  };
  return (
    <>
      <CSVLink className='DownloadCSV__link' {...csv}>
        <span>
          Download CSV
        </span>
      </CSVLink>
    </>
  );
}

export default DownloadCSV;