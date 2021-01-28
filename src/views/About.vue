<template>
  <div class="about">
    <page-header />
    <div class="container-sm py-5">
      <h1 class="title text-center text-uppercase py-3 ">About Us</h1>
      <div v-if="this.$store.getters.lan" class="container">
        <p class="fs-4">Staffed by experienced accountants and tax experts, Yang Gao. CPA P.C Ltd has provided service in Saskatoon and Alberta for years, we have helped every client to achieve its own goal by developing its own unique strategy and have established long-term partnership with many customers. We currently serve clients in a variety of industries including real estate development, investment holding, import and export trade, e-commerce, manufacturing and distribution wholesale, tourism, hotel and catering, software engineering, retail and other fields.</p>
        <p class="fs-4">Blending professional knowledge and customer service into a premium package, we've helped individuals and local companies with everything from simple tax return, tax planning to asset management. Our professionals rely on in-depth industry-specific experience to tailor our advice accordingly.</p>
      </div>
      <div v-else>
        <h2 class="text-center py-3">用我们的专业, 助力您的成功 !</h2>
        <p class="fs-4">
          多年来，秉持着专业，诚信的经营理念，华杨会计师事务所已为个人和中小企业提供了多样化，个性化的服务，与众多客户建立了长期的伙伴关系。目前，公司的客户群体涵盖了房地产开发、投资控股、进出口贸易、电子商务、生产制造和经销批发、旅游、 酒店和餐饮，软件工程，零售等领域。团队中的专业注册会计师有着专业的背景，丰富的当地资源，我们的特色是为您解决问题，不论是税务，还是财务，抑或是公司资产的管理，我们的专业团队都将为您提供对应的方案，为您排忧解难，为您专注于公司经营提供可靠的财务支持。
        </p>

      </div>
    </div>
    <page-footer />
  </div>
</template>

<script>
import Vue from 'vue'
import { BootstrapVue } from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
Vue.use(BootstrapVue)
import PageFooter from "../components/pageFooter.vue";
import pageHeader from "../components/pageHeader.vue";
export default {
  components: { pageHeader, PageFooter },
};
</script>

<style lang="scss" scoped>
@import "../assets/style.scss";
.about{
  font-family: $text;
}
.title{
  font-family: $title;
}
</style>