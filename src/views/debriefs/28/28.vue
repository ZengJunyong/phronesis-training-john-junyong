<template>
  <h3>Project 26</h3>
  <ul>
    <li>
      <h2>Which teammates executed the project?</h2>
      <p>Sam, Junyong</p>
    </li>
    <li>
      <h2>What made you smile?</h2>
      <ul>
        <li>Another quick and easy project</li>
      </ul>
    </li>
    <li>
      <h2>What did you find confusing? Did you encounter any issues?</h2>
      <ul>
        <li>
          Invoice was unpaid but subscription was active at the first, we needed to check it out why:
          <br>
          Just need to make sure to click Collect Payment when issuing the quote to make sure the payment is collected before reactivating the subscription. Accepting the quote reactivates the subscription and issues the invoice, but does not collect a payment immediately, even if that option was selected in the quote creation step.
        </li>
      </ul>
    </li>
    <li>
      <h2>Bugs</h2>
      Not really, the webhook worked as expected.
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

<script setup lang="ts">
</script>
