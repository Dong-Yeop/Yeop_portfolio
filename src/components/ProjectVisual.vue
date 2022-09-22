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
    <div class="section-inner clear">
      <h2 class="sub-title">Project</h2>
      <div
        class="fixed-box"
        :class="{ active1: textFixed1, active2: textFixed2 }"
      >
        <div class="f-container">
          <ul class="text-list">
            <li class="on">
              <img src="@/assets/images/project/project_01.png" alt="website" />
              <h3>Hacker News</h3>
              <p>
                Vue.js를 사용하여 hacker news 페이지를 구현 하였습니다 api로
                가져온 데이터는 vuex를 사용하여 관리 및 출력하였으며, 스크롤을
                최하단 지점에 도달할 경우 api를 호출하여 추가로 데이터를
                불러오는 무한 스크롤을 적용하였습니다
              </p>
              <small>
                <a href="#" target="_blank" class="github">
                  <i></i>
                  <span>GitHub</span>
                </a>
                <a href="#" target="_blank" class="link">
                  <i></i>
                  <span>Page View</span>
                </a>
              </small>
            </li>
            <li>
              <img src="@/assets/images/project/project_02.png" alt="website" />
              <h3>학습 노트 애플리케이션</h3>
              <p>
                로그인하여 게시판 형태로 글을 작성할 수 있는 애플리케이션입니다
                Vue.js를 사용하여 구현하였으며 인강에서 제공받은 REST API를
                Swagger 툴을 이용하여 보다 쉽게 API를 이해하고 사용하였습니다
                API 서버 배포는 heroku를 사용하였고 데이터 베이스는 MongoDB
                Cloud 서비스를 이용하였습니다.
              </p>
              <small>
                <a href="#" target="_blank" class="github">
                  <i></i>
                  <span>GitHub</span>
                </a>
                <a href="#" target="_blank" class="link">
                  <i></i>
                  <span>Page View</span>
                </a>
              </small>
            </li>
            <li>
              <img src="@/assets/images/project/project_03.png" alt="website" />
              <h3>대원미디어 리뉴얼</h3>
              <p>
                대원미디어의 웹 사이트 리뉴얼 프로젝트의 퍼블리싱 업무를 외주
                받아 프리랜서로 참여하게 되었습니다 html, css 하드코딩으로 작업
                진행하였습니다.
              </p>
              <small>
                <a href="#" target="_blank" class="github">
                  <i></i>
                  <span>GitHub</span>
                </a>
                <a href="#" target="_blank" class="link">
                  <i></i>
                  <span>Page View</span>
                </a>
              </small>
            </li>
            <li>
              <img src="@/assets/images/project/project_04.png" alt="website" />
              <h3>동아출판</h3>
              <p>
                2020.05 ~ 2022.05 기간 동안 동아출판의 기획자, 디자이너,
                개발자와 온라인으로 커뮤니케이션 진행하며 동아출판의 각
                브랜드(티동아, 북동아, 두클래스, 엠동아 등등) 웹 사이트의 유지
                보수를 진행하였습니다 jsp로 구성된 사이트에 붙어서 html, css,
                javascript, jquery를 수정 및 보완하였습니다.
              </p>
              <small>
                <a href="#" target="_blank" class="github">
                  <i></i>
                  <span>GitHub</span>
                </a>
                <a href="#" target="_blank" class="link">
                  <i></i>
                  <span>Page View</span>
                </a>
              </small>
            </li>
            <li>
              <img src="@/assets/images/project/project_05.png" alt="website" />
              <h3>브이클라우드</h3>
              <p>
                브이클라우드는 클라우드 통합 관리 플랫폼으로 기업을 위한 서비스
                매니지먼트 플랫폼이며, 대시보드 형태의 웹 애플리케이션으로 대략
                50~60페이지를 하드코딩으로 작업 진행하였습니다
              </p>
              <small>
                <a href="#" target="_blank" class="github">
                  <i></i>
                  <span>GitHub</span>
                </a>
                <a href="#" target="_blank" class="link">
                  <i></i>
                  <span>Page View</span>
                </a>
              </small>
            </li>
          </ul>
          <strong class="glowing clear"><span>PROJECT</span></strong>
        </div>
      </div>
      <div class="img-list" ref="fBox">
        <img
          class="website website01 on"
          src="@/assets/images/project/project_01.png"
          alt="website"
        />
        <img
          class="website website02"
          src="@/assets/images/project/project_02.png"
          alt="website"
        />
        <img
          class="website website03"
          src="@/assets/images/project/project_03.png"
          alt="website"
        />
        <img
          class="website website04"
          src="@/assets/images/project/project_04.png"
          alt="website"
        />
        <img
          class="website website05"
          src="@/assets/images/project/project_05.png"
          alt="website"
        />
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      textFixed1: false,
      textFixed2: false,
      textIndex: ['01', '02', '03', '04', '05'],
    };
  },
  methods: {
    onScroll() {
      let wst = window.scrollY;
      let fBoxTop =
        this.$refs.fBox.getBoundingClientRect().top + window.scrollY;
      let boxH = this.$refs.fBox.clientHeight - window.innerHeight;
      let scrollIndex01 =
        document.querySelector('.website01').getBoundingClientRect().top +
        window.scrollY -
        window.innerHeight / 2;
      let scrollIndex02 =
        document.querySelector('.website02').getBoundingClientRect().top +
        window.scrollY -
        window.innerHeight / 2;
      // let scrollIndex03 =
      //   document.querySelector('.website03').getBoundingClientRect().top +
      //   window.scrollY -
      //   window.innerHeight / 2;
      // let scrollIndex04 =
      //   document.querySelector('.website04').getBoundingClientRect().top +
      //   window.scrollY -
      //   window.innerHeight / 2;
      // let scrollIndex05 =
      //   document.querySelector('.website05').getBoundingClientRect().top +
      //   window.scrollY -
      //   window.innerHeight / 2;

      console.log(scrollIndex01);

      if (wst > scrollIndex01) {
        document.querySelector('.img-list').classList.add('on01');
      } else {
        document.querySelector('.img-list').classList.remove('on01');
      }
      if (wst > scrollIndex02) {
        document.querySelector('.img-list').classList.add('on02');
      } else {
        document.querySelector('.img-list').classList.remove('on01');
        document.querySelector('.img-list').classList.remove('on02');
      }
      // if (wst >= scrollIndex02 - 100 && wst <= scrollIndex02 + 300) {
      //   document.querySelector('.website').classList.remove('on');
      //   document.querySelector('.website02').classList.add('on');
      // }

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
  },
  mounted() {
    window.addEventListener('scroll', this.onScroll);
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
}
.text-list p {
  font-size: 14px;
  line-height: 180%;
  color: rgba(255, 255, 255, 0.8);
  margin-bottom: 30px;
}
.text-list small {
  display: flex;
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
    padding-top: 100px;
    padding-bottom: 0;
  }
  .sub-title {
    width: 100%;
    margin-bottom: 0;
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
    padding-top: 200px;
    padding-bottom: 500px;
  }
  .img-list img {
    display: block;
    width: 100%;
    opacity: 0.6;
    transition: opacity 0.5s ease;
  }
  .img-list img.on {
    opacity: 1;
  }
  .img-list img + img {
    margin-top: 500px;
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
    padding: 150px 0;
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
  .text-list li.on {
    display: block;
  }
  .text-list img {
    display: none;
  }
  .text-list h3 {
    font-size: 24px;
    margin: 0;
  }
  .text-list p {
    font-size: 16px;
    margin: 20px 0 30px;
  }
  .glowing {
    display: block;
    margin-top: 250px;
    padding-right: 30px;
  }
  .glowing span {
    float: right;
    white-space: nowrap;
    font-size: 70px;
    text-shadow: 0 0 10px #fff, 0 0 20px #fff, 0 0 30px #a18b68,
      0 0 40px #a18b68, 0 0 50px #a18b68, 0 0 60px #a18b68, 0 0 70px #a18b68;
  }
}
</style>
