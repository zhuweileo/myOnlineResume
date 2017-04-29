<template>
<header id="TopBar" >
  <div :class="{close:close}">
    <nav>
      <div class="holder">
        <a href="#HOME">HOME</a>
        <a href="#ABOUT">ABOUT</a>
        <a href="#WORKS">WORKS</a>
        <a href="#ARTICALS">ARTICALS</a>
        <a href="#GET IN TOUCH">GET IN TOUCH</a>
        <a href="#SELF-INTRO">SELF-INTRO</a>
      </div>
    </nav>
    <div class="nav-bar" @click="close=!close">
      <div class="toggle-bar"></div>
    </div>
  </div>
</header>
</template>
<script>
export default {
    name:"TopBar",
    data:function () {
        return {
            close:true
        }
    }
}
</script>
<style lang="scss">
$text-c:#7b7b7b;
$text-active-c:#14b97d;
#TopBar{
  .close{
    margin-top:-51px;
    .nav-bar{
      &:hover{
        .toggle-bar:before{background:$text-active-c}
        .toggle-bar:after{background:$text-active-c}
        .toggle-bar{background:$text-active-c}
      }
      .toggle-bar{
        @mixin wihte-line{
          height:5px;
          width:24px;
          background: #fff;
          position:absolute;
          border-radius:1px;
          display:block;
          transform:rotate(0deg);
          transition:all 0.5s ease-in;
        }
        @include wihte-line;
        top:16px;
        &:before{
          @include wihte-line;
          content:"";
          top:-9px;
        }
        &:after{
          @include wihte-line;
          content:"";
          top:9px;
        }
      }
    }
  }
  >div{
    transition:all 0.5s ease-in-out;
  }
  position:fixed;
  left:0;
  right:0;
  top:0;
  nav{
    background: #000;
    border-bottom:1px solid #555;
    .holder{
      padding:15px 0;
      a{
        color:$text-c;
        padding:0 20px 15px;
        font-size:16px;
        font-weight:700;
        transition:all 0.5s ease-in-out;
        &:hover{color:$text-active-c}
      }
    }
  }
  .nav-bar{
    background: #000;
    padding:12px;
    width:50px;
    height:40px;
    margin:0 auto;
    border:1px solid #555;
    border-top-color: #000;
    margin-top:-1px;
    border-radius:0 0 3px 3px;
    position:relative;
    text-align:center;
    cursor:pointer;
    .toggle-bar{
      @mixin x-line{
        content:"";
        display:block;
        height:5px;
        width:24px;
        top:16px;
        position:absolute;
        background:$text-active-c;
        border-radius:1px;
        transition:all 1s ease;
      }
      height:0;
      width:24px;
      position:absolute;
      top:0;
      &:before{
        @include x-line;
        transform:rotate(45deg)
      }
      &:after{
        @include x-line;
        transform:rotate(-45deg)
      }
    }
  }
}
</style>

