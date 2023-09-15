import React from 'react';
import logo from './logo.svg';
import './App.less';
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import Backend from 'i18next-http-backend';
import LanguageDetector from 'i18next-browser-languagedetector';
import { useTranslation } from 'react-i18next';
import data from './data/data.json'
import { Markup } from './components/markup/Markup';

i18n
  .use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: 'fr-CA',
    debug: true,

    interpolation: {
      escapeValue: false, // not needed for react as it escapes by default
    }
  })

const App = () => {
  const { t } = useTranslation()
  return (
    <div className="App">
      <h1>{data.presentation.name}</h1>
      <Markup.Component nodeType={Markup.SupportedNodeTypes.Span} nodeContent={t('test')} />
    </div>
  )
}

export default App;
