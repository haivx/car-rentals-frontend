import React from 'react';
import Logo from 'assets/images/logo.png';

export const TopBar = () => {
  return (
    <nav className="nav navbar navbar-expand-lg navbar-light iq-navbar">
      <div className="container-fluid navbar-inner">
        <a href="{{path}}dashboard/index.html" className="navbar-brand">
          <img src={Logo} class="img-fluid" alt="logo-big" />
        </a>
        <div className="sidebar-toggle sidebar-toggle-responsive" data-toggle="sidebar" data-active="true">
          <i className="icon">
            <svg width="20px" height="20px" viewBox="0 0 24 24">
              <path fill="currentColor" d="M4,11V13H16L10.5,18.5L11.92,19.92L19.84,12L11.92,4.08L10.5,5.5L16,11H4Z" />
            </svg>
          </i>
        </div>
        <div className="input-group search-input">
          <span className="input-group-text" id="search-input">
            <svg width="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle
                cx="11.7669"
                cy="11.7666"
                r="8.98856"
                stroke="currentColor"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></circle>
              <path
                d="M18.0186 18.4851L21.5426 22"
                stroke="currentColor"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></path>
            </svg>
          </span>
          <input type="search" className="form-control" placeholder="Search..." />
        </div>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon">
            <span className="navbar-toggler-bar bar1 mt-2"></span>
            <span className="navbar-toggler-bar bar2"></span>
            <span className="navbar-toggler-bar bar3"></span>
          </span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto align-items-center navbar-list mb-2 mb-lg-0">
            <li className="nav-item dropdown">
              <a
                href="#!"
                className="search-toggle nav-link"
                id="dropdownMenuButton2"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <img
                  src={require('assets/images/flag/flag001.png')}
                  className="img-fluid rounded-circle"
                  alt="user"
                  style={{ height: 30, minWidth: 30, width: 30 }}
                />
                <span className="bg-primary"></span>
              </a>
              <div className="sub-drop dropdown-menu dropdown-menu-end p-0" aria-labelledby="dropdownMenuButton2">
                <div className="card shadow-none m-0 border-0">
                  <div className=" p-0 ">
                    <ul className="list-group list-group-flush p-0">
                      <li className="iq-sub-card list-group-item">
                        <a className="p-0" href="#!">
                          <img
                            src={require('assets/images/flag/flag-03.png')}
                            alt="img-flaf"
                            className="img-fluid me-2"
                            style={{ height: 15, minWidth: 15, width: 15 }}
                          />
                          Spanish
                        </a>
                      </li>
                      <li className="iq-sub-card list-group-item">
                        <a className="p-0" href="#!">
                          <img
                            src={require('assets/images/flag/flag-04.png')}
                            alt="img-flaf"
                            className="img-fluid me-2"
                            style={{ height: 15, minWidth: 15, width: 15 }}
                          />
                          Italian
                        </a>
                      </li>
                      <li className="iq-sub-card list-group-item">
                        <a className="p-0" href="#!">
                          <img
                            src={require('assets/images/flag/flag-02.png')}
                            alt="img-flaf"
                            className="img-fluid me-2"
                            style={{ height: 15, minWidth: 15, width: 15 }}
                          />
                          French
                        </a>
                      </li>
                      <li className="iq-sub-card list-group-item">
                        <a className="p-0" href="#!">
                          <img
                            src={require('assets/images/flag/flag-05.png')}
                            alt="img-flaf"
                            className="img-fluid me-2"
                            style={{ height: 15, minWidth: 15, width: 15 }}
                          />
                          German
                        </a>
                      </li>
                      <li className="iq-sub-card list-group-item">
                        <a className="p-0" href="#!">
                          <img
                            src={require('assets/images/flag/flag-06.png')}
                            alt="img-flaf"
                            className="img-fluid me-2"
                            style={{ height: 15, minWidth: 15, width: 15 }}
                          />
                          Japanese
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </li>
            <li className="nav-item dropdown">
              <a href="#!" className="nav-link" id="notification-drop" data-bs-toggle="dropdown">
                <svg width="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M19.7695 11.6453C19.039 10.7923 18.7071 10.0531 18.7071 8.79716V8.37013C18.7071 6.73354 18.3304 5.67907 17.5115 4.62459C16.2493 2.98699 14.1244 2 12.0442 2H11.9558C9.91935 2 7.86106 2.94167 6.577 4.5128C5.71333 5.58842 5.29293 6.68822 5.29293 8.37013V8.79716C5.29293 10.0531 4.98284 10.7923 4.23049 11.6453C3.67691 12.2738 3.5 13.0815 3.5 13.9557C3.5 14.8309 3.78723 15.6598 4.36367 16.3336C5.11602 17.1413 6.17846 17.6569 7.26375 17.7466C8.83505 17.9258 10.4063 17.9933 12.0005 17.9933C13.5937 17.9933 15.165 17.8805 16.7372 17.7466C17.8215 17.6569 18.884 17.1413 19.6363 16.3336C20.2118 15.6598 20.5 14.8309 20.5 13.9557C20.5 13.0815 20.3231 12.2738 19.7695 11.6453Z"
                    fill="currentColor"
                  ></path>
                  <path
                    opacity="0.4"
                    d="M14.0088 19.2283C13.5088 19.1215 10.4627 19.1215 9.96275 19.2283C9.53539 19.327 9.07324 19.5566 9.07324 20.0602C9.09809 20.5406 9.37935 20.9646 9.76895 21.2335L9.76795 21.2345C10.2718 21.6273 10.8632 21.877 11.4824 21.9667C11.8123 22.012 12.1482 22.01 12.4901 21.9667C13.1083 21.877 13.6997 21.6273 14.2036 21.2345L14.2026 21.2335C14.5922 20.9646 14.8734 20.5406 14.8983 20.0602C14.8983 19.5566 14.4361 19.327 14.0088 19.2283Z"
                    fill="currentColor"
                  ></path>
                </svg>
                <span className="bg-danger dots"></span>
              </a>
              <div className="sub-drop dropdown-menu dropdown-menu-end p-0" aria-labelledby="notification-drop">
                <div className="card shadow-none m-0">
                  <div className="card-header d-flex justify-content-between bg-primary py-3">
                    <div className="header-title">
                      <h5 className="mb-0 text-white">All Notifications</h5>
                    </div>
                  </div>
                  <div className="card-body p-0">
                    <a href="#!" className="iq-sub-card">
                      <div className="d-flex align-items-center">
                        <img
                          className="avatar-40 rounded-pill bg-soft-primary p-1"
                          src={require('assets/images/avatars/01.png')}
                          alt=""
                        />
                        <div className="ms-3 w-100">
                          <h6 className="mb-0 ">Emma Watson Bni</h6>
                          <div className="d-flex justify-content-between align-items-center">
                            <p className="mb-0">95 MB</p>
                            <small className="float-end font-size-12">Just Now</small>
                          </div>
                        </div>
                      </div>
                    </a>
                    <a href="#!" className="iq-sub-card">
                      <div className="d-flex align-items-center">
                        <div className="">
                          <img
                            className="avatar-40 rounded-pill bg-soft-primary p-1"
                            src={require('assets/images/avatars/06.png')}
                            alt=""
                          />
                        </div>
                        <div className="ms-3 w-100">
                          <h6 className="mb-0 ">New customer is join</h6>
                          <div className="d-flex justify-content-between align-items-center">
                            <p className="mb-0">Cyst Bni</p>
                            <small className="float-end font-size-12">5 days ago</small>
                          </div>
                        </div>
                      </div>
                    </a>
                    <a href="#!" className="iq-sub-card">
                      <div className="d-flex align-items-center">
                        <img
                          className="avatar-40 rounded-pill bg-soft-primary p-1"
                          src={require('assets/images/avatars/07.png')}
                          alt=""
                        />
                        <div className="ms-3 w-100">
                          <h6 className="mb-0 ">Two customer is left</h6>
                          <div className="d-flex justify-content-between align-items-center">
                            <p className="mb-0">Cyst Bni</p>
                            <small className="float-end font-size-12">2 days ago</small>
                          </div>
                        </div>
                      </div>
                    </a>
                    <a href="#!" className="iq-sub-card">
                      <div className="d-flex align-items-center">
                        <img
                          className="avatar-40 rounded-pill bg-soft-primary p-1"
                          src={require('assets/images/avatars/08.png')}
                          alt=""
                        />
                        <div className="w-100 ms-3">
                          <h6 className="mb-0 ">New Mail from Fenny</h6>
                          <div className="d-flex justify-content-between align-items-center">
                            <p className="mb-0">Cyst Bni</p>
                            <small className="float-end font-size-12">3 days ago</small>
                          </div>
                        </div>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            </li>
            <li className="nav-item dropdown">
              <a href="#!" className="nav-link" id="mail-drop" data-bs-toggle="dropdown" aria-expanded="false">
                <svg width="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    opacity="0.4"
                    d="M22 15.94C22 18.73 19.76 20.99 16.97 21H16.96H7.05C4.27 21 2 18.75 2 15.96V15.95C2 15.95 2.006 11.524 2.014 9.298C2.015 8.88 2.495 8.646 2.822 8.906C5.198 10.791 9.447 14.228 9.5 14.273C10.21 14.842 11.11 15.163 12.03 15.163C12.95 15.163 13.85 14.842 14.56 14.262C14.613 14.227 18.767 10.893 21.179 8.977C21.507 8.716 21.989 8.95 21.99 9.367C22 11.576 22 15.94 22 15.94Z"
                    fill="currentColor"
                  ></path>
                  <path
                    d="M21.4759 5.67351C20.6099 4.04151 18.9059 2.99951 17.0299 2.99951H7.04988C5.17388 2.99951 3.46988 4.04151 2.60388 5.67351C2.40988 6.03851 2.50188 6.49351 2.82488 6.75151L10.2499 12.6905C10.7699 13.1105 11.3999 13.3195 12.0299 13.3195C12.0339 13.3195 12.0369 13.3195 12.0399 13.3195C12.0429 13.3195 12.0469 13.3195 12.0499 13.3195C12.6799 13.3195 13.3099 13.1105 13.8299 12.6905L21.2549 6.75151C21.5779 6.49351 21.6699 6.03851 21.4759 5.67351Z"
                    fill="currentColor"
                  ></path>
                </svg>
                <span className="bg-primary count-mail"></span>
              </a>
              <div className="sub-drop dropdown-menu dropdown-menu-end p-0" aria-labelledby="mail-drop">
                <div className="card shadow-none m-0">
                  <div className="card-header d-flex justify-content-between bg-primary py-3">
                    <div className="header-title">
                      <h5 className="mb-0 text-white">All Message</h5>
                    </div>
                  </div>
                  <div className="card-body p-0 ">
                    <a href="#!" className="iq-sub-card">
                      <div className="d-flex  align-items-center">
                        <div className="">
                          <img
                            className="avatar-40 rounded-pill bg-soft-primary p-1"
                            src={require('assets/images/avatars/10.png')}
                            alt=""
                          />
                        </div>
                        <div className="ms-3">
                          <h6 className="mb-0 ">Bni Emma Watson</h6>
                          <small className="float-start font-size-12">13 Jun</small>
                        </div>
                      </div>
                    </a>
                    <a href="#!" className="iq-sub-card">
                      <div className="d-flex align-items-center">
                        <div className="">
                          <img
                            className="avatar-40 rounded-pill bg-soft-primary p-1"
                            src={require('assets/images/avatars/01.png')}
                            alt=""
                          />
                        </div>
                        <div className="ms-3">
                          <h6 className="mb-0 ">Lorem Ipsum Watson</h6>
                          <small className="float-start font-size-12">20 Apr</small>
                        </div>
                      </div>
                    </a>
                    <a href="#!" className="iq-sub-card">
                      <div className="d-flex align-items-center">
                        <div className="">
                          <img
                            className="avatar-40 rounded-pill bg-soft-primary p-1"
                            src={require('assets/images/avatars/09.png')}
                            alt=""
                          />
                        </div>
                        <div className="ms-3">
                          <h6 className="mb-0 ">Why do we use it?</h6>
                          <small className="float-start font-size-12">30 Jun</small>
                        </div>
                      </div>
                    </a>
                    <a href="#!" className="iq-sub-card">
                      <div className="d-flex align-items-center">
                        <div className="">
                          <img
                            className="avatar-40 rounded-pill bg-soft-primary p-1"
                            src={require('assets/images/avatars/08.png')}
                            alt=""
                          />
                        </div>
                        <div className="ms-3">
                          <h6 className="mb-0 ">Variations Passages</h6>
                          <small className="float-start font-size-12">12 Sep</small>
                        </div>
                      </div>
                    </a>
                    <a href="#!" className="iq-sub-card">
                      <div className="d-flex align-items-center">
                        <div className="">
                          <img
                            className="avatar-40 rounded-pill bg-soft-primary p-1"
                            src={require('assets/images/avatars/07.png')}
                            alt=""
                          />
                        </div>
                        <div className="ms-3">
                          <h6 className="mb-0 ">Lorem Ipsum generators</h6>
                          <small className="float-start font-size-12">5 Dec</small>
                        </div>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link py-0 d-flex align-items-center"
                href="#!"
                id="navbarDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <img
                  src={require('assets/images/avatars/01.png')}
                  alt="User-Profile"
                  className="img-fluid avatar avatar-50 avatar-rounded"
                />
                <div className="caption ms-3 d-none d-md-block ">
                  <h6 className="mb-0 caption-title">Austin Robertson</h6>
                  <p className="mb-0 caption-sub-title">Marketing Administrator</p>
                </div>
              </a>
              <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="navbarDropdown">
                <li>
                  <a className="dropdown-item" href="{{path}}dashboard/app/user-profile.html">
                    Profile
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#!">
                    Privacy Setting
                  </a>
                </li>
                <li>
                  <hr className="dropdown-divider" />
                </li>
                <li>
                  <a className="dropdown-item" href="{{path}}dashboard/auth/sign-in.html">
                    Logout
                  </a>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
