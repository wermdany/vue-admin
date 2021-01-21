<script lang="ts">
import { defineComponent } from "vue";
import { Button } from "ant-design-vue";
export default defineComponent({
  name: "AA",
  components: {
    AButton: Button
  },
  setup() {
    // hasRoute;
    const a = { b: 2 };
    return { a };
  }
});
export const name = "AA";
</script>
<template>
  <a-button type="danger">{{ a }}</a-button>
</template>
