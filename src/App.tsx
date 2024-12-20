import { useTranslation } from 'react-i18next'
import FractalGenerator from './components/FractalGenerator'
import LanguageSelector from './components/LanguageSelector'
import './App.css'
import './i18n'

const App: React.FC = () => {
  const { t } = useTranslation();

  return (
    <div className="App">
      <LanguageSelector />
      <h1>{t('title')}</h1>
      <FractalGenerator />
    </div>
  )
}

export default App
