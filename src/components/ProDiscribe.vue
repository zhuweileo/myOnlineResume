<template>
<section id="ProDiscribe">
  <div class="holder">
    <div v-for="(value,pro) in pros" class="discribe" v-show="show===pro" @mouseover="stop" @mouseout="run">
      <h1>{{pro}}</h1>
      <p>{{value}}</p>
    </div>
    <ul class="tab">
      <li v-for="(value,pro) in pros" :class="pro"></li>
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
            timer:null
        }
    },
    created(){
        run();
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
  .holder{
    .discribe{}
    .tab{
      display:flex;
      justify-content: center;
      li{
        list-style:none;
        width:20px;
        height:20px;
        border:1px solid $text-active-c;
        border-radius:50%;
        margin-left:40px;
      }
    }
  }
}
</style>
