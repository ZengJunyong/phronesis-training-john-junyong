<template>
  <h3>Project 14</h3>
  <ul>
    <li>
      <h2>Which teammates executed the project?</h2>
      <p>John, Junyong</p>
    </li>
    <li>
      <h2>What made you smile?</h2>
      <ul>
        <li>We were able to successfully implement DCC with payment cards.</li>
      </ul>
    </li>
    <li>
      <h2>What did you find confusing? Did you encounter any issues?</h2>
      <ul>
        <li>
          I find the "force conversion" option confusing. The description does
          not elaborate on what it does.
          <blockquote>
            Convert all transactions to the specified currency.
          </blockquote>
          It's unclear if this will force the user to always convert with DCC or
          not?
        </li>
        <li>
          At first we did not know that we had to add all currencies to the same
          gateway to enable DCC. This is only mentioned briefly in the docs.
        </li>
        <li>
          The DCC docs are contridictory on what triggers the DCC. In the
          <a
            href="https://www.rebilly.com/docs/settings/set-up-a-gateway#configure-dynamic-currency-conversion-(dcc)"
            >configurate a gateway instructions:</a
          >
          <blockquote>
            <em
              >DCC detects when a customer is attempting to pay in a currency
              that is not native to their region.</em
            >
          </blockquote>

          In the
          <a
            href="https://www.rebilly.com/docs/settings/dynamic-currency-conversion#dynamic-currency-conversion"
            >general DCC page</a
          >:
          <blockquote>
            <em
              >When DCC is active on a payment gateway, an offer is made to the
              customer to pay in the original transaction currency or the
              currency that is associated with the Bank Identification Number
              (BIN) of the customer's payment card</em
            >
          </blockquote>
        </li>
        <li>
          Its confusing whether or not DCC only works with payment cards or not.
          If its only with payments cards, then why can we choose DCC settings
          in non-payment card gateways?
        </li>
      </ul>
    </li>
    <li>
      <h2>Bugs</h2>
      <ul>
        <li>
          When creating a new Gateway account, the ID can already be set to one
          which is already taken. It should be blank in that case.

          <br />
          <img src="./id-error.png" />
        </li>
        <li>
          Instruments UI showed a big scrollbar to the right hand side.

          <br />
          <img src="./UI-scrollbar.png" />
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
</style>

<script setup lang="ts"></script>
