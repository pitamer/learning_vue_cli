<template>
  <div class="lists-app">
    <div class="list-menu">
      <ul>
        <li
          v-for="list in lists"
          :class="[{current: lists.indexOf(list) === currentListIndex}, 'list-title']"
          :key="lists.indexOf(list)"
          @click="setCurrentListIndex(lists.indexOf(list))"
        >
          {{ list.name }}
        </li>
      </ul>
    </div>
    <h1>--- {{ stupidNumber }} ---</h1>
    <div class="list-content">
      <ul>
        <li
          v-for="item in lists[currentListIndex].items"
          :class="[{done: item.done}, 'list-item']"
          :key="item.name"
          @click="toggleDone(item)"
        >
          {{ item.name }}
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "Counter",
  props: {
    stupidNumber: {
      type: Number,
      required: true,
    },
  },

  data() {
    return {
      currentListIndex: 1,
      lists: [
        {
          name: "Books",
          items: [
            {
              name: "Sherlock Holmes",
              done: true,
            },
            {
              name: "The Old Man and the Sea",
              done: false,
            },
          ],
        },
        {
          name: "Films",
          items: [
            {
              name: "Annihilation",
              done: true,
            },
            {
              name: "Ex Machina",
              done: true,
            },
            {
              name: "Trainspotting",
              done: false,
            },
          ],
        },
      ],
    };
  },

  methods: {
    setCurrentListIndex(newIndex) {
      this.currentListIndex = newIndex;
    },
    toggleDone(listItem) {
      listItem.done = !listItem.done;
    },
  },

  computed: {},
};
</script>

<style scoped lang="css">
.current {
  color: red;
}
.done {
  color: green;
}
</style>
