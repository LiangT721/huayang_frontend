<template>
  <div class="covid">
    <div class="top">
      <h3>../resource/covid-19</h3>
      <img @click="back" src="../assets/enter.png" alt="" />
    </div>
    <component :is="current" class="content"></component>
  </div>
</template>

<script>
export default {
  components: {
    "co-bf": () => import("@/components/content/resCoBF"),
    "co-cerb": () => import("@/components/content/resCoCERB"),
    "co-cers": () => import("@/components/content/resCoCERS"),
    "co-cews": () => import("@/components/content/resCoCEWS"),
    "co-ssrgi": () => import("@/components/content/resCoSSRGI"),
    "co-twse": () => import("@/components/content/resCoTWSE"),
  },
  data() {
    return {
      current: "co-cers",
    };
  },
  methods: {
    back() {
      this.$router.push("/resource/covid19");
      location.reload();
    },
  },
  mounted() {
    let path = this.$router.history.current.fullPath.replace("/resource/", "");
    console.log(path);
    if (path == "covid19/cers") {
      this.current = "co-cers";
    } else if (path == "covid19/bf") {
      this.current = "co-bf";
    } else if (path == "covid19/ssrgi") {
      this.current = "co-ssrgi";
      // }else if (path == "covid19/cers") {
      //     this.current = "co-bf"
    } else if (path == "covid19/cews") {
      this.current = "co-cews";
    } else if (path == "covid19/twes") {
      this.current = "co-twse";
    }
  },
};
</script>

<style lang="scss" scoped>
@import "../assets/style.scss";
.top {
  display: flex;
  justify-content: space-between;
  h3 {
    color: $fontGray;
    font-family: $text;
    font-size: 1rem;
    display: inline;
  }
  > img {
    height: 1rem;
    cursor: pointer;
  }
}
.covid {
  width: 80%;
  margin-left: 10%;
  margin-top: 2em;
  padding-bottom: 20em;
  min-height: 45vh;
}

.content {
  font-size: 1.2rem;
  margin:2em 0;
}

@media only screen and (min-width: 768px) {
  .covid {
    width: 70%;
    margin: 2em 0 6em 15%;
    padding-bottom: 10em;
  }
  .content {
    width: 90%;
    margin-left: 5%;
  }
}

@media only screen and (min-width: 1280px) {
  .covid {
    width: 60%;
    margin: 2em 0 6em 20%;
  }
    .content {
    width: 80%;
    margin-left: 10%;
  }
}
</style>