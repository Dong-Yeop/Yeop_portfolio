<template>
  <div class="content">
    <MainVisual></MainVisual>
    <AboutMe></AboutMe>
    <ProjectVisual></ProjectVisual>
    <ContactVisual></ContactVisual>
  </div>
</template>

<script>
import MainVisual from '@/components/MainVisual.vue';
import AboutMe from '@/components/AboutVisual.vue';
import ProjectVisual from '@/components/ProjectVisual.vue';
import ContactVisual from '@/components/ContactVisual.vue';

export default {
  components: {
    MainVisual,
    AboutMe,
    ProjectVisual,
    ContactVisual,
  },
};
</script>

<style></style>
