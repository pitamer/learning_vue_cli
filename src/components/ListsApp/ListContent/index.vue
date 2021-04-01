<template>
  <div class="list-content">
    <div v-if="$store.state.currentListIndex >= 0 && $store.state.currentListIndex != null">
      <ul>
        <li
          v-for="item in $store.state.lists[$store.state.currentListIndex]?.items || []"
          :class="['list-item', { done: item.done }]"
          :key="item.name"
        >
          <div
            class="item-name"
            @click="toggleDone($store.state.currentListIndex, item)"
          >
            {{ item.name }}
          </div>
          <EditButton @click="deleteItem($store.state.currentListIndex, item)" />
          <DeleteButton @click="deleteItem($store.state.currentListIndex, item)" />
        </li>
      </ul>
      <form
        class="new-item-form"
        @submit.prevent="submitNewItem($store.state.currentListIndex, $store.state.newItemName)"
      >
        <input
          type="text"
          class="text-input"
          ref="newItemInputRef"
          :value="$store.state.newItemName"
          @input="updateNewItemName($event.target.value)"
        />
        <input type="submit" value="+" class="button add-button" />
      </form>
    </div>
  </div>
</template>

<script>
import EditButton from "../buttons/EditButton.vue";
import DeleteButton from "../buttons/DeleteButton.vue";

import { ref } from "vue";

export default {
  name: "ListContent",

  components: {
    EditButton,
    DeleteButton
  },

  setup() {
    const newItemInputRef = ref(null)

    const refreshFocusOnInput = () => {
      newItemInputRef.value.blur()
      setTimeout(() => newItemInputRef.value.focus(), 150)
    }

    return {
      newItemInputRef,
      refreshFocusOnInput
    }
  },

  methods: {
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

    submitNewItem(listIndex, newItemName) {
      // TODO: Make sure the item does not exit already
      newItemName = newItemName.trim()

      if (newItemName) {
        this.$store.commit({
          type: 'addItem',
          listIndex: listIndex,
          newItemName: newItemName
        })
      } else {
        this.refreshFocusOnInput()
      }
      this.updateNewItemName('')
    },

    updateNewItemName(newItemName) {
      this.$store.commit({
        type: 'updateNewItemName',
        newItemName: newItemName
      })
    }
  }
};
</script>

<style scoped lang="scss">
.done {
  .item-name {
    color: var(--light-green);
    text-decoration: line-through;
  }
}
</style>
