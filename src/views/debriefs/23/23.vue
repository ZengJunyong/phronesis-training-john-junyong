<template>
  <h3>Project 23</h3>
  <ul>
    <li>
      <h2>Which teammates executed the project?</h2>
      <p>John, Junyong</p>
    </li>
    <li>
      <h2>What made you smile?</h2>
      <ul>
        <li>The backend seems to work well for the Checkout.Com gateway</li>
      </ul>
    </li>
    <li>
      <h2>What did you find confusing? Did you encounter any issues?</h2>
      <ul>
        <li>
          In the gateway settings for checkout.com, it would be nice if there
          was explaination on where to find the entity id and processing channel
          id.
        </li>
        <li>
          We tried to use declined cards from the test cards page in the rebilly
          docs. These cards succeeded because checkout.com has its own set of
          test cards. It would be cool if we could use the rebilly test cards,
          or if the docs had an adomnition saying that the test cards are only
          for the test processor.
        </li>
      </ul>
    </li>
    <li>
      <h2>Bugs</h2>
      <ul>
        <li>
          Deposit form: The custom / other amount field is completely broken.<br />
          When entering any value in the correct range, we receive "Please enter
          a multiple of 0.01".<br />
          When entering a value less than the correct range, we receive "Please
          an amount more than {max value}".<br />
          So we were not able to use a custom amount.<br />
          <img src="./amount1.png" /><br />
          <img src="./amount2.png" /><br />
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
