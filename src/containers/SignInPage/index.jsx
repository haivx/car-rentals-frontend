import React from 'react';
import * as yup from 'yup';
import { Input, HookForm } from 'common/components/Form';
import { userServices } from 'services/users';

export const SignInPage = () => {
  const onSubmit = async (data) => {
    const response = await userServices.post(data);
    console.log({
      response,
    });
  };
  const schema = yup.object().shape({
    email: yup.string().required(),
    password: yup.string().required(),
  });
  return (
    <div className="wrapper">
      <div className="main-auth-page">
        <a href="../../dashboard/index.html" className="auth-logo">
          <img src={require('assets/images/logo.png')} className="img-fluid" alt="" />
          pư
        </a>
        <div className="clip-board">
          <div className="container">
            <div className="row auth-details-card">
              <div className="col-lg-12">
                <div className="card iq-auth-card mb-0 row">
                  <img
                    src={require('assets/images/auth/01.webp')}
                    alt="background"
                    className="img-fluid w-75 position-absolute"
                    style={{ top: '8%' }}
                  />
                  <div className="card-body col-5 offset-7">
                    <div className="auth-form">
                      <h2 className="text-center mb-3">Sign In</h2>
                      <HookForm
                        onSubmit={onSubmit}
                        schema={schema}
                        config={{
                          defaultValues: {
                            email: '',
                            password: '',
                          },
                        }}
                      >
                        <p className="text-center">Sign in to stay connected.</p>
                        <div className="row text-start mb-3">
                          <div className="col-12 mb-3">
                            <div className="form-floating">
                              <Input
                                name="email"
                                placeholder="Email"
                                className="form-control"
                                helperTextPosition="text-center"
                              />
                              <label htmlFor="input1">Email</label>
                            </div>
                          </div>
                          <div className="col-12 mb-3">
                            <div className="form-floating">
                              <Input name="password" className="form-control" helperTextPosition="text-center" />
                              <label htmlFor="input2">Password</label>
                            </div>
                          </div>
                        </div>
                        <div className="d-flex justify-content-between  align-items-center flex-wrap">
                          <div className="form-group">
                            <div className="form-check">
                              <input className="form-check-input" type="checkbox" id="Remember" />
                              <label className="form-check-label" htmlFor="Remember">
                                Remember me?
                              </label>
                            </div>
                          </div>
                          <div className="form-group">
                            <a href="#!">Forgot Password?</a>
                          </div>
                        </div>
                        <div className="text-center">
                          <button type="submit" className="btn btn-primary">
                            Sign In
                          </button>
                        </div>
                        <div className="text-center mt-3">
                          <p>or sign in with others account?</p>
                        </div>
                        <div className="d-flex justify-content-center ">
                          <ul className="list-group list-group-horizontal list-group-flush">
                            <li className="list-group-item bg-transparent border-0">
                              <a href="#!">
                                <img
                                  src={require('assets/images/brands/15.png')}
                                  className="img-fluid avatar avatar-30 avatar-rounded"
                                  alt="img60"
                                />
                              </a>
                            </li>
                            <li className="list-group-item bg-transparent border-0">
                              <a href="#!">
                                <img
                                  src={require('assets/images/brands/08.png')}
                                  className="img-fluid avatar avatar-30 avatar-rounded"
                                  alt="gm"
                                />
                              </a>
                            </li>
                            <li className="list-group-item bg-transparent border-0">
                              <a href="#!">
                                <img
                                  src={require('assets/images/brands/10.png')}
                                  className="img-fluid avatar avatar-30 avatar-rounded"
                                  alt="im"
                                />
                              </a>
                            </li>
                            <li className="list-group-item bg-transparent border-0">
                              <a href="#!">
                                <img
                                  src={require('assets/images/brands/13.png')}
                                  className="img-fluid avatar avatar-30 avatar-rounded"
                                  alt="li"
                                />
                              </a>
                            </li>
                          </ul>
                        </div>
                      </HookForm>
                      <div className="new-account mt-3 text-center">
                        <p>
                          Don't have an account?{' '}
                          <a className="" href="/sign-up">
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
      <div className="responsive-card auth-small">
        <div className="card">
          <div className="card-body">
            <div className="auth-form">
              <h2 className="text-center mb-3">Sign In</h2>
              <form>
                <p className="text-center">Sign in to stay connected.</p>
                <div className="row text-start mb-3">
                  <div className="col-12 mb-3">
                    <div className="form-floating">
                      <input type="email" className="form-control" id="input1" placeholder="Email" />
                      <label htmlFor="input1">Email</label>
                    </div>
                  </div>
                  <div className="col-12 mb-3">
                    <div className="form-floating">
                      <input type="password" className="form-control" id="input2" placeholder="Password" />
                      <label htmlFor="input2">Password</label>
                    </div>
                  </div>
                </div>
                <div className="d-flex justify-content-between  align-items-center flex-wrap">
                  <div className="form-group">
                    <div className="form-check">
                      <input className="form-check-input" type="checkbox" id="checkMe" />
                      <label className="form-check-label" htmlFor="checkMe">
                        Remember me?
                      </label>
                    </div>
                  </div>
                  <div className="form-group">
                    <a href="#!">Forgot Password?</a>
                  </div>
                </div>
                <div className="text-center">
                  <button type="button" className="btn btn-primary">
                    Sign In
                  </button>
                </div>
                <div className="text-center mt-3">
                  <p>or sign in with others account?</p>
                </div>
                <div className="d-flex justify-content-center ">
                  <ul className="list-group list-group-horizontal list-group-flush">
                    <li className="list-group-item bg-transparent border-0">
                      <a href="#!">
                        <img
                          src={require('assets/images/brands/15.png')}
                          className="img-fluid avatar avatar-30 avatar-rounded"
                          alt="img60"
                        />
                      </a>
                    </li>
                    <li className="list-group-item bg-transparent border-0">
                      <a href="#!">
                        <img
                          src={require('assets/images/brands/08.png')}
                          className="img-fluid avatar avatar-30 avatar-rounded"
                          alt="gm"
                        />
                      </a>
                    </li>
                    <li className="list-group-item bg-transparent border-0">
                      <a href="#!">
                        <img
                          src={require('assets/images/brands/10.png')}
                          className="img-fluid avatar avatar-30 avatar-rounded"
                          alt="im"
                        />
                      </a>
                    </li>
                    <li className="list-group-item bg-transparent border-0">
                      <a href="#!">
                        <img
                          src={require('assets/images/brands/13.png')}
                          className="img-fluid avatar avatar-30 avatar-rounded"
                          alt="li"
                        />
                      </a>
                    </li>
                  </ul>
                </div>
              </form>
              <div className="new-account mt-3 text-center">
                <p>
                  Don't have an account?{' '}
                  <a className="" href="/sign-up">
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
