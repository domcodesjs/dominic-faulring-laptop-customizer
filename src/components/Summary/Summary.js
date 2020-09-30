import React from 'react';
import SummaryItems from './SummaryItems';
import SummaryTotal from './SummaryTotal';

const Summary = ({ selected }) => {
  return (
    <section className='main__summary'>
      <h2>Your Cart</h2>
      <SummaryItems selected={selected}></SummaryItems>
      <SummaryTotal selected={selected}></SummaryTotal>
    </section>
  );
};

export default Summary;
