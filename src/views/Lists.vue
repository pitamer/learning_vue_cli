<template>
  <div class="lists">
    <h1>This is a lists app.</h1>
    <ListsApp />
  </div>
</template>

<script>
import ListsApp from "@/components/ListsApp.vue";

export default {
  name: "Lists",
  components: {
    ListsApp,
  },
};
</script>
