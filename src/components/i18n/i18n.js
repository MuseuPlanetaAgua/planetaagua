import React from 'react';
import { useTranslation } from 'react-i18next';
import { Container } from './styles';
import BrasilFlag from '../../assets/img/brasil.jpf';
import EuaFlag from '../../assets/img/eua.jpf';

export default function I18n() {
  const { i18n } = useTranslation();

  function handleChangeLanguage(language) {
    i18n.changeLanguage(language);
  }

  const changeByUrl = () => {
    if (document.location.pathname == '/us') {
      handleChangeLanguage('en-US');
    } else {
      handleChangeLanguage('pt-BR');
    }
  };

  window.addEventListener('load', changeByUrl);

  const selectedLanguage = i18n.language;
  return (
    <Container className="flags-container">
      <button
        isSelected={selectedLanguage === 'pt-BR'}
        onClick={() => handleChangeLanguage('pt-BR')}
      >
        <img src={BrasilFlag} alt="brasil flag" />
      </button>

      <button
        isSelected={selectedLanguage === 'en-US'}
        onClick={() => handleChangeLanguage('en-US')}
      >
        <img src={EuaFlag} alt="brasil flag" />
      </button>
    </Container>
  );
}
