<template>
  <div class="login">
    <input type="text" />
    {{ t("A", 1, {}) }}
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import { useI18n } from "vue-i18n";
export default defineComponent({
  name: "LOGIN",
  setup() {
    const a = ref(1);
    const { t } = useI18n();
    return { a, t };
  }
});
</script>
