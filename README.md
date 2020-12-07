# vue3-i18n

![Vue 3.x](https://img.shields.io/badge/vue-3.x-green.svg "Vue 3 Compatible")

I18n for vue3.

**Note:**

Issue/PR is welcomed, I'll response as soon as possible.

If you like this pack, can give a star.

## Usage

### install
`npm install vue3-i18n --save`

### Quickstart
```javascript
// i18n.js 
import { createI18n } from "vue3-i18n";

const messages = {
  en: {
    menu: ["Home"],
    test: "test",
  },
  zh: {
    menu: ["首页"],
    test: "测试",
  },
};

const i18n = createI18n({
  locale: "en",
  messages: messages,
});

export default i18n;
```
```javascript

// main.js
import { createApp } from "vue";
import i18n from "./i18n";

const app = createApp(App);

app
  .use(i18n)
  .mount("#app");
```

### Usage

```html
<p>{{ $t("test") }}</p>
<!-- array -->
<p>{{ $t("test[1]") }}</p>
<!-- object -->
<p>{{ $t("test.a") }}</p>
```

```javascript
<script>
import { useI18n } from "vue3-i18n";
export default {
  setup() {
    const i18n = useI18n();
    const setLocale = (lang) => {
      i18n.setLocale(lang);
    };

    return {
      setLocale,
    };
  },
};
</script>
```

#### TODO
- [ ] directive
- [ ] Named formatting

## License
MIT