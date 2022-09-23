<template>
  <section>
    <img
      class="gradient01"
      src="@/assets/images/gradient/02.png"
      alt="circle"
    />
    <img
      class="gradient02"
      src="@/assets/images/gradient/05.png"
      alt="circle"
    />
    <div class="section-inner clear" id="gsapContainer">
      <h2 class="sub-title">Project</h2>
      <div
        class="fixed-box"
        :class="{ active1: textFixed1, active2: textFixed2 }"
      >
        <div class="f-container">
          <ul class="text-list">
            <li>
              <img src="@/assets/images/project/project_01.png" alt="website" />
              <h3><span class="blind">Hacker News</span></h3>
              <p>
                <span class="blind">
                  Vue.js를 사용하여 hacker news 페이지를 구현 하였습니다 api로
                  가져온 데이터는 vuex를 사용하여 관리 및 출력하였으며, 스크롤을
                  최하단 지점에 도달할 경우 api를 호출하여 추가로 데이터를
                  불러오는 무한 스크롤을 적용하였습니다.
                </span>
              </p>
              <small>
                <a
                  href="https://github.com/Dong-Yeop/hacker-news"
                  target="_blank"
                  class="github blind"
                >
                  <i></i>
                  <span>GitHub</span>
                </a>
                <a
                  href="https://dynamic-valkyrie-a6a7f2.netlify.app"
                  target="_blank"
                  class="link blind"
                >
                  <i></i>
                  <span>Page View</span>
                </a>
              </small>
            </li>
            <li>
              <img src="@/assets/images/project/project_02.png" alt="website" />
              <h3><span class="blind">학습 노트 애플리케이션</span></h3>
              <p>
                <span class="blind">
                  로그인하여 게시판 형태로 글을 작성할 수 있는
                  애플리케이션입니다 Vue.js를 사용하여 구현하였으며 인강에서
                  제공받은 REST API를 Swagger 툴을 이용하여 보다 쉽게 API를
                  이해하고 사용하였습니다 API 서버 배포는 heroku를 사용하였고
                  데이터 베이스는 MongoDB Cloud 서비스를 이용하였습니다.
                </span>
              </p>
              <small>
                <a
                  href="https://github.com/Dong-Yeop/vue-til"
                  target="_blank"
                  class="github blind"
                >
                  <i></i>
                  <span>GitHub</span>
                </a>
                <a
                  href="https://vermillion-gecko-f9ddcc.netlify.app"
                  target="_blank"
                  class="link blind"
                >
                  <i></i>
                  <span>Page View</span>
                </a>
              </small>
            </li>
            <li>
              <img src="@/assets/images/project/project_03.png" alt="website" />
              <h3><span class="blind">대원미디어 리뉴얼</span></h3>
              <p>
                <span class="blind">
                  대원미디어의 웹 사이트 리뉴얼 프로젝트의 퍼블리싱 업무를 외주
                  받아 프리랜서로 참여하게 되었습니다 html, css 하드코딩으로
                  작업 진행하였습니다.
                </span>
              </p>
              <small>
                <a href="#" target="_blank" class="link blind">
                  <i></i>
                  <span>Page View</span>
                </a>
              </small>
            </li>
            <li>
              <img src="@/assets/images/project/project_04.png" alt="website" />
              <h3><span class="blind">동아출판</span></h3>
              <p>
                <span class="blind">
                  2020.05 ~ 2022.05 기간 동안 동아출판의 기획자, 디자이너,
                  개발자와 온라인으로 커뮤니케이션 진행하며 동아출판의 각
                  브랜드(티동아, 북동아, 두클래스, 엠동아 등등) 웹 사이트의 유지
                  보수를 진행하였습니다 jsp로 구성된 사이트에 붙어서 html, css,
                  javascript, jquery를 수정 및 보완하였습니다.
                </span>
              </p>
            </li>
            <li>
              <img src="@/assets/images/project/project_05.png" alt="website" />
              <h3><span class="blind">브이클라우드</span></h3>
              <p>
                <span class="blind">
                  브이클라우드는 클라우드 통합 관리 플랫폼으로 기업을 위한
                  서비스 매니지먼트 플랫폼이며, 대시보드 형태의 웹
                  애플리케이션으로 대략 50~60페이지를 하드코딩으로 작업
                  진행하였습니다.
                </span>
              </p>
            </li>
          </ul>
        </div>
        <strong class="glowing clear"><span>PROJECT</span></strong>
      </div>
      <ul class="img-list" ref="fBox">
        <li class="website">
          <img src="@/assets/images/project/project_01.png" alt="website" />
        </li>
        <li class="website">
          <img src="@/assets/images/project/project_02.png" alt="website" />
        </li>
        <li class="website">
          <img src="@/assets/images/project/project_03.png" alt="website" />
        </li>
        <li class="website">
          <img src="@/assets/images/project/project_04.png" alt="website" />
        </li>
        <li class="website">
          <img src="@/assets/images/project/project_05.png" alt="website" />
        </li>
      </ul>
    </div>
  </section>
