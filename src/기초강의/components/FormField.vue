<template>
  <div>
    <form>
      <label for="nameInput">이름을 변경하세요</label>
      <br/>
      <input id="nameInput" type="text" v-model="inputValue" />
      <br/>
      <button @click="updateInfo">Submit</button>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      inputValue: '',
    }
  },
  methods: {
    updateInfo(e) {
      e.preventDefault();
      this.$emit('update-info', this.inputValue);
    },
  }
}
</script>

<style>

</style>