import i18next from 'i18next';
import { initReactI18next } from 'react-i18next';

import LanguageDetector from 'i18next-browser-languagedetector';

import en from './en/translation.json';
import zh_CN from './zh_CN/translation.json';
import { ConvertedToFunctionsType } from './types';

export type TranslationResource = typeof en;
export type LanguageKey = keyof TranslationResource;

export const translations: ConvertedToFunctionsType<TranslationResource> = {} as any;

const translationsJson = {
  en: {
    translation: en,
  },
  zh_CN: {
    translation: zh_CN,
  },
};

/*
 * Converts the static JSON file into object where keys are identical
 * but values are functions that produces the same key as string.
 * This is helpful when using the JSON file keys and still have the intellisense support
 * along with type-safety
 */
function convertToFunctions(obj: any, dict: Record<string, unknown> | any, current?: string) {
  Object.keys(obj).forEach((key) => {
    const currentLookupKey = current ? `${current}.${key}` : key;
    if (typeof obj[key] === 'object') {
      dict[key] = {};
      convertToFunctions(obj[key], dict[key], currentLookupKey);
    } else {
      dict[key] = () => currentLookupKey;
    }
  });
}

export const i18n = i18next
  .use(initReactI18next)
  .use(LanguageDetector)
  .init(
    {
      resources: translationsJson,
      fallbackLng: 'en',
      debug: process.env.NODE_ENV !== 'production' && process.env.NODE_ENV !== 'test',
      interpolation: {
        escapeValue: false, // not needed for react as it escapes by default
      },
    },
    () => convertToFunctions(en, translations),
  );
