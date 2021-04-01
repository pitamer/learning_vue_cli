<template>
  <div class="home">
    <div class="hello">
      <h1>This is a Home route.</h1>
      <p>
        I'll keep it for now. Not for long, probably.
      </p>
    </div>
    <img
      alt="Vue logo"
      src="../assets/logo.png"
      :class="{ dark: $store.state.darkModeEnabled }"
    />
  </div>
</template>

<script>
export default {
  name: "Home",
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
