<template>
  <div :class="['app-bar', { dark: $store.state.darkModeEnabled }]">
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
    <Switch
      :isActive="!$store.state.darkModeEnabled"
      :switchFunction="() => $store.commit('toggleDarkMode')"
    />
  </div>
</template>

<script>
import Switch from "@/components/Switch";

export default {
  name: "NavBar",

  components: {
    Switch
  }
};
</script>

<style lang="scss">
.app-bar {
  background-color: rgba(255, 255, 255, 0.3);
  box-shadow: 5px -3px 2px 5px rgba(30, 30, 30, 0.6);
  display: flex;
  padding: 0.1em 0;
  transition: 0.2s ease-out;

  &.dark {
    background-color: rgba(225, 225, 225, 0.1);
    .nav {
      a {
        color: var(--cucumber-water);
        &:hover {
          color: var(--cucumber-water);
          text-shadow: 0px 0px 15px var(--cucumber-water);
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
