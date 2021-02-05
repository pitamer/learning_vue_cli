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
      <form class="new-item-form" v-on:submit.prevent>
        <input type="text" class="text-input" v-model="newItemName" />
        <input
          type="submit"
          value="+"
          class="button add-button"
          @click="$emit('add-item', currentListIndex, newItemName)"
        />
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
    DeleteButton,
  },

  props: {
    items: {
      type: Array,
      required: true,
    },
    newItemName: {
      type: String,
      required: true,
    },
    currentListIndex: {
      type: Number,
    },
  },
};
</script>
