<template>
  <div :class="['app-content', {'dark' : darkModeEnabled}]">
    <NavBar
      :darkModeEnabled="darkModeEnabled"
      :toggleDarkMode="toggleDarkMode"
    />
    <router-view :darkModeEnabled="darkModeEnabled" />
  </div>
</template>

<script>
import NavBar from "@/components/NavBar";

export default {
  components: {
    NavBar
  },

  data() {
    return {
      darkModeEnabled: true
    }
  },

  methods: {
    toggleDarkMode() {
      this.darkModeEnabled = !this.darkModeEnabled
    }
  }
}
</script>

<style lang="scss">
html, body {
  margin: 0;
  height: 100%;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  padding: none;
  margin: none;
  height: 100%;
}

.app-content {
  background-color: var(--cucumber-water);
  color: var(--dark-green);
  height: 100%;
  transition: 0.2s ease-out;
  &.dark {
    background-color: var(--dark-green);
    color: var(--cucumber-water)
  }
}

:root {
  --cucumber-water: #deffe8;
  --light-green: #42b983;
  --dark-green: #2c3e50;
}
</style>
