<template>
  <div class="lists">
    <h1>This is a lists app.</h1>
    <ListsApp :stupidNumber="stupidNumber" />
  </div>
</template>

<script>
import ListsApp from "@/components/ListsApp.vue";

export default {
  name: "Lists",
  components: {
    ListsApp,
  },
  data() {
    return {
      stupidNumber: 1,
    };
  },
};
</script>

<style scoped lang="scss">
h2 {
  color: red;
}
</style>
