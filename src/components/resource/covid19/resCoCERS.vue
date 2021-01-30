<template>
  <div class="container-sm">
    <div v-if="this.$store.getters.lan">
      <h1 class="text-center col-8 offset-2 py-5">Canada Emergency Rent Subsidy (CERS)</h1>
      <br />
      <h2 class="col-10 offset-1">What is it?</h2>
      <p class="col-10 offset-1">
        Allows qualifying tenants (and some landlords) to claim a base subsidy
        of up to 65% of their qualifying expenses incurred for commercial rent.
        <br />
        Also allows qualifying tenants (and some landlords) to claim a top-up
        subsidy of up to 25% of their qualifying expenses incurred for
        commercial rent if they were subject to a COVID‑19‑related public health
        restriction order.
      </p>
      <h2 class="col-10 offset-1">Who can apply?</h2>
      <p class="col-10 offset-1">You meet at least one of these conditions:</p>
      <ul class="l1">
        <li>As of September 27, 2020, you had a CRA business number.</li>
        <li>As of March 15, 2020, you had a payroll account.</li>
        <li>You purchased the business assets of another person.</li>
      </ul>
      <p class="col-10 offset-1">You must also be:</p>
      <ul class="l1">
        <li>
          a tenant paying qualifying expenses for a commercial building located
          in Canada to an arm’s length party under a written agreement entered
          into before October 9, 2020 (or renewed after this date with similar
          conditions).
        </li>
        <li>
          OR an owner of a commercial building located in Canada that is not
          used primarily (more than 50%) to earn rental income or that is used
          primarily (more than 50%) to earn rental income from a non-arm's
          length entity that actively uses it (more than 50%).
        </li>
      </ul>
      <p class="col-10 offset-1">You must have experienced a drop in revenue:</p>
      <ul class="l1">
        <li>
          There is no minimum drop in revenue required (simply has to be more
          than 0%).
        </li>
        <li>Same calculation used for the CEWS:</li>
        <ul class="l2">
          <li>Comparison with previous year's income.</li>
          <li>
            Comparison with the average income in January and February 2020.
          </li>
          <li>
            Identical elections (consolidated entities, cash versus accrual
            method, etc.).
          </li>
          <li>
            Uses the highest revenue drop between the current month and the
            previous month.
          </li>
        </ul>
      </ul>
      <h2 class="col-10 offset-1">Subsidy calculation</h2>
      <h3 class="col-10 offset-1">Base subsidy</h3>
      <p class="col-10 offset-1">
        The amount of your base rent subsidy rate is determined by your revenue
        drop.
      </p>
      <table class="offset-1 col-10 ms-5">
        <tr>
          <th colspan="2">Calculating Your Rent Subsidy Rate</th>
        </tr>
        <tr>
          <th>Drop in revenue</th>
          <th>How to calculate your rate</th>
        </tr>
        <tr>
          <td>Drop in revenue of 70% or more</td>
          <td>Maximum subsidy rate of 65%</td>
        </tr>
        <tr>
          <td>Drop in revenue of 50 to 70%</td>
          <td>(your drop in revenue - 50%) × 1,25 + 40%</td>
        </tr>
        <tr>
          <td>Drop in revenue of less than 50%</td>
          <td>0,8 × your drop in revenue</td>
        </tr>
      </table>
      <h3 class="col-10 offset-1">Top-up subsidy</h3>
      <p class="col-10 offset-1">To qualify for Lockdown Support, you must:</p>
      <ul class="l1">
        <li>
          have a base rent subsidy rate greater than 0% for the application
          period (or previous period);
        </li>
        <li>
          have at least one or more locations temporarily closed, or have
          activities significantly restricted for a week or longer due to a
          COVID‑19‑related public health order;
        </li>
        <li>
          be required to interrupt some or all of your regular activities while
          the restriction order is in place.
        </li>
        <ul class="l2">
          <li>
            Activities that you were unable to perform must represent at least
            approximately 25% of total revenues at that location during the
            previous reference period.
          </li>
        </ul>
      </ul>
      <p class="col-10 offset-1">
        <b>
          An order that limits or curtails your activities, but does not require
          you to shut down or interrupt certain activities does not qualify you
          for Lockdown Support.</b
        >
      </p>
      <p class="col-10 offset-1">Examples of restrictions that do not qualify for Lockdown Support:</p>
      <ul class="l1">
        <li>Travel restrictions that reduce the number of clients.</li>
        <li>
          Rules about when you can perform your regular activities, such as
          restricted or reduced hours of operation or service.
        </li>
        <li>
          Any other restrictions that do not specifically direct you to stop or
          suspend an activity, such as reduced seating or other physical
          distancing strategies.
        </li>
      </ul>
      <p class="col-10 offset-1">
        Maximum subsidy of 25% is based on the number of days the business was
        under health restrictions during the period.
      </p>
      <h2 class="col-10 offset-1">Qualifying expenses and limitations</h2>
      <p class="col-10 offset-1">
        For each claim period, you can claim qualifying expenses up to a maximum
        of:
      </p>
      <ul class="l1">
        <li>$75,000 per location (base subsidy and top-up subsidy).</li>
        <li>
          $300,000 overall (including amounts claimed by affiliated entities):
        </li>
        <ul class="l2">
          <li>this applies to the base subsidy only;</li>
          <li>there is no maximum for the top-up subsidy.</li>
        </ul>
      </ul>
      <p class="col-10 offset-1">
        <b
          >If you are renting the eligible property, your qualifying expenses
          are as follows:</b
        >
      </p>
      <ul class="l1">
        <li>
          Rent (including rent based on a percentage of sales, profits or
          similar criteria).
        </li>
        <li>
          Amounts required to be paid under a net lease (either to the lessor or
          a third party). These amounts payable could include:
        </li>
        <ul class="l2">
          <li>base rent;</li>
          <li>regular payments for normal operating expenses, such as:</li>
          <ul class="l3">
            <li>real estate insurance;</li>
            <li>utilities;</li>
            <li>maintenance of common areas.</li>
          </ul>
          <li>
            property taxes and other similar taxes, including school and
            municipal taxes;
          </li>
          <li>
            regular payments to the lessor for customarily supplied ancillary
            services.
          </li>
        </ul>
      </ul>
      <p class="col-10 offset-1">You cannot include the following amounts:</p>
      <ul class="l1">
        <li>sales taxes (such as GST/HST and provincial sales taxes);</li>
        <li>amounts paid for damages;</li>
        <li>interest or penalties on unpaid amounts;</li>
        <li>any other special amount;</li>
        <li>tenant insurance;</li>
        <li>leasehold improvements.</li>
      </ul>
      <p class="col-10 offset-1">
        If you own the eligible property, your qualifying expenses are as
        follows:
      </p>
      <ul class="l1">
        <li>property taxes and other similar taxes:</li>
        <ul class="l2">
          <li>
            this includes school taxes and municipal taxes if they are part of
            your property tax assessment.
          </li>
        </ul>
        <li>property insurance;</li>
        <li>
          interest on commercial mortgages for the purchase of real property:
        </li>
        <ul class="l2">
          <li>your mortgage amount cannot exceed the lesser of:</li>
          <ul class="l3">
            <li>
              the lowest principal amount secured by one or more mortgages on
              the property at any time since its acquisition;
            </li>
            <span>or</span>
            <li>the cost of the eligible property.</li>
          </ul>
        </ul>
      </ul>
      <p class="col-10 offset-1">The following expenses do not qualify:</p>
      <ul class="l1">
        <li>
          amounts that have been paid for a period outside the claim period;
        </li>
        <li>payments between non-arm's length and related entities.</li>
      </ul>
      <p class="col-10 offset-1">
        <b
          >If you earned income from subleasing space on the property to arm's
          length parties, you must subtract this income from your qualifying
          expenses.</b
        >
      </p>
      <p class="col-10 offset-1">
        If you have not yet paid the amounts owing for your qualifying expenses,
        you must attest (confirm) that these amounts will be paid within 60 days
        of receiving your rent subsidy payment.
      </p>
      <h2 class="col-10 offset-1">Application periods</h2>
      <p class="col-10 offset-1">Immediate applications:</p>
      <ul class="l1">
        <li>Period 1 (Period 8 CEWS): September 27 to October 24, 2020</li>
        <li>Period 2 (Period 9 CEWS): October 25 to November 21, 2020</li>
      </ul>
      <p class="col-10 offset-1">Upcoming applications:</p>
      <ul class="l1">
        <li>Period 3 (Period 10 CEWS): November 22 to December 19, 2020</li>
        <li>
          Period 4 (Period 11 CEWS): December 20, 2020 to January 16, 2021
        </li>
        <li>
          Period 5 (Period 12 CEWS): January 17, 2021 to February 14, 2021
        </li>
      </ul>
      <h2 class="col-10 offset-1">How to apply?</h2>
      <p class="col-10 offset-1">You must apply online through:</p>
      <ul class="l1">
        <li>My Business Account</li>
        <li>Represent a Client</li>
      </ul>
      <p class="col-10 offset-1">
        Applications must be completed no later than 180 days after the end of
        the qualifying period.
        <br />
        Do not hesitate to consult the<a
          href="https://www.canada.ca/en/revenue-agency/services/subsidy/emergency-rent-subsidy.html"
          ><u>Government of Canada website</u></a
        >
        for more details: <br />
        <a
          href="https://www.canada.ca/en/revenue-agency/services/subsidy/emergency-rent-subsidy.html"
          ><u
            >https://www.canada.ca/en/revenue-agency/services/subsidy/emergency-rent-subsidy.html</u
          ></a
        >
      </p>
    </div>
    <div v-else>
      <h1 class="text-center col-8 offset-2 py-5">加拿大紧急租金补贴计划（CERS）</h1>
      <br />
      <h2 class="col-10 offset-1">它是什么？</h2>
      <p class="col-10 offset-1">
        允许<u>符合条件的租户</u>（和某些房东）要求获得基本补贴，最多不超过其商业租金的符合条件的费用的65％。
        <br />
        还允许受到COVID-19相关的公共卫生限制令的行业内，<u>符合条件的租户</u>（和某些房东）申请该补贴，其补贴最高不超过其用于商业租金的符合条件的支出的25％。
      </p>
      <h2 class="col-10 offset-1">谁可以申请？</h2>
      <p class="col-10 offset-1">您至少满足以下条件之一：</p>
      <ul class="l1">
        <li><u>截至2020年9月27日，您拥有CRA商业号。</u></li>
        <li>截至2020年3月15日，您拥有一个工资账户。</li>
        <li>您购买了另一个人的商业资产。</li>
      </ul>
      <p class="col-10 offset-1">您还必须是：</p>
      <ul class="l1">
        <li>
          在2020年10月9日之前签订了书面租赁协议（或在此日期之后以类似条件续签）的书面协议，<u>租户</u>向独立交易的一方支付位于加拿大的商业建筑物的符合条件的费用。
        </li>
        <li>
          <u>或</u
          >位于加拿大的商业建筑物<u>的所有者</u>，其主要用途（不超过50％）主要用于赚取租金收入，或主要用途（大于50％）主要用于从积极使用非公平原则的实体赚取租金收入（超过50％）。
        </li>
      </ul>
      <p class="col-10 offset-1">您的收入一定有所下降：</p>
      <ul class="l1">
        <li>没有最低的收入下降要求（必须大于0％）。</li>
        <li>与CEWS使用相同的计算：</li>
        <ul class="l2">
          <li>与上一年的收入比较。</li>
          <li>与2020年1月和2020年2月的平均收入进行比较。</li>
          <li>相同的选择（合并实体，现金与权责发生制等）。</li>
          <li>使用当月与上个月之间的最高收益降幅。</li>
        </ul>
      </ul>
      <h2 class="col-10 offset-1">补贴计算</h2>
      <h3 class="col-10 offset-1">基本补贴</h3>
      <p class="col-10 offset-1">基本租金补贴金额取决于您的收入下降。</p>
      <table class="offset-1 col-10 ms-5">
        <tr>
          <th colspan="2">计算租金补贴率</th>
        </tr>
        <tr>
          <th>收入下降</th>
          <th>收入下降 如何计算您的费用</th>
        </tr>
        <tr>
          <td>收入下降70％或更多</td>
          <td>最高补贴率65％</td>
        </tr>
        <tr>
          <td>收入下降50％至70％</td>
          <td>（您的收入下降-50％）×1,25 + 40％</td>
        </tr>
        <tr>
          <td>收入下降不到50％</td>
          <td>收入下降不到50％ 0,8×您的收入下降</td>
        </tr>
      </table>
      <h3 class="col-10 offset-1">最高补贴</h3>
      <p class="col-10 offset-1">要获得政府封锁支持补贴的资格，您必须：</p>
      <ul class="l1">
        <li>申请期间（或上一期间）的基本租金补贴率大于0％；</li>
        <li>
          至少有一个或多个地点暂时关闭，或者由于COVID
          19相关的公共卫生命令而活动受到严重限制一周或更长时间；
        </li>
        <li>当限制令就位，需要中断您的部分或全部常规活动。</li>
        <ul class="l2">
          <li>
            在上一个参考期间，您无法执行的活动必须至少占该商业位置总收入的25％。
          </li>
        </ul>
      </ul>
      <p class="col-10 offset-1">
        <b>
          限制或限制您的活动但不要求您关闭或中断某些活动的订单并不意味着您有资格获得“封锁支持”。</b
        >
      </p>
      <p class="col-10 offset-1"><u>不符合</u>封锁支持<u>条件</u>的限制示例：</p>
      <ul class="l1">
        <li>减少客户数量的旅行限制。</li>
        <li>
          关于何时可以执行常规活动的规则，例如有限或减少的运行或服务时间。
        </li>
        <li>
          其他没有明确指示您停止或暂停活动的限制，例如座位减少或其他身体疏远策略。
        </li>
      </ul>
      <p class="col-10 offset-1">最高25％的补贴是根据该时期内企业受到健康限制令的天数确定的。</p>
      <h2 class="col-10 offset-1">符合资格的费用和限制</h2>
      <p class="col-10 offset-1">对于每个申请周期，您最多可以申请符合条件的费用：</p>
      <ul class="l1">
        <li>每个商业地址$ 75,000（基本补贴和最高补贴）。</li>
        <li>总计$ 300,000（包括关联实体的补贴额）：</li>
        <ul class="l2">
          <li>这仅适用于基本补贴；</li>
          <li>最高补贴没有上限。</li>
        </ul>
      </ul>
      <p class="col-10 offset-1">
        <b>如果您正在租用符合条件的物业，则符合条件的费用如下：</b>
      </p>
      <ul class="l1">
        <li>租金（包括基于销售额，利润或类似标准的百分比的租金）。</li>
        <li>
          根据净租赁（应付给出租人或第三方）需要支付的金额。这些应付款项可能包括：
        </li>
        <ul class="l2">
          <li>基本租金；</li>
          <li>定期支付正常的运营费用，例如：</li>
          <ul class="l3">
            <li>房地产保险；</li>
            <li>公用事业；</li>
            <li>维护公共区域。</li>
          </ul>
          <li>财产税和其他类似的税，包括学校和市政税；</li>
          <li>定期向出租人支付习惯提供的辅助服务。</li>
        </ul>
      </ul>
      <p class="col-10 offset-1">但<u>不能包括</u>以下费用：</p>
      <ul class="l1">
        <li>营业税（例如消费税/消费税和省营业税）；</li>
        <li>赔偿金；</li>
        <li>未付金额的利息或罚款；</li>
        <li>其他任何特殊金额；</li>
        <li>房客保险；</li>
        <li>租赁权益改良。</li>
      </ul>
      <p class="col-10 offset-1">如果您拥有符合条件的财产，那么您的符合条件的支出如下：</p>
      <ul class="l1">
        <li>财产税和其他类似税种：</li>
        <ul class="l2">
          <li>这包括学校税和市政税（如果它们是您的财产税评估的一部分）。</li>
        </ul>
        <li>财产保险;</li>
        <li>购买房地产的商业抵押贷款利息：</li>
        <ul class="l2">
          <li>您的抵押金额不得超过以下较小者：</li>
          <ul class="l3">
            <li>
              自收购以来的任何时候，以该物业的一种或多种抵押抵押的最低本金；
            </li>
            <span>或者</span>
            <li>符合条件的财产的成本。</li>
          </ul>
        </ul>
      </ul>
      <p class="col-10 offset-1">以下费用不符合条件：</p>
      <ul class="l1">
        <li>在索赔期限以外的时期内已支付的金额；</li>
        <li>非独立公司与相关实体之间的付款。</li>
      </ul>
      <p class="col-10 offset-1">
        <b
          >如果您通过在物业上转租来赚钱，那么您必须从符合条件的支出中减去该收入。</b
        >
      </p>
      <p class="col-10 offset-1">
        如果您尚未支付符合条件的费用的款项，则必须证明（确认）这些款项将在收到租金补贴付款后的60天内支付。
      </p>
      <h2 class="col-10 offset-1">申请期间</h2>
      <p class="col-10 offset-1">立即申请：</p>
      <ul class="l1">
        <li>第一阶段（CEWS第八阶段）：2020年9月27日至10月24日</li>
        <li>第二阶段（CEWS第九阶段）: October 25 to November 21, 2020</li>
      </ul>
      <p class="col-10 offset-1">即将到来的申请周期</p>
      <ul class="l1">
        <li>第三阶段（CEWS第十阶段）：2020年11月22日至12月19日</li>
        <li>第四阶段（CEWS第十一阶段）：2020年12月20日至2021年1月16日</li>
        <li>第五阶段（CEWS第十二阶段）：2021年1月17日至2月13日</li>
      </ul>
      <h2 class="col-10 offset-1">怎样申请？</h2>
      <p class="col-10 offset-1">您必须通过以下方式在线申请：</p>
      <ul class="l1">
        <li>我的商业帐户</li>
        <li>代表客户</li>
      </ul>
      <p class="col-10 offset-1">
        申请必须在资格审核期结束后的180天内完成。
        <br />
        不要犹豫，咨询
        <a
          href="https://www.canada.ca/en/revenue-agency/services/subsidy/emergency-rent-subsidy.html"
          ><u>加拿大政府网站</u></a
        >
        更多细节: <br />
        <a
          href="https://www.canada.ca/en/revenue-agency/services/subsidy/emergency-rent-subsidy.html"
          ><u
            >https://www.canada.ca/en/revenue-agency/services/subsidy/emergency-rent-subsidy.html</u
          ></a
        >
      </p>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    back() {
      this.$router.push("/resource/covid19");
      location.reload();
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../../../assets/style.scss";
h1 {
  font-family: $title;
}
.l1 {
  width: 90%;
  margin-left: 5%;
}
.l2 {
  margin-top: 0.5em;
  width: 95%;
  // margin-left: 1%;
}
.l3 {
  margin: 0.5em 0;
  width: 90%;
  // margin-left: 5%;
}
table,
th,
td {
  border: 1px solid black;
  border-collapse: collapse;
  padding: 1em;
}
th {
  background-color: #002766;
  color: white;
}
table {
  margin: 1em 0;
}
span {
  margin-left: -10%;
}
</style>