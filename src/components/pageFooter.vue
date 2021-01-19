<template>
  <div class="footer">
    <div class="top">
      <div class="info">
        <div class="phone">
          <div class="icon">
            <img src="../assets/phone-call.png" alt="" />
          </div>
          <a href="tel:13062611887">+1 (306) 261-1887</a>
        </div>
        <div class="fax">
          <div class="icon">
            <img src="../assets/fax.png" alt="" />
          </div>
          <a href="tel:13065009555">+1 (306) 500-9555</a>
        </div>
        <div class="email">
          <div class="icon">
            <img src="../assets/email.png" alt="" />
          </div>
          <a href="mailto:yang.gao@youngsaccounting.ca"
            >yang.gao@ youngsaccounting.ca</a
          >
        </div>
        <div class="address">
          <div class="icon">
            <img src="../assets/home.png" alt="" />
          </div>
          <div>124-203 Herold Terrace, Saskatoon, SK, S7V 1H7</div>
        </div>
      </div>
      <div class="top-mid">
        <div class="logo">
          <!-- <div class="logo" v-if="this.$store.getters.device == 'mobile'"> -->
          <div class="logo-set">
            <img src="../assets/logo.png" alt="" class="logo" />
            <div class="text">
              <div class="chi">華楊會計師事務所</div>
              <div class="eng">YANG GAO. CPA P.C Ltd.</div>
            </div>
          </div>
        </div>
        <div class="time" v-if="this.$store.getters.device == 'mobile'">
          <div v-if="this.$store.getters.lan">
            <div>BUSINESS TIME</div>
            <div>Monday ~ Friday</div>
            <div>9:00 ~ 17:00</div>
          </div>
          <div v-else>
            <div>营业时间</div>
            <div>周一 ~ 周五</div>
            <div>9:00 ~ 17:00</div>
          </div>
        </div>
        <div class="time" v-else>
          <div v-if="this.$store.getters.lan">
            <div>BUSINESS TIME:</div>
            <div class="right">
              <div>Monday ~ Friday</div>
              <div>9:00 ~ 17:00</div>
            </div>
          </div>
          <div v-else>
            <div>营业时间:</div>
            <div class="right">
              <div>周一 ~ 周五</div>
              <div>9:00 ~ 17:00</div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="spliter"></div>
    <div class="bottom">
      <div class="copyright">© 2021. All rights reserved</div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
@import "../assets/style.scss";

.footer {
  position: absolute;
  bottom: 0;
  padding-top: 1em;
  z-index: 1;
  width: 100vw;
  height: 22em;
  background-color: $barColor;
}
.top {
  margin: 1em 0;
  display: grid;
  row-gap: 1em;
  justify-items: center;
  color: white;
  font-size: 0.8rem;
  a {
    color: white;
  }
  .info {
    width: 100%;
    display: grid;
    row-gap: 1rem;
    > div {
      width: 100%;
      display: grid;
      align-items: center;
      grid-template-columns: 1fr 4fr;
      .icon {
        border: 1px solid #fff;
        border-radius: 50%;
        padding: 5px;
        height: 2.5em;
        width: 2.5em;
        display: grid;
        align-items: center;
        justify-items: center;
        justify-self: center;
        > img {
          height: 1.2rem;
          justify-self: center;
        }
      }
    }
  }
  .top-mid {
    width: 90%;
    margin-left: 5%;
    display: grid;
    grid-template-columns: 1fr 1fr;
    align-items: center;
    justify-items: center;
    .time {
      > div {
        display: grid;
        justify-items: center;
      }
    }
  }
}
.logo-set {
  height: 3em;
  display: grid;
  grid-template-columns: 1fr 4fr;
  .logo {
    height: 3em;
  }
  .text {
    color: #ffffff;
    font-size: 0.6rem;
    display: grid;
    align-items: center;
  }
}
.spliter {
  width: 100vw;
  height: 1px;
  background-color: #fff;
}
.bottom {
  display: grid;
  justify-items: center;
  padding-bottom: 5px;
  > div {
    font-family: $text;
    color: white;
    font-size: 0.6rem;
    padding: 2px 0;
  }
}
@media only screen and (min-width: 768px) {
  .footer {
    height: 10em;
  }
  .top {
    margin: 0 1em;
    font-size: 0.7rem;
    .info {
      width: 90%;
      //  margin-left:5%;
      display: grid;
      grid-template-columns: 1fr 1fr 1.2fr 1.2fr;
      > div {
        grid-template-columns: 1fr 5fr;
        column-gap: 1em;
        .icon {
          > img {
            height: 90%;
            width: 90%;
          }
        }
      }
    }
    .top-mid {
      margin: 0.5em 0;
      .time{
        >div{
          display: grid;
          grid-template-columns: 1fr 1fr;
          align-items: center;
          justify-items: center;
          column-gap: 2em;
          .right{
            text-align: center;
          }
        }
      }
    }
  }
  .logo-set {
    height: 2.5em;
    margin-left: 1em;
    .logo {
      height: 3em;
    }
    .text {
      color: #ffffff;
      font-size: 0.7rem;
      display: grid;
      align-items: center;
    }
  }
}
@media only screen and (min-width: 1280px) {
  .footer {
    height: 11em;
  }
  .footer {
    width: 100%;
    padding-top: 5px;
  }
  .top {
    margin: 1em 8vw;
    .info {
      width: 90%;
      //  margin-left:5%;
      display: grid;
      grid-template-columns: 1fr 1fr 1.2fr 1.2fr;
      > div {
        grid-template-columns: 1fr 5fr;
        column-gap: 1em;
        .icon {
          height: 2.5em;
          width: 2.5em;
          > img {
            height: 80%;
            width: 80%;
          }
        }
        > a,
        > div {
          font-size: 1rem;
        }
      }
    }
  }
}
</style>