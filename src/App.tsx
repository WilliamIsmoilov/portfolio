import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Navbar from './components/shared/Navbar';
import Pages from './pages';
import { Toaster } from 'sonner';

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Pages />} />
      </Routes>
      <Toaster position="top-center" />
    </>
  );
};

export default App;
