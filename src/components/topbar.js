import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function Topbar() {
  const navigate = useNavigate();
  return (
    <div className="bg-white px-4 md:px-10 flex justify-between items-center shadow">
      <div className="w-[40%] md:w-[10%]">
        <img src="/logo-technopartner.png" alt="logo" />
      </div>
      <div
        className="w-10 h-10 bg-slate-300 rounded-full hover:cursor-pointer"
        onClick={() => navigate('/login')}
      />
    </div>
  );
}
