import { useTranslation } from 'react-i18next';

export default function Home() {
  const { t } = useTranslation();
  return <p>{t('start')} Home page</p>;
}
