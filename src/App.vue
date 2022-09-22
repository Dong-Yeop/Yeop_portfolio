<template>
  <div id="app">
    <div id="wrap">
      <AppHeader></AppHeader>
      <MainView></MainView>
    </div>
  </div>
</template>

<script>
import AppHeader from '@/components/common/AppHeader.vue';
import MainView from '@/views/MainView.vue';

export default {
  components: {
    AppHeader,
    MainView,
  },
};
</script>

<style>
@import '@/assets/css/normalize.css';
@import '@/assets/css/common.css';
</style>
