<template>
  <div class="contact-page">
    <page-header />
    <h1 class="header">Contact Us</h1>
    <div class="content">
      <div class="contacts">
        <div class="contact">
          <div class="description">
            <div v-if="this.$store.getters.lan">Contacts:</div>
            <div v-else>联系人:</div>
          </div>
          <div class="detail">
            <div v-if="this.$store.getters.lan">
              Yang Gao <br />(Chartered Professional Accountant)
            </div>
            <div v-else>高杨 <br />（加拿大注册会计师）</div>
          </div>
          <div class="spliter"></div>
        </div>
        <div class="contact short">
          <div class="description">
            <div v-if="this.$store.getters.lan">Phone:</div>
            <div v-else>电话:</div>
          </div>
          <div class="detail"><a href="tel:3008001186">(306)-800-1186</a></div>
          <div class="spliter"></div>
        </div>
        <div class="contact short">
          <div class="description">
            <div v-if="this.$store.getters.lan">Direct line：</div>
            <div v-else>电话：</div>
          </div>
          <div class="detail"><a href="tel:13062611887">(306) 261-1887</a></div>
          <div class="spliter"></div>
        </div>
        <div class="contact">
          <div class="description">
            <div v-if="this.$store.getters.lan">Fax:</div>
            <div v-else>传真:</div>
          </div>
          <div class="detail"><a href="tel:13065009555">(306) 500-9555</a></div>
          <div class="spliter"></div>
        </div>
        <div class="contact">
          <div class="description">
            <div v-if="this.$store.getters.lan">Email:</div>
            <div v-else>邮箱:</div>
          </div>
          <a href="mailto:yang.gao@youngsaccounting.ca"
            >yang.gao@ youngsaccounting.ca</a
          >
          <div class="spliter"></div>
        </div>

        <div class="contact">
          <div class="description">
            <div v-if="this.$store.getters.lan">Address:</div>
            <div v-else>地址:</div>
          </div>
          <div class="detail">
            124-203 Herold Terrace, Saskatoon, SK, S7V 1H7
          </div>
        </div>
      </div>
      <div class="map">
        <iframe
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
    <page-footer />
  </div>
</template>

<script>
import pageFooter from "../components/pageFooter.vue";
import PageHeader from "../components/pageHeader.vue";
export default {
  components: { pageFooter, PageHeader },
};
</script>

<style lang="scss" scoped>
@import "../assets/style.scss";

.contact-page {
  min-height: 100vh;
  padding-bottom: 22em;
  position: relative;
}
h1 {
  text-align: center;
  font-family: $title;
  margin: 2em 0 1em 0;
  color: $fontBlue;
}

.content {
  width: 100%;
}
.contacts {
  width: 70%;
  margin-left: 15%;
  margin-bottom: 5em;
  font-family: $text;
  display: grid;
  row-gap: 2em;
  .description {
    font-family: $title;
    font-size: 1.5rem;
    margin-bottom: 0.5em;
  }
  .detail,
  a {
    color: rgb(122, 122, 122);
    font-size: 1.2rem;
  }
  .spliter {
    width: 120%;
    margin: 15px 0 0 -10%;
    height: 1px;
    background-color: #cecece;
  }
}
.map {
  width: 100%;
  > iframe {
    width: 100%;
    height: 50vh;
  }
}
@media only screen and (min-width: 768px) {
  .contact-page {
    padding-bottom: 14em;
  }
  .map {
    width: 60%;
    margin-left: 20%;
    > iframe {
      width: 100%;
      height: 40vh;
    }
  }
}

@media only screen and (min-width: 1280px) {
  .content {
    width: 70%;
    margin-left: 15%;
    display: grid;
    grid-template-columns: 1fr 1fr;
    align-items: center;
  }
  .contacts {
    // margin-left: 20%;
    row-gap: 1em;
    .description {
      font-size: 1.5rem;
      margin-bottom: 10px;
    }
    .detail,
    a {
      color: rgb(122, 122, 122);
      font-size: 1.2rem;
      cursor: pointer;
    }
    .spliter {
      width: 100%;
      margin: 15px 0 0 -5%;
      height: 1px;
      background-color: #cecece;
    }
  }
  .map {
    width: 80%;
    position: relative;
    top: -10%;
  }
}
</style>