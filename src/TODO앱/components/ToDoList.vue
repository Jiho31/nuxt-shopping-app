<template>
  <div>
    <ToDo v-for="todo in todos" :key="todo.id" :todo="todo" />
  </div>
</template>

<script>
import ToDo from "./ToDo.vue";

export default {
  components: {
    ToDo,
  },
  props: {
    // todos: {
    //   type: Array,
    //   required: true,
    // }
  },
  computed: {
    todos() {
      return this.$store.state.todos;
    },
  },
  methods: {
    toggleCheckbox(value) {
      this.$emit("toggle-checkbox", value);
    },
    deleteTodo(todoId) {
      this.$emit("click-delete", todoId);
    },
  },
};
</script>

<style></style>
