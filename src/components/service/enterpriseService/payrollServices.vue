<template>
  <div class="py-5 text-center text-md-start">
    <h1 class="title text-center text-capitalize">
      <div v-if="this.$store.getters.lan">
         payroll services 
      </div>
      <div v-else>
          工资核算
      </div>
    </h1>
    <div class="title fs-5">
      <div v-if="this.$store.getters.lan">
       <p>
          As long as the company has employees, there is payroll calculation. Payroll calculations occur on fixed days in every month. Calculations, tax deductions and so on are tedious and complicated things. YANG GAO. CPA P.C Ltd. provides professional payroll services to help small and medium-sized business owners free themselves from tedious administrative payroll things and focus on the development of their core business.
        </p>
        <p>Our payroll services include:</p>
        <ul>
          <li class="ps-1 ms-3 pb-2">
            Wage calculation
          </li>
          <li class="ps-1 ms-3 pb-2">Statutory holiday payment, sick leave payment, statutory maternity leave payment, etc.</li>
          <li class="ps-1 ms-3 pb-2">Labor cost analysis</li>
          <li class="ps-1 ms-3 pb-2">Incentive plans, bonuses and dismissal wages</li>
          <li class="ps-1 ms-3 pb-2">Tax filling of HST, WSIB, EHT, payroll tax </li>
          <li class="ps-1 ms-3 pb-2">
            Issue T4, T4A, T3, T5, T5018 & ROE, etc.
          </li>
        </ul>
      </div>
      <div v-else>
        <p>
          只要企业有雇佣关系的存在，薪资计算就是不可或缺的环节。薪资计算集中在一个月的固定几天时间，计算，扣税等都是繁琐且复杂的事情。华杨会计师事务所提供专业的薪资核算服务，帮助中小企业主从繁琐的行政事务中解放出来，实现对其核心业务的关注的发展。
        </p>
        <p>我们的薪资核算服务包含：</p>
        <ul>
          <li class="ps-1 ms-3 pb-2">
            工资计算
          </li>
          <li class="ps-1 ms-3 pb-2">法定假期工资，病假工资、法定产假工资等。</li>
          <li class="ps-1 ms-3 pb-2">人力成本分析</li>
          <li class="ps-1 ms-3 pb-2">奖励计划、奖金及解雇员工工资</li>
          <li class="ps-1 ms-3 pb-2">HST，WSIB，EHT，工资税等申报</li>
          <li class="ps-1 ms-3 pb-2">
            出具T4，T4A，T3，T5，T5018 & ROE等
          </li>
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