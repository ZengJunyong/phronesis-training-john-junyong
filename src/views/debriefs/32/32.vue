<template>
  <div style="text-align: left; padding: 0 25px">
    <h3>Project 32: Support team</h3>
  </div>
  <ul>
    <li>
      <h2>Which teammates executed the project?</h2>
      <p>Ikram, Junyong</p>
    </li>
    <li>
      <h2>What made you smile?</h2>
      <ul>
        <li>No coding this week 😄</li>
        <li>Documentation for user permissions was easy to find and the information is sufficient to start creating roles.</li>
      </ul>
    </li>
    <li>
      <h2>What did you find confusing? Did you encounter any issues?</h2>
      <ul>
        <li>
          In the Role form, the "permissions" textarea does not have any meaningful instructions.
          <br>
          It is unclear whether multiple permissions need to be in a new line or separated by commas.
          <br>
          Also, we accidentally added whitespace and it triggers a validation error. FE logic should remove the whitespace.
          <div style="margin-top: 15px">
            <img src="./1.png" />
          </div>
          <div style="margin-top: 15px">
            <img src="./5.png" />
          </div>
        </li>
        <li>
          Opinion: The Role template field in the users form should be in the Role form instead of user form.
          <br>
          It can be confusing because the thought process is to start creating roles first before the users.
          <br>
          We created our own custom roles before realizing that there are a few predefined roles.
          <div style="margin-top: 15px">
            <img src="./2.png" />
          </div>
        </li>
        <li>
          The storefront related permissions in the <a href="https://www.rebilly.com/docs/settings/user-permissions/">User permission doc page</a> can cause confusion.
          <br>
          We know exactly what storefront is, but our customers may not so they may not realized the difference between "PostTransaction" vs "StorefrontPostTransaction".
          <br>
          A footnote describing/linking storefront info page can be useful in this case.
        </li>
        <li>
          It is confusing that when we checked the <a href="https://www.rebilly.com/docs/settings/user-permissions">documentation</a>, the KYC resource section does not mention anything about depending on Attachment-related permissions.
          <br>
          A KYC agent would need those attachment permissions. We think its worth adding a note section under KYC to specify this.
        </li>
        <li>
          Many resource page would also need custom fields related permissions in order for user to view all the information related to that resource?
        </li>
        <li>
          Opinion: In the billing portal, its confusing to have the person icon.
          <br>
          It indicates that there is such a thing as user avatar, which there isn't.
          <br>
          <div style="margin-top: 15px">
            <img src="./8.png" />
          </div>
        </li>
      </ul>
    </li>
    <li>
      <h2>Bugs</h2>
      <ul>
        <li>
          Closing a gateway account does not redirect back to the Gateway account page.
          <div style="margin-top: 15px">
            <img src="./3.png" />
          </div>
        </li>
        <li>
          In customer action, the "Billing portal link" is available even when users do have sufficient permissions.
          <br>
          (POST /authentication-tokens)
        </li>
        <li>
          In the Role form, the "Include roles" has an empty dropdown unless some roles have been created.
          <br>
          This was unclear in the beginning when we had no roles created. In this case, the field should be hidden.
          <div style="margin-top: 15px">
            <img src="./4.png" />
          </div>
        </li>
        <li>
          We see a blank page for the billing portal page (/billing-portals) when user do not have the correct permissions.
          <br>
          User should get redirected back or the route cancelled.
          <div style="margin-top: 15px">
            <img src="./6.png" />
          </div>
        </li>
        <li>
          UI issue in customer action panel when user can only view 1 column.
          <div style="margin-top: 15px">
            <img src="./7.png" />
          </div>
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
  margin: 20px 0;
}

img {
  max-width: 50%;
}
</style>

<script setup lang="ts"></script>
