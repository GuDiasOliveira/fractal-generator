import { useTranslation } from 'react-i18next';
import * as S from './LanguageSelector.styles';

const LanguageSelector: React.FC = () => {
  const { t, i18n } = useTranslation();

  const languages = [
    { code: 'pt-BR', name: 'Português' },
    { code: 'en', name: 'English' },
    { code: 'es', name: 'Español' },
    { code: 'it', name: 'Italiano' },
    { code: 'fr', name: 'Français' },
    { code: 'de', name: 'Deutsch' },
    { code: 'zh', name: '中文' },
    { code: 'ko', name: '한국어' }
  ];

  const handleLanguageChange = (languageCode: string) => {
    i18n.changeLanguage(languageCode);
  };

  return (
    <S.Container>
      <S.Label>{t('language')}:</S.Label>
      <S.Select
        value={i18n.language}
        onChange={(e) => handleLanguageChange(e.target.value)}
      >
        {languages.map((lang) => (
          <option key={lang.code} value={lang.code}>
            {lang.name}
          </option>
        ))}
      </S.Select>
    </S.Container>
  );
};

export default LanguageSelector;
