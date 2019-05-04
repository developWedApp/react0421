import React from 'react';
import './App.css';
import AgeComponent from './component/AgeComponent'
import NameComponent from './component/NameComponent'
import AddressComponent from './component/AddressComponent'
function App() {
  return (
    <div className="App">
      <NameComponent/>
      <AgeComponent/>
      <AddressComponent/>
    </div>
  );
}

export default App;
