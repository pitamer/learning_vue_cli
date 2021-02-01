<template>
  <div class="lists">
    <h1>This is a lists app.</h1>
    <div class="lists-app-container">
      <ListsApp />
    </div>
  </div>
</template>

<script>
import ListsApp from "@/components/ListsApp";

export default {
  name: "Lists",
  components: {
    ListsApp,
  },
};
</script>

<style>
.lists-app-container {
  display: grid;
  place-items: center;
  padding: 1em;
}
</style>
