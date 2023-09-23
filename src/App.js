import { useState } from 'react';
import { createContext } from 'react';
import ReactSwitch from 'react-switch';
import './App.css';

export const ThemeContext = createContext(null);

function App() {
  let nameId = 0;
  const [name, setName] = useState("");
  const [names, setNames] = useState([]);

  let ageId = 0;
  const [age, setAge] = useState("");
  const [ages, setAges] = useState([]);

  let subId = 0;
  const [sub, setSub] = useState("");
  const [subscribed, setSubscribed] = useState([]);

  let empId = 0;  
  const [emp, setEmp] = useState("");
  const [employment, setEmployment] = useState([]);

  const [theme, setTheme] = useState("dark");

  function toggleTheme() {
    setTheme((current) => (current === 'light' ? 'dark' : 'light'))
  }

  return (
    <ThemeContext.Provider value={{theme, toggleTheme}}>
      <div id={theme}>
        <div className="main-container">
            <div className="action-container">
                <input className="input-field" value={name} onChange={e => setName(e.target.value)} placeholder='Name' />
                <button className='btn-change-mode' onClick={() => {
                  setNames([...names, {id: nameId++, name: name}])
                }}>Add Name</button>
                <input className="input-field" value={age} onChange={e => setAge(e.target.value)} placeholder='Age'  />
                <button className='btn-change-mode' onClick={() => {
                  setAges([...ages, {id: ageId++, age: age}])
                }}>Add Age</button>
                <input className="input-field" value={sub} onChange={e => setSub(e.target.value)} placeholder='Subscription' />
                <button className='btn-change-mode' onClick={() => {
                  setSubscribed([...subscribed, {id: subId++, sub: sub}])
                }}>Subscription</button>
                <input className="input-field" value={emp} onChange={e => setEmp(e.target.value)} placeholder='Employment' />
                <button className='btn-change-mode' onClick={() => {
                  setEmployment([...employment, {id: empId++, emp: emp}])
                }}>Employment</button>
                <div className='switch'>
                  <span>Mode</span>
                  <ReactSwitch onChange={toggleTheme} checked={theme === 'light'} />
                </div>
            </div>
            <tbody className='table-container'>
                <tr className='table-heading'>
                    <td>Name</td>
                    <td>Age</td>
                    <td>Subscription</td>
                    <td>Employment</td>
                </tr>
                <tr className='table-row'>
                  <div className='list-direction'>
                    {names.map(name => (
                      <td key={name.id}>{name.name}</td>
                    ))}
                  </div>

                  <div className='list-direction'>
                    {ages.map(age => (
                      <td key={age.id}>{age.age}</td>
                    ))}
                  </div>

                  <div className='list-direction'>
                    {subscribed.map(sub => (
                      <td key={sub.id}>{sub.sub}</td>
                    ))}
                  </div>

                  <div className='list-direction'>
                    {employment.map(emp => (
                      <td key={emp.id}>{emp.emp}</td>
                    ))}
                  </div>
                </tr>
            </tbody>
        </div>
        </div>
      </ThemeContext.Provider>
  );
}

export default App;
