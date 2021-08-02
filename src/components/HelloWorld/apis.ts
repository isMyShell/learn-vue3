export function fetchList(): Promise<Array<unknown>> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([
        {
          name: "yiqi",
          age: 18,
        },
        {
          name: "aguang",
          age: 16,
        },
      ]);
    }, 2000);
  });
}
