<script lang="ts">
import { defineComponent, reactive } from "vue";
import { Button } from "ant-design-vue";

export default defineComponent({
  name: "AA",
  components: {
    AButton: Button
  },
  setup() {
    const tree = reactive(new Map());
    let count = 1;
    tree.set({ a: 1 }, { b: 2 });
    const add = () => {
      tree.set({ a: "bb" + count++ }, { d: 1 });
      console.log(tree);
    };
    const a = { b: 2 };
    return { a, tree, add };
  }
});
</script>
<template>
  <a-button type="danger" @click="add" v-for="[a, b] in tree" :key="a.a">
    {{ b }}
  </a-button>
</template>
