import { i18nSymbol } from "./i18n";
import { inject } from "vue";
import { I18nInstance } from "./types";

export function useI18n(): I18nInstance {
  return <I18nInstance>inject(i18nSymbol);
}
