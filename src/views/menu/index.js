import React, { useEffect, useState } from 'react';
import Topbar from '../../components/topbar';
import Navigator from '../../components/navigator';
import { faker } from '@faker-js/faker';
import { useLocation } from 'react-router-dom';
import { Skeleton } from 'antd';

export default function Index() {
  const location = useLocation();
  console.log(location);
  const [data, setData] = useState({
    seasonalProduct: [],
    bestSeller: [],
    coffee: [],
  });

  useEffect(() => {
    let fakerData = {
      seasonalProduct: [],
      bestSeller: [],
      coffee: [],
    };

    for (let i = 1; i <= 9; i++) {
      const tempFaker = {
        name: faker.animal.cat(),
        image: faker.image.food(100, 100, false),
        description: faker.random.words(10),
        amount: faker.finance
          .amount(10000, 150000, 0, '', true)
          .replace(',', '.'),
      };

      if (i <= 3) {
        fakerData.seasonalProduct.push(tempFaker);
      } else if (i <= 6) {
        fakerData.bestSeller.push(tempFaker);
      } else {
        fakerData.coffee.push(tempFaker);
      }
    }

    setData(fakerData);
  }, []);

  console.log(data);
  return (
    <div className="w-full h-full bg-slate-50">
      <div className="w-full md:w-[50%] mx-auto shadow relative">
        <div className="w-full md:w-[50%] bg-white text-center fixed">
          <div className="p-7">
            <h5>Menu</h5>
          </div>

          <div className="flex justify-evenly text-slate-400">
            <a
              href="#seasonal-product"
              className={`w-full h-10 ${
                (location.hash === '#seasonal-product' ||
                  location.hash === '') &&
                'text-black border-b-2 border-b-black'
              }`}
            >
              <span>Seasonal Product</span>
            </a>
            <a
              href="#best-seller"
              className={`w-full h-10 ${
                location.hash === '#best-seller' &&
                'text-black border-b-2 border-b-black'
              }`}
            >
              <span>Best Seller</span>
            </a>
            <a
              href="#coffee"
              className={`w-full h-10 ${
                location.hash === '#coffee' &&
                'text-black border-b-2 border-b-black'
              }`}
            >
              <span>Coffee</span>
            </a>
          </div>
        </div>

        <div className="pt-32 pb-14">
          {/* Seasonal Product */}
          <div id="seasonal-product">
            <div className="p-4">
              <span>Seasonal Product</span>
            </div>

            {data.seasonalProduct.map((product) => (
              <div className="flex justify-around gap-5 items-center px-5 mb-1 bg-white">
                <img src={product.image} />
                <div>
                  <span>{product.name}</span>
                  <p className="text-sm text-slate-400">
                    {product.description}
                  </p>
                </div>
                <span>{product.amount}</span>
              </div>
            ))}
          </div>
          {/* Best Seller */}
          <div id="best-seller">
            <div className="p-4">
              <span>Best Seller</span>
            </div>

            {data.bestSeller.map((product) => (
              <div className="flex justify-around gap-5 items-center px-5 mb-1 bg-white">
                <img src={product.image} />
                <div>
                  <span>{product.name}</span>
                  <p className="text-sm text-slate-400">
                    {product.description}
                  </p>
                </div>
                <span>{product.amount}</span>
              </div>
            ))}
          </div>
          {/* Coffee */}
          <div id="coffee">
            <div className="p-4">
              <span>Coffee</span>
            </div>

            {data.coffee.map((product) => (
              <div className="flex justify-around gap-5 items-center px-5 mb-1 bg-white">
                <img src={product.image} />
                <div>
                  <span>{product.name}</span>
                  <p className="text-sm text-slate-400">
                    {product.description}
                  </p>
                </div>
                <span>{product.amount}</span>
              </div>
            ))}
          </div>
        </div>

        <Navigator />
      </div>
    </div>
  );
}
