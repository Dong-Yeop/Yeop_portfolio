<template>
  <section>
    <div class="text-bg">
      <strong>WOULD YOU LIKE TO JOIN ME WOULD YOU LIKE TO JOIN ME</strong>
    </div>
    <img
      class="gradient03"
      src="@/assets/images/gradient/03.png"
      alt="circle"
    />
    <img
      class="gradient04"
      src="@/assets/images/gradient/04.png"
      alt="circle"
    />
    <div class="section-inner">
      <h2 class="sub-title">CONTACT</h2>
      <ul class="contact-list">
        <li>
          <p><span>Email</span></p>
          <a href="email:ehdduq531@naver.com">ehdduq531@naver.com</a>
        </li>
        <li>
          <p><span>Github</span></p>
          <a href="https://github.com/Dong-Yeop" target="_blank"
            >https://github.com/Dong-Yeop</a
          >
        </li>
        <li>
          <p><span>Instagram</span></p>
          <a href="https://www.instagram.com/yeo_bee_" target="_blank"
            >https://www.instagram.com/yeo_bee_</a
          >
        </li>
      </ul>
      <div class="contact-lottie">
        <LottieAnimation
          ref="anim"
          :animationData="require('@/assets/lottie/contact_visual.json')"
          :loop="true"
        ></LottieAnimation>
      </div>
    </div>
    <AppFooter></AppFooter>
  </section>
</template>

<script>
import LottieAnimation from 'lottie-web-vue';
import AppFooter from '@/components/common/AppFooter.vue';

export default {
  components: {
    LottieAnimation,
    AppFooter,
  },
};
</script>

<style scoped>
.section-inner {
  padding-top: 80px;
}
.sub-title {
  font-size: 40px;
  font-weight: 700;
  margin-bottom: 50px;
}
.contact-lottie {
  max-width: 500px;
  margin: 55px auto 0;
}
.gradient03 {
  width: 500px;
  position: absolute;
  top: 20px;
  left: -168px;
}
.gradient04 {
  position: absolute;
  top: 280px;
  right: -288px;
}
.text-bg {
  text-align: right;
  position: absolute;
  top: 470px;
  left: 0;
}
.text-bg strong {
  display: block;
  font-size: 80px;
  color: #111;
  white-space: nowrap;
  animation: marquee 90s linear infinite;
  will-change: transform;
}
@keyframes marquee {
  from {
    transform: translateX(0);
  }
  to {
    transform: translateX(-50%);
  }
}
.contact-list {
  font-size: 16px;
}
.contact-list li + li {
  margin-top: 54px;
}
.contact-list p {
  margin-bottom: 24px;
}
.contact-list p span {
  position: relative;
}
.contact-list p span::after {
  content: '';
  display: block;
  width: 100%;
  height: 1px;
  position: absolute;
  bottom: -2px;
  left: 0;
  background: #fff;
}

/* 가로 해상도 768 이상 */
@media screen and (min-width: 768px) {
  .section-inner {
    padding-top: 100px;
    padding-bottom: 290px;
  }
  .sub-title {
    font-size: 60px;
    margin-bottom: 80px;
  }
  .contact-lottie {
    max-width: 350px;
    margin: 0;
    position: absolute;
    top: 220px;
    right: -60px;
  }
  .gradient03 {
    width: 800px;
    top: 0;
    left: -300px;
  }
  .gradient04 {
    position: absolute;
    top: 280px;
    right: -288px;
  }
  .text-bg {
    text-align: right;
    position: absolute;
    top: 640px;
    left: 0;
  }
  .text-bg strong {
    font-size: 120px;
    animation: marquee 120s linear infinite;
  }
  .contact-list {
    font-size: 20px;
  }
  .contact-list li + li {
    margin-top: 50px;
  }
  .contact-list p {
    margin-bottom: 20px;
  }
}
/* 가로 해상도 1024 이상 */
@media screen and (min-width: 1024px) {
  .section-inner {
    padding-top: 150px;
    padding-bottom: 220px;
  }
  .sub-title {
    font-size: 100px;
    margin-bottom: 60px;
  }
  .contact-lottie {
    top: 280px;
    right: 0;
  }
  .gradient03 {
    width: 1040px;
    top: -200px;
    left: -400px;
  }
}
/* 가로 해상도 1280 이상 */
@media screen and (min-width: 1280px) {
  .section-inner {
    padding-top: 120px;
    padding-bottom: 250px;
  }
  .contact-lottie {
    max-width: 450px;
    top: 220px;
    right: 0;
  }
  .gradient03 {
    top: -100px;
  }
  .gradient04 {
    top: 100px;
  }
  .text-bg {
    top: 610px;
  }
}
</style>
