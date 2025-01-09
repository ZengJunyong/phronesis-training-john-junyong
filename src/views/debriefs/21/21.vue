<template>
  <h3>Project 21</h3>
  <ul>
    <li>
      <h2>Which teammates executed the project?</h2>
      <p></p>
    </li>
    <li>
      <h2>What made you smile?</h2>
      <ul>
        <li>Block list search description in the recomm UI is nice</li>
      </ul>
    </li>
    <li>
      <h2>What did you find confusing? Did you encounter any issues?</h2>
      <ul>
        <li>When searching on docs, blog posts are still first hits</li>
        \
        <li>
          In the timeline when a transaction is blocked, it shows it blocked by
          the user that created the blocklist. Not the blocklist title or
          anything useful like that.
          <br />
          <img src="./timeline.png" />
        </li>
        <li>
          We dont think its possible to block “5 consecutive declines". Based on
          the docs we couldn't find anything, the best match was the decline
          velocity. But that is declines in the last 24h and is not the same as
          consecutive declines.
        </li>
      </ul>
    </li>
    <li>
      <h2>Bugs</h2>
      <ul>
        <li>
          Transaction details page uses the words "blacklist" instead of
          "blocklist"
        </li>
        <li>
          When testing country block list to confirm our knowledge, we changed
          the customer country from AD to AE, but still hit the AD blocklist.
          Perhaps there is some caching.
        </li>
        <li>
          The add dispute page truncates the transaction ID in the title
          unneededly.
          <br />
          <img src="./trunc.png" />
        </li>
        <li>
          We set "bank county mismatch" rule but it did not trigger, see
          transacitons details:
          <br />
          <img src="./bc1.png" />
          <img src="./bc2.png" />
          <img src="./bc3.png" />
        </li>
        <li>
          We tested payment instrument velocity with declined > 2 and it didnt
          work. We used the “declined (Fraud)” card number. The risk metadata
          showed “-“ for declined payment velocity. We tried 3 declined
          transactions and it never triggered.
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
