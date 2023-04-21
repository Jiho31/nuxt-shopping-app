<template>
  <div>
    <h1>Lifecycle of Vue</h1>
  </div>
</template>

<script>
export default {

  data() {
    return {
      name: 'Jiho Bok'
    }
  },

  beforeCreate() {
    console.log(this.name);
  },
  created() {
    alert('created');
  },
  beforeMount() {
    alert('beforeMount');
    
  },
  mounted() {
    alert('mounted');

  },
  beforeUpdate() {
    alert('beforeUpdate');

  },
  updated() {
    alert('updated');

  },
  beforeDestroy() {
    alert('beforeDestroy');
  },
  destroyed() {
    alert('destroyed');

  }
}
</script>

<style>

</style>