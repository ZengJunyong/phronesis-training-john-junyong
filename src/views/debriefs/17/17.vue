<template>
  <h3>Project 17</h3>
  <ul>
    <li>
      <h2>Which teammates executed the project?</h2>
      <p>John, Junyong</p>
    </li>
    <li>
      <h2>What made you smile?</h2>
      <ul>
        <li>
          We have done a similar project 3 weeks ago, for deposit. The project
          was similar.
        </li>
        <li>Cursor was fun. (and scary).</li>
      </ul>
    </li>
    <li>
      <h2>What did you find confusing? Did you encounter any issues?</h2>
      <ul>
        <li>
          We could not get echeck working for CAD or USD. It's not really clear
          to us if payouts are suppoted or not. There is a payment methods page,
          but it only lists deposits, which is different to payouts.
        </li>
        <li>
          In the ready-to-payout rule engine, you are able to select all
          existing payment types, even if the gateway is not set to allow
          payouts. I think we still need that because you may configure or
          disable gateways, but it might nice to show a warning or differenitate
          gateways that do not have payouts configured. If a gateway doesnt
          support payouts at all, it shouldnt ever be shown in the list.
        </li>
        <li>
          Searching in the documentation shows blog posts and release notes
          before documentation pages, even with the documentation tag. This is
          super annoying, blog pages are marketing.
        </li>
        <li>
          The first time using an interac method to payout, it has a dash for
          the gateway in the payout page in recomm. It might be nicer if ti said
          something like undetermined or unused or something. We didnt fully
          understand what was happening.

          <br />
          <img src="./recomm-interac-payout.png" alt="recomm interac payout" />
        </li>
        <li>
          In the rules engine actions filter page, you can type whatever you
          want for the currency. But we know currency has to be in a set value
          list.

          <br />
          <img
            src="./rules-engine-actions-filter.png"
            alt="rules engine actions filter"
          />
        </li>
      </ul>
    </li>
    <li>
      <h2>Bugs</h2>
      <ul>
        <li>
          We tried to add an echeck instrument to customer to see if that was
          the issue. But it fails in recomm:
          <br />
          <img src="./recomm-echeck-add.png" alt="recomm echeck add" />
        </li>
        <li>
          RTP page has bad validation: See
          <a href="https://github.com/Rebilly/rebilly/issues/8874"
            >github issue</a
          >.
        </li>
        <li>
          Sometimes when selecting an existing ACH instrument in the payout
          instruments page, and then checking confirm, we would see a blank bank
          account on the next screen, and we were not able to payout.

          <br />
          <img src="./ach-bug.gif" alt="recomm ach payout" />
        </li>
        <li>
          We were not able to payout with the ACH instrument. The toast says
          payout declined, but when you refresh the page it says the payout is
          fulfiled. This is confusing, but also maybe a bug.

          <br />
          <img src="./ach-payout.gif" alt="recomm ach payout 2" />
        </li>
      </ul>
    </li>
  </ul>
</template>

<style scoped>
h3,
ul {
  text-align: left;
}

li {
  margin: 12px 0;
}

img {
  max-width: 40%;
}
</style>

<script setup lang="ts"></script>
