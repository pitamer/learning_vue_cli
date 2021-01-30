<template>
  <div class="lists-app">
    <div class="list-menu">
      <ul>
        <li
          v-for="list in lists"
          :class="[
            { current: lists.indexOf(list) === currentListIndex },
            'list-title',
          ]"
          :key="lists.indexOf(list)"
        >
          <div
            class="list-name"
            @click="setCurrentListIndex(lists.indexOf(list))"
          >
            {{ list.name }}
          </div>
          <div class="delete-button" @click="deleteList(lists.indexOf(list))">
            X
          </div>
        </li>
      </ul>
    </div>
    <div class="list-content">
      <ul>
        <li
          v-for="item in lists[currentListIndex].items"
          :class="[{ done: item.done }, 'list-item']"
          :key="item.name"
        >
          <div class="item-name" @click="toggleDone(item)">
            {{ item.name }}
          </div>
          <div
            class="delete-button"
            @click="deleteItem(currentListIndex, item)"
          >
            X
          </div>
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
    deleteItem(listIndex, item) {
      const listItems = this.lists[listIndex].items;
      const itemIndex = listItems.indexOf(item);
      listItems.splice(itemIndex, 1);
    },
    deleteList(listIndex) {
      if (this.currentListIndex === listIndex) {
        this.currentListIndex = this.lists[listIndex + 1]
          ? listIndex
          : listIndex > 0
          ? listIndex - 1
          : null;
      } else if (this.currentListIndex > listIndex) {
        this.currentListIndex--;
      }
      this.lists.splice(listIndex, 1);
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
  display: flex;

  & > * {
    padding: 3px 6px;
  }

  .item-name,
  .list-name {
    transition: 0.2s ease-out;
    flex-grow: 1;
  }
  .delete-button {
    text-align: center;
    min-width: 23px;
    color: gray;
    transition: 0.2s ease-out;
    &:hover {
      background-color: rgba(255, 70, 70, 0.7);
      color: white;
    }
  }

  background: linear-gradient(
    to left,
    transparent 50%,
    rgba(0, 50, 75, 0.08) 50%
  );
  background-size: 200% 100%;
  background-position: right;
  transition: 0.2s ease-out;
  cursor: pointer;
  &:hover {
    background-position: left;
  }
}

ul,
li {
  margin: 0;
  user-select: none;
}

.lists-app {
  width: 100%;
  max-width: 35em;
  min-height: 20em;
  outline: 1px gray solid;
  display: flex;
}

.list-menu {
  width: 35%;
  outline: 1px gray solid;
  display: flex;
  flex-flow: column;
}
.list-content {
  width: 65%;
}
.current {
  background-color: rgba(70, 200, 255, 0.2);
}
.done {
  .item-name {
    color: var(--light-green);
    text-decoration: line-through;
  }
}
</style>
