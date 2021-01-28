<template>
  <div class="about">
    <h1>This is an about page.</h1>
    <h1>Also, a counter:</h1>
    <Counter :count="currentCount" />
    <button @click="add">+</button>
    <button @click="reduce">-</button>
  </div>
</template>

<script>
import Counter from "@/components/Counter.vue";

export default {
  name: "About",
  components: {
    Counter,
  },
  data() {
    return {
      currentCount: 1,
    };
  },
  methods: {
    add() {
      this.currentCount += 1;
    },
    reduce() {
      this.currentCount -= 1;
    },
  },
};
</script>

<style scoped lang="scss">
h2 {
  color: red;
}
</style>
