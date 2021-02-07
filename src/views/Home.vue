<template>
  <div class="page-setting">
    <page-header />
    <home-slider />
    <home-story />
    <home-description />
    <page-footer />
  </div>
</template>

<script>
import HomeDescription from '../components/homeDescription.vue';
import HomeSlider from '../components/homeSlider.vue';
import HomeStory from '../components/homeStory.vue';
import PageFooter from '../components/pageFooter.vue';
import PageHeader from '../components/pageHeader.vue';

export default {
  components: {
    HomeSlider,
    HomeStory,
    HomeDescription,
    PageFooter,
    PageHeader
  },
};
</script>

<style lang="scss" scoped>
</style>
