<template>
  <div class="py-5 text-center text-md-start">
    <h1 class="title text-center text-capitalize">
      <div v-if="this.$store.getters.lan">Help immigrant entrepreneurs from SINP Entrepreneur Category</div>
      <div v-else>移民解除条件</div>
    </h1>
    <div class="title fs-5">
      <div v-if="this.$store.getters.lan">
          <p>When new immigrant entrepreneurs first come to Saskatoon, they need to adapt to the new environment, and start a new business. They often feel confused and don't know where to start. We have provided a full range of services for hundreds of new Chinese immigrant entrepreneurs. From the initial business plan to the company registration, to the final business implementation and operation, we will use professional knowledge to escort you at every step and let you complete it smoothly: start a business and continue to operate. At the same time, we have also accumulated a wealth of business resources in the local area. We can not only match you with other entrepreneurs, but also recommend professionals in other fields to help you and your business operate smoothly in the local area. We can be the strong partner for you to meet the criteria of SINP Entrepreneur program.</p>
      </div>
      <div v-else><p>
         新移民初登萨斯卡通，适应新的环境，开启新的生意，常常会感到好无头绪，不知道从何开始。我们已经为数百个华人新移民企业家提供全方位的服务，从最初的商业计划到公司成立，再到最终的商业落实经营，每一步我们都将用专业知识为您护航，让您顺利完成创业，并且持续经营。同时，我们在当地也已积累了丰富的商业资源，既能够为您与其他企业家牵线搭桥，也能够为您推荐其他领域的专业人士帮助您和您的生意在当地顺利经营，为解除移民条件提供强有力的保障。</p></div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>

</style>