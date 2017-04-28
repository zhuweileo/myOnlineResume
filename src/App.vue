<template>
  <div id="app">
    <TopBar/>
  </div>
</template>

<script>
import "./assets/css/reset.css"
import TopBar from "./components/TopBar.vue"
export default {
  name: 'app',
  components:{TopBar}
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
