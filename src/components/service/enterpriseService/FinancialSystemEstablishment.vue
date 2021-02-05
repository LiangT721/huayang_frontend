<template>
  <div class="py-5 text-center text-md-start">
    <h1 class="title text-center text-capitalize">
      <div v-if="this.$store.getters.lan">
        Financial system establishment and bookkeeping
      </div>
      <div v-else>财务系统建立及记账</div>
    </h1>
    <div class="title fs-5">
      <div v-if="this.$store.getters.lan">
        <p>
          In Canada, a healthy financial system is very important for
          individuals, families, companies or partnerships. Professional and
          clear bookkeeping is good for easy tax declaration, understanding of
          various expenditure details, and easy future fiscal and tax planning
          which are the cornerstones of business success. In this regard, the
          help of professional accountants can save you time and let you focus
          on developing your business. With professional teams and practical
          experiences, YANG GAO. CPA P.C Ltd. can provide professional services.
        </p>
        <p>The services we provide include:</p>
        <ul>
          <li class="ps-1 ms-3 pb-2">
            Accounting software installation, system establishment, software
            application and accounting training and related computer technical
            support
          </li>
          <li class="ps-1 ms-3 pb-2">Establish accounting accounts</li>
          <li class="ps-1 ms-3 pb-2">Design Excel bookkeeping module table</li>
          <li class="ps-1 ms-3 pb-2">Year-end adjustment</li>
          <li class="ps-1 ms-3 pb-2">Full set of bookkeeping services</li>
          <li class="ps-1 ms-3 pb-2">
            Preparation of financial statements (profit and loss statement,
            balance sheet, cash flow statement and etc.)
          </li>
        </ul>
      </div>
      <div v-else>
        <p>
          在加拿大，财务系统的建立，不论是对个人、家庭、公司或是合伙企业而言，都是非常重要的。专业、清晰的记账，便于纳税申报，对各类支出明细的了解，也便于进行未来的财税规划，是生意成功的基石。在这方面，专业的会计人士的帮助能够让您省心省力，集中精力发展生意。
          华杨会计师事务所有专业的团队和实际操作的储备，能够为您提供专业性的服务。
        </p>
        <p>我们提供的服务包括：</p>
        <ul>
          <li class="ps-1 ms-3 pb-2">
            会计软件安装，系统建立，软件应用和记账培训及相关电脑技术支持
          </li>
          <li class="ps-1 ms-3 pb-2">建立会计账目</li>
          <li class="ps-1 ms-3 pb-2">设计excel记账模块表</li>
          <li class="ps-1 ms-3 pb-2">年终调帐</li>
          <li class="ps-1 ms-3 pb-2">全套记账服务</li>
          <li class="ps-1 ms-3 pb-2">
            制作财务报表 (损益表、资产负债表、现金流表和平衡试算表)
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