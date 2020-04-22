import React from 'react';

import './App.css';
import ValidatedLoginForm from './Form';
import { Register } from './Form2';

function App() {
  return (
    <div className="">
      <header className="">
        <ValidatedLoginForm />
        {/* <Register /> */}
      </header>
    </div>
  );
}

export default App;
