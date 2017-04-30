<template>
<section id="About">
  <div class="holder">
    <h2>About<br></h2>
    <div class="tabs">
      <div class="tab"><a href="">profile</a><a href="">skills</a></div>
      <div class="tab-content">
        <div class="profile">
          <p>I'm Rakesh Dubai based UI/UX/Web Designer and Front-End Developer.</p>
          <p>I am able to work effectively in a team or on my Own. I have demonstrated an ability to lead small Teams and mentor other workers. I pride myself on being able to use my knowledge and initiative to deliver high quality results to tight deadlines. I enjoy a challenge and look for the opportunity to expand and develop my skill set.</p>
          <p>Some people call what I do User Experience Design, some call it Web design, some think I am a Front-End Developer, others see me as a UI Designer. I see what I do as a combination of all these things and ultimately don’t think it really matters which label you like to use.</p>
          <p>What does matter is the output of my work, which is always focused at the point where user, business and technical requirements meet and tends to become a perfect product.</p>
          <div class="btns">
            <a class="button" href="">Download PDF</a><a class="button" href="">Hire me</a>
          </div>
        </div>
        <div class="skills"></div>
      </div>
    </div>
  </div>

</section>
</template>
<script>
export default {
    name:"About"
}
</script>
<style lang="scss">
#About{
  &:before{
    content:"";
    display:block;
    height:15vh;
    background: #fff;
    transform:skewY(-3deg);
    transform-origin:0 0;
  }
  h2{
    font-size:50px;
    font-weight:700;
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
    }
  }
}
</style>
