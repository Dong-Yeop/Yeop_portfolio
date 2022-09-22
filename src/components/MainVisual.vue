<template>
  <main>
    <div class="move-text">
      <h3>HELLO, WORLD HELLO, WORLD HELLO, WORLD HELLO, WORLD HELLO, WORLD</h3>
    </div>
    <div class="scroll-down-lottie">
      <LottieAnimation
        ref="anim"
        :animationData="require('@/assets/lottie/scroll_down.json')"
        :loop="true"
      ></LottieAnimation>
    </div>
    <div class="main-inner">
      <div class="text">
        <h2>
          <p>Enjoying</p>
          <p>Front-end</p>
          <p>Developers</p>
        </h2>
      </div>
      <div class="main-lottie clear">
        <LottieAnimation
          ref="anim"
          :animationData="require('@/assets/lottie/main_visual.json')"
          :loop="true"
        ></LottieAnimation>
      </div>
    </div>
  </main>
</template>

<script>
import LottieAnimation from 'lottie-web-vue';

export default {
  components: {
    LottieAnimation,
  },
};
</script>

<style scoped>
main {
  background: url('@/assets/images/main_bg.jpg') no-repeat;
  background-size: cover;
  height: 100vh;
  min-height: 700px;
}
.move-text {
  position: absolute;
  top: 0;
  left: 0;
  transform: rotate(90deg);
  overflow: hidden;
  width: 100vh;
  height: 100vh;
}
.move-text h3 {
  position: absolute;
  left: 0;
  bottom: 8%;
  animation: marquee 90s linear infinite;
  -webkit-text-stroke: 1px #333;
  color: transparent;
  font-size: 33vw;
  font-weight: 900;
  white-space: nowrap;
  will-change: transform;
  /* text-shadow: -1px -1px 0 #333, 1px -1px 0 #333, -1px 1px 0 #333,
    1px 1px 0 #333;
  color: #0c0d0f; */
}
.main-inner {
  padding: 17vh 15px 0;
  position: relative;
}
.main-inner .text h2 {
  font-size: 55px;
  font-weight: 700;
}
.main-inner .text h2 p {
  opacity: 0;
}
.main-inner .text h2 p:nth-child(1) {
  animation: fadein 1s 0.3s ease-out forwards;
}
.main-inner .text h2 p:nth-child(2) {
  margin: 28px 0 15px;
  animation: fadein 1s 0.8s ease-out forwards;
}
.main-inner .text h2 p:nth-child(3) {
  animation: fadein 1s 1.3s ease-out forwards;
}
.main-lottie {
  margin-top: 8vh;
}
.main-lottie > div {
  width: 140%;
  max-width: 500px;
  position: relative;
  left: 50%;
  transform: translateX(-45%);
}
.scroll-down-lottie {
  position: absolute;
  bottom: 0;
  left: 50%;
  width: 80px;
  transform: translateX(-50%);
}

@keyframes marquee {
  from {
    transform: translateX(0);
  }
  to {
    transform: translateX(-50%);
  }
}
@keyframes fadein {
  0% {
    opacity: 0;
    transform: translateY(-30px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}

/* 가로 해상도 768 이상 */
@media screen and (min-width: 768px) {
  .move-text h3 {
    bottom: 110px;
    animation: marquee 90s linear infinite;
    font-size: 200px;
  }
  .main-inner {
    padding: 10vh 20px 0;
  }
  .main-inner .text h2 {
    font-size: 100px;
  }
  .main-inner .text h2 p:nth-child(2) {
    margin: 50px 0 24px;
  }
  .main-lottie {
    margin-top: 4vw;
  }
  .main-lottie > div {
    float: right;
    width: 600px;
    max-width: none;
    position: static;
    transform: translateX(140px);
  }
}
/* 가로 해상도 1024 이상 */
@media screen and (min-width: 1024px) {
  .move-text {
    transform: rotate(0);
    width: 100vw;
    height: 100vh;
  }
  .move-text h3 {
    bottom: 156px;
    animation: marquee 120s linear infinite;
    font-size: 220px;
  }
  .main-inner {
    padding: 23vh 20px 0;
    height: 100vh;
  }
  .main-inner .text h2 p:nth-child(2) {
    margin: 70px 0 40px;
  }
  .main-lottie {
    position: absolute;
    top: 45%;
    right: -170px;
    transform: translateY(-50%);
    margin-top: 0;
  }
  .main-lottie > div {
    width: 740px;
    transform: translateX(0);
  }
}
/* 가로 해상도 1280 이상 */
@media screen and (min-width: 1280px) {
  .move-text h3 {
    bottom: 46.875%;
    font-size: 290px;
  }
  .main-inner {
    padding: 20vh 50px 0;
    max-width: 1720px;
    margin: 0 auto;
  }
  .main-inner .text h2 {
    font-size: 10vw;
  }
  .main-lottie {
    top: 50%;
    right: 0;
  }
  .main-lottie > div {
    width: 800px;
    transform: translateX(20%);
  }
}
/* 가로 해상도 1600 이상 */
@media screen and (min-width: 1600px) {
  .main-inner .text h2 {
    font-size: 9vw;
  }
}
/* 가로 해상도 1920 이상 */
@media screen and (min-width: 1920px) {
  .main-inner {
    padding: 14.6vh 0 0;
  }
  .main-inner .text h2 {
    font-size: 160px;
  }
  .main-inner .text h2 p:nth-child(2) {
    margin: 80px 0 40px;
  }
  .main-lottie {
    top: 60%;
    right: 0;
  }
  .main-lottie > div {
    width: 940px;
    transform: translateX(22%);
  }
}
</style>
