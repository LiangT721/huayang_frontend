<template>
  <div class="slider">
    <div class="slider-set">
      <img src="../assets/home_slider.jpg" alt="" />
      <div class="text">
        <div class="slogen">
          <div v-if="this.$store.getters.lan">
            {{ this.$store.state.slogen.slogen.eng }}
          </div>
          <div v-else>{{ this.$store.state.slogen.slogen.chi }}</div>
        </div>
        <div class="sub-slogen">
          <div v-if="this.$store.getters.lan">
            {{ this.$store.state.slogen.sub_slogen.eng }}
          </div>
          <div v-else>{{ this.$store.state.slogen.sub_slogen.chi }}</div>
        </div>
      </div>
    </div>
    <!-- <hooper class="frame" :autoPlay="true" :playSpeed="3000" :transition="1000">
      <slide class="image-set">
        <img src="../assets/Slide.jpg" alt="" class="bg" />
        <div class="text">
          <div class="slogen">
            <div v-if="this.$store.getters.lan">
              {{ this.$store.state.slogen.slogen.eng }}
            </div>
            <div v-else>{{ this.$store.state.slogen.slogen.chi }}</div>
          </div>
          <div class="sub-slogen">
            <div v-if="this.$store.getters.lan">
              {{ this.$store.state.slogen.sub_slogen.eng }}
            </div>
            <div v-else>{{ this.$store.state.slogen.sub_slogen.chi }}</div>
          </div>
        </div>
      </slide>
      <slide class="image-set">
        <img src="../assets/Slide2.jpg" alt="" class="bg" />
      </slide>
      <slide class="image-set"
        ><img src="../assets/Slide3.jpg" alt="" class="bg"
      /></slide>
      <hooper-navigation slot="hooper-addons"></hooper-navigation>
      <hooper-pagination slot="hooper-addons"></hooper-pagination>
    </hooper> -->
  </div>
</template>

<script>
// import { Hooper, Slide, Navigation as HooperNavigation } from "hooper";
// import { Pagination as HooperPagination } from "hooper";
// import "hooper/dist/hooper.css";
export default {
  components: {
    // Hooper,
    // Slide,
    // HooperNavigation,
    // HooperPagination
  },
  data() {
    return {};
  },
};
</script>

<style lang="scss" scoped>
@import "../assets/style.scss";
.slider {
  z-index: -1;
  width: 100vw;
  height: 80vh;
  box-sizing: border-box;
}
.slider-set {
  width: 100%;
  height: 100%;
  position: relative;
  display: grid;
  align-items: center;
  > img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: bottom;
    position: absolute;
  }
  .text {
    position: relative;
    .slogen {
      font-family: $title;
      font-size: 3rem;
      width: 80%;
      margin-left: 10%;
      color: #ffffff;
      text-shadow: 2px 4px 4px rgba(0, 0, 0, 0.7);
    }
    .sub-slogen {
      font-family: $title;
      font-size: 1.5rem;
      width: 80%;
      margin-left: 10%;
      color: #ffffff;
      text-shadow: 2px 4px 4px rgba(0, 0, 0, 0.7);
    }
  }
}
// .frame {
//   width: 100%;
//   height: 100%;
// }
// .image-set {
//   width: 100%;
//   height: 100%;
//   overflow: hidden;
//   position: relative;
//   display: grid;
//   align-items: center;
//   > img {
//     position: absolute;
//     top: 0;
//     width: 100%;
//     height: 100%;
//     object-fit: cover;
//   }
//   .text {
//     position: relative;
//     .slogen {
//       font-family: $title;
//       font-size: 2rem;
//       width: 80%;
//       margin-left: 10%;
//       color: #ffffff;
//       text-shadow: 2px 4px 4px rgba(0, 0, 0, 0.7);
//     }
//     .sub-slogen {
//       font-family: $title;
//       font-size: 1.5rem;
//       width: 80%;
//       margin-left: 10%;
//       color: #ffffff;
//       text-shadow: 2px 4px 4px rgba(0, 0, 0, 0.7);
//     }
//   }
// }

@media only screen and (min-width: 768px) {
  .slider {
    height: 65vh;
  }
  .image-set {
    .text {
      .slogen {
        font-size: 3rem;
      }
      .sub-slogen {
        font-size: 2rem;
      }
    }
  }
}
@media only screen and (min-width: 1280px) {
  .slider {
    height: 72vh;
    width: 100%;
  }
}
</style>