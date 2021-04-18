<template>
  <img alt="Vue logo" src="./assets/logo.png">
  <postComponent />
</template>

<script>
import postComponent from './components/postComponent'

export default {
  name: 'App',
  components: {
     postComponent
  }
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
