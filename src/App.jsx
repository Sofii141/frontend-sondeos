import './App.css'
import './App.scss'
import { Sidebar } from './Components/SideBarSection/Sidebar';
import { AppRouter } from './routes/AppRouter';
import { datUser } from './hooks/example.js';
import { useState } from 'react';
import axios from 'axios';


function App() {

  return (
    <div className='container'>

      <Sidebar></Sidebar>
      
      <AppRouter></AppRouter>
    </div>
  )

}

export default App;
