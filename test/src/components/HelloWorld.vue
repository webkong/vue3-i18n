<template>
  <div class="hello">
    <p>{{ $t("test") }}</p>
    <!-- array -->
    <p>{{ $t("menu[0]") }}</p>
    <!-- object -->
    <p>{{ $t("object.a") }}</p>
    <!-- parse -->
    <p>{{ $t("parse", { name: "wangsw" }) }}</p>
    <p>{{ $t("parses.a", { name: "wangsw" }) }}</p>
  </div>
</template>

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
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
