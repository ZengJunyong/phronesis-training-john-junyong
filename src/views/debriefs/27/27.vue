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
        <li>Quick and easy project</li>
      </ul>
    </li>
    <li>
      <h2>What did you find confusing? Did you encounter any issues?</h2>
      <ul>
        <li>
          trialPeriodLength is duplicated with trial.period.length, we only need to keep one of them.
          <img src="./duplicate.png">
        </li>
        <li>
          for the preview email, there is no placeholders, which is kind of confusing
          <img src="./placeholders.png">
        </li>
        <li>
          the document says: `A common automation for this event is to notify the customer by email 3 days before the end of the trial.`
          we don't know when to send the email, and for example if the trial period only have 2 days, when to trigger the email?
        </li>
        <li>
          We can't finish this training at Thusday, we need to wait the email at the weekend or next Monday.
        </li>
      </ul>
    </li>
    <li>
      <h2>Bugs</h2>
      None
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
