<template>
  <div class="home">
    <HelloWorld />
    <img
      alt="Vue logo"
      src="../assets/logo.png"
      :class="{ dark: $store.state.darkModeEnabled }"
    />
  </div>
</template>

<script>
import HelloWorld from "@/components/HelloWorld.vue";

export default {
  name: "Home",

  components: {
    HelloWorld,
  },
};
</script>

<style scoped lang="scss">
img {
  width: 100px;
  margin: 1.5em 0;
  transition: 0.2s ease-out;
  
  &.dark {
    filter: drop-shadow(0px 0px 6px #222);
  }
}
</style>
