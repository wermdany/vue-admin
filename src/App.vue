<template>
  <ConfigProvider :locale="locale">
    <router-view />
  </ConfigProvider>
</template>
<script lang="ts" setup>
import { ConfigProvider } from "ant-design-vue";
import { useLocaleApi } from "@/locales";

const { getAntdvLocales } = useLocaleApi();
const locale = getAntdvLocales();
</script>
