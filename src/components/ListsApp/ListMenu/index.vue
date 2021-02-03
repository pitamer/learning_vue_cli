<template>
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
          @click="$emit('set-current-list-index', lists.indexOf(list))"
        >
          {{ list.name }}
        </div>
        <EditButton @click="$emit('delete-list', lists.indexOf(list))" />
        <DeleteButton @click="$emit('delete-list', lists.indexOf(list))" />
      </li>
    </ul>
    <form class="new-list-form" v-on:submit.prevent>
      <input type="text" class="text-input" v-model="newListName" />
      <input
        type="submit"
        value="+"
        class="button add-button"
        @click="$emit('add-list', newListName)"
      />
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
    DeleteButton,
  },

  props: {
    lists: {
      type: Array,
      required: true,
    },
    currentListIndex: {
      type: Number,
    },
  },

  data() {
    return {
      newListName: "",
    };
  },
};
</script>