<template>
  <div class="list-menu">
    <ul v-if="lists.length">
      <li
        v-for="list in lists"
        :class="[
          { current: lists.indexOf(list) === currentListIndex },
          'list-title'
        ]"
        :key="lists.indexOf(list)"
      >
        <div
          class="list-name"
          @click="$emit('set-current-list-index', lists.indexOf(list))"
        >
          {{ list.name }}
        </div>
        <EditButton @click="$emit('delete-list', lists.indexOf(list))" />
        <DeleteButton @click="$emit('delete-list', lists.indexOf(list))" />
      </li>
    </ul>
    <form
      class="new-list-form"
      @submit.prevent="$emit('add-list', newListName)"
    >
      <input
        type="text"
        class="text-input"
        :value="newListName"
        @input="$emit('update:newListName', $event.target.value)"
      />
      <input type="submit" value="+" class="button add-button" />
    </form>
  </div>
</template>

<script>
import EditButton from "../buttons/EditButton.vue";
import DeleteButton from "../buttons/DeleteButton.vue";

export default {
  name: "ListMenu",

  components: {
    EditButton,
    DeleteButton
  },

  emits: [
    "set-current-list-index",
    "delete-list",
    "add-list",
    "update:newListName"
  ],

  props: {
    currentListIndex: Number,
    lists: {
      type: Array,
      required: true
    },
    newListName: {
      type: String,
      required: true
    }
  }
};
</script>
