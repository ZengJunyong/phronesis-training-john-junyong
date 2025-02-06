<template>
  <h3>Project 25</h3>
  <ul>
    <li>
      <h2>Which teammates executed the project?</h2>
      <p>Sam, Junyong, John</p>
    </li>
    <li>
      <h2>What made you smile?</h2>
      <ul>
        <li>- Its nice to have a new teammate</li>
      </ul>
    </li>
    <li>
      <h2>What did you find confusing? Did you encounter any issues?</h2>
      <ul>
        <li>
          We were unable to create a dispute using the checkout.com amounts.
          Based on the docs. We tried several different amounts and currencies,
          and payed them through the rebilly hosted payment form. But none ever
          converted to disputes.
        </li>
        <li>
          We can only simulate the disputes, but these dont have links to the
          rebilly transactions.
        </li>
        <li>
          We're also confused about the webhook ingress for disputes created in
          the checkout. We were going to use the disputes endpoint as a
          checkout.com webhook target, but we're not sure if that would work
          because the payload isnt customizable. It didnt seem like the training
          wanted us to create a server. Maybe rebilly has custom handling for
          checkout.com incoming webhook payloads, but its not documented
          anywhere in the rebilly docs...
        </li>
        <li>
          Since we got blocked on the checkout.com details it might be helpful
          if the training had the more detailed steps for the third party tools
          (in this case checkout.com). But we're not sure if that would take
          away from the simulated merchant experience either.
        </li>
      </ul>
    </li>
    <li>
      <h2>Bugs</h2>
      <ul>
        <li>-</li>
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
