<template>
  <h3>Project 13</h3>
  <ul>
    <li>
      <h2>Which teammates executed the project?</h2>
      <p>John, Junyong</p>
    </li>
    <li>
      <h2>What made you smile?</h2>
      <ul>
        <li>Seeing how previous team setup their project</li>
      </ul>
    </li>
    <li>
      <h2>What did you find confusing? Did you encounter any issues?</h2>
      <ul>
        <li>
          When creating a new organization, it is not obvious that the website
          URL will end up being the default website id. We should make this more
          clear, as the ID cannot be changed later (although the website can be
          deleted).
        </li>
        <li>
          When inviting a user to your org, the user invite link in the email is
          strange, as the link goes straight to sandbox without any invite code
          or user associated. So if you are logged in with a different account,
          the behavior is strange as you will be taken to recomm with a
          different account.
          <br />
          <img src="./email-link.png" width="400" />
        </li>
        <li>
          Rebilly JS SDK: If you do not set the organization ID in the
          constructor, it will use the default organization for calls.
          <br />
          This creates problems when adding new organizations, as the behavior
          can change. We spent some time trying to work out why our API call was
          failing, only to realize that the organization ID was not set
          correctly. Perhaps we should make this parameter
          <b>always</b> required?
        </li>
        <li>
          There are <b>so many</b> bank transfer methods show in the gateway
          configuration page. It is very confusing, and we don't know which one
          to choose or why there are so many.
          <br />
          <img src="./bank-transfer.png" width="400" />
        </li>
        <li>
          We received errors when trying to test bank transfer and interac
          payment methods. We presume this is because we are using test
          processor, and real gateways are needed to test these - but we were
          unable to find any documentation on testing bank transfer or interac
          in sandbox.
          <br />
          <img src="./sandbox-test.png" width="800" />
        </li>
        <li>
          Recomm toasts sometimes cover actions that you want to take. For
          example, creating multiple gateway accounts. The success toast blocks
          the add new gateway button.
        </li>
      </ul>
    </li>
    <li>
      <h2>Bugs</h2>
      <ul>
        <li>
          (<a href="https://github.com/Rebilly/rebilly/issues/8301">Raised</a>)
          When deleting a Website in Recomm, the website is deleted correctly
          but a negative toast shows "Website not found".
          <br />
          <img
            src="./website-not-found.png"
            width="400"
            alt="Website not found toast"
          />
        </li>
        <li>
          Recomm: Using the Back button in users menu did not go back correctly,
          it went to the data tables page.
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
</style>

<script setup lang="ts"></script>
