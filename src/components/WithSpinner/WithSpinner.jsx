import React from 'react';
import { Tag } from 'antd';
import { SyncOutlined } from '@ant-design/icons';
// import './WithSpinner.scss';

// const Spinner = () => (
//   <div className='spinner-overlay'>
//     <div className='spinner-container' />
//   </div>
// );

const WithSpinner = (WrappedComponent) => ({ isLoading, ...otherProps }) => {
  return isLoading ? (
    <Tag icon={<SyncOutlined spin />} color="processing">
      processing
    </Tag>
  ) : (
    <WrappedComponent {...otherProps} />
  );
};

export default WithSpinner;
