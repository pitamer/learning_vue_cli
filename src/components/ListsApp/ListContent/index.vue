<template>
  <div class="list-content">
    <div v-if="currentListIndex >= 0 && currentListIndex != null">
      <ul>
        <li
          v-for="item in items"
          :class="[{ done: item.done }, 'list-item']"
          :key="item.name"
        >
          <div class="item-name" @click="$emit('toggle-done', item)">
            {{ item.name }}
          </div>
          <EditButton @click="$emit('delete-item', currentListIndex, item)" />
          <DeleteButton @click="$emit('delete-item', currentListIndex, item)" />
        </li>
      </ul>
      <form
        class="new-item-form"
        @submit.prevent="$emit('add-item', currentListIndex, newItemName)"
      >
        <input
          type="text"
          class="text-input"
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
    }
  },

  emits: ["update:newItemName", "add-item", "delete-item", "toggle-done"]
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
