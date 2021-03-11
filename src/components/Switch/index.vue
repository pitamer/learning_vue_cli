<template>
  <div @click="switchFunction" :class="['switch', isActive ? 'on' : 'off']">
    <div class="switch-bubble"></div>
  </div>
</template>

<script>
export default {
  name: "Switch",

  props: {
    switchFunction: Function,
    isActive: {
      type: Boolean,
      required: true
    }
  }
};
</script>

<style lang="scss">
.switch {
  margin: 0.4em;
  height: 1.2em;
  width: 2.3em;
  border-radius: 1.5em;
  display: grid;
  place-items: center right;
  transition: 0.2s ease-out;
  cursor: pointer;

  .switch-bubble {
    transition: 0.15s ease-out;
    margin: 0 3px;
    height: 0.8em;
    width: 0.8em;
    border-radius: 50%;
  }

  &.on {
    border: 1px solid var(--dark-green);
    background-color: var(--light-green);

    .switch-bubble {
      background-color: var(--dark-green);
      border: 0.1px solid var(--dark-green);
    }
  }

  &.off {
    border: 1px solid var(--light-green);
    background-color: var(--dark-green);

    .switch-bubble {
      margin-right: 22px;
      background-color: var(--light-green);
      // border: 0.1px solid var(--light-green);
    }
  }
}
</style>
