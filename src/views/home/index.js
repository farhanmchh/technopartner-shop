import React from 'react';

import 'swiper/css/scrollbar';
import Wallet from './wallet';
import Topbar from '../../components/topbar';
import Navigator from '../../components/navigator';
import Banner from './banner';

export default function Index() {
  return (
    <div className="w-full h-screen bg-slate-50 overflow-hidden relative">
      {/* Topbar */}
      <Topbar />

      {/* Wallet */}
      <Wallet />

      {/* Banner */}
      <Banner />

      {/* Navigator */}
      <Navigator />
    </div>
  );
}
