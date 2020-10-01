import React, { useState, useContext } from 'react';
import { useSpring, animated, config } from 'react-spring';
import { CTX } from 'context/Store';
// import icon from 'imgs/brutalist.ico';

import './NavBar.scss';

const NavBar = () => {
  const [sidebarOpen, setSidebaropen] = useState(false);

  const [appState, updateState] = useContext(CTX);

  const handleMenuOpenClick = () => setSidebaropen(!sidebarOpen);

  const sidebarAnimationProps = useSpring({
    // position: 'absolute',
    top: '10rem',
    opacity: sidebarOpen ? 1 : 0,
    left: sidebarOpen ? 0 : -250,
    // config: config.wobbly,
  });

  const changePage = (page) => {
    if (appState.page === page) {
      updateState({
        type: 'CHANGE_PAGE',
        payload: { page: appState.page - 1 },
      });
      setTimeout(() => {
        updateState({ type: 'CHANGE_PAGE', payload: { page } });
      }, 100);
    } else {
      updateState({
        type: 'CHANGE_PAGE',
        payload: { page },
      });
    }
    setSidebaropen(false);
  };

  /*
   updateState({
        type: 'CHANGE_PAGE',
        payload: { page: appState.page - 1 },
      });
      setTimeout(() => {
        updateState({ type: 'CHANGE_PAGE', payload: { page } });
      }, 100);
      */

  const mobileChangePage = (page) => {
    setSidebaropen(false);
    setTimeout(() => {
      changePage(page);
    }, 200);
  };

  return (
    <div>
      <div className='navbar-fixed'>
        <div className='navbar'>
          <div className='nav-wrapper'>
            <div className='name-logo' onClick={() => changePage(0)}>
              {/* <img src={icon} style={{ width: '2.6rem', height: '2rem' }}></img> */}
              Thomas Foydel
            </div>
            <div data-target='mobile-demo' className='sidenav-trigger'>
              <i
                className='fa fa-bars fa-2x navbar-opensidebar hide-on-large'
                onClick={handleMenuOpenClick}
              />
            </div>
            <ul className='navbar-large hide-on-med-and-down'>
              <li onClick={() => changePage(1)}>Portfolio</li>

              <li onClick={() => changePage(2)}>About</li>

              <li onClick={() => changePage(3)}>Contact</li>

              {/* <li onClick={() => changePage(4)}>Contact</li> */}
            </ul>
          </div>
        </div>
      </div>

      <animated.div
        style={sidebarAnimationProps}
        className='sidebarmenu hide-on-large'
      >
        <div onClick={() => mobileChangePage(1)}>Portfolio</div>
        <hr className='sidebarmenu-linebreak' />
        <div onClick={() => mobileChangePage(2)}>About</div>
        <hr className='sidebarmenu-linebreak' />
        <div onClick={() => mobileChangePage(3)}>Contact</div>
        <hr className='sidebarmenu-linebreak' />
        {/* <div onClick={() => mobileChangePage(4)}>Contact</div> */}
        {/* <hr className='sidebarmenu-linebreak' /> */}
      </animated.div>
    </div>
  );
};

export default NavBar;
