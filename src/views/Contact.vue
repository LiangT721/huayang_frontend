<template>
  <div class="contact page-setting">
    <page-header />
    <h1 class="header text-center text-uppercase py-5"> <div v-if="this.$store.getters.lan">Contact Us</div>
    <div v-else>联系我们</div></h1>
    <div class="content container p-0 row mx-auto">
      <div class="contacts row col-10 offset-1 container-fluid pb-5 px-0 col-xl-8 offset-xl-0">
        <div class="contact col-12 col-md-6">
          <div class="description fs-3 fw-bold py-3 py-xl-1">
            <div v-if="this.$store.getters.lan">Contacts:</div>
            <div v-else>联系人:</div>
          </div>
          <div class="detail fs-5 pb-3">
            <div v-if="this.$store.getters.lan">
              Yang Gao <br />(Chartered Professional Accountant)
            </div>
            <div v-else>高杨 <br />（加拿大注册会计师）</div>
          </div>
          <!-- <div class="spliter"></div> -->
        </div>
        <div class="contact col-12 col-md-6 ps-md-5">
          <div class="description fs-3 fw-bold py-3 py-xl-1">
            <div v-if="this.$store.getters.lan">Phone:</div>
            <div v-else>电话:</div>
          </div>
          <div class="detail fs-5 pb-3"><a href="tel:3008001186">(306)-800-1186</a></div>
          <!-- <div class="spliter"></div> -->
        </div>
        <div class="contact col-12 col-md-6">
          <div class="description fs-3 fw-bold py-3 py-xl-1">
            <div v-if="this.$store.getters.lan">Direct line：</div>
            <div v-else>电话：</div>
          </div>
          <div class="detail fs-5 pb-3"><a href="tel:13062611887">(306) 261-1887</a></div>
          <!-- <div class="spliter"></div> -->
        </div>
        <div class="contact col-12 col-md-6 ps-md-5">
          <div class="description fs-3 fw-bold py-3 py-xl-1">
            <div v-if="this.$store.getters.lan">Fax:</div>
            <div v-else>传真:</div>
          </div>
          <div class="detail fs-5 pb-3"><a href="tel:13065009555">(306) 500-9555</a></div>
          <!-- <div class="spliter"></div> -->
        </div>
        <div class="contact col-12 ">
          <div class="description fs-3 fw-bold py-3 py-xl-1">
            <div v-if="this.$store.getters.lan">Email:</div>
            <div v-else>邮箱:</div>
          </div>
           <div class="detail fs-5 pb-3">
          <a href="mailto:yang.gao@youngsaccounting.ca"
            >info@youngsaccounting.ca</a
          >
          </div>
          <!-- <div class="spliter"></div> -->
        </div>
        <div class="contact col-12">
          <div class="description fs-3 fw-bold py-3 py-xl-1">
            <div v-if="this.$store.getters.lan">Address:</div>
            <div v-else>地址:</div>
          </div>
          <div class="detail fs-5 pb-3">
            124-203 Herold Terrace, Saskatoon, SK, S7V 1H7
          </div>
        </div>
      </div>
      <div class="map col-12 ratio ratio-1x1 w-md-75 mx-auto col-xl-4 w-xl-30">
        <iframe class="w-100 h-md-75"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2450.783394059938!2d-106.57318544841638!3d52.10187357963773!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5304f3c53ec7f4ad%3A0xdb2c0994854e2951!2s124%20Herold%20Terrace%2C%20Saskatoon%2C%20SK%20S7V%201J2!5e0!3m2!1sen!2sca!4v1611023236621!5m2!1sen!2sca"
          width="600"
          height="450"
          frameborder="0"
          style="border: 0"
          allowfullscreen=""
          aria-hidden="false"
          tabindex="0"
        ></iframe>
      </div>
    </div>
    <leave-message />
    <page-footer />
  </div>
</template>

<script>
import pageFooter from "../components/pageFooter.vue";
import PageHeader from "../components/pageHeader.vue";
import LeaveMessage from '../components/leaveMessage.vue';
export default {
  components: { pageFooter, PageHeader, LeaveMessage },
};
</script>

<style lang="scss" scoped>
@import "../assets/style.scss";
div, a{
  color: black;
}

</style>