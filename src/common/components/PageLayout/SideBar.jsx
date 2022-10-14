import React, { useState } from 'react';
import {
  IconAuth2,
  IconSetting,
  IconUser,
  IconAuth,
  DotIcon,
  CaretDown,
  LogoMini,
  SideBarIconClose,
} from 'assets/customize/icons';
import Logo from 'assets/images/logo.png';
import { routes } from 'constants';

export const SideBar = () => {
  const [isToggle, setIsToggle] = useState(false);
  const [sideContent, setSideContent] = useState('');
  const onToggle = () => {
    setIsToggle(!isToggle);
  };

  const menuConfig = [
    {
      id: 1,
      name: 'Settings',
      icon: IconSetting,
    },
    {
      id: 2,
      name: 'Auth',
      icon: IconAuth,
      subMenu: [
        {
          id: 1,
          name: 'Login',
          link: '#!',
        },
        {
          id: 2,
          name: 'Register',
          link: '#!',
        },
        {
          id: 3,
          name: 'Confirm Mail',
          link: '#!',
        },
      ],
    },
    {
      id: 3,
      name: 'Users',
      icon: IconUser,
      subMenu: [
        {
          id: 1,
          name: 'Profile',
          link: '#!',
        },
        {
          id: 2,
          name: 'ListUser',
          link: routes.USERS,
        },
      ],
    },
  ];

  const onClickMenu = (id, hasChild) => {
    if (hasChild) {
      setIsToggle(!isToggle);
    }
    setSideContent(id);
  };

  const activeMenu = menuConfig.find((item) => item.id === sideContent) || [];

  return (
    <>
      <aside className="sidebar sidebar-default sidebar-two navs-pill sidebar-mini">
        <div className="sidebar-header d-flex align-items-center justify-content-start">
          <a href="/" className="navbar-brand">
            <LogoMini />
          </a>
        </div>
        <div className="sidebar-body pt-0 data-scrollbar">
          <div className="sidebar-list">
            <ul className="navbar-nav iq-main-menu nav nav-tabs" id="sidebar-menu" role="tablist">
              {menuConfig.map((menu) => {
                return (
                  <li className="nav-item">
                    <a
                      onClick={() => onClickMenu(menu.id, Boolean(menu.subMenu))}
                      className={`nav-link ${sideContent === menu.id ? 'active' : ''}`}
                      aria-current="page"
                      href="#!"
                      data-sidebar-toggle="tooltip"
                      data-bs-placement="right"
                      title="Dashboard"
                    >
                      <i className="icon">
                        <menu.icon />
                      </i>
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </aside>{' '}
      <div
        onClick={onToggle}
        className={`tab-content sidebar sidebar-default navs-rounded-all ${isToggle ? 'active' : 'in-active'}`}
        id="nav-tabContent"
      >
        <div className="sidebar-header d-flex align-items-center justify-content-start">
          <a href="{{path}}dashboard/index.html" className="navbar-brand">
            <img src={Logo} class="img-fluid" alt="logo-big" />
          </a>
          <div className="sidebar-toggle sidebar-icon-close">
            <i className="icon" onClick={onToggle}>
              <SideBarIconClose />
            </i>
          </div>
        </div>
        <div
          className={`"tab-pane fade show ${activeMenu?.subMenu ? 'active' : ''}"`}
          id="sidebar-auths"
          role="tabpanel"
          aria-labelledby="auth-pages"
        >
          <div className="sidebar-body">
            <ul className="navbar-nav" id="sidebar-menu-auth">
              <li className="nav-item">
                <a
                  className="nav-link"
                  data-bs-toggle="collapse"
                  href="#sidebar-auth"
                  role="button"
                  aria-expanded="true"
                  aria-controls="sidebar-menu-auth"
                >
                  <i className="icon">
                    <IconAuth2 />
                  </i>
                  <span className="item-name">{activeMenu.name}</span>
                  <i className="right-icon">
                    <CaretDown />
                  </i>
                </a>
                <ul className="sub-nav collapse show" id="sidebar-auth" data-bs-parent="#sidebar-menu-auth">
                  {activeMenu?.subMenu?.map((submenu) => (
                    <li className="nav-item" key={submenu.link}>
                      <a className="nav-link" href={submenu.link}>
                        <i className="icon">
                          <DotIcon />
                        </i>
                        <span className="item-name">{submenu.name}</span>
                      </a>
                    </li>
                  ))}
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};
