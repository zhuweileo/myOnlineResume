<template>
<section id="Work">
  <h2>Works</h2>
  <div class="holder">
    <div class="pro">
      <a href="">
        <div class="bg"></div>
        <div class="discribe">
          <h3>Resumer</h3>
          <p>在线简历生成器</p>
        </div>
      </a>
    </div>
    <div class="pro">
      <a href="">
        <div class="bg"></div>
        <div class="discribe">
          <h3>Tips</h3>
          <p>便利贴应用</p>
        </div>
      </a>
    </div>
    <div class="pro">
      <a href="">
        <div class="bg"></div>
        <div class="discribe">
          <h3>Music</h3>
          <p>在线音乐播放器</p>
        </div>
      </a>
    </div>
  </div>
</section>
</template>
<script>

</script>
<style lang="scss">
$text-active-c:#14b97d;
#Work{
  background: #000;
  padding-bottom:20vh;
  &:before{
    content:"";
    display:block;
    height:12vh;
    background: #000;
    transform:skewY(-3deg);
    transform-origin:0 0;
  }
  h2{
    font-size:50px;
    color:white;
    font-weight:700;
    text-transform: uppercase;
    margin-bottom:20px;
    &:after{
      content:"";
      display:block;
      height:3px;
      width:1.5em;
      background: $text-active-c;
      margin:0 auto;
    }
  }
  .holder{
    display:flex;
    justify-content: center;
    .pro{
      padding:50px 0;
      a{
        background: #fff;
        display:block;
        width:30vw;
        height:35vh;
        margin-right:10px;
        position:relative;
        &:hover{
          .discribe{opacity:1;}
        }
        .discribe{
          display:flex;
          justify-content: center;
          flex-direction:column;
          background: $text-active-c;
          color:white;
          position:absolute;
          top:0;
          bottom:0;
          left:0;
          right:0;
          opacity:0;
          transition:all .8s;
          h3{
            font-size:20px;
            font-weight:700;
          }
        }
      }
    }
  }
}
</style>
