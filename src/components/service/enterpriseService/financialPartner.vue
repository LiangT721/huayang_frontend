<template>
  <div class="py-5 text-center text-md-start">
    <h1 class="title text-center text-capitalize">
      <div v-if="this.$store.getters.lan">financial partner</div>
      <div v-else>财务合作伙伴</div>
    </h1>
    <div class="title fs-5">
      <div v-if="this.$store.getters.lan">
        <p>
          Usually, small or medium-sized enterprises cannot afford a full-time
          professional financial team to deal with the company’s financial
          issues. YANG GAO. CPA P.C Ltd. can be your financial partner, provide
          you with professional financial advice, suitable financial solutions,
          and let you have the professional financial service at the best cost.
        </p>
        <p>The services as a financial partner include:</p>
        <h2>Financial report</h2>
        <ul>
          <li class="ps-1 ms-3 pb-2">
            Allows you to better understand the financial situation of your
            business.
          </li>
          <li class="ps-1 ms-3 pb-2">
            Preparation and review of internal financial statements and periodic
            reports
          </li>
          <li class="ps-1 ms-3 pb-2">Various financial analysis</li>
        </ul>
        <h2>Management support</h2>
        <ul>
          <li class="ps-1 ms-3 pb-2">Fixed asset management</li>
          <li class="ps-1 ms-3 pb-2">Profitability Analysis</li>
          <li class="ps-1 ms-3 pb-2">Financial system management</li>
          <li class="ps-1 ms-3 pb-2">
            Accounting software conversion and management
          </li>
          <li class="ps-1 ms-3 pb-2">General ledger accounts management</li>
          <li class="ps-1 ms-3 pb-2">
            Help you negotiate and liaise with banks, lawyers, suppliers,
            financial institutions, CRA, etc. on financial matters
          </li>
        </ul>
        <h2>Internal control</h2>
        <ul>
          <li class="ps-1 ms-3 pb-2">Control business costs</li>
          <li class="ps-1 ms-3 pb-2">Accounts receivable management</li>
          <li class="ps-1 ms-3 pb-2">Bank reconciliations</li>
          <li class="ps-1 ms-3 pb-2">Check and correct accounting errors</li>
          <li class="ps-1 ms-3 pb-2">Cash flow forecast and budget</li>
        </ul>
        <h2>Future plan</h2>
        <ul>
          <li class="ps-1 ms-3 pb-2">Budget and progress monitoring</li>
          <li class="ps-1 ms-3 pb-2">
            Assist in the formulation of long-term plans, budgets and cash
            management
          </li>
          <li class="ps-1 ms-3 pb-2">Tax saving strategy</li>
          <li class="ps-1 ms-3 pb-2">business plan</li>
          <li class="ps-1 ms-3 pb-2">Cost saving strategy</li>
          <li class="ps-1 ms-3 pb-2">
            Formulate the company's accounting procedures
          </li>
        </ul>
      </div>
      <div v-else>
        <p>
          中小型企业往往无法负担一个专业的全职财务团队来处理公司内部的财务问题，华杨会计师事务所可以成为您的财务合作伙伴，为您提供专业的财务咨询，给出适合的财务解决方案，帮助您以最佳的成本，拥有专业的财务团队。
        </p>
        <p>财务合作伙伴的服务内容包括：</p>
        <h2>财务报告</h2>
        <ul>
          <li class="ps-1 ms-3 pb-2">
            让您更好更全面地了解您企业的财务状况。
          </li>
          <li class="ps-1 ms-3 pb-2">编制和审查内部财务报表和定期报告</li>
          <li class="ps-1 ms-3 pb-2">各种财务分析</li>
        </ul>
        <h2>管理支持</h2>
        <ul>
          <li class="ps-1 ms-3 pb-2">固定资产管理</li>
          <li class="ps-1 ms-3 pb-2">盈利能力分析</li>
          <li class="ps-1 ms-3 pb-2">财务系统管理</li>
          <li class="ps-1 ms-3 pb-2">会计软件转换和管理</li>
          <li class="ps-1 ms-3 pb-2">总帐科目管理</li>
          <li class="ps-1 ms-3 pb-2">
            助您与银行、律师、供应商、金融机构、CRA等进行财务方面的协商和联络
          </li>
        </ul>
        <h2>内部控制</h2>
        <ul>
          <li class="ps-1 ms-3 pb-2">控制企业成本</li>
          <li class="ps-1 ms-3 pb-2">应收帐款管理</li>
          <li class="ps-1 ms-3 pb-2">银行对账</li>
          <li class="ps-1 ms-3 pb-2">检查并更正账目错误</li>
          <li class="ps-1 ms-3 pb-2">现金流预测和预算</li>
        </ul>
        <h2>未来规划</h2>
        <ul>
          <li class="ps-1 ms-3 pb-2">预算和进度监控</li>
          <li class="ps-1 ms-3 pb-2">协助制定长期计划、预算和现金管理</li>
          <li class="ps-1 ms-3 pb-2">节税策略</li>
          <li class="ps-1 ms-3 pb-2">商业计划</li>
          <li class="ps-1 ms-3 pb-2">成本节约策略</li>
          <li class="ps-1 ms-3 pb-2">制定公司的会计程序</li>
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