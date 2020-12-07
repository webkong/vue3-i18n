import { i18nSymbol } from "./i18n";
import { inject } from "vue";
export function useI18n() {
    return inject(i18nSymbol);
}
