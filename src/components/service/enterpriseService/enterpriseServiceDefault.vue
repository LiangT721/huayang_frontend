<template>
  <div class="py-5 text-center text-md-start">
    <h1 class="title text-center text-capitalize">
      <div v-if="this.$store.getters.lan">Enterprise services</div>
      <div v-else>企业业务</div>
    </h1>
    <div class="title fs-5">
      <div v-if="this.$store.getters.lan">
        <p>
          Enterprise services: company registration, application for GST number,
          provincial taxation, statements, annual audit, financial system
          establishment and bookkeeping, payroll, taxation, consulting,
          financial partners
        </p>
      </div>
      <div v-else>
        <p>
          成立公司，申请GST号，省税，报表，年度审计，财务系统建立及记账，工资核算，税务，咨询，财务合作伙伴
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
</style>