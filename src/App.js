import { useState } from 'react';
import './App.css';
import Table from './components/Table';
import UserData from './userData.json';

function App() {
  const [query, setQuery] = useState("")
  const keys = ["first_name", "last_name", "email"]
  const search = (data) => {
    return data.filter(
      (item) => 
         keys.some((key) => item[key].toLowerCase().includes(query))
    )
  }
  return (
    <div style={{textAlign: 'center', margin: '5rem'}}>
       <input type="text" placeholder='Enter Name' onChange={(e) => setQuery(e.target.value)}/>
        <Table data={search(UserData)}/>
    </div>
  );
}

export default App;
