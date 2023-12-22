import React from 'react';
import { Autoplay, Navigation, Pagination, Scrollbar } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { KeyboardArrowRightRounded } from '@mui/icons-material';

export default function Banner() {
  const banners = [
    { image: '/logo-technopartner.png' },
    { image: '/logo-technopartner.png' },
    { image: '/logo-technopartner.png' },
    { image: '/logo-technopartner.png' },
    { image: '/logo-technopartner.png' },
  ];
  return (
    <div className="w-full lg:w-[50%] mx-auto">
      <Swiper
        className="lg:rounded-t-xl"
        modules={[Autoplay, Navigation, Pagination, Scrollbar]}
        slidesPerView={1}
        pagination={{ el: '.swiper-custom-pagination' }}
        autoplay={{ delay: 2000, disableOnInteraction: false }}
      >
        {banners.map((banner) => (
          <SwiperSlide className="bg-slate-200 ">
            <img
              src={banner.image}
              className="w-[50%] mx-auto"
              alt={banner.image}
            />
          </SwiperSlide>
        ))}
      </Swiper>

      <div className="bg-white p-3 flex justify-between md:rounded-b-xl shadow">
        <div>
          <div className="swiper-custom-pagination" />
        </div>

        <a href="#" className="text-blue-400 text-sm">
          View all <KeyboardArrowRightRounded />
        </a>
      </div>
    </div>
  );
}
