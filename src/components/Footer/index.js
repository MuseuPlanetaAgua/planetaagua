import React from 'react';

import { Container, MainContainer } from './styles';
import LogoCultura from '../../assets/logos/P&BLogo/LogoCultura.png';

import { FooterList } from './mocks';

import FooterMobile from './FooterMobile';

export default function Footer() {
  return (
    <MainContainer id="realizacao">
      <FooterMobile />
      <Container>
        <section className="logoPrincipal">
          <img src={LogoCultura} />
        </section>

        {FooterList.map((section) => (
          <section key={section.id} className="footer-logos-section">
            {section.list.map((items) => (
              <div className="logo-section" key={items.title}>
                <h4>{items.title}</h4>

                <div className="logo">
                  {items.logo}
                  {items.logo2}
                  {items.logo3}
                  {items.logo4}
                </div>
              </div>
            ))}
          </section>
        ))}
      </Container>
    </MainContainer>
  );
}
