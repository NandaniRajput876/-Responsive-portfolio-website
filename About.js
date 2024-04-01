// About.js
import React from 'react';

const About = ({ data }) => {
  return (
    <div>
      <h2>{data?.title}</h2>
      <p>{data?.description}</p>
     </div>
  );
};

export default About;