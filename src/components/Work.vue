<template>
  <section id="Work">
    <h2>Works</h2>
    <div class="holder">
      <div class="pro" v-for="item in works">
        <a :href="item.url" target="_blank">
          <div class="bg"></div>
          <div class="discribe">
            <h3>{{item.h3}}</h3>
            <p>{{item.p}}</p>
          </div>
        </a>
      </div>
    </div>
  </section>
</template>
<script>
  import works from "../assets/discribe/works"
  export default {
    name: "Work",
    data(){
        return {
            works:works
        }
    }
  }
</script>
<style lang="scss">
  $text-active-c: #14b97d;
  #Work {
    background: #000;
    padding-bottom: 20vh;
    &:before {
      content: "";
      display: block;
      height: 12vh;
      background: #000;
      transform: skewY(-3deg);
      transform-origin: 0 0;
    }
    h2 {
      font-size: 50px;
      color: white;
      font-weight: 700;
      text-transform: uppercase;
      margin-bottom: 100px;
      &:after {
        content: "";
        display: block;
        height: 3px;
        width: 1.5em;
        background: $text-active-c;
        margin: 0 auto;
      }
    }
    .holder {
      display: flex;
      justify-content: center;
      flex-wrap: wrap;
      /*width: 100%;*/
      min-width:30vw;
      .pro {
        &:first-child a {
          background-image: url(../assets/img/resumer.jpg)
        }
        &:nth-child(2) a {
          background-image: url(../assets/img/tips.jpg)
        }
        &:nth-child(3) a {
          background-image: url(../assets/img/music.jpg)
        }
        &:nth-child(4) a {
          background-image: url(../assets/img/lunbo.png)
        }
        &:nth-child(5) a {
          background-image: url(../assets/img/ToDoList.jpg)
        }
        &:nth-child(6) a {
          background-image: url(../assets/img/warcraft.jpg)
        }
        a {
          background-position: center;
          background-repeat: no-repeat;
          background-size: cover;
          display: block;
          width: 30vw;
          height: 35vh;
          margin-right: 10px;
          margin-bottom:20px;
          position: relative;
          &:hover {
            .discribe {
              opacity: 1;
            }
          }
          .discribe {
            display: flex;
            justify-content: center;
            flex-direction: column;
            background: $text-active-c;
            color: white;
            position: absolute;
            top: 0;
            bottom: 0;
            left: 0;
            right: 0;
            opacity: 0;
            transition: all .8s;
            h3 {
              font-size: 20px;
              font-weight: 700;
            }
          }
        }
      }
    }
  }
</style>
