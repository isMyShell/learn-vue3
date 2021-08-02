<template>
  <div class="hello">
    <div>{{ homeData.title }} / {{ homeData.value }}</div>
    <h3>{{ msg }}</h3>
    <el-button @click="increme">count: {{ count }}, click me !</el-button>
    <div>doubleCount: {{ doubleCount }}</div>
    <el-button @click="setList">setList</el-button>
    <el-button @click="getList" :loading="loading">getList</el-button>
    <div>
      {{ loading ? "loading..." : list }}
    </div>
    <el-button @click="changeHomeDataFromChild">changeHomeData</el-button>
  </div>
</template>

<script lang="ts">
import {
  defineComponent,
  ref,
  computed,
  watch,
  onBeforeMount,
  onMounted,
  onBeforeUpdate,
  onUpdated,
  onBeforeUnmount,
  onUnmounted,
  onErrorCaptured,
  inject,
} from "vue";
import useGetList from "./useGetList";
export default defineComponent({
  name: "HelloWorld",
  props: {
    msg: String,
  },
  emits: ["change"],
  setup(props, ctx) {
    console.log(props, ctx);

    const homeData = inject("homeData");
    const changeHomeData = inject("changeHomeData");
    let clicked = ref(0);
    const changeHomeDataFromChild = () => {
      if (typeof changeHomeData === "function") {
        clicked.value = clicked.value + 1;
        changeHomeData(`from helloWord ! clicked: ${clicked.value}`);
      }
    };

    let count = ref(0);
    const increme = () => {
      count.value++;
      ctx.emit("change", count.value);
    };

    const doubleCount = computed(() => {
      return count.value * 2;
    });

    watch(doubleCount, (newValue, oldValue) => {
      console.log("newValue", newValue);
      console.log("oldValue", oldValue);
    });

    const { loading, list, getList, setList } = useGetList();

    onBeforeMount(() => {
      console.log("onBeforeMount");
    });

    onMounted(() => {
      console.log("onMounted");
    });

    onBeforeUpdate(() => {
      console.log("onBeforeUpdate");
    });

    onUpdated(() => {
      console.log("onUpdated");
    });

    onBeforeUnmount(() => {
      console.log("onBeforeUnmount");
    });

    onUnmounted(() => {
      console.log("onUnmounted");
    });

    onErrorCaptured(() => {
      console.log("onErrorCaptured");
    });

    return {
      homeData,
      changeHomeData,
      changeHomeDataFromChild,

      count,
      doubleCount,
      increme,

      loading,
      list,
      getList,
      setList,
    };
  },
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
