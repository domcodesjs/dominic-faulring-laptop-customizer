import React from 'react';

const SummaryItem = ({ featureHash, feature, selectedOption }) => {
  const USCurrencyFormat = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD'
  });

  return (
    <div className='summary__option' key={featureHash}>
      <div className='summary__option__label'>{feature} </div>
      <div className='summary__option__value'>{selectedOption.name}</div>
      <div className='summary__option__cost'>
        {USCurrencyFormat.format(selectedOption.cost)}
      </div>
    </div>
  );
};

export default SummaryItem;
