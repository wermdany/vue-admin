<template>
  <div class="login">
    <input type="text" v-input-limit="/[^\d+]/" />
    {{ t("A", 1, {}) }}
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import inputLimit from "@/directives/modules/limit";
import { useI18n } from "vue-i18n";
export default defineComponent({
  name: "LOGIN",
  setup() {
    const a = ref(1);
    const { t } = useI18n();
    return { a, t };
  },
  directives: {
    inputLimit
  }
});
</script>
