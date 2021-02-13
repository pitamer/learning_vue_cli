<template>
  <div class="lists">
    <h1>
      <router-link to="/">
        <span>
          &lt;
        </span>
      </router-link>
      <!-- This is a lists app. -->
    </h1>
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
    ListsApp
  }
};
</script>

<style scoped lang="scss">
.lists-app-container {
  display: grid;
  place-items: center;
  padding: 1em;
}

a {
  text-decoration: none;
  transition: 0.2s ease-out;
  &:hover {
    color: #fff;
    font-size: 1.1em;
    text-shadow: 0px 0px 20px green;
  }
}
</style>
