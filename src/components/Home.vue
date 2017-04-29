<template>
  <div id="Home">
    <div class="content">
      <h1 class="fade-in one">I’m <strong>ZHUWEI</strong></h1>
      <p class="fade-in two">Web UI/UX Designer and Front End Developer Based in Dubai, UAE.<br>
        Take a look at some of my works, and if you like them, feel free to contact me. <br>
        Let’s create something WOW!
      </p>
      <a href="#WORK" class="button fade-in three">VIEW MY WORK</a>
    </div>
    <div class="scroll-down">
      <i class="iconfont icon-xiangxia animated infinite bounce"></i>
    </div>
  </div>
</template>
<script>
export default {
    name:"Home"
}
</script>
<style lang="scss">
$text-active-c:#14b97d;
#Home{
  height:100vh;
  background: url(../assets/img/me-overlay.png) repeat 0 0 fixed,url(../assets/img/bg-black2.jpg) no-repeat center fixed;
  background-size:auto,cover;
  padding:150px 0 0 0;
  color:white;
  font-weight:100;
  .fade-in{
    animation-name:fadeInUp;
    animation-fill-mode:both;
    animation-duration:1s;
    opacity:0;
  }
  .one{
    animation-delay:1s;
  }
  .two{
    animation-delay:1.2s;
  }
  .three{
    animation-delay:1.4s;
  }
  h1{
    font-family:'Raleway',sans-serif;
    font-size:12vw;
    line-height:1em;
    strong{color:$text-active-c;font-weight:800;}
  }
  p{
    font-size:2vw;
    font-weight:inherit;
    padding-top:20px;
    padding-bottom:40px;
  }
  .scroll-down{
    padding-top:40px;
    /*.bounce{*/
      /*animation-name: bounce;*/
      /*transform-origin:center bottom;*/
    /*}*/
    .icon-xiangxia{
      display:inline-block;
      cursor: pointer;
    }
    .icon-xiangxia:before{
      content: "\e734";
      font-size:45px;
    }
  }
}
</style>
