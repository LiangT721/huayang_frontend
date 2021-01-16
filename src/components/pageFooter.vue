<template>
  <div class="footer">
    <div class="top">
      <div class="content">
        <div class="logo" v-if="this.$store.getters.device != 'mobile'">
          <div class="logo-set">
            <img src="../assets/logo.png" alt="" class="logo" />
            <div class="text">
              <div class="chi">華楊會計師事務所</div>
              <div class="eng">YANG GAO. CdivA P.C Ltd.</div>
            </div>
          </div>
        </div>
        <div class="contact">
          <div class="part1">
            <div class="phone">
              <div v-if="this.$store.getters.lan">
                Phone: <a href="tel:888888888">(888)888-8888</a>
              </div>
              <div v-else>电话: <a href="tel:888888888">(888)888-8888</a></div>
            </div>
            <div class="fax">
              <div v-if="this.$store.getters.lan">
                Fax: <a href="tel:888888888">(888)888-8888</a>
              </div>
              <div v-else>电话: <a href="tel:888888888">(888)888-8888</a></div>
            </div>
          </div>
          <div class="part2">
            <div class="email">
              <div v-if="this.$store.getters.lan">
                Email:
                <a href="mailto:**********@gamil.com">**********@gamil.com</a>
              </div>
              <div v-else>
                电子邮箱:
                <a href="tel:**********@gamil.com">**********@gamil.com</a>
              </div>
            </div>
            <div class="address">
              <div v-if="this.$store.getters.lan">
                Address: 123 fake street *** Calgary AB
              </div>
              <div v-else>地址: 123 fake street *** Calgary AB</div>
            </div>
          </div>
        </div>
        <div class="time">
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
      </div>
      <div class="logo" v-if="this.$store.getters.device == 'mobile'">
        <div class="logo-set">
          <img src="../assets/logo.png" alt="" class="logo" />
          <div class="text">
            <div class="chi">華楊會計師事務所</div>
            <div class="eng">YANG GAO. CdivA P.C Ltd.</div>
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
  //   height: 8em;
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
  .content {
    display: grid;
    grid-template-columns: 1.5fr 1fr;
    width: 90%;
    margin-left: 10%;
    .contact {
      width: 90%;
    }
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
    font-size: 0.8rem;
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
  .top {
    margin: 0 1em;
    font-size: 0.7rem;
    height: 5em;
    .content {
      grid-template-columns: 1.2fr 2.5fr 1fr;
      width: 100%;
      margin-left: 0;
      align-items: center;
      .contact {
        width: 90%;
        margin-left: 10%;
        display: grid;
        grid-template-columns: auto auto;
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
    width: 100%;
    padding-top:5px;
  }
  .top {
    margin: 1em 15vw;
    .content {
      grid-template-columns: 2fr 2.5fr 1fr;
      .logo-set {
        margin-left: 5vw;
      }
       .contact {
        width: 90%;
        margin-left: 10%;
        display: grid;
        grid-template-columns: 1fr 1fr;
      }
    }
  }
}
</style>