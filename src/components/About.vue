<template>
<section id="About">
  <div class="holder">
    <h2>About<br></h2>
    <div class="tabs">
      <div class="tab">
        <a v-for="item in items" :class="{active:selected===item}" href="" @click.prevent="selected=item">{{item}}</a>
      </div>
      <div class="tab-content">
        <transition name="fade">
          <div v-show="selected === 'profile'" class="profile">
            <p>我是<strong>朱维</strong>，一位有有灵魂的前端工程师！热爱前端，热爱编程，热爱调试BUG!</p>
            <p>有一年的前端开发经验，熟悉html/css/javascript，熟悉W3C标准，熟练使用Jquery等常用库，有一定的<strong>Vuejs</strong>使用经验，并且熟练使用webpack等前端工具；
了解ajax/http/BOM/DOM等前端相关知识；对js<strong>模块化</strong>、<strong>面向对象编程</strong>有一定理解；对各种前端新技术都充满了学习热情；具备基础的Photoshop使用能力，有一定的审美能力，喜欢思考如何使产品更加符合用户体验。</p>
            <p>我是一位性格幽默，做事认真的人。注重前端基本功的同时，对新兴技术有较大的热情，喜欢学习新技术，不单纯将技术作为工作需求，而是个人爱好；拥有认真负责的工作态度，
积极解决工作中遇到的各种困难；能够独立的解决问题，自我学习能力较强，能够在没有带领的情况下自我进步；较好的问题分析解决能力。</p>
            <p>我希望能得到一份<strong>前端工程师</strong>的工作。点击下方按钮可以下载我的个人PDF简历。</p>
            <div class="btns">
              <a class="button" href="/myOnlineResume/src/assets/pdf/朱维简历.pdf" target="_blank">Download PDF</a><a class="button" href="mailto:zhuwei_leo@163.com">Hire me</a>
            </div>
          </div>
        </transition>
        <transition name="fade">
          <div v-show="selected ==='skills'" class="skills">
            <div class="html">
              <!--<span>html</span>-->
              <div>html</div>
            </div>
            <div class="css">
              <!--<span>css</span>-->
              <div>css</div>
            </div>
            <div class="javascript">
              <!--<span>javascript</span>-->
              <div>javascript</div>
            </div>
            <div class="jquery">
              <!--<span>jquery</span>-->
              <div>jquery</div>
            </div>
            <div class="vue">
              <!--<span>vue</span>-->
              <div>vue</div>
            </div>
            <div class="webpack">
              <!--<span>webpack</span>-->
              <div>webpack</div>
            </div>
            <div class="photoshop">
              <!--<span>photoshop</span>-->
              <div>photoshop</div>
            </div>
          </div>
        </transition>
      </div>
    </div>
  </div>

</section>
</template>
<script>
export default {
    name:"About",
    data:function (){
        return {
            selected:"profile",
            items:["profile","skills"]
        }
    }
}
</script>
<style lang="scss">
$text-active-c:#14b97d;
.fade-enter-active, .fade-leave-active {
  transition: opacity 1.5s
}
.fade-enter, .fade-leave-active {
  opacity: 0
}
#About{
  &:before{
    content:"";
    display:block;
    height:12vh;
    background: #fff;
    transform:skewY(-3deg);
    transform-origin:0 0;
  }
  h2{
    font-size:50px;
    font-weight:700;
    text-transform: uppercase;
    &:after{
      content:"";
      display:block;
      height:3px;
      width:1.5em;
      background: #000;
      margin:0 auto;
    }
  }
  .tabs{
    .tab{
      margin-top:20px;
      .active{
        color: $text-active-c;
        &:after{
          background: $text-active-c;
          content:"";
          display:block;
          height:2px;
          width:100%;
          margin:0 auto;
          transition:all .5s;
          margin-top:2px;
        }
      }
      a{
        font-size:30px;
        font-weight:600;
        color:inherit;
        padding:30px;
        display:inline-block;
        &:after{
          content:"";
          display:block;
          height:2px;
          /*width:1.5em;*/
          width:0;
          background: #000;
          margin:0 auto;
          transition:all .5s;
          margin-top:2px;
        }
        &:hover:after{
          width:100%;
        }
      }
    }
    .tab-content{
      width:60%;
      height:100vh;
      margin:0 auto;
      position:relative;
      .profile{
        position:absolute;
        top:0;
        p{
          text-align:justify;
          padding-bottom:16px;
          font-size:20px;
        }
        .btns{
          margin-top:50px;
          a{
            margin-right:20px;
            color:#000;
            transition:color .5s;
            text-transform: uppercase;
            &:hover{color:white}
          }
        }
      }
      .skills{
        margin-top:20px;
        width:100%;
        position:absolute;
        top:0;
        >div{
          display:flex;
          justify-content:space-between;
          background: $text-active-c;
          height:25px;
          border-radius:3px;
          margin-bottom: 20px;
          line-height:25px;
          text-align:justify;
          padding-left:10px;
          color:white;
          font-weight:700;
          &:after{
            position:relative;
            right:-3em;
            color:black;
          }
        }
        .html{width:90%;&:after{content:"90%"}}
        .css{width:80%;&:after{content:"80%"}}
        .javascript{width:85%;&:after{content:"85%"}}
        .jquery{width:80%;&:after{content:"80%"}}
        .vue{width:70%;&:after{content:"70%"}}
        .webpack{width:60%;&:after{content:"60%"}}
        .photoshop{width:50%;&:after{content:"50%"}}
      }
    }
  }
}
</style>
