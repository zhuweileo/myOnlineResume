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
            <p>I'm Rakesh Dubai based UI/UX/Web Designer and Front-End Developer.</p>
            <p>I am able to work effectively in a team or on my Own. I have demonstrated an ability to lead small Teams and mentor other workers. I pride myself on being able to use my knowledge and initiative to deliver high quality results to tight deadlines. I enjoy a challenge and look for the opportunity to expand and develop my skill set.</p>
            <p>Some people call what I do User Experience Design, some call it Web design, some think I am a Front-End Developer, others see me as a UI Designer. I see what I do as a combination of all these things and ultimately don’t think it really matters which label you like to use.</p>
            <p>What does matter is the output of my work, which is always focused at the point where user, business and technical requirements meet and tends to become a perfect product.</p>
            <div class="btns">
              <a class="button" href="/src/assets/pdf/resume.pdf" target="_blank">Download PDF</a><a class="button" href="mailto:zhuwei_leo@163.com">Hire me</a>
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
      .profile{
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
            &:hover{color:white}
          }
        }
      }
      .skills{
        margin-top:20px;
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
