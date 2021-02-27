<template>
  <div class="home">
    <HelloWorld />
    <img alt="Vue logo" src="../assets/logo.png" />
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
}
</style>
