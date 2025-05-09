<template>
  <h1>Project 38: PayPal</h1>

  <h2>Which teammates executed the project?</h2>
  <ul>
    <li>Ikram Patah</li>
    <li>Junyong Zeng</li>
  </ul>

  <h2>What made you smile?</h2>
  <ul>
    <li>
      When we first logged in to the Paypal account, it was all in mandarin
      so Junyong was trying to find the setting to change back the language to english.
    </li>
    <li>
      Not much else. We could not complete the training because we could not activate the PayPal account.
      <br>
      We managed to register for the account, but when we tried to confirm the email, we didn't get the email with the confirmation link.
      <br>
      We resended the request multiple times, but the email never arrived.
      <br>
      We also tried registering with a second email address, but the same issue happened.
      <br>
      <br>
      Our RTP response doesn't include the "billingAgreementToken" key. We suspect its because of the account not being activated.
      <br>
      Without that, Instruments (and subsequently the hosted payment form and deposit form) doesn't show the Paypal method.
    </li>
  </ul>

  <h2>Confusion</h2>
  <ul>
    <li>
      In the
      <a
        href="https://www.rebilly.com/docs/settings/add-paypal-account#add-paypal-to-the-sandbox-environment"
        target="_blank"
        >documentation</a
      >, The first section is "Email ID" and "System generated password" values.
      <br />
      But then the values were never used.
      <div style="margin-top: 15px">
        <img src="./1.png" />
      </div>
    </li>
  </ul>

  <h2>Bugs</h2>
  <ul>
    <li>
      We managed to complete the Paypal payment gateway integration,
      <br>
      even though the paypal account was still not activated (email yet to be confirmed)
      <div style="margin-top: 15px">
        <img src="./2-1.png" />
      </div>
      <div style="margin-top: 15px">
        <img src="./2-2.png" />
      </div>
    </li>
    <li>
      We managed to get the RTP response to incldue the Paypal method.
      <br />
      But it is returning the object without any value for the "billingAgreementToken" key.
      <br />
      The API doc specifies that this value is required.
      <br />
      This could be related to the issue above (paypal email not yet confirmed)??
      <div style="margin-top: 15px">
        <img src="./3-1.png" />
      </div>
      <div style="margin-top: 15px">
        <img src="./3-2.png" />
      </div>
    </li>
    <li>
      The method list in "method" enum is not alphabetically ordered. (<a href="https://www.rebilly.com/catalog/all/storefront-purchases/storefrontpostreadytopay#storefront-purchases/storefrontpostreadytopay/response&c=200/body" target="_blank">doc link</a>)
      <div style="margin-top: 15px">
        <img src="./4.png" />
      </div>
    </li>
    <li>
      After creating the order, we get the error toast "Subscription not found."
      <br />
      And the Order details section loads infinitely.
      <br />
      Not sure how to replicate it. Seems that the issue is intermittent. I remember the error is from `/summary-metrics` API, maybe it's caused by ElasticSearch at that time
      <div style="margin-top: 15px">
        <img src="./5.png" />
      </div>
    </li>
  </ul>
</template>

<style scoped>
h1, h2 {
  text-align: left;
  padding: 0 2rem;
}

h1 {
  text-transform: uppercase;
}

h2 {
  background: rgba(0,0,0,0.35);
  padding: 0.75rem 2rem;
  margin: 10px 0;
}

ul {
  text-align: left;
  margin-left: 2rem
}

li {
  margin: 20px 0;
}

img {
  max-width: 50%;
}
</style>

<script setup lang="ts"></script>
