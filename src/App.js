import React, { useState } from 'react';
import './App.css';
import Header from './components/Header/Header';
import Form from './components/Form/Form';
import Summary from './components/Summary/Summary';

const App = ({ features }) => {
  const [selected, setSelected] = useState({
    Processor: {
      name: '17th Generation Intel Core HB (7 Core with donut spare)',
      cost: 700
    },
    'Operating System': {
      name: 'Ubuntu Linux 16.04',
      cost: 200
    },
    'Video Card': {
      name: 'Toyota Corolla 1.5v',
      cost: 1150.98
    },
    Display: {
      name: '15.6" UHD (3840 x 2160) 60Hz Bright Lights and Knobs',
      cost: 1500
    }
  });

  const updateFeature = (feature, newValue) => {
    const selectedCopy = Object.assign({}, selected);
    selectedCopy[feature] = newValue;
    return setSelected(selectedCopy);
  };

  return (
    <div className='App'>
      <Header></Header>
      <main>
        <Form
          selected={selected}
          features={features}
          updateFeature={updateFeature}
        ></Form>
        <Summary selected={selected}></Summary>
      </main>
    </div>
  );
};

export default App;
