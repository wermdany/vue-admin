<script>
import { defineComponent, ref } from "vue";
import { Button } from "ant-design-vue";
export default defineComponent({
  components: {
    AButton: Button
  },
  setup() {
    const count = ref(0);
    const danger = () => {
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
  <a-button type="primary" @click="danger">
    哈哈
  </a-button>
  <p>1111</p>
</template>
<style lang="less" scoped></style>
