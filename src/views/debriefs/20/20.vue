<template>
  <h3>Project 20</h3>
  <ul>
    <li>
      <h2>Which teammates executed the project?</h2>
      <p>John, Junyong</p>
    </li>
    <li>
      <h2>What made you smile?</h2>
      <ul>
        <li>The app load speed is fast.</li>
        <li>Overall it was quite a smooth experience.</li>
      </ul>
    </li>
    <li>
      <h2>What did you find confusing? Did you encounter any issues?</h2>
      <ul>
        <li>
          These steps are backwards, I think the route should be defined first.
          <br />
          <img src="./Provide customer ID.png" />
        </li>
        <li>
          Mixing of comment styles in the code example.
          <br />
          <img src="./commentmix.png" />
        </li>
        <li>
          website id, customer id and currency are all variables for some reason
          customer ID is using a pseudo-template variable. They should all use
          placeholder variables, this is confusing.
          <br />
          <img src="./WebsiteID.png" />
        </li>
        <li>
          The code example is not runnable because customer ID and currency must
          be replaced. We must also replace the website and org ID, but they are
          easily noticable global variables.
        </li>
        <li>
          JS SDK variable in the code samples is not well named: RebillySDK, we
          dont use that anywhere else in our docs.
        </li>
        <li>
          Google pay being on a separate page feels weird. It is an express
          method, and should be clickable from the main page. I'm also not sure
          if this is acceptable under the google pay UX guidelines.
        </li>
        <li>
          The first time we payed with interac, we choose to decline. It was
          still saved as one of our previous payment methods and presented to us
          on page load. Confusing, as it was never successful.
        </li>
        <li>
          The styling examples should use variables that are different to the
          current values, otherwise its easy to think its not working. This confused us.
        </li>
        <li>
          --r-text should be --r-text-color?
        </li>
      </ul>
    </li>
    <li>
      <h2>Bugs</h2>
      <ul>
        <li>
          One mount has 6 RTP calls:
          <br />
          <img src="./rtp.png" />
        </li>
        <li>
          The alignment of the text on the buttons is off when showing card
          icons.
          <br />
          <img src="./alignment.png" />
        </li>
        <li>
          Bad default message when missing first and last name: “The customer's
          first name and last name are required”. I am the customer :(.
        </li>
        <li>
          When a payment method is declined, and you click back to try again,
          other payment methods will all fail with error messages:
          <br />
          <img src="./error.png" />
        </li>
        <li>
          When using custom amount, the decimal place is wrongly localised. I am
          in australia and local is en-au, should be “.’
          <br />
          <img src="./paymentamount.png" />
        </li>
        <li>
          When using "0.01" (cents) as the increment amount, we are never able
          to pass the validation for any custom amount we enter:
          <br />
          <img src="./paymentamount.png" />
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
