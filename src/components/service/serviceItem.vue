<template>
  <div class="service-items">
    <div class="service-item" @click="toServicePage1" >
      <img src="../../assets/service1.jpg" alt="" class="service-image" />
      <div class="service-title">
        <div v-if="this.$store.getters.lan">
          {{ this.$store.state.service_project.project1.title.eng }}
        </div>
        <div v-else>
          {{ this.$store.state.service_project.project1.title.chi }}
        </div>
      </div>
      <div class="service-description">
        <div v-if="this.$store.getters.lan">
          {{ this.$store.state.service_project.project1.description.eng }}
        </div>
        <div v-else>
          {{ this.$store.state.service_project.project1.description.chi }}
        </div>
      </div>
      <div class="more"><u>
        <div v-if="this.$store.getters.lan">More Information</div>
        <div v-else>获取更多信息</div></u>
      </div>
    </div>
    <div class="service-item" @click="toServicePage2" >
      <img src="../../assets/service2.jpg" alt="" class="service-image" />
      <div class="service-title">
        <div v-if="this.$store.getters.lan">
          {{ this.$store.state.service_project.project2.title.eng }}
        </div>
        <div v-else>
          {{ this.$store.state.service_project.project2.title.chi }}
        </div>
      </div>
      <div class="service-description">
        <div v-if="this.$store.getters.lan">
          {{ this.$store.state.service_project.project2.description.eng }}
        </div>
        <div v-else>
          {{ this.$store.state.service_project.project2.description.chi }}
        </div>
      </div>
      <div class="more"><u>
        <div v-if="this.$store.getters.lan">More Information</div>
        <div v-else>获取更多信息</div></u>
      </div>
    </div>
    <div class="service-item" @click="toServicePage3" >
      <img src="../../assets/service3.jpg" alt="" class="service-image" />
      <div class="service-title">
        <div v-if="this.$store.getters.lan">
          {{ this.$store.state.service_project.project3.title.eng }}
        </div>
        <div v-else>
          {{ this.$store.state.service_project.project3.title.chi }}
        </div>
      </div>
      <div class="service-description">
        <div v-if="this.$store.getters.lan">
          {{ this.$store.state.service_project.project3.description.eng }}
        </div>
        <div v-else>
          {{ this.$store.state.service_project.project3.description.chi }}
        </div>
      </div>
      <div class="more"><u>
        <div v-if="this.$store.getters.lan">More Information</div>
        <div v-else>获取更多信息</div></u>
      </div>
    </div>
    <div class="service-item" @click="toServicePage4" >
      <img src="../../assets/service4.jpg" alt="" class="service-image" />
      <div class="service-title">
        <div v-if="this.$store.getters.lan">
          {{ this.$store.state.service_project.project4.title.eng }}
        </div>
        <div v-else>
          {{ this.$store.state.service_project.project4.title.chi }}
        </div>
      </div>
      <div class="service-description">
        <div v-if="this.$store.getters.lan">
          {{ this.$store.state.service_project.project4.description.eng }}
        </div>
        <div v-else>
          {{ this.$store.state.service_project.project4.description.chi }}
        </div>
      </div>
      <div class="more"><u>
        <div v-if="this.$store.getters.lan">More Information</div>
        <div v-else>获取更多信息</div></u>
      </div>
    </div>
  </div>
</template>

<script>
export default {
    methods: {
        toServicePage1() {
            this.$router.push('/service/tax')
        },
        toServicePage2() {
            this.$router.push('/service/tax2')
        },
        toServicePage3() {
            this.$router.push('/service/tax3')
        },
        toServicePage4() {
            this.$router.push('/service/tax4')
        }
    },
};
</script>

<style lang="scss" scoped>
@import "../../assets/style.scss";

.service-items {
  width: 70%;
  margin-left: 15%;
  margin-top: 5em;
  display: grid;
  row-gap:5em
}
.service-item{
    display: grid;
    row-gap:1em;
    .service-image{
        width:100%;
        height:60vw;
        object-fit:cover;
    }
    .service-title{
        font-family:$title;
        font-size:1.2rem;
    }
    .service-content{
        font-family:$text;
        font-size:1rem;
    }
    .more{
        font-size:1rem;
        color:coral;
        font-weight:500;
        cursor:pointer;
    }

}
@media only screen and (min-width: 768px) {
    .service-items {
        grid-template-columns:1fr 1fr;
        column-gap:10vw;
        
    }
    .service-item {
        .service-image {
            width: 30vw;
            height: 30vw;
        }
    }
}
@media only screen and (min-width: 1280px) {
     .service-items {
     grid-template-columns:1fr 1fr 1fr 1fr;
        column-gap:5vw;
        
    }
    .service-item {
        .service-image {
            width: 12vw;
            height: 12vw;
        }
    }
}
</style>