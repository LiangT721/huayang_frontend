<template>
  <div class="about">
    <page-header />
    <section class="row py-5 px-0 m-auto container-sm">
      <img src="../assets/about.jpg" alt="" class="pc-img d-none d-xxl-block col-xxl-5 align-self-center">
      <div class="row p-0 m-0 offset-xxl-1 col-xxl-6 mx-xxl-auto">
        <div class="title fs-1 text-center text-uppercase">
          <div v-if="this.$store.getters.lan" class="container">
            <h1 class="text-center">About Us</h1>
          </div>
          <div v-else>
            <h1 class="text-center pt-5">用我们的专业, 助力您的成功 !</h1>
          </div>
        </div>
        <img class="py-5 px-0 col-md-6 offset-md-3 d-xxl-none" src="../assets/about.jpg" alt="" />
        <div class="container-sm text-center text-md-start">
          <div v-if="this.$store.getters.lan" class="container">
            <p class="content fs-5 ">
              Staffed by experienced accountants and tax experts, Yang Gao. CPA
              P.C Ltd has provided service in Saskatoon and Alberta for years,
              we have helped every client to achieve its own goal by developing
              its own unique strategy and have established long-term partnership
              with many customers. We currently serve clients in a variety of
              industries including real estate development, investment holding,
              import and export trade, e-commerce, manufacturing and
              distribution wholesale, tourism, hotel and catering, software
              engineering, retail and other fields.
            </p>
            <p class="content fs-5">
              Blending professional knowledge and customer service into a
              premium package, we've helped individuals and local companies with
              everything from simple tax return, tax planning to asset
              management. Our professionals rely on in-depth industry-specific
              experience to tailor our advice accordingly.
            </p>
          </div>
          <div v-else class="pt-5">
            <p class="content fs-4">
              多年来，秉持着专业，诚信的经营理念，华杨会计师事务所已为个人和中小企业提供了多样化，个性化的服务，与众多客户建立了长期的伙伴关系。目前，公司的客户群体涵盖了房地产开发、投资控股、进出口贸易、电子商务、生产制造和经销批发、旅游、
              酒店和餐饮，软件工程，零售等领域。团队中的专业注册会计师有着专业的背景，丰富的当地资源，我们的特色是为您解决问题，不论是税务，还是财务，抑或是公司资产的管理，我们的专业团队都将为您提供对应的方案，为您排忧解难，为您专注于公司经营提供可靠的财务支持。
            </p>
          </div>
        </div>
      </div>
    </section>
    <page-footer />
  </div>
</template>

<script>
import cookies from "vue-cookies";
import PageFooter from "../components/pageFooter.vue";
import pageHeader from "../components/pageHeader.vue";
export default {
  components: { pageHeader, PageFooter },
  mounted() {
    const lan = cookies.get("lan");
    this.$store.commit("language_toggle", lan);
  },
};
</script>

<style lang="scss" scoped>
@import "../assets/style.scss";

.about {
  font-family: $text;
  min-height: 100vh;
  padding-bottom: 22em;
  position: relative;
}
.title {
  font-family: $title;
}
@media only screen and (min-width: 768px) {
  .about {
    padding-bottom: 15em;
  }
}
@media only screen and (min-width: 1280px) {
  .pc-img{
    height: 40vh;
    object-fit: cover;
  }
}
@media only screen and (min-width: 2400px) {
  .content{
    font-size: 0.6rem;
    color: red;
  }
}
</style>