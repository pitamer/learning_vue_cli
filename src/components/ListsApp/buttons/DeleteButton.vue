<template>
  <div class="button delete-button">
    X
  </div>
</template>

<script>
export default {
  name: "DeleteButton"
};
</script>

<style scoped lang="scss">
.delete-button {
  color: gray;
  display: grid;
  place-items: center;
  &:hover {
    background-color: rgba(255, 70, 70, 0.7);
    color: white;
  }
}
</style>
