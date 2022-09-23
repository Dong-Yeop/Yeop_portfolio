<template>
  <footer>
    <div class="footer-inner">
      <h2 class="footer-logo">YEOP</h2>
      <p class="copyright">© 2022 <span>Yeop</span> All right reserved.</p>
      <button class="top-btn" v-scroll-to="'#app'">
        <LottieAnimation
          ref="anim"
          :animationData="require('@/assets/lottie/top_btn.json')"
          :loop="true"
        ></LottieAnimation>
      </button>
    </div>
  </footer>
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
footer {
  border-top: 1px solid #222;
}
.footer-inner {
  position: relative;
  height: 150px;
  padding-top: 20px;
  text-align: center;
}
.footer-logo {
  font-size: 24px;
  font-weight: 700;
  color: #666;
}
.copyright {
  font-size: 12px;
  color: #555;
  margin-top: 20px;
}
.copyright span {
  color: #aaa;
}
.top-btn {
  cursor: pointer;
  position: absolute;
  width: 50px;
  top: 6px;
  right: 10px;
}
/* 가로 해상도 768 이상 */
@media screen and (min-width: 768px) {
  .footer-inner {
    padding-top: 0;
    margin: 0 20px;
    max-width: 1200px;
  }
  .footer-logo {
    font-size: 30px;
    position: absolute;
    top: 50%;
    left: 0;
    transform: translateY(-50%);
  }
  .copyright {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-size: 14px;
    margin-top: 0;
  }
  .top-btn {
    width: 60px;
    top: 50%;
    transform: translateY(-50%);
    right: -10px;
  }
}
/* 가로 해상도 1280 이상 */
@media screen and (min-width: 1280px) {
  .footer-inner {
    margin: 0 auto;
  }
}
</style>
