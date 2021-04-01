import { createStore } from "vuex";
import { initialLists } from "./constants";

export default createStore({
  state() {
    return {
      darkModeEnabled: false,
      newListName: "",
      newItemName: "",
      currentListIndex: 0,
      lists: initialLists,
    };
  },

  mutations: {
    toggleDarkMode(state) {
      state.darkModeEnabled = !state.darkModeEnabled;
    },

    setCurrentListIndex(state, payload) {
      state.currentListIndex = payload.newCurrentListIndex;
    },

    toggleDone(state, payload) {
      const { listIndex, listItem } = payload;

      const listItems = state.lists[listIndex].items;
      const itemIndex = listItems.indexOf(listItem);
      listItems[itemIndex].done = !listItems[itemIndex].done;
    },

    deleteItem(state, payload) {
      const { listIndex, listItem } = payload;

      const listItems = state.lists[listIndex].items;
      const itemIndex = listItems.indexOf(listItem);
      listItems.splice(itemIndex, 1);
    },

    deleteList(state, payload) {
      const { listIndex } = payload;

      if (state.currentListIndex === listIndex) {
        state.currentListIndex = state.lists[listIndex + 1]
          ? listIndex
          : listIndex > 0
          ? listIndex - 1
          : null;
      } else if (state.currentListIndex > listIndex) {
        state.currentListIndex--;
      }
      state.lists.splice(listIndex, 1);
    },

    addList(state, payload) {
      state.lists.push({
        name: payload.newListName,
        items: [],
      });
      state.newListName = "";

      if (state.lists.length === 1) {
        setTimeout(() => (state.currentListIndex = 0), 100);
      }
    },

    addItem(state, payload) {
      const { listIndex, newItemName } = payload;

      state.lists[listIndex].items.push({
        name: newItemName,
        done: false,
      });
      state.newItemName = "";
    },

    updateNewListName(state, payload) {
      state.newListName = payload.newListName;
    },

    updateNewItemName(state, payload) {
      state.newItemName = payload.newItemName;
    },
  },

  getters: {
    currentListItems(state) {
      state.lists[state.currentListIndex]?.items || [];
    },
  }, // # TODO: understand getters better, fix this one

  actions: {},
  modules: {},
});
