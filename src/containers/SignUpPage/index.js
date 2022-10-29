import React from 'react';

export const SignUpPage = () => {
  return (
    <div class="wrapper">
      <div class="main-auth-page">
        <a href="#!" class="auth-logo">
          <img src={require('assets/images/logo.png')} class="img-fluid" alt="" />
        </a>
        <div class="clip-board">
          <div class="container">
            <div class="row auth-details-card">
              <div class="col-lg-12">
                <div class="card iq-auth-card mb-0 row">
                  <img
                    src={require('assets/images/auth/01.webp')}
                    alt="background"
                    class="img-fluid w-75 position-absolute"
                    style={{ top: '8%' }}
                  />
                  <div class="card-body col-5 offset-7">
                    <div class="auth-form">
                      <h2 class="text-center mb-3">Sign Up</h2>
                      <form>
                        <p class="text-center">Create Your Vrooom Account.</p>
                        <div class="row text-start mb-3">
                          <div class="col-md-6">
                            <div class="form-floating">
                              <input type="text" class="form-control" id="input1" placeholder="First Name" />
                              <label for="input1">First Name</label>
                            </div>
                          </div>
                          <div class="col-md-6">
                            <div class="form-floating">
                              <input type="text" class="form-control" id="input2" placeholder="Last Name" />
                              <label for="input2">Last Name</label>
                            </div>
                          </div>
                        </div>
                        <div class="row text-start mb-3">
                          <div class="col-md-6">
                            <div class="form-floating">
                              <input type="email" class="form-control" id="input3" placeholder="Email" />
                              <label for="input3">Email</label>
                            </div>
                          </div>
                          <div class="col-md-6">
                            <div class="form-floating">
                              <input type="text" class="form-control" id="input4" placeholder="Phone No" />
                              <label for="input4">Phone No</label>
                            </div>
                          </div>
                        </div>
                        <div class="row text-start mb-3">
                          <div class="col-md-6">
                            <div class="form-floating">
                              <input type="password" class="form-control" id="input5" placeholder="Password" />
                              <label for="input5">Password</label>
                            </div>
                          </div>
                          <div class="col-md-6">
                            <div class="form-floating">
                              <input type="password" class="form-control" id="input6" placeholder="Confirm Password" />
                              <label for="input6">Confirm Password</label>
                            </div>
                          </div>
                        </div>
                        <div class="form-check d-flex justify-content-center mb-4">
                          <input type="checkbox" class="form-check-input" id="termsCondition" />
                          <label class="ms-2 form-check-label" for="termsCondition">
                            I agree with the terms of use
                          </label>
                        </div>
                        <div class="text-center">
                          <button type="button" class="btn btn-primary">
                            Sign Up
                          </button>
                        </div>
                        <div class="text-center mt-3">
                          <p>or sign in with others account?</p>
                        </div>
                        <div class="d-flex justify-content-center ">
                          <ul class="list-group list-group-horizontal list-group-flush">
                            <li class="list-group-item bg-transparent border-0">
                              <a href="#!">
                                <img
                                  src={require('assets/images/brands/15.png')}
                                  class="img-fluid avatar avatar-30 avatar-rounded"
                                  alt="img60"
                                />
                              </a>
                            </li>
                            <li class="list-group-item bg-transparent border-0">
                              <a href="#!">
                                <img
                                  src={require('assets/images/brands/08.png')}
                                  class="img-fluid avatar avatar-30 avatar-rounded"
                                  alt="gm"
                                />
                              </a>
                            </li>
                            <li class="list-group-item bg-transparent border-0">
                              <a href="#!">
                                <img
                                  src={require('assets/images/brands/10.png')}
                                  class="img-fluid avatar avatar-30 avatar-rounded"
                                  alt="im"
                                />
                              </a>
                            </li>
                            <li class="list-group-item bg-transparent border-0">
                              <a href="#!">
                                <img
                                  src={require('assets/images/brands/13.png')}
                                  class="img-fluid avatar avatar-30 avatar-rounded"
                                  alt="li"
                                />
                              </a>
                            </li>
                          </ul>
                        </div>
                      </form>
                      <div class="new-account mt-3 text-center">
                        <p class="mb-0">
                          Already have an Account{' '}
                          <a class="text-primary" href="#!">
                            Sign in
                          </a>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="responsive-card">
        <div class="card">
          <div class="card-body">
            <div class="auth-form">
              <h2 class="text-center mb-3">Sign Up</h2>
              <form class="ath-text-input">
                <p class="text-center">Create Your Vrooom Account.</p>
                <div class="row text-start mb-3">
                  <div class="col-md-6">
                    <div class="form-floating">
                      <input type="text" class="form-control" id="input1" placeholder="First Name" />
                      <label for="input1">First Name</label>
                    </div>
                  </div>
                  <div class="col-md-6">
                    <div class="form-floating">
                      <input type="text" class="form-control" id="input2" placeholder="Last Name" />
                      <label for="input2">Last Name</label>
                    </div>
                  </div>
                </div>
                <div class="row text-start mb-3">
                  <div class="col-md-6">
                    <div class="form-floating">
                      <input type="email" class="form-control" id="input3" placeholder="Email" />
                      <label for="input3">Email</label>
                    </div>
                  </div>
                  <div class="col-md-6">
                    <div class="form-floating">
                      <input type="text" class="form-control" id="input4" placeholder="Phone No" />
                      <label for="input4">Phone No</label>
                    </div>
                  </div>
                </div>
                <div class="row text-start mb-3">
                  <div class="col-md-6">
                    <div class="form-floating">
                      <input type="password" class="form-control" id="input5" placeholder="Password" />
                      <label for="input5">Password</label>
                    </div>
                  </div>
                  <div class="col-md-6">
                    <div class="form-floating">
                      <input type="password" class="form-control" id="input6" placeholder="Confirm Password" />
                      <label for="input6">Confirm Password</label>
                    </div>
                  </div>
                </div>
                <div class="form-check d-flex justify-content-center mb-4">
                  <input class="form-check-input" type="checkbox" value="" id="termsCondition" />
                  <label class="ms-2 form-check-label" for="termsCondition">
                    I agree with the terms of use
                  </label>
                </div>
                <div class="text-center">
                  <button type="button" class="btn btn-primary">
                    Sign Up
                  </button>
                </div>
                <div class="text-center mt-3">
                  <p>or sign in with others account?</p>
                </div>
                <div class="d-flex justify-content-center ">
                  <ul class="list-group list-group-horizontal list-group-flush">
                    <li class="list-group-item bg-transparent border-0">
                      <a href="#!">
                        <img
                          src="../../assets/images/brands/15.png"
                          class="img-fluid avatar avatar-30 avatar-rounded"
                          alt="img60"
                        />
                      </a>
                    </li>
                    <li class="list-group-item bg-transparent border-0">
                      <a href="#!">
                        <img
                          src="../../assets/images/brands/08.png"
                          class="img-fluid avatar avatar-30 avatar-rounded"
                          alt="gm"
                        />
                      </a>
                    </li>
                    <li class="list-group-item bg-transparent border-0">
                      <a href="#!">
                        <img
                          src="../../assets/images/brands/10.png"
                          class="img-fluid avatar avatar-30 avatar-rounded"
                          alt="im"
                        />
                      </a>
                    </li>
                    <li class="list-group-item bg-transparent border-0">
                      <a href="#!">
                        <img
                          src="../../assets/images/brands/13.png"
                          class="img-fluid avatar avatar-30 avatar-rounded"
                          alt="li"
                        />
                      </a>
                    </li>
                  </ul>
                </div>
              </form>
              <div class="new-account mt-3 text-center">
                <p class="mb-0">
                  Already have an Account{' '}
                  <a class="text-primary" href="../../dashboard/auth/sign-in.html">
                    Sign in
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
