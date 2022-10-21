import './App.css';
import { useState } from 'react';
import initialPeopleData from './data';
import List from './list';

function App() {
  const [people, setPeople] = useState(initialPeopleData);
  return (
    <section className = 'container'>   
     <h3>0 Birthdays Today</h3>
     <p><List people={people}/></p>
    <button onClick={() =>setPeople([])}>clear</button>
   </section>
  );
}

export default App;