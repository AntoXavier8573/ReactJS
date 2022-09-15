import { useState, useEffect, useRef } from 'react';

import Dropdown from './Dropdown';
import './Navbar.css'
import '../App.css'

import { Link } from 'react-router-dom';

const MenuItems = ({ items, depthLevel }) => {
  const [dropdown, setDropdown] = useState(false);

  let ref = useRef();

  useEffect(() => {
    const handler = (event) => {
      if (
        dropdown &&
        ref.current &&
        !ref.current.contains(event.target)
      ) {
        setDropdown(false);
      }
    };
    document.addEventListener('mousedown', handler);
    document.addEventListener('touchstart', handler);
    return () => {
      // Cleanup the event listener
      document.removeEventListener('mousedown', handler);
      document.removeEventListener('touchstart', handler);
    };
  }, [dropdown]);

  const onMouseEnter = () => {
    window.innerWidth >= 501 && setDropdown(true);
  };

  const onMouseLeave = () => {
    window.innerWidth >= 501 && setDropdown(false);
  };

  const closeDropdown = () => {
    dropdown && setDropdown(false);
  };

  return (
  
      <li
        className={`menu-items ${items.cName}`}
        ref={ref}
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
        onClick={closeDropdown}
      >
        {items.url && items.submenu ? (
          <>
            <button
              type="button"
              aria-haspopup="menu"
              aria-expanded={dropdown ? 'true' : 'false'}
              onClick={() => setDropdown((prev) => !prev)}
              className={items.cName}
            >
              {window.innerWidth <= 501 && depthLevel === 0 ? (
                items.title
              ) : (
                <Link to={items.url}>{items.title}</Link>
              )}

              {depthLevel > 0 &&
                window.innerWidth <= 501 ? null : depthLevel > 0 &&
                  window.innerWidth >= 501 ? (
                <span>&raquo;</span>
              ) : (
                <span className="arrow" />
              )}
            </button>
            <Dropdown
              depthLevel={depthLevel}
              submenus={items.submenu}
              dropdown={dropdown}
              className={items.cName}

            />
          </>
        ) : !items.url && items.submenu ? (
          <>
            <button
              type="button"
              aria-haspopup="menu"
              aria-expanded={dropdown ? 'true' : 'false'}
              onClick={() => setDropdown((prev) => !prev)}
              className={items.cName}
            >
              {items.title}{' '}
              {depthLevel > 0 ? (
                <span>&raquo;</span>
              ) : (
                <span className="arrow" />
              )}
            </button>
            <Dropdown
              depthLevel={depthLevel}
              submenus={items.submenu}
              dropdown={dropdown}
              className={items.cName}

            />
          </>
        ) : (
          <Link to={items.url}>{items.title}</Link>
        )}
      </li>
    

  );
};

export default MenuItems;
