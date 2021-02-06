<template>
  <div class="service-menu mt-5 pt-5">
    <div class="service-select text-capitalize">
      <div
        class="service-selection px-3 fs-6"
        :class="Default"
        @click="toDefault"
      >
        <div v-if="this.$store.getters.lan">About Enterprise Service</div>
        <div v-else>关于企业业务</div>
      </div>
      <div
        class="service-selection px-3 fs-6"
        :class="project1"
        @click="toService1"
      >
        <div v-if="this.$store.getters.lan">Start a company</div>
        <div v-else>成立公司</div>
      </div>
      <div
        class="service-selection px-3 fs-6"
        :class="project2"
        @click="toService2"
      >
        <div v-if="this.$store.getters.lan">Company tax return</div>
        <div v-else>公司税务申报</div>
      </div>
      <div
        class="service-selection px-3 fs-6"
        :class="project3"
        @click="toService3"
      >
        <div v-if="this.$store.getters.lan">Apply for GST</div>
        <div v-else>申请GST</div>
      </div>
      <div
        class="service-selection px-3 fs-6"
        :class="project4"
        @click="toService4"
      >
        <div v-if="this.$store.getters.lan">Annual Audit</div>
        <div v-else>年度审计</div>
      </div>
      <div
        class="service-selection px-3 fs-6"
        :class="project5"
        @click="toService5"
      >
        <div v-if="this.$store.getters.lan">
          Financial system establishment and bookkeeping
        </div>
        <div v-else>财务系统建立及记账</div>
      </div>
      <div
        class="service-selection px-3 fs-6"
        :class="project6"
        @click="toService6"
      >
        <div v-if="this.$store.getters.lan">Payroll Services</div>
        <div v-else>工资核算</div>
      </div>
      <div
        class="service-selection px-3 fs-6"
        :class="project7"
        @click="toService7"
      >
        <div v-if="this.$store.getters.lan">consulting service</div>
        <div v-else>咨询服务</div>
      </div>
      <div
        class="service-selection px-3 fs-6"
        :class="project8"
        @click="toService8"
      >
        <div v-if="this.$store.getters.lan">financialPartner</div>
        <div v-else>财务合作伙伴</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      Default: "selected",
      project1: "unselected",
      project2: "unselected",
      project3: "unselected",
      project4: "unselected",
      project5: "unselected",
      project6: "unselected",
      project7: "unselected",
      project8: "unselected",
      btn: "",
    };
  },
  methods: {
    toDefault() {
      this.selectService("enterpriseServiceDefault");
    },
    toService1() {
      this.selectService("startCompany");
    },
    toService2() {
      this.selectService("companyTaxReturn");
    },
    toService3() {
      this.selectService("applyForGST");
    },
    toService4() {
      this.selectService("annualAudit");
    },
    toService5() {
      this.selectService("FinancialSystemEstablishment");
    },
    toService6() {
      this.selectService("payrollServices");
    },
    toService7() {
      this.selectService("consultingServices");
    },
    toService8() {
      this.selectService("financialPartner");
    },
    selectService(data) {
      this.$emit("toggleService", data);
      this.btn = data;
    },
  },
  watch: {
    btn(newValue) {
      switch (newValue) {
        case "enterpriseServiceDefault":
          this.Default = "selected";
          this.project1 = "unselected";
          this.project2 = "unselected";
          this.project3 = "unselected";
          this.project4 = "unselected";
          this.project5 = "unselected";
          this.project6 = "unselected";
          this.project7 = "unselected";
          this.project8 = "unselected";
          break;
        case "startCompany":
          this.Default = "unselected";
          this.project1 = "selected";
          this.project2 = "unselected";
          this.project3 = "unselected";
          this.project4 = "unselected";
          this.project5 = "unselected";
          this.project6 = "unselected";
          this.project7 = "unselected";
          this.project8 = "unselected";
          break;
        case "companyTaxReturn":
          this.Default = "unselected";
          this.project1 = "unselected";
          this.project2 = "selected";
          this.project3 = "unselected";
          this.project4 = "unselected";
          this.project5 = "unselected";
          this.project6 = "unselected";
          this.project7 = "unselected";
          this.project8 = "unselected";
          break;
        case "applyForGST":
          this.Default = "unselected";
          this.project1 = "unselected";
          this.project2 = "unselected";
          this.project3 = "selected";
          this.project4 = "unselected";
          this.project5 = "unselected";
          this.project6 = "unselected";
          this.project7 = "unselected";
          this.project8 = "unselected";
          break;
        case "annualAudit":
          this.Default = "unselected";
          this.project1 = "unselected";
          this.project2 = "unselected";
          this.project3 = "unselected";
          this.project4 = "selected";
          this.project5 = "unselected";
          this.project6 = "unselected";
          this.project7 = "unselected";
          this.project8 = "unselected";
          break;
        case "FinancialSystemEstablishment":
          this.Default = "unselected";
          this.project1 = "unselected";
          this.project2 = "unselected";
          this.project3 = "unselected";
          this.project4 = "unselected";
          this.project5 = "selected";
          this.project6 = "unselected";
          this.project7 = "unselected";
          this.project8 = "unselected";
          break;
        case "payrollServices":
          this.Default = "unselected";
          this.project1 = "unselected";
          this.project2 = "unselected";
          this.project3 = "unselected";
          this.project4 = "unselected";
          this.project5 = "unselected";
          this.project6 = "selected";
          this.project7 = "unselected";
          this.project8 = "unselected";
          break;
        case "consultingServices":
          this.Default = "unselected";
          this.project1 = "unselected";
          this.project2 = "unselected";
          this.project3 = "unselected";
          this.project4 = "unselected";
          this.project5 = "unselected";
          this.project6 = "unselected";
          this.project7 = "selected";
          this.project8 = "unselected";
          break;
        case "financialPartner":
          this.Default = "unselected";
          this.project1 = "unselected";
          this.project2 = "unselected";
          this.project3 = "unselected";
          this.project4 = "unselected";
          this.project5 = "unselected";
          this.project6 = "unselected";
          this.project7 = "unselected";
          this.project8 = "selected";
          break;
        default:
          break;
      }
    },
  },
  mounted() {
    const path = this.$router.history.current.params.pathMatch;
    if (path == "EnterpriseService/companyTaxReturn") {
      this.btn = "companyTaxReturn";
    }
  },
};
</script>

<style lang="scss" scoped>
@import "../../../assets/style.scss";

.service-select {
  display: grid;
  row-gap: 1em;
  .service-selection {
    background: #f1f1f1;
    text-align: center;
    padding: 1em 0;
    font-family: $text;
    color: $fontGray;
    filter: drop-shadow(1px 1px 2px rgb(100, 100, 100));
    cursor: pointer;
    transition: all 0.2s linear;
    &:hover {
      background-color: $barColor;
      color: #fff;
    }
  }
  .selected {
    background-color: $barColor;
    color: #fff;
  }
}

@media only screen and (min-width: 768px) {
  .service-select {
    margin-top: 2em;
    grid-template-columns: 1fr 1fr;
    column-gap: 2em;
  }
}
@media only screen and (min-width: 1280px) {
  .service-select {
    margin-top: 2em;
    grid-template-columns: 1fr;
    column-gap: 2em;
  }
}
</style>