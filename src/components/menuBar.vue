<template>
  <div class="menu-bar">
    <div :class="{ selected: home }" @click="homePage">
      <div v-if="this.$store.getters.lan">HOME</div>
      <div v-else>主页</div>
    </div>
    <div :class="{ selected: about }" @click="aboutPage">
      <div v-if="this.$store.getters.lan">ABOUT US</div>
      <div v-else>关于我们</div>
    </div>
    <div :class="{ selected: service }" @click="servicePage">
      <div v-if="this.$store.getters.lan">SERVICES</div>
      <div v-else>服务</div>
    </div>

    <div
      class="resource"
      :class="{ selected: resource }"
      v-b-hover="handleHover"
    >
      <div @click="resourcePage">
        <div v-if="this.$store.getters.lan">RESOURCE</div>
        <div v-else @click="resourcePage">资源</div>
      </div>
      <div class="dropdown pc bg-white" id="res-dropdown" v-if="isHover">
        <div class="news" @click="FinanceTaxation">
          <div v-if="this.$store.getters.lan">Finance <br> & Taxation</div>
          <div v-else>财税知识</div>
        </div>
        <div class="covid" @click="covidPage">
          <div v-if="this.$store.getters.lan">COVID-19 <br />Benefits</div>
          <div v-else>
            COVID-19 <br />
            福利政策
          </div>
        </div>
      </div>
    </div>
    <div :class="{ selected: contact }" @click="contactPage">
      <div v-if="this.$store.getters.lan">CONTACT US</div>
      <div v-else>联系我们</div>
    </div>
  </div>
</template>

<script>
import Vue from "vue";
import { BootstrapVue } from "bootstrap-vue";
Vue.use(BootstrapVue)
export default {
  data() {
    return {
      home: false,
      about: false,
      service: false,
      resource: false,
      contact: false,
      resourceMenu: false,
      isHover: false,
    };
  },
  methods: {
    homePage() {
      this.$router.push("/");
    },
    aboutPage() {
      this.$router.push("/about");
    },
    servicePage() {
      this.$router.push("/service");
    },
    resourcePage() {
      this.$router.push("/resource");
    },
    contactPage() {
      this.$router.push("/contact");
    },
    covidPage() {
      this.$router.push("/resource/covid19");
    },
    FinanceTaxation() {
      this.$router.push("/resource/Finance&Taxation");
    },
    handleHover(hovered) {
      console.log(this.isHover);
      this.isHover = hovered;
      console.log(this.isHover);
    },
    // resourceMenuShow() {
    //   setTimeout(() => {
    //     this.resourceMenu = true;
    //   }, 200);
    // },
    // resourceMenuHide() {
    //     this.resourceMenu = false;
    // },
  },
  mounted() {
    const path = this.$router.history.current.fullPath;
    const menuName = path.split("/")[1];
    switch (menuName) {
      case "":
        this.home = true;
        break;
      case "about":
        this.about = true;
        break;
      case "service":
        this.service = true;
        break;
      case "resource":
        this.resource = true;
        break;
      case "contact":
        this.contact = true;
        break;
      default:
        break;
    }
  },
};
</script>

<style lang="scss" scoped>
@import "../assets/style.scss";
.pc {
  display: none;
}
.menu-bar {
  display: grid;
  box-sizing: border-box;
  z-index: 50;
  width: 100%;
  height: fit-content;
  background-color: rgba($color: #a7c6e6, $alpha: 0.7);
  > div {
    width: 100%;
    height: 3em;
    display: grid;
    align-items: center;
    cursor: pointer;
    &:hover {
      background-color: #fff;
    }
    > div {
      width: 100%;
      text-align: center;
      font-family: $title;
    }
  }
}
@media only screen and (min-width: 768px) {
  .menu-bar {
    grid-template-columns: repeat(5, auto);
    background-color: rgba($color: #a7c6e6, $alpha: 0);
    > div {
      box-sizing: border-box;
      margin: 0 2px;
      color: white;
      font-size: 0.8rem;
      height: 2em;
      width: auto;
      border-radius: 5px;

      &:hover {
        background-color: #fff;
        color: $barColor;
        border-radius: 5px;
      }
    }
  }
}
@media only screen and (min-width: 1280px) {
  .pc {
    display: block;
  }
  .menu-bar {
    width: 90%;
    > div {
      transition: all 0.3s ease-in-out;
      font-size: 1rem;
    }
    .resource {
      position: relative;
      .dropdown {
        transition: all 0.3s linear;
        position: absolute;
        display: grid;
        grid-template-rows: 1fr 1fr;
        top: 100%;
        filter: drop-shadow(1px 1px 3px rgba(98, 98, 98, 0.685));
        > div {
          padding: 0.5em;
          &:hover {
            background-color: $fontBlue;
            color: #fff;
          }
        }
      }
    }
  }
}
.selected {
  background-color: #fff;
  > div {
    color: $barColor;
  }
  cursor: auto;
}
</style>