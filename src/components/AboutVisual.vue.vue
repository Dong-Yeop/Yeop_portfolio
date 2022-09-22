<template>
  <section>
    <div class="text-bg">
      <strong>WOULD YOU<br />LIKE TO<br />JOIN ME</strong>
    </div>
    <div class="gradient">
      <img src="@/assets/images/gradient/01.png" alt="circle" />
    </div>
    <div class="section-inner">
      <h2 class="sub-title">About me</h2>
      <p class="text">
        안녕하세요. 저는 누구보다 개발을 즐기고 재밌게 하고 싶은 이동엽입니다
        웹을 배우기 위해 학원을 수료하여 스타트업 회사에서 웹 퍼블리셔로 2년간
        근무 후에 독학으로 프론트엔드 개발자가 되기 위하여 노력 중에 있으며,
        Vue.js를 중점으로 공부 중에 있습니다 개발하는 모든 순간은 아니지만
        그래도 개발의 재미를 찾으려 노력하고 즐기는 개발자가 되려 합니다.
      </p>
      <div class="about-lottie clear">
        <LottieAnimation
          ref="anim"
          :animationData="require('@/assets/lottie/about_visual.json')"
          :loop="true"
        ></LottieAnimation>
      </div>
    </div>
  </section>
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
.section-inner {
  padding-top: 80px;
  padding-bottom: calc(90px + 46vw);
}
.sub-title {
  font-size: 24px;
}
.text {
  font-size: 14px;
  line-height: 160%;
  margin-top: 30px;
}
.about-lottie {
  max-width: 500px;
  margin: 0 auto;
}
.gradient {
  position: absolute;
  top: -155px;
  left: -236px;
}
.text-bg {
  text-align: right;
  position: absolute;
  bottom: 90px;
  left: 50%;
  transform: translateX(-51%);
}
.text-bg strong {
  display: block;
  font-size: 17.2vw;
  color: #111;
  white-space: nowrap;
}
/* 가로 해상도 768 이상 */
@media screen and (min-width: 768px) {
  .section-inner {
    padding-top: 100px;
    padding-bottom: 50px;
  }
  .sub-title {
    font-size: 30px;
  }
  .text {
    font-size: 20px;
    max-width: 560px;
  }
  .about-lottie {
    max-width: none;
    margin: 0;
  }
  .about-lottie > div {
    width: 350px;
    float: right;
    transform: translate(40px, -90px);
  }
  .gradient {
    top: -50px;
    left: -236px;
  }
  .text-bg {
    position: absolute;
    bottom: 140px;
    left: 50%;
    transform: translateX(calc(-50% - 282px));
    width: 732px;
  }
  .text-bg strong {
    font-size: 80px;
  }
}
/* 가로 해상도 1024 이상 */
@media screen and (min-width: 1024px) {
  .section-inner {
    padding-top: 150px;
    padding-bottom: 0;
  }
  .sub-title {
    font-size: 30px;
  }
  .text {
    max-width: 615px;
  }
  .about-lottie > div {
    width: 450px;
    transform: translate(50px, -270px);
  }
  .gradient {
    top: 0;
    left: -236px;
  }
  .text-bg {
    bottom: 140px;
    line-height: 104px;
    left: 50%;
    transform: translateX(calc(-50% - 190px));
    width: 732px;
  }
  .text-bg strong {
    font-size: 120px;
  }
}
/* 가로 해상도 1280 이상 */
@media screen and (min-width: 1280px) {
  .about-lottie {
    height: 500px;
  }
  .about-lottie > div {
    position: absolute;
    width: 600px;
    top: 100px;
    right: -50px;
    transform: translate(0, 0);
  }
  .gradient {
    width: 1200px;
    height: 696px;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
  }
  .gradient img {
    position: absolute;
    top: 0;
    left: -360px;
  }
  .text-bg {
    bottom: 206px;
    transform: translateX(calc(-50% - 350px));
  }
}
</style>
