import { Link, Outlet } from "react-router-dom";
import Home from './pages/Home';
import Chat from './pages/Chat';
import Navbar from './components/Navbar'
import { Routes, Route } from "react-router-dom";
import { useState } from "react";
import './App.css';

function App() {
  const [selectedLink, setSelectedLink] = useState('home');
  return (
    <>
      <Navbar link={selectedLink} func={setSelectedLink}/>
      <Routes>
        <Route path="/home" element={<Home link={selectedLink} func={setSelectedLink}/>} />
        <Route path="/chat" element={<Chat />} />
      </Routes>
    </>
  );
}

export default App;
