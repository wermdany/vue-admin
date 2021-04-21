<template>
  <div class="login">
    <input type="text" v-model.number="system.num" />
    <a-button type="primary" @click="system.changeState">add</a-button>
    <ul>
      <li v-for="item in system.num" :key="item">{{ item }}</li>
    </ul>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import { Button } from "ant-design-vue";
import { useI18n } from "vue-i18n";
import { useSystemStore } from "@/store/system";
import { useLocaleStore } from "@/store/locale";
export default defineComponent({
  name: "LOGIN",
  components: {
    [Button.name]: Button
  },
  setup() {
    const a = ref(1);
    const { t } = useI18n();
    const system = useSystemStore();
    const locale = useLocaleStore();
    return { a, t, system, locale };
  }
});
</script>
