<script>
import { defineComponent, ref } from "vue";
import { Button, message } from "ant-design-vue";
export default defineComponent({
  components: {
    [Button.name]: Button
  },
  setup() {
    const count = ref(0);
    const danger = () => {
      message.info("a111111111");
      count.value++;
    };
    return {
      count,
      danger
    };
  }
});
</script>

<template>
  <a-button type="danger" @click="danger">
    哈哈
  </a-button>
</template>
<style lang="less" scoped></style>
