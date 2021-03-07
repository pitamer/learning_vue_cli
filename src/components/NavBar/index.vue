<template>
  <div :class="['app-bar', {'dark' : darkModeEnabled}]">
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
      :isActive="!darkModeEnabled"
      :switchFunction="toggleDarkMode"
    />
  </div>
</template>

<script>
import Switch from "@/components/Switch";

export default {
  name: "NavBar",

  components: {
    Switch
  },

  props: {
    darkModeEnabled: {
      type: Boolean,
      required: true
    },
    toggleDarkMode: {
      type: Function,
      required: true
    }
  }
};
</script>

<style lang="scss">
.app-bar {
  border-bottom: 1px solid var(--dark-green);
  display: flex;
  padding: 0.1em 0;
  transition: 0.2s ease-out;
  &.dark {
    border-bottom: 1px solid var(--cucumber-water);
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
