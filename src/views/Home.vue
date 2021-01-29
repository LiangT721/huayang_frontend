<template>
  <div class="home">
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
    PageHeader,
    HomeSlider,
    HomeStory,
    HomeDescription,
    PageFooter
  },
};
</script>

<style lang="scss" scoped>
@import "../assets/style.scss";
@media only screen and (min-width: 768px) {}
@media only screen and (min-width: 1280px) {}
.home{
  position: relative;
}

</style>
