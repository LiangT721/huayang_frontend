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
      @click="resourcePage"
      @mouseover="resourceMenuShow"
      @mouseleave="resourceMenuHide"
    >
      <div v-if="this.$store.getters.lan">RESOURCE</div>
      <div v-else>资源</div>
      <div
        class="dropdown"
        id="res-dropdown"
        v-if="this.$store.getters.device == 'pc'"
      >
        <div class="news">
          <div v-if="this.$store.getters.lan">NEWS</div>
          <div v-else>新闻</div>
        </div>
        <div class="covid" @click="covidPage">
          <div v-if="this.$store.getters.lan">COVID-19</div>
          <div v-else>有关新冠</div>
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
export default {
  data() {
    return {
      home: false,
      about: false,
      service: false,
      resource: false,
      contact: false,
      // resourceMenu:false
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
    resourceMenuShow() {
      const resource = document.getElementById("res-dropdown");
      resource.style.opacity = "1";
    },
    resourceMenuHide() {
      const resource = document.getElementById("res-dropdown");
      resource.style.opacity = "0";
    },
  },
  mounted() {
    console.log(this.$router.history.current.name);
    if (this.$router.history.current.name == "Home") {
      this.home = true;
    } else if (this.$router.history.current.name == "About") {
      this.about = true;
    } else if (this.$router.history.current.name == "Service") {
      this.service = true;
    } else if (this.$router.history.current.name == "Resource") {
      this.resource = true;
    } else if (this.$router.history.current.name == "Contact") {
      this.contact = true;
    }
  },
};
</script>

<style lang="scss" scoped>
@import "../assets/style.scss";

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
      }
    }
  }
}
@media only screen and (min-width: 1280px) {
  .menu-bar {
    width: 90%;
    > div {
      transition: all 0.3s ease-in-out;
      font-size: 1rem;
      // border: 1px solid #fff;
    }
    .resource {
      position: relative;
      #res-dropdown {
        opacity: 0;
      }
      .dropdown {
        transition: all 0.3s linear;
        position: absolute;
        background-color: $bgcBlue;
        display: grid;
        grid-template-rows: 1fr 1fr;
        border-radius: 5px;
        top: 100%;
        left: 50%;
        color: white;
        filter: drop-shadow(1px 1px 3px rgba(98, 98, 98, 0.685));
        > div {
          padding: 0.5em;
          &:hover {
            background-color: #fff;
            color: $darkColor;
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