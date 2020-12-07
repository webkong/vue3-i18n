import { ref, App } from "vue";
import { I18nInstance, Messages, I18nConfig } from "./types";

export const i18nSymbol = Symbol("i18n");

const recursiveRetrieve = (chain: string[], messages: Messages): string => {
  const key = chain[0];
  if (~key.indexOf("[")) {
    // get array item
    const [okey, str] = key.split("[");
    const num = parseInt(str.replace("]", ""));

    if (num > -1) {
      if (
        !messages[okey] &&
        messages[okey].length > 0 &&
        messages[okey][num] &&
        messages[okey][num] !== ""
      ) {
        throw new Error("Not Found");
      } else if (chain.length === 1) {
        return typeof messages[okey][num] === "string"
          ? messages[okey][num]
          : "";
      } else {
        return recursiveRetrieve(chain.slice(1), messages[okey][num]);
      }
    } else {
      throw new Error(`Not Found: ${key}`);
    }
  } else {
    if (!messages[chain[0]] && messages[chain[0]] !== "") {
      throw new Error("Not Found");
    } else if (chain.length === 1) {
      return typeof messages[chain[0]] === "string" ? messages[chain[0]] : "";
    } else {
      return recursiveRetrieve(chain.slice(1), messages[chain[0]]);
    }
  }
};

export const createI18n = (config: I18nConfig): I18nInstance => {
  const locale = ref(config.locale || "en");
  const messages = config.messages;
  const t = (key: string) => {
    const pack = messages[locale.value] || messages.en;
    if (typeof key !== "string") {
      console.warn("Warn(i18n):", "keypath must be a type of string");
      return "";
    }
    try {
      return recursiveRetrieve(key.split("."), pack);
    } catch (error) {
      console.warn(`Warn(i18n): the keypath '${key}' not found`);
      return "";
    }
  };
  const setLocale = (loc: string) => {
    if (!messages[loc]) {
      console.warn(
        `Warn(i18n): the '${loc}' language pack not found, fall back to English language pack`
      );
    }
    locale.value = loc;
  };
  const getLocale = () => locale.value;
  const i18n: I18nInstance = {
    messages,
    t,
    setLocale,
    getLocale,
    install(app: App) {
      const i18n = this;
      app.provide(i18nSymbol, i18n);
      app.config.globalProperties.$t = i18n.t;
      app.config.globalProperties.$i18n = i18n;
    },
  };
  return i18n;
};
