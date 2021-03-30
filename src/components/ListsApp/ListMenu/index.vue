<template>
  <div class="list-menu">
    <ul v-if="lists.length">
      <li
        v-for="list in lists"
        :class="[
          { current: lists.indexOf(list) === currentListIndex },
          { allDone: list.items.length && list.items.every((i) => i.done) },
          { empty: !list.items.length },
          'list-title',
        ]"
        :key="lists.indexOf(list)"
      >
        <div
          class="list-name"
          @click="$emit('set-current-list-index', lists.indexOf(list))"
        >
          {{ list.name }}
          <span class="list-progress-indication">
            {{ listProgressIndication(list) }}
          </span>
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
      <input type="submit" value="+" class="button add-item-button" />
    </form>
  </div>
</template>

<script>
import EditButton from "../buttons/EditButton.vue";
import DeleteButton from "../buttons/DeleteButton.vue";
// import SimpleTextForm from "@/components/SimpleTextForm"

export default {
  name: "ListMenu",

  components: {
    EditButton,
    DeleteButton,
    // SimpleTextForm
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
    },
    darkModeEnabled: {
      type: Boolean,
      required: true
    }
  },

  methods: {
    listProgressIndication(list) {
      const itemsInList = list.items.length;
      if (!itemsInList) {
        return "(empty)";
      }
      const itemsDone = list.items.filter((i) => i.done).length;
      if (itemsDone === itemsInList) {
        // Display nothing if all items are done
        return null;
      }
      const donePercentage = Math.floor((itemsDone / itemsInList) * 100);
      return `(${donePercentage}%)`;
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
