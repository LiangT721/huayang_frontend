<template>
  <div class="top-show text-center">
    <div class="phone">Phone: <a href="tel:3062611887">(306) 261-1887</a></div>
    <div class="language-set">
      <div class="btn">
        <div
          class="eng"
          :class="{ selected: english, unselected: chinese }"
          @click="ShiftEnglish"
        >
          English
        </div>
        <div
          class="chi"
          :class="{ selected: chinese, unselected: english }"
          @click="ShiftChinese"
        >
          中文
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import cookies from "vue-cookies";
import "ant-design-vue/lib/date-picker/style/css";
export default {
  data() {
    return {
      english: true,
      chinese: false,
    };
  },
  methods: {
    ShiftEnglish() {
      this.english = true;
      this.chinese = false;
      this.$store.commit("language_toggle", true);
      cookies.set("lan", true)
      location.reload();

    },
    ShiftChinese() {
      this.english = false;
      this.chinese = true;
      this.$store.commit("language_toggle", false);
      cookies.set("lan", false)
      location.reload();
    },
  },
  mounted () {
    if(this.$store.getters.lan){
       this.english = true;
      this.chinese = false;
    }else {
      this.english = false;
      this.chinese = true;
    };
  },
};
</script>

<style lang="scss" scoped>

@import "../assets/style.scss";

.top-show {
  box-sizing: border-box;
  display: grid;
  grid-template-columns: 1.2fr 1fr;
  align-items: center;
  padding: 0 1em;
  position: relative;
  z-index: 99;
  width: 100%;
  height: 3em;
  background-color: $bgc;
}
.phone,
a {
  font-size: 1.1rem;
  color: $fontBlue;
  font-family: $title;
  cursor: pointer;
  // margin-top: 1em;
}
.language-set {
  justify-self: right;
  .btn {
    display: grid;
    grid-template-columns: 1fr 1fr;
    // border: 1px solid #d1d1d1;
    border-radius: 2px;
    > div {
      padding: 0 0.2em;
      cursor: pointer;
    }
    .eng {
      border-right: 1px solid #d1d1d1;
      transition: all 0.2s ease-in-out;
    }
    .chi {
      transition: all 0.2s ease-in-out;
    }
  }
}
.selected {
  background-color: $darkColor;
  color: #ffff;
}
.unselected {
  background-color: #ffff;
  color: $darkColor;
}
@media only screen and (min-width: 768px) {
  .top-show {
    grid-template-columns: 3fr auto;
    padding: 0 4em;
    align-items: center;
    height: 3em;
    justify-items: right;
  }
  .phone,
  a {
    font-size: 1rem;
    color: #ffff;
    text-shadow: 1px 1px 1px rgb(112, 112, 112);
    
  }
  .language-set {
    font-size: 0.6rem;
    margin-right: 1em;
    filter: drop-shadow(1px 1px 0px 6px rgb(182, 182, 182));

    .btn {
      border: none;
      > div {
        padding: 0 1em;
      }
      .eng {
        border-radius: 3px 0 0 3px;
      }
      .chi {
        transition: all 0.2s ease-in-out;
        border-radius: 0 3px 3px 0;
      }
    }
  }
  .selected {
    background-color: #ffff;
    position: relative;
    top: -1px;
    color: $darkColor;

  }
  .unselected {
    box-sizing: border-box;
    border: 1px solid #8b8b8b;
    background-color: $darkColor;
    color: #ffff;
  }
}
@media only screen and (min-width: 1280px) {
  .top-show {
    grid-template-columns: 1fr;
    grid-template-rows: 1fr 1fr;
    justify-items: center;
    align-items: center;
    // row-gap: 1em;
    padding: 0.5em 0;
    height: 6em;
  }
  .phone,
  a {
    font-size: 1rem;
    text-decoration: none;
    transition: all 0.2s linear;
    &:hover {
      text-shadow: 3px 3px 5px rgba(242, 242, 242, 0.5);
      transform: scale(1.1);
      color:white;
    }
  }
  .language-set {
    margin: 0;
    font-size: 0.8rem;
    justify-self: center;
  }
}
</style>