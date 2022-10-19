import React from 'react';
import SwipeSlider from './SwipeSlider';

export const ProductPage = () => {
  return (
    <div className="row">
      <div className="col-lg-12">
        <div className="card card-banner-bg">
          <div className="card-body">
            <div className="d-flex justify-content-between align-items-center ">
              <div className="d-flex">
                <div className="d-flex flex-column justify-content-between p-2 iq-icons-bg rounded-pill me-3">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M14.75 17.5H15.5V19H5V17.5H5.75V5.5C5.75 4.675 6.425 4 7.25 4H13.25C13.6478 4 14.0294 4.15804 14.3107 4.43934C14.592 4.72064 14.75 5.10218 14.75 5.5V17.5ZM7.25 5.5V10H13.25V5.5H7.25ZM14.75 11.5H15.5C15.8978 11.5 16.2794 11.658 16.5607 11.9393C16.842 12.2206 17 12.6022 17 13V15.25C17 15.4489 17.079 15.6397 17.2197 15.7803C17.3603 15.921 17.5511 16 17.75 16C17.9489 16 18.1397 15.921 18.2803 15.7803C18.421 15.6397 18.5 15.4489 18.5 15.25V11.5L17 10V8.5L15.5 7L16.25 6.25L20 10V15.25C20 15.8467 19.7629 16.419 19.341 16.841C18.919 17.2629 18.3467 17.5 17.75 17.5C17.1533 17.5 16.581 17.2629 16.159 16.841C15.7371 16.419 15.5 15.8467 15.5 15.25V13H14.75V11.5Z"
                      fill="#131313"
                    />
                  </svg>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M8.55997 5.81717L8.17973 15.9864C7.66804 15.7162 7.02608 15.5993 6.35249 15.6977C4.90008 15.9093 3.85424 17.0365 4.01662 18.215C4.17902 19.3935 5.48804 20.1772 6.94039 19.9655C8.22938 19.7776 9.19695 18.8685 9.28486 17.8427C9.28506 17.8403 9.28546 17.8374 9.28566 17.8348C9.28782 17.8087 9.28905 17.7823 9.28998 17.7561C9.34407 16.6969 9.67517 8.65108 9.67517 8.65108L17.8304 7.78667L17.462 15.0329C16.9387 14.7332 16.266 14.5997 15.5587 14.7028C14.1063 14.9146 13.0606 16.0416 13.2229 17.2202C13.3853 18.3987 14.6943 19.1824 16.1467 18.9705C17.4631 18.7788 18.4439 17.8348 18.4954 16.7822L18.496 16.7815C18.5236 16.3085 18.9838 5.38598 19 5L8.55997 5.81717Z"
                      fill="#131313"
                    />
                  </svg>
                  <svg width="24" height="16" viewBox="0 0 14 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M11.8719 0.228303C12.0182 0.107702 12.1958 0.0311942 12.384 0.00770332C12.5721 -0.0157876 12.7631 0.0147068 12.9346 0.0956295C13.1061 0.176552 13.251 0.304567 13.3525 0.464742C13.454 0.624917 13.5079 0.810648 13.5078 1.00027V14.9977C13.5078 15.9237 12.3579 16.3527 11.7519 15.6527L8.22802 11.5799C8.0872 11.4173 7.91306 11.2868 7.71741 11.1975C7.52175 11.1081 7.30917 11.0619 7.09407 11.0619H1.50229C0.564328 11.0619 0.142345 9.88592 0.866317 9.28994L11.8719 0.228303Z"
                      fill="#131313"
                    />
                  </svg>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M7.90909 5.00003V6.63639H10.3636V8.27276H7.90909L6.27273 9.90912V12.3637H4.63636V9.90912H3V16.4546H4.63636V14H6.27273V16.4546H8.72727L10.3636 18.0909H16.9091V14.8182H18.5455V17.2728H21V9.09094H18.5455V11.5455H16.9091V8.27276H12V6.63639H14.4545V5.00003H7.90909Z"
                      fill="#131313"
                    />
                  </svg>
                  <svg width="24" height="16" viewBox="0 0 17 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M3.4343 10.1167C1.93654 9.54424 0.947266 8.10703 0.947266 6.5036C0.947266 4.90016 1.93654 3.46296 3.4343 2.89047L7.91229 1.17887C8.3026 1.02969 8.73382 1.02745 9.12566 1.17257C9.80145 1.42287 10.25 2.06736 10.25 2.78802V6.53567V10.3036C10.25 11.0408 9.76515 11.6902 9.05835 11.8996C8.70776 12.0035 8.33272 11.989 7.99116 11.8585L3.4343 10.1167Z"
                      fill="#131313"
                    />
                    <rect
                      x="11.2188"
                      y="2.49377"
                      width="5.90429"
                      height="1"
                      rx="0.5"
                      transform="rotate(16 11.2188 2.49377)"
                      fill="#131313"
                    />
                    <rect
                      x="11.3105"
                      y="5.74091"
                      width="4.478"
                      height="1"
                      rx="0.5"
                      transform="rotate(16 11.3105 5.74091)"
                      fill="#131313"
                    />
                    <rect
                      x="11.3613"
                      y="8.95813"
                      width="3.41762"
                      height="1"
                      rx="0.5"
                      transform="rotate(16 11.3613 8.95813)"
                      fill="#131313"
                    />
                  </svg>
                </div>
                <div>
                  <h1 className="fw-bold mb-4 text-light">Ferarri</h1>
                  <p className="text-light">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque odio sed mi mi, a faucibus
                    egestas.
                  </p>
                  <button type="button" className="btn btn-primary mt-3">
                    Search
                    <svg width="30" className="ms-2" viewBox="0 0 41 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M38.5067 6.12462C39.1954 6.50498 39.1954 7.49502 38.5067 7.87538L30.598 12.243C29.9315 12.611 29.1145 12.1289 29.1145 11.3676V2.63243C29.1145 1.87106 29.9315 1.38898 30.598 1.75704L38.5067 6.12462Z"
                        fill="white"
                      />
                      <rect y="6.36365" width="30.5455" height="1.27273" rx="0.636364" fill="white" />
                    </svg>
                  </button>
                </div>
              </div>
              <div className="text-center iq-banner-img">
                <h3 className="text-light">SLIPPERY</h3>
                <h6 className="text-primary mb-3">MODE</h6>
                <img src={require('assets/images/dashboard/01.png')} className="img-fluid" alt="img1" />
              </div>
              <div className="iq-banner-img">
                <button type="button" className="btn btn-soft-white rounded-pill iq-btn-icon">
                  <svg width="20" viewBox="0 0 33 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M5.33188 18.3908C2.45375 17.2907 0.552734 14.5289 0.552734 11.4477C0.552734 8.36649 2.45375 5.60473 5.33188 4.50463L14.5158 0.994329C15.2029 0.731665 15.9622 0.727724 16.6521 0.983234C17.8419 1.42391 18.6317 2.55864 18.6317 3.82746V11.5135V19.2411C18.6317 20.5316 17.7829 21.6683 16.5456 22.0349C15.9319 22.2167 15.2754 22.1914 14.6775 21.9629L5.33188 18.3908Z"
                      stroke="#F54114"
                    />
                    <rect
                      x="21.1191"
                      y="3.224"
                      width="12.1091"
                      height="1"
                      rx="0.5"
                      transform="rotate(16 21.1191 3.224)"
                      fill="#F54114"
                    />
                    <rect
                      x="21.3086"
                      y="9.88348"
                      width="9.18389"
                      height="1"
                      rx="0.5"
                      transform="rotate(16 21.3086 9.88348)"
                      fill="#F54114"
                    />
                    <rect
                      x="21.4121"
                      y="16.4816"
                      width="7.00917"
                      height="1"
                      rx="0.5"
                      transform="rotate(16 21.4121 16.4816)"
                      fill="#F54114"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="col-lg-4">
        <div className="card">
          <div className="card-header">
            <h5>Compare Cars</h5>
          </div>
          <div className="card-body">
            <div className="border">
              <div className="d-flex align-items-center justify-content-center py-3">
                <img src={require('assets/images/dashboard/1.png')} className="img-fluid w-100" alt="img1" />
              </div>
              <div className="p-3">
                <select className="form-select form-control choicesjs">
                  <option selected>Select Brand/Model</option>
                  <option value="SEDAN">SEDAN</option>
                  <option value="COUPE">COUPE</option>
                  <option value="HATCHBACK">HATCHBACK</option>
                  <option value="MINIVAN">MINIVAN</option>
                  <option value="SPORTS CAR">SPORTS CAR</option>
                </select>
                <select className="form-select form-control choicesjs">
                  <option selected>Select Variant</option>
                  <option value="Hatchback">Hatchback</option>
                  <option value="Sedan">Sedan</option>
                  <option value="Maruti Suzuki">Maruti Suzuki</option>
                  <option value="Swift">Swift</option>
                  <option value="Audi A3">Audi A3</option>
                </select>
                <select className="form-select form-control choicesjs">
                  <option selected>Select Make</option>
                  <option value="Hatchback">Hatchback</option>
                  <option value="COUPE">COUPE</option>
                  <option value="HATCHBACK">HATCHBACK</option>
                  <option value="Sedan">Sedan</option>
                  <option value="Maruti Suzuki">Maruti Suzuki</option>
                  <option value="Swift">Swift</option>
                  <option value="Audi A3">Audi A3</option>
                </select>
                <select className="form-select form-control choicesjs">
                  <option selected>Select Area</option>
                  <option value="Washington">Washington</option>
                  <option value="Franklin">Franklin</option>
                  <option value="Clinton">Clinton</option>
                  <option value="Arlington">Arlington</option>
                  <option value="Centerville">Centerville</option>
                  <option value="Lebanon">Lebanon</option>
                  <option value="Georgetown">Georgetown</option>
                </select>
              </div>
            </div>
            <div className="border mt-5">
              <div className="d-flex align-items-center justify-content-center py-3">
                <img src={require('assets/images/dashboard/1.png')} className="img-fluid w-100" alt="img1" />
              </div>
              <div className="p-3">
                <select className="form-select form-control choicesjs">
                  <option selected>Select Brand/Model</option>
                  <option value="SEDAN">SEDAN</option>
                  <option value="COUPE">COUPE</option>
                  <option value="HATCHBACK">HATCHBACK</option>
                  <option value="MINIVAN">MINIVAN</option>
                  <option value="SPORTS CAR">SPORTS CAR</option>
                </select>
                <select className="form-select form-control choicesjs">
                  <option selected>Select Variant</option>
                  <option value="Hatchback">Hatchback</option>
                  <option value="Sedan">Sedan</option>
                  <option value="Maruti Suzuki">Maruti Suzuki</option>
                  <option value="Swift">Swift</option>
                  <option value="Audi A3">Audi A3</option>
                </select>
                <select className="form-select form-control choicesjs">
                  <option selected>Select Make</option>
                  <option value="Hatchback">Hatchback</option>
                  <option value="COUPE">COUPE</option>
                  <option value="HATCHBACK">HATCHBACK</option>
                  <option value="Sedan">Sedan</option>
                  <option value="Maruti Suzuki">Maruti Suzuki</option>
                  <option value="Swift">Swift</option>
                  <option value="Audi A3">Audi A3</option>
                </select>
                <select className="form-select form-control choicesjs">
                  <option selected>Select Area</option>
                  <option value="Washington">Washington</option>
                  <option value="Franklin">Franklin</option>
                  <option value="Clinton">Clinton</option>
                  <option value="Arlington">Arlington</option>
                  <option value="Centerville">Centerville</option>
                  <option value="Lebanon">Lebanon</option>
                  <option value="Georgetown">Georgetown</option>
                </select>
              </div>
            </div>
            <div className="d-flex align-items-center justify-content-center">
              <button type="button" className="btn btn-primary mt-3">
                Compare Now
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="col-lg-8">
        <div className="d-flex justify-content-between align-items-center px-3 mb-3">
          <div>
            <h1>Hello Edmond</h1>
            <h6>Welcome to Vrooom</h6>
          </div>
          <img src={require('assets/images/auth/01.webp')} className="img-fluid w-25" alt="img1" />
        </div>
        <div className="card-transparent bg-white rounded mb-4">
          <div className="card-header">
            <div className="d-flex justify-content-between">
              <h5 className="heading-title">Upcoming Models</h5>
              <span className="text-primary"> View More</span>
            </div>
          </div>
          <SwipeSlider />
        </div>
        <div className="card">
          <div className="card-body">
            <div className="row d-flex align-items-center pb-3">
              <div className="col-lg-9">
                <img src={require('assets/images/dashboard/1.png')} className="img-fluid" alt="img1" />
              </div>
              <div className="col-lg-3 text-center">
                <h2>Lamborghini Aventador</h2>
                <h4 className="text-primary">$30,00,000</h4>
              </div>
            </div>
            <div className="iq-grid iq-indicator">
              <div className="mt-3 p-3 bg-soft-secondary rounded">
                <div className="d-flex align-items-center">
                  <svg width="33" viewBox="0 0 33 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M25.1642 13.7914L17.3418 1.57336C17.2514 1.43207 17.1268 1.31581 16.9797 1.23528C16.8325 1.15476 16.6674 1.11255 16.4996 1.11255C16.3319 1.11255 16.1668 1.15476 16.0196 1.23528C15.8725 1.31581 15.7479 1.43207 15.6575 1.57336L7.8349 13.7916C6.47874 15.6313 5.74989 17.8582 5.7559 20.1437C5.7559 26.0678 10.5755 30.8875 16.4996 30.8875C22.4238 30.8875 27.2434 26.0679 27.2434 20.1437C27.2494 17.8581 26.5205 15.6311 25.1642 13.7914ZM16.4996 28.8875C11.6784 28.8875 7.7559 24.9651 7.7559 20.1437C7.75078 18.2746 8.34972 16.4538 9.46346 14.9526C9.47675 14.9346 9.48942 14.9162 9.50146 14.8974L16.4996 3.96718L23.4976 14.8974C23.5096 14.9163 23.5223 14.9347 23.5356 14.9527C24.6494 16.4538 25.2484 18.2746 25.2434 20.1437C25.2434 24.965 21.3209 28.8875 16.4996 28.8875Z"
                      fill="#131313"
                    />
                  </svg>
                  <div className="ms-3">
                    <h4>Oil Level</h4>
                    <p className="mb-0">Engine</p>
                  </div>
                </div>
                <div className="form-group mt-3">
                  <div className="iq-slider slider"></div>
                </div>
                <div className="iq-oil-level">
                  <div className="d-flex justify-content-between">
                    <h6>Date: </h6>
                    <span className="text-primary"> Nov 12-20</span>
                  </div>
                  <div className="d-flex justify-content-between">
                    <h6>Oil Type: </h6>
                    <span className="text-primary">Mobil 5w 40</span>
                  </div>
                  <div className="d-flex justify-content-between">
                    <h6>Location: </h6>
                    <span className="text-primary">
                      <svg width="14" viewBox="0 0 14 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                          d="M11.8719 0.228303C12.0182 0.107702 12.1958 0.0311942 12.384 0.00770332C12.5721 -0.0157876 12.7631 0.0147068 12.9346 0.0956295C13.1061 0.176552 13.251 0.304567 13.3525 0.464742C13.454 0.624917 13.5079 0.810648 13.5078 1.00027V14.9977C13.5078 15.9237 12.3579 16.3527 11.7519 15.6527L8.22802 11.5799C8.0872 11.4173 7.91306 11.2868 7.71741 11.1975C7.52175 11.1081 7.30917 11.0619 7.09407 11.0619H1.50229C0.564328 11.0619 0.142345 9.88592 0.866317 9.28994L11.8719 0.228303Z"
                          fill="#FA9880"
                        />
                      </svg>
                      Austin LA
                    </span>
                  </div>
                </div>
              </div>
              <div className="mt-3 p-3 bg-soft-secondary rounded">
                <div className="d-flex align-items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
                    <path
                      d="M15.5 31C23.5084 31 30 24.5084 30 16.5C30 8.49165 23.5084 2 15.5 2C7.49165 2 1 8.49165 1 16.5C1 24.5084 7.49165 31 15.5 31Z"
                      stroke="#131313"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M15.5 31V22.3"
                      stroke="#131313"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M1 16.5H9.7"
                      stroke="#131313"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M29.9988 16.5H21.2988"
                      stroke="#131313"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M21.2992 16.5C21.2992 18.0382 20.6881 19.5135 19.6004 20.6012C18.5127 21.6889 17.0375 22.3 15.4992 22.3C13.961 22.3 12.4857 21.6889 11.398 20.6012C10.3103 19.5135 9.69922 18.0382 9.69922 16.5C9.69922 14.9617 10.3103 13.4864 11.398 12.3987C12.4857 11.311 13.961 10.7 15.4992 10.7C17.0375 10.7 18.5127 11.311 19.6004 12.3987C20.6881 13.4864 21.2992 14.9617 21.2992 16.5V16.5Z"
                      stroke="#131313"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                  <div className="ms-3">
                    <h4>Break pads</h4>
                    <p className="mb-0">Wheels</p>
                  </div>
                </div>
                <div className="d-flex justify-content-around mt-3">
                  <div className="d-flex flex-column">
                    <div
                      id="circle-progress-01"
                      className="circle-progress-01 circle-progress circle-progress-primary text-center"
                      data-min-value="0"
                      data-max-value="100"
                      data-value="90"
                      data-type="percent"
                    ></div>
                    <div className="text-center">
                      <small className="fw-bold">Fuel</small>
                    </div>
                  </div>
                  <div className="d-flex flex-column">
                    <div
                      id="circle-progress-02"
                      className="circle-progress-02 circle-progress circle-progress-primary text-center"
                      data-min-value="0"
                      data-max-value="100"
                      data-value="45"
                      data-type="percent"
                    ></div>
                    <div className="text-center">
                      <small className="fw-bold">Heat</small>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-3 p-3 bg-soft-secondary rounded">
                <div className="d-flex align-items-center">
                  <svg width="33" viewBox="0 0 33 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M25.1642 13.7914L17.3418 1.57336C17.2514 1.43207 17.1268 1.31581 16.9797 1.23528C16.8325 1.15476 16.6674 1.11255 16.4996 1.11255C16.3319 1.11255 16.1668 1.15476 16.0196 1.23528C15.8725 1.31581 15.7479 1.43207 15.6575 1.57336L7.8349 13.7916C6.47874 15.6313 5.74989 17.8582 5.7559 20.1437C5.7559 26.0678 10.5755 30.8875 16.4996 30.8875C22.4238 30.8875 27.2434 26.0679 27.2434 20.1437C27.2494 17.8581 26.5205 15.6311 25.1642 13.7914ZM16.4996 28.8875C11.6784 28.8875 7.7559 24.9651 7.7559 20.1437C7.75078 18.2746 8.34972 16.4538 9.46346 14.9526C9.47675 14.9346 9.48942 14.9162 9.50146 14.8974L16.4996 3.96718L23.4976 14.8974C23.5096 14.9163 23.5223 14.9347 23.5356 14.9527C24.6494 16.4538 25.2484 18.2746 25.2434 20.1437C25.2434 24.965 21.3209 28.8875 16.4996 28.8875Z"
                      fill="#131313"
                    />
                  </svg>
                  <div className="ms-3">
                    <h4>Oil Level</h4>
                    <p className="mb-0">Engine</p>
                  </div>
                </div>
                <div className="form-group mt-3">
                  <div className="iq-slider slider"></div>
                </div>
                <div className="iq-oil-level">
                  <div className="d-flex justify-content-between">
                    <h6>Date: </h6>
                    <span className="text-primary"> Nov 12-20</span>
                  </div>
                  <div className="d-flex justify-content-between">
                    <h6>Oil Type: </h6>
                    <span className="text-primary">Mobil 5w 40</span>
                  </div>
                  <div className="d-flex justify-content-between">
                    <h6>Location: </h6>
                    <span className="text-primary">
                      <svg width="14" viewBox="0 0 14 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                          d="M11.8719 0.228303C12.0182 0.107702 12.1958 0.0311942 12.384 0.00770332C12.5721 -0.0157876 12.7631 0.0147068 12.9346 0.0956295C13.1061 0.176552 13.251 0.304567 13.3525 0.464742C13.454 0.624917 13.5079 0.810648 13.5078 1.00027V14.9977C13.5078 15.9237 12.3579 16.3527 11.7519 15.6527L8.22802 11.5799C8.0872 11.4173 7.91306 11.2868 7.71741 11.1975C7.52175 11.1081 7.30917 11.0619 7.09407 11.0619H1.50229C0.564328 11.0619 0.142345 9.88592 0.866317 9.28994L11.8719 0.228303Z"
                          fill="#FA9880"
                        />
                      </svg>
                      Austin LA
                    </span>
                  </div>
                </div>
              </div>
              <div className="mt-3 p-3 bg-soft-secondary rounded">
                <div className="d-flex align-items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
                    <path
                      d="M15.5 31C23.5084 31 30 24.5084 30 16.5C30 8.49165 23.5084 2 15.5 2C7.49165 2 1 8.49165 1 16.5C1 24.5084 7.49165 31 15.5 31Z"
                      stroke="#131313"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M15.5 31V22.3"
                      stroke="#131313"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M1 16.5H9.7"
                      stroke="#131313"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M29.9988 16.5H21.2988"
                      stroke="#131313"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M21.2992 16.5C21.2992 18.0382 20.6881 19.5135 19.6004 20.6012C18.5127 21.6889 17.0375 22.3 15.4992 22.3C13.961 22.3 12.4857 21.6889 11.398 20.6012C10.3103 19.5135 9.69922 18.0382 9.69922 16.5C9.69922 14.9617 10.3103 13.4864 11.398 12.3987C12.4857 11.311 13.961 10.7 15.4992 10.7C17.0375 10.7 18.5127 11.311 19.6004 12.3987C20.6881 13.4864 21.2992 14.9617 21.2992 16.5V16.5Z"
                      stroke="#131313"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                  <div className="ms-3">
                    <h4>Break pads</h4>
                    <p className="mb-0">Wheels</p>
                  </div>
                </div>
                <div className="d-flex justify-content-around mt-3">
                  <div className="d-flex flex-column">
                    <div
                      id="circle-progress-05"
                      className="circle-progress-05 circle-progress circle-progress-primary text-center"
                      data-min-value="0"
                      data-max-value="100"
                      data-value="90"
                      data-type="percent"
                    ></div>
                    <div className="text-center">
                      <small className="fw-bold">Fuel</small>
                    </div>
                  </div>
                  <div className="d-flex flex-column">
                    <div
                      id="circle-progress-06"
                      className="circle-progress-06 circle-progress circle-progress-primary text-center"
                      data-min-value="0"
                      data-max-value="100"
                      data-value="45"
                      data-type="percent"
                    ></div>
                    <div className="text-center">
                      <small className="fw-bold">Heat</small>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
