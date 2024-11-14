<template>
  <h3>Project 15</h3>
  <ul>
    <li>
      <h2>Which teammates executed the project?</h2>
      <p>John, Junyong</p>
    </li>
    <li>
      <h2>What made you smile?</h2>
      <ul>
        <li>It was cool that 3DS and DCC worked together</li>
        <li>3DS worked for the deposit form</li>
      </ul>
    </li>
    <li>
      <h2>What did you find confusing? Did you encounter any issues?</h2>
      <ul>
        <li>
          The terminology used is confusing, according to our research there is
          Frictionless and Challenge flow, but the docs mention "Generic 3DS
          flow".
          <br />
          <img src="./generic-flow.png" />
          Also, that "generic" link is broken, and the page doesn't contain any
          separate section for generic flow.
        </li>
        <li>
          We found having two different 3DS servers very confusing. The docs
          don't really mention why you would want one over the other. But the
          first one can only be used in sandbox, so why would I set that up at
          all? The first one also doesn't seem to support challenge flow.
        </li>
        <li>
          The frictionless offsite flow is very odd and confusing. It shows a
          blank page with a continue button in the top right, but you don't have
          a chance to click it, it's automatic. There is not mention of 3DS on
          the page. It would be better if the page stayed there for 5 seconds
          and had some information on it.
          <br />
          <img src="./3ds-frictionless.png" />
        </li>
        <li>
          On the "Test a 3DS challenge flow" page, we found it confusing that
          there are simple card alternative numbers to use, but first very
          complicated are listed. It would be better to list the simple card
          numbers first, and then allow the user to follow the advanced flow if
          required. It's also not really clear to us why we would want to do the
          advanced flow.
        </li>
        <li>
          In recomm, when setting the advanced 3DS server settings, the card inputs should be grouped brand, but they are grouped by type, which is odd:
          <br />
          <img src="./grouping.png" />
          Also, merchant country must be a particular country code format, but it's not a dropdown, we must enter the text manually. It should be a dropdown.
          <br />
          <img src="./country-code.png" />
        </li>
      </ul>
    </li>
    <li>
      <h2>Bugs</h2>
      <ul>
        <li>
          3DS does not work in the hosted payment form during normal payment
          flow. We followed the docs
          [here](https://www.rebilly.com/docs/tutorials/test-transactions#test-a-3ds-challenge-flow)
          (under step 2: "Create a new customer and test the transaction"), and
          we are never prompted with the 3DS flow. And the transaction in recomm
          shows it was not using 3DS. Note: it does work fine in the deposit
          form.
        </li>
        <li>
          Broken link in the docs:
          <br />
          <img src="./broken-link.png" />"
        </li>
        <li>
          Broken link in recomm gateway account page:
          <br />
          <img src="./recomm-link.png" />
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