</template>

<script>
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

export default {
  data() {
    return {
      textFixed1: false,
      textFixed2: false,
    };
  },
  methods: {
    onScroll() {
      let wst = window.scrollY;
      let fBoxTop =
        this.$refs.fBox.getBoundingClientRect().top + window.scrollY;
      let boxH = this.$refs.fBox.clientHeight - window.innerHeight;

      if (wst >= fBoxTop && wst <= fBoxTop + boxH) {
        // console.log('active');
        this.textFixed1 = true;
      } else {
        // console.log('no');
        this.textFixed1 = false;
      }
      if (wst >= fBoxTop + boxH) {
        this.textFixed2 = true;
      } else {
        this.textFixed2 = false;
      }
    },
    scrollAnimation() {
      const headings = gsap.utils.toArray('li.website');

      headings.forEach((title, index) => {
        gsap.to(title, {
          scrollTrigger: {
            trigger: title,
            start: 'top center',
            end: 'bottom center',
            scrub: 1,
            markers: false,
            toggleClass: {
              targets: '#gsapContainer',
              className: 'ani0' + index,
            },
          },
        });
      });
    },
  },
  mounted() {
    window.addEventListener('scroll', this.onScroll);
    this.scrollAnimation();
  },
  beforeDestroy() {
    window.removeEventListener('scroll', this.onScroll);
  },
};
</script>

<style scoped>
.section-inner {
  padding-top: 60px;
  padding-bottom: 100px;
}
.sub-title {
  font-size: 30px;
  text-align: center;
  margin-bottom: 50px;
}
.gradient01 {
  position: absolute;
  top: 0;
  left: -236px;
}
.gradient02 {
  position: absolute;
  top: 1000px;
  right: -600px;
}
.img-list {
  display: none;
}

