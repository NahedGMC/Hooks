import React from 'react';
import ProfilePhoto from './Components/Profile/ProfilePhoto';
import FullName from './Components/Profile/FullName';
import Address from './Components/Profile/Address';

const App = () => {
  return (
    <div className="App">
      <ProfilePhoto />
      <FullName />
      <Address />
    </div>
  );
};

export default App;

