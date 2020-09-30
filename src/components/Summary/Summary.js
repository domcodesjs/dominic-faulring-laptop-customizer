import React from 'react';
import SummaryItem from './SummaryItem';
import SummaryTotal from './SummaryTotal';

const Summary = ({ selected }) => {
  const USCurrencyFormat = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD'
  });

  const summary = Object.keys(selected).map((feature, idx) => {
    const featureHash = feature + '-' + idx;
    const selectedOption = selected[feature];

    return (
      <SummaryItem
        key={idx}
        s
        feature={feature}
        featureHash={featureHash}
        selectedOption={selectedOption}
      ></SummaryItem>
    );
  });

  return (
    <section className='main__summary'>
      <h2>Your cart</h2>
      {summary}
      <SummaryTotal selected={selected}></SummaryTotal>
    </section>
  );
};

export default Summary;
