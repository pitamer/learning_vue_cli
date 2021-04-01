<template>
  <div class="list-menu">
    <ul v-if="lists.length">
      <li
        v-for="list in lists"
        :class="[
          { current: lists.indexOf(list) === $store.state.currentListIndex },
          { allDone: list.items.length && list.items.every(i => i.done) },
          { empty: !list.items.length },
          'list-title',
        ]"
        :key="lists.indexOf(list)"
      >
        <div
          class="list-name"
          @click="setCurrentListIndex(lists.indexOf(list))"
        >
          {{ list.name }}
          <span class="list-progress-indication">
            {{ listProgressIndication(list) }}
          </span>
        </div>
        <EditButton @click="deleteList(lists.indexOf(list))" />
        <DeleteButton @click="deleteList(lists.indexOf(list))" />
      </li>
    </ul>
    <form
      class="new-list-form"
      @submit.prevent="submitNewList($store.state.newListName)"
    >
      <input
        type="text"
        class="text-input"
        ref="newListInputRef"
        :value="$store.state.newListName"
        @input="updateNewListName($event.target.value)"
      />
      <input type="submit" value="+" class="button add-item-button" />
    </form>
  </div>
</template>

<script>
import EditButton from "@/components/buttons/EditButton";
import DeleteButton from "@/components/buttons/DeleteButton";
// import SimpleTextForm from "@/components/SimpleTextForm"

import { ref } from "vue";

export default {
  name: "ListMenu",

  components: {
    EditButton,
    DeleteButton,
    // SimpleTextForm
  },

  setup() {
    const newListInputRef = ref(null)

    const refreshFocusOnInput = () => {
      newListInputRef.value.blur()
      setTimeout(() => newListInputRef.value.focus(), 150)
    }

    return {
      newListInputRef,
      refreshFocusOnInput
    }
  },

  data() {
    return {
      lists: this.$store.state.lists,
    }
  },

  methods: {
    listProgressIndication(list) {
      const itemsInList = list.items.length;
      if (!itemsInList) {
        return "(empty)";
      }
      const itemsDone = list.items.filter(i => i.done).length;
      if (itemsDone === itemsInList) {
        // Display nothing if all items are done
        return null;
      }
      const donePercentage = Math.floor((itemsDone / itemsInList) * 100);
      return `(${donePercentage}%)`;
    },

    setCurrentListIndex(newCurrentListIndex) {
      this.$store.commit({
        type: 'setCurrentListIndex',
        newCurrentListIndex: newCurrentListIndex
      })
    },

    deleteList(listIndex) {
      this.$store.commit({
        type: 'deleteList',
        listIndex: listIndex
      })
    },

    submitNewList(newListName) {
      // TODO: Make sure the list does not exit already
      newListName = newListName.trim()

      if (newListName) {
        this.$store.commit({
          type: 'addList',
          newListName: newListName
        })
      } else {
        this.refreshFocusOnInput()
      }
      this.updateNewListName('')
    },

    updateNewListName(newListName) {
      this.$store.commit({
        type: 'updateNewListName',
        newListName: newListName
      })
    }
  }
};
</script>

<style lang="scss">
.list-menu {
  .allDone {
    .list-name {
      color: var(--light-green);
    }
  }
  .list-progress-indication {
    font-size: 9px;
    text-align: right;
  }
  .empty {
    color: #999999;
  }
}
</style>
