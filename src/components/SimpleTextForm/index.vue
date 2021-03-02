<template>
  <div class="simple-text-form-container">
    <form
      class="simple-text-form"
      @submit.prevent="$emit('submit-form')"
    >
      <input
        type="text"
        class="text-input"
        :value="textInput"
        @input="$emit('update:textInput', $event.target.value)"
      />
      <input type="submit" value="+" class="button add-item-button" />
    </form>
  </div>
</template>

<script>
export default {
  name: "SimpleTextForm",

  props: {
    textInput: {
      type: String,
      required: true
    }
  },

  emits: ["update:textInput", "submit-form"],
};
</script>

<style scoped lang="scss">
.simple-text-form {
  display: flex;
  width: 100%;
  margin-top: 0.5em;

  & > input {
    border: 0;
    padding: 0;
    margin: 0;
  }

  .text-input {
    padding-left: 3px;
    flex-grow: 1;
    background-color: #42b98336;
    transition: 0.2s ease-out;
    border-bottom: 2px transparent solid;
    &:focus {
      outline: none;
      border-bottom: 2px #42b98393 solid;
    }
  }

  .button {
    min-width: 62px;
    min-height: 28px;
    font-size: 1em;
    background-color: #42b98393;
    cursor: pointer;
    transition: 0.2s ease-out;
    &:hover {
      background-color: var(--light-green);
      color: white;
    }
  }
}
</style>
