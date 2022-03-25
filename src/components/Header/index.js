import React, { useState, useEffect, useRef } from 'react';

import { ReactComponent as LogoPlaneta } from '../../assets/svg/logo-cultura.svg';

import { ReactComponent as MenuWave } from '../../assets/svg/onda.svg';
import AnchorLink from 'react-anchor-link-smooth-scroll';

import { Container } from './styles';
import { MenuItems } from './mocks';

import Buttons from '../i18n/i18n';

export default function Header({ sectionPositions }) {
  const headerRef = useRef(null);
  const headerHeight = headerRef.current?.offsetHeight;
  const [scrollYP, setScrollYP] = useState({
    case1: sectionPositions.thrdSection + headerHeight,
    case2: sectionPositions.fithSectionRef + headerHeight + 200,
    case3: sectionPositions.sixthSection + headerHeight,
  });

  useEffect(() => {
    setScrollYP({
      case1: sectionPositions.thrdSection + headerHeight,
      case2: sectionPositions.fithSectionRef + headerHeight + 200,
      case3: sectionPositions.sixthSection + headerHeight,
    });

    console.log(scrollYP);
  }, [sectionPositions]);

  const [menuColor, setMenuColor] = useState(1);
  const [mobileMenu, setMobileMenu] = useState(false);

  const changeNavBar = () => {
    if (window.scrollY < scrollYP.case1) {
      setMenuColor(1);
    } else if (
      window.scrollY >= scrollYP.case1 &&
      window.scrollY < scrollYP.case2
    ) {
      setMenuColor(2);
    } else if (
      window.scrollY >= scrollYP.case2 &&
      window.scrollY < scrollYP.case3
    ) {
      setMenuColor(1);
    } else if (
      window.scrollY >= scrollYP.case3 &&
      window.scrollY < scrollYP.case1 + scrollYP.case3
    ) {
      setMenuColor(2);
    } else if (window.scrollY >= scrollYP.case1 + scrollYP.case3) {
      setMenuColor(3);
    }
  };

  window.addEventListener('scroll', changeNavBar);

  return (
    <Container
      propMenuColor={menuColor}
      propMobile={mobileMenu}
      ref={headerRef}
    >
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
