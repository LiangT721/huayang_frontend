<template>
  <div class="service-page" >
    <page-header />
    <div class="about-service">
      <h1 class="about-title">
        <div v-if="this.$store.getters.lan">
          {{ this.$store.state.servicepage_about.title.eng }}
        </div>
        <div v-else>{{ this.$store.state.servicepage_about.title.chi }}

        </div>
      </h1>
      <div class="about-content">
        <div v-if="this.$store.getters.lan">
          {{ this.$store.state.servicepage_about.content.eng }}
        </div>
        <div v-else>
            {{ this.$store.state.servicepage_about.content.chi }}
        </div>
      </div>
      
    </div>
    <service-item />
    <page-footer />
  </div>
</template>

<script>
import PageFooter from "../components/pageFooter.vue";
import pageHeader from "../components/pageHeader.vue";
import ServiceItem from '../components/service/serviceItem.vue';
export default {
  components: { pageHeader, PageFooter, ServiceItem },
 
};
</script>

<style lang="scss" scoped>
@import "../assets/style.scss";
.service-page{
    min-height:100vh;
    box-sizing: border-box;
    position:relative;
    padding-bottom: 25em;
    // width: 100%;
    // overflow: hidden;
}
.about-service{
    width:70%;
    margin-top:4em;
    margin-left:15%;
    .about-title{
        font-family: $title;
        font-size:2rem;
        text-align: center;
        color:$fontBlue
    }
    .about-content{
        font-family: $text;
        font-size:1rem;
        text-align: center;
        line-height: 2em;
    }
}
@media only screen and (min-width: 768px) {
    .service-page{
        padding-bottom:15em
    }
    .about-service{
        .about-content{
            text-align: left;
        }
    }
}
@media only screen and (min-width: 1280px) {
   .service-page{
        padding-bottom:15em
    }
}

</style>