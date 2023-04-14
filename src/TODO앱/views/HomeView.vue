<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <ToDo />
  </div>
</template>

<script>
import ToDo from '../components/ToDo.vue'
// @ is an alias to /src

export default {
  name: 'HomeView',
  components: {
    ToDo,
  }
}
</script>
