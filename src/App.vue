<template>
  <div id="app">
    <TopBar/>
    <Home/>
  </div>
</template>

<script>
import "./assets/css/reset.css"
import TopBar from "./components/TopBar.vue"
import Home from "./components/Home.vue"
export default {
  name: 'app',
  components:{TopBar,Home}
}
</script>

<style lang="scss">
$text-active-c:#14b97d;
#app {
  font-family:'Raleway',sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  height:100%;
}
.button{
  color:white;
  font-size:18px;
  border:1px solid $text-active-c;
  padding:15px 25px ;
  border-radius:3px;
  display:inline-block;
  position:relative;
  z-index:1;
  overflow: hidden;
  &:before{
    content:"";
    background:$text-active-c;
    position:absolute;
    width:150%;
    height:100%;
    top:0;
    left:-50%;
    z-index:-1;
    transform:rotate(-90deg);
    transform-origin:0 0;
    transition:transform .5s ease-in-out;
  }
  &:hover:before{
    transform:rotate(0deg);
  }
}
</style>
