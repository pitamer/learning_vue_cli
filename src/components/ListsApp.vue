<template>
  <div class="lists-app">
    <div class="list-menu">
      <ul v-if="lists.length">
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
          <div
            class="button edit-button"
            @click="deleteList(lists.indexOf(list))"
          >
            🖊️
          </div>
          <div
            class="button delete-button"
            @click="deleteList(lists.indexOf(list))"
          >
            X
          </div>
        </li>
      </ul>
      <form class="new-list-form">
        <input type="text" class="text-input" />
        <input type="submit" value="+" class="button add-button" />
      </form>
    </div>
    <div class="list-content">
      <div v-if="currentListIndex >= 0 && currentListIndex != null">
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
              class="button edit-button"
              @click="deleteItem(currentListIndex, item)"
            >
              🖊️
            </div>
            <div
              class="button delete-button"
              @click="deleteItem(currentListIndex, item)"
            >
              X
            </div>
          </li>
        </ul>
        <form class="new-item-form">
          <input type="text" class="text-input" />
          <input type="submit" value="+" class="button add-button" />
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Lists",

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

  & > .button {
    padding: 3px 4px;
  }

  .item-name,
  .list-name {
    transition: 0.2s ease-out;
    flex-grow: 1;
  }

  .button {
    text-align: center;
    min-width: 23px;
    transition: 0.2s ease-out;
  }

  .delete-button {
    color: gray;
    &:hover {
      background-color: rgba(255, 70, 70, 0.7);
      color: white;
    }
  }
  .edit-button {
    opacity: 50%;
    &:hover {
      background-color: rgba(70, 70, 255, 0.5);
      opacity: 100%;
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
  width: 40%;
  border-right: 1px gray solid;
  display: flex;
  flex-flow: column;
}
.list-content {
  width: 60%;
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
.new-list-form,
.new-item-form {
  display: flex;
  width: 100%;
  margin-top: 0.5em;

  & > input {
    border: 0;
    padding: 0;
    margin: 0;
  }

  .button {
    min-width: 62px;
    min-height: 28px;
    font-size: 1em;
    background-color: #42b98393;
    &:hover {
      background-color: #42b983c0;
    }
  }

  .text-input {
    flex-grow: 1;
    background-color: #42b98336;
  }
}
</style>
