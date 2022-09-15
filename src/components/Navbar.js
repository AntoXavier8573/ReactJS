import { menuItems } from '../menuItems';
import { useState, useEffect, useRef } from 'react';

import MenuItems from './MenuItems';
const Navbar = () => {
  const [clicked, setClicked] = useState(false);
  return (
    <nav className='NavbarItems'>
      <div className='menu-icon' onClick={() => setClicked((clicked) => !clicked)}>
        <i className={clicked ? 'fa fa-times' : 'fa fa-bars'}></i>
      </div>
      <ul className={clicked ? 'nav-menu active' : 'nav-menu'}>
        {menuItems.map((menu, index) => {
          const depthLevel = 0;
          return (
            <MenuItems
              items={menu}
              key={index}
              depthLevel={depthLevel}
            //className={cName}
            />
          );
        })}
      </ul>
    </nav>
  );
};

export default Navbar;
