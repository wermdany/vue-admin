<template>
  <div class="login">
    <input type="text" v-input-limit="/[^\d+]/" name="" id="" />
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import inputLimit from "@/directives/modules/limit";
export default defineComponent({
  name: "LOGIN",
  setup() {
    const a = ref({ b: 1 });
    return { a };
  },
  directives: {
    inputLimit
  }
});
</script>
