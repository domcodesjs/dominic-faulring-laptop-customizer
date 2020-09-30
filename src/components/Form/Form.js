import React from 'react';
import Features from './Features';

const Form = ({ updateFeature, selected, features }) => {
  return (
    <form className='main__form'>
      <h2>Customize Your Laptop</h2>
      <Features
        updateFeature={updateFeature}
        selected={selected}
        features={features}
      ></Features>
    </form>
  );
};

export default Form;
