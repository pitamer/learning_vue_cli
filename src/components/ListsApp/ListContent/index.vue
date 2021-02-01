<template>
  <div class="list-content">
    <div v-if="currentListIndex >= 0 && currentListIndex != null">
      <ul>
        <li
          v-for="item in items"
          :class="[{ done: item.done }, 'list-item']"
          :key="item.name"
        >
          <div class="item-name" @click="toggleDone(item)">
            {{ item.name }}
          </div>
          <div
            class="button edit-button"
            @click="deleteItem(currentListIndex, item)"
          >
            🖊
          </div>
          <div
            class="button delete-button"
            @click="deleteItem(currentListIndex, item)"
          >
            X
          </div>
        </li>
      </ul>
      <form class="new-item-form" v-on:submit.prevent>
        <input type="text" class="text-input" v-model="newItemName" />
        <input
          type="submit"
          value="+"
          class="button add-button"
          @click="addItem(currentListIndex, newItemName)"
        />
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: "ListContent",

  props: {
    items: {
      type: Array,
      required: true,
    },
    currentListIndex: {
      type: Number,
      required: true,
    },
  },

  data() {
    return {
      newItemName: "",
    };
  },
};
</script>

//
<style scoped lang="scss">
// ul {
//   margin: 0;
//   padding: 0;
//   list-style-type: none;
//   text-align: left;
// }

// li {
//   display: flex;

//   & > * {
//     padding: 3px 6px;
//   }

//   & > .button {
//     padding: 3px 4px;
//   }

//   .item-name,
//   .list-name {
//     transition: 0.2s ease-out;
//     flex-grow: 1;
//   }

//   .button {
//     text-align: center;
//     min-width: 23px;
//     transition: 0.2s ease-out;
//   }

//   .delete-button {
//     color: gray;
//     &:hover {
//       background-color: rgba(255, 70, 70, 0.7);
//       color: white;
//     }
//   }

//   .edit-button {
//     opacity: 50%;
//     &:hover {
//       background-color: rgba(70, 70, 255, 0.4);
//       opacity: 100%;
//     }
//   }

//   background: linear-gradient(
//     to left,
//     transparent 50%,
//     rgba(0, 50, 75, 0.08) 50%
//   );
//   background-size: 200% 100%;
//   background-position: right;
//   transition: 0.2s ease-out;
//   cursor: pointer;
//   &:hover {
//     background-position: left;
//   }
// }

// ul,
// li {
//   margin: 0;
//   user-select: none;
// }

// .lists-app {
//   width: 100%;
//   max-width: 35em;
//   min-height: 20em;
//   border: 1px gray solid;
//   border-radius: 6px;
//   overflow: hidden;
//   display: flex;
// }

// .list-menu {
//   width: 40%;
//   border-right: 1px gray solid;
//   display: flex;
//   flex-flow: column;
// }
// .list-content {
//   width: 60%;
// }
// .current {
//   background-color: rgba(70, 200, 255, 0.2);
// }
// .done {
//   .item-name {
//     color: var(--light-green);
//     text-decoration: line-through;
//   }
// }
// .new-list-form,
// .new-item-form {
//   display: flex;
//   width: 100%;
//   margin-top: 0.5em;

//   & > input {
//     border: 0;
//     padding: 0;
//     margin: 0;
//   }

//   .button {
//     min-width: 62px;
//     min-height: 28px;
//     font-size: 1em;
//     background-color: #42b98393;
//     cursor: pointer;
//     transition: 0.2s ease-out;
//     &:hover {
//       background-color: var(--light-green);
//       color: white;
//     }
//   }

//   .text-input {
//     padding-left: 3px;
//     flex-grow: 1;
//     background-color: #42b98336;
//     transition: 0.2s ease-out;
//     border-bottom: 2px transparent solid;
//     &:focus {
//       outline: none;
//       border-bottom: 2px #42b98393 solid;
//     }
//   }
// }
//
</style>
