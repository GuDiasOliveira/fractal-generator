import { useTranslation } from 'react-i18next'
import FractalGenerator from './components/FractalGenerator'
import LanguageSelector from './components/LanguageSelector'
import * as S from './App.styles'
import { GlobalStyles } from './styles/GlobalStyles'
import './i18n'

const App: React.FC = () => {
  const { t } = useTranslation();

  return (
    <>
      <GlobalStyles />
      <S.Root>
        <S.AppContainer>
          <LanguageSelector />
          <S.Title>{t('title')}</S.Title>
          <FractalGenerator />
        </S.AppContainer>
      </S.Root>
    </>
  )
}

export default App
