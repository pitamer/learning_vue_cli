<template>
  <div class="list-content">
    <div v-if="currentListIndex >= 0 && currentListIndex != null">
      <ul>
        <li
          v-for="item in items"
          :class="['list-item', { done: item.done }]"
          :key="item.name"
        >
          <div class="item-name" @click="$emit('toggle-done', currentListIndex, item)">
            {{ item.name }}
          </div>
          <EditButton @click="$emit('delete-item', currentListIndex, item)" />
          <DeleteButton @click="$emit('delete-item', currentListIndex, item)" />
        </li>
      </ul>
      <form
        class="new-item-form"
        @submit.prevent="submitNewItem(currentListIndex, newItemName)"
      >
        <input
          type="text"
          class="text-input"
          ref="newItemInputRef"
          :value="newItemName"
          @input="$emit('update:newItemName', $event.target.value)"
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

  props: {
    currentListIndex: Number,
    items: {
      type: Array,
      required: true
    },
    newItemName: {
      type: String,
      required: true
    },
    darkModeEnabled: {
      type: Boolean,
      required: true
    }
  },

  emits: ["update:newItemName", "add-item", "delete-item", "toggle-done"],

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
    submitNewItem(currentListIndex, newItemName) {
      newItemName = newItemName.trim()

      if (newItemName) {
        this.$emit("add-item", currentListIndex, newItemName)
      } else {
        this.$emit("update:newItemName", "")
        this.refreshFocusOnInput()
      }
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
