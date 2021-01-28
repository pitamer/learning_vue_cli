<template>
  <div class="counter">
    <h2>{{ count }}</h2>
  </div>
</template>

<script>
export default {
  name: "Counter",
  props: {
    count: {
      type: Number,
      required: true,
    },
  },
};
</script>
