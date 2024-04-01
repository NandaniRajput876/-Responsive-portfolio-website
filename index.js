import React from 'react';
import ReactDOM from 'react-dom/client';
import Portfolio from './Portfolio';
import Hero from './Hero';
import About from './About';
import Services from './Services';

import reportWebVitals from './reportWebVitals';
import Services from './Services';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Portfolio />
    <Hero />
    <About />
    <Services />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
