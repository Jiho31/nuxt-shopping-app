<template>
  <div>
    <p>
      {{ name }} ~~🏷
    </p>
    <button @click="updateName">Click</button>
  </div>
</template>

<script>

export default {
  props: {
    name: {
      type: String,
      required: false,
      default: 'Default name tag'
    }
  },
  data() {
    return {
      // name: 'Jiho Bok',
    }
  },
  methods: {
    updateName() {
      // this.name = `${this.name} Updated`;
      // this.name = `Name Updated`;
      console.log('name update');
    }
  }
}
</script>

<style scoped>

</style>