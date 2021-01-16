<template>
  <div>
    <div v-if="this.$store.getters.lan">
      <h1>Business financing</h1>
      <h2>
        Canadian government guaranteed business loan program (Canadian emergency
        business account)
      </h2>
      <p>
        The Canada Emergency Business Account (CEBA) is a loan program which was
        implemented by eligible financial institutions in cooperation with
        Export Development Canada (EDC).
      </p>
      <p>
        <b
          >As of December 4, 2020, CEBA loans for eligible businesses increased
          from $40,000 to $60,000.</b
        >
      </p>
      <p>
        This program provides interest-free loans, of up to $60,000, to small
        businesses and not-for-profits, to help cover their operating costs
        during a period where their revenues have been temporarily reduced, due
        to the economic impacts of the COVID-19 virus.
      </p>
      <ul class="l1">
        <li>
          Repaying the balance of the loan on or before December 31, 2022 will
          result in loan forgiveness of 33 percent (up to $20,000).
        </li>
      </ul>
      <p>
        To qualify, these organizations will need to demonstrate they paid
        between $20,000 to $1.5 million in total payroll in 2019.<br />
        To qualify under the expanded eligibility criteria, applicants with
        payroll lower than $20,000 would need:
      </p>
      <ul class="l1">
        <li>
          a business operating account at a participating financial institution;
        </li>
        <li>
          a Canada Revenue Agency business number, and to have filed a 2018 or
          2019 tax return;
        </li>
        <li>
          eligible non-deferrable expenses between $40,000 and $1.5 million.
          Eligible non-deferrable expenses could include costs such as rent,
          property taxes, utilities, and insurance.
        </li>
      </ul>
      <p>
        Expenses will be subject to verification and audit by the Government of
        Canada. Funding will be delivered in partnership with financial
        institutions.
      </p>
      <p>
        All applicants have until March 31, 2021, to apply for $60,000 CEBA loan
        or the $20,000 expansion.
      </p>
      Do not hesitate to consult the<a href="https://ceba-cuec.ca/"
        ><u> Government of Canada website</u></a
      >
      for more details: <br />
      <a href="https://ceba-cuec.ca/"><u>https://ceba-cuec.ca/</u></a>
    </div>
    <div v-else></div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
@import "../../assets/style.scss";

.l1 {
  width: 90%;
  margin-left: 10%;
}
.l2 {
  margin-top: 0.5em;
  width: 90%;
  margin-left: 8%;
}
</style>