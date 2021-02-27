<template>
  <div id="app-container">
    <NavBar />
    <router-view />
  </div>
</template>

<script>
import NavBar from "@/components/NavBar";

export default {
  components: {
    NavBar
  }
}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: var(--dark-green);
  background-color: rgba(0, 255, 76, 0.13);
  padding: none;
  margin: none;
}

:root {
  --light-green: #42b983;
  --dark-green: #2c3e50;
}
</style>
