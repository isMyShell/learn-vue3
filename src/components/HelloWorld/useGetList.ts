import { ref, onMounted } from "vue";
import { fetchList } from "./apis";

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export default function useGetList() {
  const loading = ref(true);
  const list = ref<Array<unknown>>([]);

  const getList = async () => {
    loading.value = true;
    list.value = await fetchList();
    loading.value = false;
  };

  const setList = async () => {
    list.value = list.value.concat([
      {
        name: "华哥",
        age: 18,
      },
    ]);
  };

  onMounted(getList);

  return {
    loading,
    list,
    getList,
    setList,
  };
}
