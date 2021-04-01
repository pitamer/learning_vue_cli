<template>
  <div class="lists-app">
    <!-- eslint-disable -->
    <ListMenu
      :lists="this.$store.state.lists"
      :currentListIndex="this.$store.state.currentListIndex"
      :darkModeEnabled="darkModeEnabled"
      v-model:newListName="this.$store.state.newListName"
      @delete-list="deleteList"
      @set-current-list-index="setCurrentListIndex"
      @add-list="addList"
    />
    <ListContent
      :items="this.$store.state.lists[this.$store.state.currentListIndex]?.items || []"
      :currentListIndex="this.$store.state.currentListIndex"
      :darkModeEnabled="darkModeEnabled"
      v-model:newItemName="this.$store.state.newItemName"
      @delete-item="deleteItem"
      @toggle-done="toggleDone"
      @add-item="addItem"
    />
    <!-- eslint-enable -->
  </div>
</template>

<script>
import ListMenu from "./ListMenu";
import ListContent from "./ListContent";

export default {
  name: "Lists",

  components: {
    ListMenu,
    ListContent
  },

  props: {
    darkModeEnabled: {
      type: Boolean,
      required: true
    }
  },

  methods: {
    setCurrentListIndex(newCurrentListIndex) {
      this.$store.commit({
        type: 'setCurrentListIndex',
        newCurrentListIndex: newCurrentListIndex
      })
    },

    toggleDone(listIndex, listItem) {
      this.$store.commit({
        type: 'toggleDone',
        listIndex: listIndex,
        listItem: listItem
      })
    },

    deleteItem(listIndex, listItem) {
      this.$store.commit({
        type: 'deleteItem',
        listIndex: listIndex,
        listItem: listItem
      })
    },

    deleteList(listIndex) {
      this.$store.commit({
        type: 'deleteList',
        listIndex: listIndex
      })
    },

    addList(newListName) {
      // TODO: Make sure the list does not exit already
      this.$store.commit({
        type: 'addList',
        newListName: newListName
      })
    },

    addItem(listIndex, newItemName) {
      // TODO: Make sure the item does not exit already
      this.$store.commit({
        type: 'addItem',
        listIndex: listIndex,
        newItemName: newItemName
      })
    }
  }
}
</script>

<style lang="scss">
.lists-app {
  width: 100%;
  max-width: 35em;
  min-height: 20em;
  border: 1px gray solid;
  border-radius: 6px;
  overflow: hidden;
  display: flex;

  ul {
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

  .list-menu {
    width: 40%;
    border-right: 1px gray solid;
  }
  .list-content {
    width: 60%;
  }
  .current {
    background-color: rgba(70, 200, 255, 0.2);
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
      cursor: pointer;
      transition: 0.2s ease-out;
      &:hover {
        background-color: var(--light-green);
        color: white;
      }
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
  }
}
</style>
