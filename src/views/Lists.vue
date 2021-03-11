<template>
  <div class="lists">
    <h1>
      This is a lists app.
    </h1>
    <div class="lists-app-container">
      <ListsApp :darkModeEnabled="darkModeEnabled" />
    </div>
  </div>
</template>

<script>
import ListsApp from "@/components/ListsApp";

export default {
  name: "Lists",
  components: {
    ListsApp
  },

  props: {
    darkModeEnabled: {
      type: Boolean,
      required: true
    }
  }
};
</script>

<style lang="scss">
.lists-app-container {
  display: grid;
  place-items: center;
}
</style>
