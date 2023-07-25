import { Dictionary } from './types/Dictionary';

const dictionaries: { [key: string]: () => Promise<Dictionary> } = {
  en: () => import('../dictionaires/en.json').then((r) => r.default),
  no: () => import('../dictionaires/no.json').then((r) => r.default),
};

export const getDictionary = (lang: string): Promise<Dictionary> => {
  return dictionaries[lang]();
};
