import { Drawer } from 'antd';
import React, { useEffect, useState } from 'react';
import QRCode from 'react-qr-code';
import { faker } from '@faker-js/faker';

export default function Wallet() {
  const [isMobile, setIsMobile] = useState(false);
  const [showQR, setShowQR] = useState(false);

  useEffect(() => {
    setIsMobile(window.innerWidth < 768);
  }, [window.innerWidth]);

  return (
    <>
      <div
        className="p-5 -z-10"
        style={{ backgroundImage: "url('/motif.png')" }}
      >
        <div className="w-[95%] lg:w-[40%] mx-auto px-5 py-3 bg-white rounded-lg shadow-md">
          <div className="mb-3">
            <p>Good Afternoon,</p>
            <p className="font-medium">{faker.name.fullName()}</p>
          </div>

          <div className="flex gap-3 md:gap-5 items-center">
            <div
              className="p-3 md:p-5 shadow-md border border-slate-200 rounded-full hover:cursor-pointer"
              onClick={() => setShowQR(!showQR)}
            >
              <QRCode value="https://youtube.com" size={isMobile ? 40 : 50} />
            </div>

            <div className="min-h-8 border border-dotted border-slate-400" />

            <div className="w-full">
              <div className="flex justify-between text-sm md:text-base">
                <span>Saldo</span>
                <span className="font-medium">
                  {faker.finance
                    .amount(0, 5000000, 0, 'Rp', true)
                    .replace(',', '.')}
                </span>
              </div>
              <div className="flex justify-between text-sm md:text-base">
                <span>Points</span>
                <span className="font-medium text-cyan-400">
                  {faker.finance
                    .amount(0, 50000, 0, '', true)
                    .replace(',', '.')}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Drawer
        size="large"
        open={showQR}
        onClose={() => setShowQR(false)}
        placement="right"
      >
        <div className="text-center">
          <h6 className="mb-12">Show the QR Code below to the cashier</h6>
          <QRCode
            value="https://youtube.com"
            className="mx-auto"
            size={isMobile ? 200 : 200}
          />
        </div>
      </Drawer>
    </>
  );
}
