import React from 'react';
import { useTranslation } from 'react-i18next';
import { Container } from './styles';

export default function I18n({ menuColor }) {
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
    <Container className="flags-container" propMenuColor={menuColor}>
      <button
        isSelected={selectedLanguage === 'pt-BR'}
        onClick={() => handleChangeLanguage('pt-BR')}
      >
        PORT
      </button>

      <button
        isSelected={selectedLanguage === 'en-US'}
        onClick={() => handleChangeLanguage('en-US')}
      >
        ENG
      </button>
    </Container>
  );
}
