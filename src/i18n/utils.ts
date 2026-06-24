import es from './es.json';
import en from './en.json';

const translations: Record<string, Record<string, string>> = { es, en };

export function t(lang: string, key: string): string {
  return translations[lang]?.[key] ?? key;
}

export const languages = ['es', 'en'] as const;
export const defaultLanguage = 'en';