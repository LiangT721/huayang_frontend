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
  mounted () {
    console.log(screen.width);
    console.log(window.innerWidth);
  },
};
</script>

<style lang="scss" scoped>
@import "../assets/style.scss";

.home{
  .header{
    z-index: 1;
    width: 100vw;
    height: 8em;
    background-color: $barColor;
  }
  .slider{
    z-index: -1;
    width: 100vw;
    height: 80vh;
    box-sizing: border-box;
  }
  
}
@media only screen and (min-width: 768px) {

}

</style>
