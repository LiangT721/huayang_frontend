<template>
  <div class="py-5 text-center text-md-start">
    <h1 class="title text-center text-capitalize">
      <div v-if="this.$store.getters.lan">consulting services</div>
      <div v-else>咨询服务</div>
    </h1>
    <div class="title fs-5">
      <div v-if="this.$store.getters.lan">
        <p>
          YANG GAO. CPA P.C Ltd. provides consulting services related to finance
          and taxation, including:
        </p>
        <ul>
          <li class="ps-1 ms-3 pb-2">
            Corporate financial management and consulting
          </li>
          <li class="ps-1 ms-3 pb-2">
            Self-employed small business accounting consulting
          </li>
          <li class="ps-1 ms-3 pb-2">Personal tax planning and consulting</li>
          <li class="ps-1 ms-3 pb-2">
            Self-employed small business tax planning and consulting
          </li>
          <li class="ps-1 ms-3 pb-2">Corporate tax planning and consulting</li>
          <li class="ps-1 ms-3 pb-2">Business consulting</li>
        </ul>
      </div>
      <div v-else>
        <p>
          华杨会计师事务所提供与公司财务、税务等相关的咨询服务，服务内容包括：
        </p>
        <ul>
          <li class="ps-1 ms-3 pb-2">公司财务管理及咨询</li>
          <li class="ps-1 ms-3 pb-2">自雇小生意会计事务咨询</li>
          <li class="ps-1 ms-3 pb-2">个人税务策划与咨询</li>
          <li class="ps-1 ms-3 pb-2">自雇小生意税务策划与咨询</li>
          <li class="ps-1 ms-3 pb-2">公司税务策划与咨询</li>
          <li class="ps-1 ms-3 pb-2">生意买卖咨询</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
</style>