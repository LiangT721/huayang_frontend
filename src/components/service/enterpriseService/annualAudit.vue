<template>
  <div class="py-5 text-center text-md-start">
    <h1 class="title text-center text-capitalize">
      <div v-if="this.$store.getters.lan">Annual Audit</div>
      <div v-else>年度审计</div>
    </h1>
    <div class="title fs-5">
      <div v-if="this.$store.getters.lan">
        <p>
          No matter it is a federal company or a provincial company in Canada,
          the annual audit is required within the prescribed time. If the annual
          audit is not done properly, the Canadian company will not only be
          compulsorily cancelled, but severely may face government fines. The
          basic materials required for the annual audit are as follows:
        </p>
         <ol>
              <li class="ps-1 ms-3 pb-2">Copy of Canadian company registration certificate</li>
              <li class="ps-1 ms-3 pb-2">Articles of Association of Canada</li>
              <li class="ps-1 ms-3 pb-2">Copy of a full set of documents for company registration</li>
              <li class="ps-1 ms-3 pb-2">Copy of shareholder change document (if there is any change of shareholder)</li>
              <li class="ps-1 ms-3 pb-2">Copy of capital increase document (if capital increase)</li>
              <li class="ps-1 ms-3 pb-2">A copy of the Canadian company name change (if any)</li>
              <li class="ps-1 ms-3 pb-2">Copy of ID card or passport of shareholder or director (subject to the one submitted to the government).</li>
          </ol>
          <p>Professional accountant’s team will conduct an annual audit for you, which can save time and effort, and can also avoid adverse consequences caused by improper operations.</p>
      </div>
      <div v-else>
       <p>
          在加拿大不管是注册联邦公司还是省公司都需要按规定的时间进行年审和报税的工作，如果既不年审也不报税，加拿大公司不仅会被强制注销，严重的可能会面临政府的罚款。
        </p>
        <p>年度审计所需的基本材料如下：</p>
         <ol>
              <li class="ps-1 ms-3 pb-2">加拿大公司注册证书复印件</li>
              <li class="ps-1 ms-3 pb-2">加拿大公司章程</li>
              <li class="ps-1 ms-3 pb-2">成立加拿大公司全套文件复印件</li>
              <li class="ps-1 ms-3 pb-2">股东更改文件复印件 (如有更改股东)</li>
              <li class="ps-1 ms-3 pb-2">增资文件复印件 (如有增资)</li>
              <li class="ps-1 ms-3 pb-2">加拿大公司名称更改复印件 (如有改名)</li>
              <li class="ps-1 ms-3 pb-2">股东或董事身份证或护照复印件 (以递交到政府的为准)。</li>
          </ol>
          <p>由专业会计师团队为您进行年度审计，可以省时省力，也可以尽量避免因为操作不当而引起的不良后果。</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
</style>