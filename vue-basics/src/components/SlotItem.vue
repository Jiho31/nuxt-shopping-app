<template>
  <div>
    <h2>Welcome to {{ name }}'s page!</h2>
    <slot name="info"></slot>
    <slot name="body"></slot>
    <slot></slot>
    <slot></slot>
  </div>
</template>

<script>
export default {
  props: {
    name: {
      type: String,
      required: true,
    }
  }
}
</script>

<style>

</style>