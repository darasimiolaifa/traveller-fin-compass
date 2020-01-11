import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import AppInfo from './components/AppInfo';
import ConversionForm from './components/ConversionForm';

const App = () => {
  return (
    <div className="app-section">
      <AppInfo />
      <ConversionForm />
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector('#root'));
