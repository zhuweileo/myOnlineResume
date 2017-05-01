<template>
  <section id="Contact">
    <h2>Want to work with me?</h2>
    <div class="methods">
      <div class="wrapper">
        <i class="iconfont icon-email"><a href="mailto:zhuwei_leo@163.com">zhuwei_leo@163.com</a></i>
        <i class="iconfont icon-phone">18246690670</i>
      </div>
    </div>
    <div class="logos">
      <div class="wrapper">
        <i><a href="https://github.com/zhuweileo" target="_blank" class="iconfont icon-github"></a></i>
        <i><a href="http://wpa.qq.com/msgrd?v=3&uin=576998768&site=qq&menu=yes" target="_blank" class="iconfont icon-qq"></a></i>
        <i><a href="#" class="iconfont icon-weichat" @click.prevent="addme=true"></a></i>
        <i><a href="http://www.jianshu.com/u/8ab9cd297212" target="_blank" class="iconfont icon-jian"></a></i>
      </div>
    </div>
    <div class="btn"><a href="mailto:zhuwei_leo@163.com" class="button">get in touch</a></div>
    <div class="copyright">© Copyright 2017 朱维 personal portfolio</div>
    <div class="weixin" @click="addme=false" v-show="addme"><img @click.stop="" src="../assets/img/2Dcode.png" alt="扫一扫添加我"></div>
  </section>
</template>
<script>
export default {
    name:"Contact",
    data(){
        return {
            addme:false
        }
    }
}
</script>
<style lang="scss">
$text-active-c:#14b97d;
#Contact{
  background: $text-active-c;
  color:white;
  &:before{
    content:"";
    display:block;
    height:12vh;
    background: $text-active-c;
    transform:skewY(-3deg);
    transform-origin:0 0;
  }
  h2{
    font-size:30px;
    font-weight:700;
    text-transform: uppercase;

  }
  .methods{
    padding:40px;
    display:flex;
    justify-content: center;
    .wrapper{
      display:inline-block;
      i:first-child{
        margin-right:40px;
      }
    }
    i{
      font-size:22px;
      a{
        color:inherit;
        &:hover{
          text-decoration:underline;
        }
      }
      &:before{
        font-size:30px;
        vertical-align:top;
        margin-right:10px;
      }
    }
  }
  .logos{
    display:flex;
    justify-content: center;
    .wrapper{
      width:30vw;
      display:flex;
      justify-content: space-between;
    }
    a{
      display:inline-block;
      width:60px;
      height:60px;
      border:3px solid white;
      border-radius:50%;
      line-height:60px;
      color:inherit;
      transition:all .5s ease-in-out;
      &:before{
        font-size:30px;
      }
      &:hover{
        background: white;
        &:before{
          color: $text-active-c;
        }
      }
    }
  }
  .btn{
    padding-top:30px;
    padding-bottom:20px;
    a{
      border:1px solid white;
      transition:color .5s ease-out;
      text-transform:uppercase;
      &:before{
        background: white;
      }
      &:hover{
        color: $text-active-c;
      }
    }
  }
  .copyright{
    padding-bottom:100px;
  }
  .weixin{
    position:fixed;
    z-index:2;
    top:0;
    bottom:0;
    left:0;
    right:0;
    background: rgba(0,0,0,.2);
    display:flex;
    justify-content: center;
    align-items:center;
  }
}
</style>
