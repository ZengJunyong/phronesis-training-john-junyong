<template>
  <h3>Project 16</h3>
  <ul>
    <li>
      <h2>Which teammates executed the project?</h2>
      <p>John, Junyong</p>
    </li>
    <li>
      <h2>What made you smile?</h2>
      <ul>
        <li>
          We could follow the examples and instructions to complete the project
        </li>
        <li>The payout allocations screen was cool.</li>
      </ul>
    </li>
    <li>
      <h2>What did you find confusing? Did you encounter any issues?</h2>
      <ul>
        <li>
          We could not use the rebilly.com search well. We missed the API / Docs
          filter (from redocly). When searching for "payout" we had a lot of API
          results. The docs are at the bottom of the search results, and the
          toggles are not obvious enough. The order should be docs first in the
          docs pages, and API first in the api docs pages. More obvious filters
          would be good too.
        </li>
        <li>
          Having to copy the list of permissions from examples seems kind of
          clumsy, and error prone. It would be good group them into constant
          groups we could import from the api, or have text shortcuts.
        </li>
        <li>
          The deposit and payout examples use different approaches for the
          authentication token. In the deposit example, the token is grabbed all
          in 1 endpoint call by the client. In the payout example the token has
          a separate endpoint call to get the token. This is inconsistent for no
          good reason.
        </li>
        <li>
          The docs for the Payout were not clear. Gateways must be setup for
          payout, but the instructions don't list that clearly, they just say:
          <blockquote>
            Payment methods that are displayed in the payout form are based on
            the gateway configuration. For more information, see Set up a
            payment gateway.
          </blockquote>
          This was missed by us, and caused a lot of confusion. If there is such
          a specific setting it should be called out in the docs.
        </li>
        <li>
          We received a rather generic error message when gateways were not
          configured for payout:
          <blockquote>
            no payment instruments available for this transaction
          </blockquote>
          It would have been faster to debug if the error specifically mentioned
          that the gateways didnt support payouts.
        </li>
        <li>
          The code examples are unneccesarly complicated, they use styles to
          hide the instruments DOM. And then more code to show it later. But
          this is frontend knowledge, and makes the examples harder to follow.
          Especially when you are trying to apply it to other scenarios.
          Examples should be minimal.
        </li>
        <li>
          There is no UI in instruments for the payout amount. When creating the
          deposit, the UI is provided by instruments. But for the payout, the UI
          is provided by the merchant. This is inconsistent. Deposits and
          payouts would likely be used together, so we should provide a similar
          experience for both, And the UI should be provided. For us to make the
          input consistent would we need to create a bunch of new code and
          styles.
        </li>
        <li>
          Recomm allocation fulfillment page: after allocating a payout, the
          page becomes empty which is a bit odd. We should show the transactions
          associated with the payout request, or some other message.
          <br />
          <img src="./recomm-page.png" />
        </li>
      </ul>
    </li>
    <li>
      <h2>Bugs</h2>
      <ul>
        <li>
          Code walkthrough: tabs are sometimes blank -
          <a href="https://github.com/Rebilly/rebilly/issues/8728"
            >Github Issue Raised</a
          >
        </li>
        <li>
          Code walkthrough: When scrolling in client.js, it can be annoying as
          when you scroll far enough down the next step will activate, and a
          different code file (server.js) will be selected.
        </li>
        <li>
          We can create a payout request for 0 dollars, the backend works and
          returns the request. But the frontend shows no payment methods
          available. Additionally, this request can never be fulfilled using
          recomm.
          <a href="https://github.com/Rebilly/rebilly/issues/8729">
            Github Issue Raised
          </a>
        </li>
        <li>
          Payout requests for negative number give error 500 from the API,
          instead of validation error.
          <a href="https://github.com/Rebilly/rebilly/issues/8730">
            Github Issue Raised
          </a>
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
