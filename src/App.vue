<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link>
      <span> | </span>
      <router-link to="/about">About Page</router-link>
      <span> | </span>
      <router-link to="/lifecycle">Lifecycle</router-link>
    </div>
    <router-view />
  </div>
</template>

<script>
import router from './기초강의/router'

export default {
  name: 'App',
  router
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
