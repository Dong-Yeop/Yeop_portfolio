<template>
  <header>
    <div class="header-inner">
      <h1 class="logo"><a href="/">YEOP</a></h1>
      <ul class="nav">
        <li>About me</li>
        <li>Project</li>
        <li>Contact</li>
      </ul>
    </div>
  </header>
</template>

<script>
export default {};
</script>

<style scoped>
header {
  z-index: 100;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
}
.header-inner {
  height: 60px;
  padding: 0 15px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.header-inner .logo a {
  font-size: 24px;
  font-weight: 700;
}
.header-inner .nav {
  display: flex;
  font-size: 13px;
  font-weight: 700;
}
.header-inner .nav li {
  cursor: pointer;
}
.header-inner .nav li + li {
  margin-left: 4.1vw;
}

/* 가로 해상도 768 이상 */
@media screen and (min-width: 768px) {
  .header-inner {
    padding: 0 20px;
  }
  .header-inner .logo a {
    font-size: 30px;
  }
  .header-inner .nav {
    font-size: 18px;
  }
  .header-inner .nav li + li {
    margin-left: 60px;
  }
}
/* 가로 해상도 1024 이상 */
@media screen and (min-width: 1024px) {
  .header-inner {
    height: 100px;
  }
}
/* 가로 해상도 1280 이상 */
@media screen and (min-width: 1280px) {
  .header-inner {
    padding: 0 50px;
  }
  .header-inner .nav li + li {
    margin-left: 80px;
  }
}
</style>
