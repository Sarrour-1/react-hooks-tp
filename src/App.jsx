import React from 'react';
import Time from './ex1';
import ThemeComponent from './ex2';
import UserList from './UserList';


function App() {
  return (
    <div>
      <h1>Mon horloge en temps réel</h1>
      <Time />

      <h2>Composant thème</h2>
      <ThemeComponent />
      <h1>TP - Appel API avec useEffect</h1> <UserList />
    </div>
  );
}

export default App;
