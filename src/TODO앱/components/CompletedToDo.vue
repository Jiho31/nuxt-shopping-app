<template>
  <!-- eslint-disable-next-line vue/max-attributes-per-line -- Here's a description about why this disabling is necessary. -->
  <div>
    <div>Completed Todo: {{ numberOfCompletedTodo }}</div>
  </div>
</template>

<script>
export default {
  computed: {
    todos() {
      return this.$store.state.todos;
    },
    numberOfCompletedTodo() {
      return this.todos.filter((todo) => todo.checked).length;
    },
  },
};
</script>
