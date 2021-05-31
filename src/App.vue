<template>
  <ConfigProvider :locale="locale">
    <router-view />
  </ConfigProvider>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import { ConfigProvider } from "ant-design-vue";
import { useLocaleApi } from "@/locales";

export default defineComponent({
  components: {
    ConfigProvider
  },
  setup() {
    const { getAntdvLocales } = useLocaleApi();
    return {
      locale: getAntdvLocales()
    };
  }
});
</script>
