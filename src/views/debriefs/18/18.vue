<template>
  <h3>Project 18</h3>
  <ul>
    <li>
      <h2>Which teammates executed the project?</h2>
      <p>John, Junyong</p>
    </li>
    <li>
      <h2>What made you smile?</h2>
      <ul>
        <li>The apple pay verification steps worked pretty well.</li>
        <li>
          The new AI search in the docs worked well, we asked it about the
          pending payment issue in apple pay and it provided us steps from the
          docs to debug, and then we asked how to verify the domain, and the
          answers were suprisingly good.
        </li>
        <li>We didnt have to do any code changes 🎉</li>
      </ul>
    </li>
    <li>
      <h2>What did you find confusing? Did you encounter any issues?</h2>
      <ul>
        <li>
          The first approach for adding the digital wallet was to add a "google
          pay" payment method gateway. This is <i>not</i> the correct way to add
          a digital wallet.
          <br />
          If we cant use google pay in the payment method dropdown, what is it
          there for?
          <br />
          It even shows in the ready-to-pay response, so it's confusing.
        </li>
        <li>
          When paying with google pay, the transaction does not show up in
          rebilly as a digital wallet payment. There is no google pay tag. When
          paying with apple pay it does show up with an apple pay tag.
          <br />
          <img src="./google-pay-transaction.png" />
        </li>
        <li>
          Apple Pay: When the domain isnt validated, you cant really tell on the
          client side, its just times out. We could show an error or a link to
          the docs in the console, since we know the current domain, and we know
          if its validated or not.
        </li>
        <li>
          When downloading the apple pay verification file for sandbox, the
          default name is
          “apple-developer-merchantid-domain-association<strong>-sandbox</strong>”
          , but it must be renamed to:
          apple-developer-merchantid-domain-association - it would be better ot
          have the right name by default.
        </li>
        <li>
          For the example verification command, it might be nice to have a
          live/sandbox tab. Right now it only shows the live version, which does
          cause confusion. Its not super clear if we should have used the
          sandbox api for this call (we did).
          <br />
          <img src="./apple-pay-domain-call.png" />
        </li>
        <li>
          Apple pay doesnt let you pay while screen recording. I noticed this a
          few months ago, the fingerprint doesnt show up and no other error
          messages are shown. We're not sure if this is appropriate for our
          public docs, as a merchant might never get into this case. But its
          confusing for us, especially while training.
          <br />
          <img src="./apple-pay-screen-recording.png" />
        </li>
        <li>
          We we unable to deposit successfully with apple pay:
          <br />
          <img src="./apple-pay-deposit-error.png" />
          We tried paying with a lower amount and were still unsuccessful. We
          are able to generate the token fine.
        </li>
        <li>
          Allow payouts is now default in the gateway screen. We're not sure if
          its intentional or not.
          <br />
          <img src="./allow-payouts.png" />
        </li>
      </ul>
    </li>
    <li>
      <h2>Bugs</h2>
      <ul>
        <li>
          Corners fo the google pay buttons are not transparent:
          <br />
          <img src="./google-pay-corners.png" />
        </li>
        <li>
          Filters in the deposit pages seem to be broken:
          <a
            href="https://github.com/Rebilly/rebilly/issues/9058"
            target="_blank"
            >https://github.com/Rebilly/rebilly/issues/9058</a
          >
        </li>
        <li>
          There are several issues with stackblitz examples on our website:
          <a
            href="https://github.com/Rebilly/rebilly/issues/9059"
            target="_blank"
            >https://github.com/Rebilly/rebilly/issues/9059</a
          >
        </li>
        <li>
          Issues paying with apple pay on the rebilly example pages:
          <a
            href="https://github.com/Rebilly/rebilly/issues/9060"
            target="_blank"
            >https://github.com/Rebilly/rebilly/issues/9060</a
          >
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
