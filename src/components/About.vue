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
            <p>选择前端的原因：最初是因为我喜欢排版，喜欢把杂乱的东西变得井井有条。然后发现前端并不都是排版啊！哈哈，但是依然热爱！</p>
            <p>有半年的前端开发经验，熟悉html/css/javascript，熟悉W3C标准，熟练使用Jquery等常用库，有一定的<strong>Vuejs</strong>使用经验，并且熟练使用webpack等前端工具；
了解ajax/http/BOM/DOM等前端相关知识；对js<strong>模块化</strong>、<strong>面向对象编程</strong>有一定理解；对<strong>Html+css布局</strong>工作较为敏感。</p>
            <p>我是一位性格幽默，做事认真的人。喜欢学习心得技术，良好的沟通理解能力，有一定独立解决问题的能力，而且有时间观念，能够在规定的时间内完成任务。</p>
            <p>我希望能得到一份<strong>初级前端工程师</strong>的工作，如果您觉得我是你要找的那个人请联系我！</p>
            <div class="btns">
              <a class="button" href="/myOnlineResume/src/assets/pdf/resume.pdf" target="_blank">Download PDF</a><a class="button" href="mailto:zhuwei_leo@163.com">Hire me</a>
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
