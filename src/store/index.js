import { createStore } from "vuex";

export default createStore({
  state: {},
  mutations: {},
  actions: {},
  modules: {},
});

export const lists = [
  {
    name: "Books",
    items: [
      {
        name: "Sherlock Holmes",
        done: true,
      },
      {
        name: "The Old Man and the Sea",
        done: false,
      },
    ],
  },
  {
    name: "Films",
    items: [
      {
        name: "Annihilation",
        done: true,
      },
      {
        name: "Ex Machina",
        done: true,
      },
      {
        name: "Trainspotting",
        done: false,
      },
    ],
  },
  {
    name: "Technologies",
    items: [
      {
        name: "Python",
        done: true,
      },
      {
        name: "JavaScript",
        done: true,
      },
      {
        name: "React",
        done: true,
      },
      {
        name: "Vue",
        done: false,
      },
    ],
  },
];
