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
        {
          name: "Technologies",
          items: [
            {
              name: "Python",
              done: true,
            },
            {
              name: "JavaScript",
              done: true,
            },
            {
              name: "React",
              done: true,
            },
            {
              name: "Vue",
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

<style scoped lang="scss">
ul {
  margin: 0;
  padding: 0;
  list-style-type: none;
  text-align: left;
}
li {
  padding: 2px 6px;
}
li:hover {
    background-color: rgba(0, 50, 75, 0.1);
    cursor: pointer;
}
.lists-app {
  width: 100%;
  min-height: 20em;
  outline: 1px gray solid;
  display: flex;
}
.list-menu {
  width: 30%;
  outline: 1px gray solid;
  display: flex;
  flex-flow: column;
}
.list-content {
  width: 70%;
}
// .list-title {
//   /* width: 100%; */
//   /* min-width: 100%; */
//   /* flex-grow: 1; */
// }
.current {
  background-color: rgba(64, 191, 255, 0.2);
}
.current:hover {
  background-color: rgba(64, 191, 255, 0.3);
}
.done {
  color: green;
}
</style>
