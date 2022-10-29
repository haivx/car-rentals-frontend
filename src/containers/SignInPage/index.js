import React from 'react';

export const SignInPage = () => {
  return (
    <div class="wrapper">
      <div class="main-auth-page">
        <a href="../../dashboard/index.html" class="auth-logo">
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
                      <h2 class="text-center mb-3">Sign In</h2>
                      <form>
                        <p class="text-center">Sign in to stay connected.</p>
                        <div class="row text-start mb-3">
                          <div class="col-12 mb-3">
                            <div class="form-floating">
                              <input type="email" class="form-control" id="input1" placeholder="Email" />
                              <label for="input1">Email</label>
                            </div>
                          </div>
                          <div class="col-12 mb-3">
                            <div class="form-floating">
                              <input type="password" class="form-control" id="input2" placeholder="Password" />
                              <label for="input2">Password</label>
                            </div>
                          </div>
                        </div>
                        <div class="d-flex justify-content-between  align-items-center flex-wrap">
                          <div class="form-group">
                            <div class="form-check">
                              <input class="form-check-input" type="checkbox" id="Remember" />
                              <label class="form-check-label" for="Remember">
                                Remember me?
                              </label>
                            </div>
                          </div>
                          <div class="form-group">
                            <a href="#!">Forgot Password?</a>
                          </div>
                        </div>
                        <div class="text-center">
                          <button type="button" class="btn btn-primary">
                            Sign In
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
                        <p>
                          Don't have an account?{' '}
                          <a class="" href="/sign-up">
                            Click here to sign up
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
      <div class="responsive-card auth-small">
        <div class="card">
          <div class="card-body">
            <div class="auth-form">
              <h2 class="text-center mb-3">Sign In</h2>
              <form>
                <p class="text-center">Sign in to stay connected.</p>
                <div class="row text-start mb-3">
                  <div class="col-12 mb-3">
                    <div class="form-floating">
                      <input type="email" class="form-control" id="input1" placeholder="Email" />
                      <label for="input1">Email</label>
                    </div>
                  </div>
                  <div class="col-12 mb-3">
                    <div class="form-floating">
                      <input type="password" class="form-control" id="input2" placeholder="Password" />
                      <label for="input2">Password</label>
                    </div>
                  </div>
                </div>
                <div class="d-flex justify-content-between  align-items-center flex-wrap">
                  <div class="form-group">
                    <div class="form-check">
                      <input class="form-check-input" type="checkbox" id="checkMe" />
                      <label class="form-check-label" for="checkMe">
                        Remember me?
                      </label>
                    </div>
                  </div>
                  <div class="form-group">
                    <a href="#!">Forgot Password?</a>
                  </div>
                </div>
                <div class="text-center">
                  <button type="button" class="btn btn-primary">
                    Sign In
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
                <p>
                  Don't have an account?{' '}
                  <a class="" href="/sign-up">
                    Click here to sign up
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
