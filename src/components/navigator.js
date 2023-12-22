import { ContentPasteRounded, HomeRounded } from '@mui/icons-material';
import { Divider } from '@mui/material';
import React from 'react';
import { useLocation } from 'react-router-dom';

export default function Navigator() {
  const location = useLocation();
  return (
    <div className="w-full lg:w-[50%] bg-white shadow mx-auto flex mt-20 text-center md:rounded-b-xl bottom-0 fixed lg:static">
      <a
        href="/home"
        className={`w-[50%] bg-white py-3 hover:cursor-pointer  ${
          location.pathname === '/home' ? 'opacity-100' : 'opacity-30'
        }`}
      >
        <HomeRounded />
      </a>
      <Divider orientation="vertical" flexItem />
      <a
        href="menu"
        className={`w-[50%] bg-white py-3 hover:cursor-pointer ${
          location.pathname === '/menu' ? 'opacity-100' : 'opacity-30'
        }`}
      >
        <ContentPasteRounded />
      </a>
    </div>
  );
}
