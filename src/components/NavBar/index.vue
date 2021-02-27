<template>
  <div id="app-bar">
    <div class="nav">
      <router-link to="/">
        <span class="nav-arrow">
          &lt;
        </span>
      </router-link>
      <router-link to="/lists">
        <span class="nav-arrow">
          &gt;
        </span>
      </router-link>
    </div>
    <Switch />
  </div>
</template>

<script>
import Switch from "@/components/Switch";

export default {
  name: "NavBar",

  components: {
    Switch,
  },
};
</script>

<style lang="scss">
#app-bar {
  border-bottom: 1px solid var(--dark-green);
  display: flex;
  padding: 0.1em 0;
  .nav {
    margin-left: 2.5em;
    flex-grow: 1;
    .nav-arrow {
      margin: 0 1em;
    }
    a {
      font-weight: bold;
      color: var(--dark-green);
      font-size: 1.5em;
      text-decoration: none;
      transition: 0.2s ease-out;
      &:hover {
        color: #000;
        // font-size: 1.6em;
        text-shadow: 0px 0px 15px green;
      }
      &.router-link-exact-active {
        color: var(--light-green);
        &:hover {
          text-shadow: none;
        }
      }
    }
  }
}
</style>
