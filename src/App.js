import React, { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import Navbar from './components/navbar';
import Rockets from './components/Rockets';
import Profile from './components/profile';
import { loadRockets } from './redux/rockets/rockets';
import './App.css';
import Missions from './components/Missions';
import Footer from './components/Footer';
import Dragons from './components/Dragons';
import { loadDragons } from './redux/dragons/dragons';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadRockets());
    dispatch(loadDragons());
  }, []);

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Rockets />} />
        <Route path="/MyProfile" element={<Profile />} />
        <Route path="/Missions" element={<Missions />} />
        <Route path="/Dragons" element={<Dragons />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
