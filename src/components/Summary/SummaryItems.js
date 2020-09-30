import React from 'react';
import SummaryItem from './SummaryItem';

const SummaryItems = ({ selected }) => {
  return Object.keys(selected).map((feature, idx) => {
    const featureHash = feature + '-' + idx;
    const selectedOption = selected[feature];

    return (
      <SummaryItem
        key={idx}
        feature={feature}
        featureHash={featureHash}
        selectedOption={selectedOption}
      ></SummaryItem>
    );
  });
};

export default SummaryItems;
