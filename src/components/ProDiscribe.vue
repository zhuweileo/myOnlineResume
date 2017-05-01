<template>
<section id="ProDiscribe">
  <div class="holder" @mouseover="stop" @mouseout="run">
    <div v-for="(value,pro) in pros" class="discribe" v-show="show===pro">
      <h2>{{pro}}</h2>
      <p>{{value}}</p>
    </div>
    <ul class="tab">
      <li v-for="(value,pro) in pros" :class="{active:show===pro} " @click="show=pro"></li>
    </ul>
  </div>
</section>
</template>
<script>
import pros from "../assets/discribe/discribe"
export default {
    name:"ProDiscribe",
    data(){
        return {
            show:"resumer",
            pros:pros,
            timer:0
        }
    },
    created(){
//        this.run();
    },
    methods:{
        stop(){
            clearInterval(this.timer)
        },
        run(){
          var props = [];
          var index = 0;
          props= Object.keys(pros);
          this.timer = setInterval(()=>{
            this.show = props[index];
            index+=1;
            if(index>=3) index = 0;
          },1000)
        }
    }
}
</script>
<style lang="scss">
$text-active-c:#14b97d;
#ProDiscribe{
  &:before{
    content:"";
    display:block;
    height:12vh;
    background: #fff;
    transform:skewY(-3deg);
    transform-origin:0 0;
  }
  .holder{

    .discribe{
      width:60vw;
      height:45vh;
      margin:0 auto;
      h2{
        font-size:50px;
        color:black;
        font-weight:700;
        text-transform: uppercase;
        margin-bottom:20px;
        &:after{
          content:"";
          display:block;
          height:3px;
          width:1.5em;
          background: black;
          margin:0 auto;
        }
      }
      p{
        padding-top:10px;
        font-size:22px;
        line-height:1.5em;
      }
    }
    .tab{
      display:flex;
      justify-content: center;
      li{
        list-style:none;
        width:14px;
        height:14px;
        border-radius:50%;
        background: #d5e0dc;
        cursor:pointer;
      }
      li:nth-child(2){
        margin:0 20px;
      }
      .active{
        background: $text-active-c;
      }
    }
  }
}
</style>
