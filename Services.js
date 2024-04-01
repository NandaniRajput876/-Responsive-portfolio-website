// Services.js
import React from 'react';

const Services = ({ data }) => {
  return (
    <div>
      <h2>{data?.title}</h2>
      <p>{data?.description}</p>
     </div>
  );
};

export default Services;