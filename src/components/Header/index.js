import React, { useState } from 'react';

import { ReactComponent as LogoPlaneta } from '../../assets/svg/logo-cultura.svg';

import { ReactComponent as MenuWave } from '../../assets/svg/onda.svg';
import AnchorLink from 'react-anchor-link-smooth-scroll';

import { Container } from './styles';
import { MenuItems } from './mocks';

import Buttons from '../i18n/i18n';

export default function Header() {
  const [menuColor, setMenuColor] = useState(1);
  const [mobileMenu, setMobileMenu] = useState(false);

  const changeNavBar = () => {
    if (window.scrollY < 2190) {
      setMenuColor(1);
    } else if (window.scrollY >= 2200 && window.scrollY < 3500) {
      setMenuColor(2);
    } else if (window.scrollY >= 3510 && window.scrollY < 4390) {
      setMenuColor(1);
    } else if (window.scrollY >= 4400 && window.scrollY < 7600) {
      setMenuColor(2);
    } else if (window.scrollY >= 7610) {
      setMenuColor(3);
    }
  };

  window.addEventListener('scroll', changeNavBar);

  return (
    <Container propMenuColor={menuColor} propMobile={mobileMenu}>
      <div className="waveAnimation">
        <MenuWave className="menuWave" />
      </div>

      <button
        className="mobile-menu"
        onClick={() => setMobileMenu(!mobileMenu)}
      >
        <span />
        <span />
        <span />
      </button>
      <nav>
        <LogoPlaneta className="logo-mobile" />
        <Buttons menuColor={menuColor} />
        <ul>
          {MenuItems.map((item) => (
            <li key={item.id}>
              <AnchorLink
                href={item.href}
                alt="menu-item"
                onClick={() => setMobileMenu(false)}
              >
                {item.title}
              </AnchorLink>
            </li>
          ))}
        </ul>
      </nav>
    </Container>
  );
}
