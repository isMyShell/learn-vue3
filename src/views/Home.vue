<template>
  <div class="home">
    <div>{{ text }}</div>
    <HelloWorld
      msg="Welcome to Your Vue.js + TypeScript App"
      @change="logCount"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, provide } from "vue";
import HelloWorld from "@/components/HelloWorld/index.vue"; // @ is an alias to /src

export default defineComponent({
  name: "Home",
  components: {
    HelloWorld,
  },
  setup() {
    const logCount = (e: number) => {
      console.log("setup: from child value: ", e);
    };

    const text = ref("home");

    const changeHomeData = (e: string) => {
      console.log(e);
      text.value = e;
    };

    provide("homeData", { title: "home", value: "from home page" });
    provide("changeHomeData", changeHomeData);
    return {
      logCount,
      text,
    };
  },
});
</script>
