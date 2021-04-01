<template>
  <div class="button edit-button">
    🖊
  </div>
</template>

<script>
export default {
  name: "EditButton",
};
</script>

<style scoped lang="scss">
.edit-button {
  opacity: 50%;
  font-size: 0.85em;
  display: grid;
  place-items: center;
  &:hover {
    background-color: rgba(70, 70, 255, 0.4);
    opacity: 100%;
  }
}
</style>
