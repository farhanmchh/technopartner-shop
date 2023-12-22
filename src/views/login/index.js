import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function Index() {
  const navigate = useNavigate();
  return (
    <div className="w-full h-screen flex items-center bg-slate-50">
      <div className="w-full sm:w-[50%] md:w-[30%] p-5  mx-auto text-center bg-slate-50 md:border border-gray-300 rounded-xl md:shadow-md">
        <div className="w-[70%] mx-auto mb-5">
          <img src="/logo-technopartner.png" />
        </div>

        <div className="mb-4">
          <label>Email</label>
          <input />
        </div>
        <div className="mb-5">
          <label>Password</label>
          <input type="password" />
        </div>
        <div className="w-[70%] mx-auto">
          <button
            className="bg-white py-2 border border-slate-200 shadow font-semibold"
            onClick={() => navigate('/home')}
          >
            Login
          </button>
        </div>
      </div>
    </div>
  );
}
