import { createI18n, Messages } from "vue3-i18n";

const messages: Messages = {
  en: {
    menu: ["Home"],
    test: "test",
    object: { a: "1233" },
    parse: "welcome to {name}",
    parses: { a: "welcome to {name}" },
  },
  zh: {
    menu: ["首页"],
    test: "测试",
    object: { a: "1233" },
    parse: "welcome to {name}",
    parses: { a: "welcome to {name}" },
  },
};

console.log(JSON.stringify(messages));

const i18n = createI18n({
  locale: "en",
  messages: messages,
});

export default i18n;
