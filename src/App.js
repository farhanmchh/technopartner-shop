import './App.css';
import React, { Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';

const Login = React.lazy(() => import('./views/login'));
const Home = React.lazy(() => import('./views/home'));
const Menu = React.lazy(() => import('./views/menu'));

function App() {
  return (
    <Suspense fallback={<div className="w-full h-full bg-white" />}>
      <Routes>
        <Route path="/*" element={<Login />} />
        <Route path="/login" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/menu" element={<Menu />} />
      </Routes>
    </Suspense>
  );
}

export default App;
