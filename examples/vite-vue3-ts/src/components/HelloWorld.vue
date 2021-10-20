<script setup lang="ts">
import { ref } from "vue";
import { useI18n } from "vue3-i18n";
defineProps<{ msg: string }>();

const i18n = useI18n();
const setLocale = (lang: string) => {
  i18n.setLocale(lang);
};

const count = ref(0);
</script>

<template>
  <h1>{{ msg }}</h1>
  <button @click="setLocale('zh')">setLocale</button>
  <p>{{ $t("test") }}</p>
  <!-- array -->
  <p>{{ $t("menu[0]") }}</p>
  <!-- object -->
  <p>{{ $t("object.a") }}</p>
  <!-- parse -->
  <p>{{ $t("parse", { name: "wangsw" }) }}</p>
  <p>{{ $t("parses.a", { name: "wangsw" }) }}</p>

  <p>
    Recommended IDE setup:
    <a href="https://code.visualstudio.com/" target="_blank">VSCode</a>
    +
    <a href="https://github.com/johnsoncodehk/volar" target="_blank">Volar</a>
  </p>

  <p>See <code>README.md</code> for more information.</p>

  <p>
    <a href="https://vitejs.dev/guide/features.html" target="_blank">
      Vite Docs
    </a>
    |
    <a href="https://v3.vuejs.org/" target="_blank">Vue 3 Docs</a>
  </p>

  <button type="button" @click="count++">count is: {{ count }}</button>
  <p>
    Edit
    <code>components/HelloWorld.vue</code> to test hot module replacement.
  </p>
</template>

<style scoped>
a {
  color: #42b983;
}

label {
  margin: 0 0.5em;
  font-weight: bold;
}

code {
  background-color: #eee;
  padding: 2px 4px;
  border-radius: 4px;
  color: #304455;
}
</style>