.text-list li + li {
  margin-top: 120px;
}
.text-list img {
  display: block;
  width: 100%;
  max-width: 500px;
  margin: 0 auto;
}
.text-list h3 {
  font-size: 22px;
  font-weight: 500;
  margin: 30px 0 20px;
  overflow: hidden;
}
.text-list p {
  font-size: 14px;
  line-height: 180%;
  color: rgba(255, 255, 255, 0.8);
  margin-bottom: 30px;
}
.text-list small {
  display: flex;
  overflow: hidden;
}
.text-list small a {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 40px;
  border: 1px solid #fff;
  border-radius: 10px;
  padding: 0 12px;
  font-size: 20px;
}
.text-list small a + a {
  margin-left: 14px;
}
.text-list small i {
  display: block;
  width: 24px;
  height: 24px;
  margin-right: 5px;
}
.text-list small .github i {
  background: url('@/assets/images/project/github_icon.svg') no-repeat 0 0 /
    contain;
}
.text-list small .link i {
  background: url('@/assets/images/project/link_icon.svg') no-repeat 0 0 /
    contain;
}
.glowing {
  display: none;
}
/* 가로 해상도 768 이상 */
@media screen and (min-width: 768px) {
  .section-inner {
    padding-top: 0;
    padding-bottom: 0;
  }
  .sub-title {
    width: 100%;
    margin-bottom: 0;
    transform: translateY(100px);
  }
  .gradient01 {
    top: 100px;
    left: -60px;
  }
  .gradient02 {
    top: 500px;
    right: -600px;
  }
  .img-list {
    display: block;
    float: right;
    width: 50%;
    padding-left: 10px;
    padding-top: 150px;
    padding-bottom: 200px;
  }
  .img-list img {
    display: block;
    width: 100%;
    transition: box-shadow 0.5s ease;
  }
  .img-list li {
    padding: 150px 0 200px;
    opacity: 0.15;
    transition: opacity 0.5s ease;
  }
  #gsapContainer.ani00 .img-list li:nth-child(1),
  #gsapContainer.ani01 .img-list li:nth-child(2),
  #gsapContainer.ani02 .img-list li:nth-child(3),
  #gsapContainer.ani03 .img-list li:nth-child(4),
  #gsapContainer.ani04 .img-list li:nth-child(5) {
    opacity: 1;
  }
  #gsapContainer.ani00 .img-list li:nth-child(1) img,
  #gsapContainer.ani01 .img-list li:nth-child(2) img,
  #gsapContainer.ani02 .img-list li:nth-child(3) img,
  #gsapContainer.ani03 .img-list li:nth-child(4) img,
  #gsapContainer.ani04 .img-list li:nth-child(5) img {
    border-radius: 20px;
    box-shadow: 0px 0px 20px 10px rgba(255, 150, 0, 0.2);
  }
  .fixed-box {
    float: left;
    width: 50%;
    height: 100vh;
    position: relative;
  }
  .fixed-box.active1 {
    position: fixed;
    top: 0;
    right: 50%;
    width: 364px;
  }
  .fixed-box.active2 {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 50%;
  }
  .fixed-box .f-container {
    position: absolute;
    top: 50%;
    left: 0;
    transform: translateY(-50%);
    width: 100%;
    padding-bottom: 100px;
  }
  .text-list {
    padding-right: 10px;
  }
  .text-list li + li {
    margin-top: 0;
  }
  .text-list li {
    display: none;
  }
  .text-list img {
    display: none;
  }
  .text-list h3 {
    font-size: 24px;
    margin: 0;
  }
  .text-list h3 span {
    display: block;
  }
  .text-list p {
    font-size: 16px;
    margin: 20px 0 30px;
    overflow: hidden;
  }
  .text-list p span {
    display: block;
  }
  .glowing {
    position: absolute;
    left: 0;
    bottom: 20%;
    display: block;
    padding-right: 30px;
    opacity: 0;
    transition: opacity 1s ease;
    /* transition-delay: 1s; */
  }
  .glowing span {
    float: right;
    white-space: nowrap;
    font-size: 70px;
    text-shadow: 0 0 5px #fff, 0 0 20px #fff, 0 0 30px #a18b68, 0 0 40px #a18b68,
      0 0 50px #a18b68, 0 0 60px #a18b68, 0 0 70px #a18b68;
  }
  #gsapContainer[class*='ani'] .glowing {
    opacity: 1;
  }

  #gsapContainer.ani00 .text-list li:nth-child(1),
  #gsapContainer.ani01 .text-list li:nth-child(2),
  #gsapContainer.ani02 .text-list li:nth-child(3),
  #gsapContainer.ani03 .text-list li:nth-child(4),
  #gsapContainer.ani04 .text-list li:nth-child(5) {
    display: block;
  }
  #gsapContainer.ani00 .text-list li:nth-child(1) .blind,
  #gsapContainer.ani01 .text-list li:nth-child(2) .blind,
  #gsapContainer.ani02 .text-list li:nth-child(3) .blind,
  #gsapContainer.ani03 .text-list li:nth-child(4) .blind,
  #gsapContainer.ani04 .text-list li:nth-child(5) .blind {
    animation: text-active-animation 1.3s cubic-bezier(0.4, 0, 0.2, 1) both;
  }

  @keyframes text-active-animation {
    from {
      opacity: 0;
      -webkit-transform: translateY(50px);
      transform: translateY(50px);
    }
    to {
      opacity: 1;
      -webkit-transform: translateY(0);
      transform: translateY(0);
    }
  }
}
/* 가로 해상도 1024 이상 */
@media screen and (min-width: 1024px) {
  .sub-title {
    transform: translateY(100px);
  }
  .img-list {
    padding-left: 0;
    width: 400px;
  }
  .fixed-box.active1 {
    width: 492px;
  }
  .text-list h3 {
    font-size: 24px;
    margin: 0;
  }
  .text-list h3 span {
    display: block;
  }
  .text-list p {
    font-size: 20px;
    margin: 20px 0 50px;
  }
  .glowing {
    bottom: 18%;
    padding-right: 0;
  }
  .glowing span {
    float: none;
    font-size: 80px;
  }
}
/* 가로 해상도 1280 이상 */
@media screen and (min-width: 1280px) {
  .sub-title {
    transform: translateY(100px);
  }
  .img-list {
    width: 500px;
  }
  .fixed-box.active1 {
    width: 600px;
  }
}
</style>
