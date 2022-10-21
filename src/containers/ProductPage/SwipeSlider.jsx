import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

const SwipeSlider = () => {
  const config = [
    {
      vehiclesImage: '6.png',
      vehiclesData: '1997 maruti suzuki',
      vehiclesName: 'Ertiga',
      vehiclesAmount: '$58,000.00',
      rating: '3',
    },
    {
      vehiclesImage: '5.png',
      vehiclesData: '1997 BMW',
      vehiclesName: 'Bmw X1',
      vehiclesAmount: '$60,000.00',
      rating: '2',
    },
    {
      vehiclesImage: '7.png',
      vehiclesData: '1997 maruti suzuki',
      vehiclesName: 'Swift Dzire',
      vehiclesAmount: '$58,000.00',
      rating: '5',
    },
    {
      vehiclesImage: '6.png',
      vehiclesData: '1997 maruti suzuki',
      vehiclesName: 'Swift Dzire',
      vehiclesAmount: '$58,000.00',
      rating: '3',
    },
    {
      vehiclesImage: '5.png',
      vehiclesData: '1997 maruti suzuki',
      vehiclesName: 'Swift Dzire',
      vehiclesAmount: '$58,000.00',
      rating: '3',
    },
  ];
  return (
    <>
      <div className="card-header swiper-container d-slider2 swiper-container-initialized swiper-container-horizontal swiper-container-pointer-events">
        <div className="swiper-wrapper">
          <Swiper slidesPerView={4} spaceBetween={10} className="mySwiper">
            {config.map((item) => (
              <SwiperSlide>
                <div class="iq-upcoming-cars">
                  <img
                    src={require(`assets/images/dashboard/${item.vehiclesImage}`)}
                    class="img-fluid w-100"
                    alt="img8"
                  />
                  <div class="iq-car-details">
                    <h6 class="text-primary">{item.vehiclesData}</h6>
                    <div class="d-flex justify-content-end">
                      <svg width="18" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                          d="M27.2035 11.1678C27.127 10.9426 26.9862 10.7446 26.7985 10.5985C26.6109 10.4523 26.3845 10.3643 26.1474 10.3453L19.2112 9.79418L16.2097 3.14996C16.1141 2.93597 15.9586 2.75421 15.762 2.62662C15.5654 2.49904 15.336 2.43108 15.1017 2.43095C14.8673 2.43083 14.6379 2.49853 14.4411 2.6259C14.2444 2.75327 14.0887 2.93486 13.9929 3.14875L10.9914 9.79418L4.05515 10.3453C3.82211 10.3638 3.59931 10.449 3.41343 10.5908C3.22754 10.7325 3.08643 10.9249 3.00699 11.1447C2.92754 11.3646 2.91311 11.6027 2.96544 11.8305C3.01776 12.0584 3.13462 12.2663 3.30204 12.4295L8.42785 17.4263L6.61502 25.2763C6.55997 25.5139 6.57762 25.7626 6.66566 25.99C6.7537 26.2175 6.90807 26.4132 7.10874 26.5519C7.30942 26.6905 7.54713 26.7656 7.79103 26.7675C8.03493 26.7693 8.27376 26.6978 8.47652 26.5623L15.1013 22.1458L21.726 26.5623C21.9333 26.6999 22.1777 26.7707 22.4264 26.7653C22.6751 26.7598 22.9161 26.6783 23.1171 26.5318C23.3182 26.3852 23.4695 26.1806 23.5507 25.9455C23.632 25.7104 23.6393 25.456 23.5717 25.2167L21.3464 17.43L26.8652 12.4635C27.2266 12.1375 27.3592 11.6289 27.2035 11.1678Z"
                          fill="#ED9912"
                        />
                      </svg>
                    </div>
                  </div>
                  <div class="iq-car-name">
                    <h6>{item.vehiclesName}</h6>
                  </div>
                  <div class="iq-car-price d-flex justify-content-between align-items-center">
                    <span>Price</span>
                    <h6>{item.vehiclesAmount}</h6>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </>
  );
};

export default SwipeSlider;
