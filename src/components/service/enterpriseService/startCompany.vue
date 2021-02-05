<template>
  <div class="py-5 text-center text-md-start">
    <h1 class="title text-center text-capitalize">
      <div v-if="this.$store.getters.lan">Start a company</div>
      <div v-else>成立公司</div>
    </h1>
    <div class="title fs-5">
      <div v-if="this.$store.getters.lan">
        <p>
          Before starting a business in Canada, the first thing to consider is
          type of company and how to register a company in Canada.
        </p>
        <p>
          Canadian companies are mainly divided into Provincial Corporation and
          Federal Corporation. In the province, there are three forms: Sole
          Proprietorship, Partnership and Incorporation. For the registration of
          a federal company, there is only an Incorporation form, and there is
          no Sole Proprietorship and Partnership to choose from.
        </p>
        <p>
          No matter it is a provincial company or a federal company, the
          registration procedures are roughly divided into several steps, such
          as name search, preparation of application forms and articles
          (Articles), submission of applications to the government, and
          collection of registration documents. In fact, federal companies
          operating in various provinces need to go through extra-provincial
          (Extra-Provincial) registration just like provincial companies. What's
          more convenient than provincial companies are that there is generally
          no need to apply for name, just register directly.
        </p>
        <p>
          Because federal companies need to go through the federal and
          provincial registrations at the same time and pay two levels of
          government fees at the same time, the general federal company
          registration fee is higher than that of the provincial company.
        </p>
        <p>
          Regardless of whether a federal company or a provincial company, the
          Canadian company generally needs to go through tax registration
          procedures after the registration is completed, including Business
          Number, GST/HST, Import/Export Number, Payroll Deduction.
        </p>
      </div>
      <div v-else>
        <p>
          在加拿大创业之前，首先要考虑的是选择注册哪一种公司类型，以及如何注册。加拿大的公司主要分为省公司
          (Provincial Corporation) 以及联邦公司 (Federal Corporation)
          两种。在省方面，公司总共有三种形式：个人独资（Sole
          Proprietorship）、合伙经营（Partnership）以及有限公司（Incorporation）。而注册联邦公司，只有Incorporation一种公司形式，并没有个人独资(Sole
          Proprietorship)
          和合资公司(Partnership)可以选择。不论是省公司还是联邦公司，注册手续大致都分为查名、准备申请表格和章程（Articles）、向政府提交申请、领取注册文件等几个步骤。实际上联邦公司在各省经营跟省公司一样需要办理跨省（Extra-Provincial）登记，较省公司方便的是一般无需再办理名字申请，直接登记即可。因为联邦公司需要同时办理联邦及省登记，同时交纳两级政府收费，所以一般联邦公司注册费用高于省公司。不论联邦公司或是省公司，加拿大公司注册完成后一般都需要办理税务登记手续，包括商业号码（Business
          Number），销售税号（GST/HST），进出口号码（Import/Export
          Number），工资扣款（Payroll Deduction）。
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