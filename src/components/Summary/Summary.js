import React from 'react';

const Summary = ({ selected }) => {
  console.log(selected);
  const USCurrencyFormat = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD'
  });

  const summary = Object.keys(selected).map((feature, idx) => {
    const featureHash = feature + '-' + idx;
    const selectedOption = selected[feature];

    return (
      <div className='summary__option' key={featureHash}>
        <div className='summary__option__label'>{feature} </div>
        <div className='summary__option__value'>{selectedOption.name}</div>
        <div className='summary__option__cost'>
          {USCurrencyFormat.format(selectedOption.cost)}
        </div>
      </div>
    );
  });

  const total = Object.keys(selected).reduce(
    (acc, curr) => acc + selected[curr].cost,
    0
  );

  return (
    <section className='main__summary'>
      <h2>Your cart</h2>
      {summary}
      <div className='summary__total'>
        <div className='summary__total__label'>Total</div>
        <div className='summary__total__value'>
          {USCurrencyFormat.format(total)}
        </div>
      </div>
    </section>
  );
};

export default Summary;
