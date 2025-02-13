<template>
  <h3>Project 26</h3>
  <ul>
    <li>
      <h2>Which teammates executed the project?</h2>
      <p>Sam, Junyong, John</p>
    </li>
    <li>
      <h2>What made you smile?</h2>
      <ul>
        <li>Quick and easy project, overall no major complications.</li>
      </ul>
    </li>
    <li>
      <h2>What did you find confusing? Did you encounter any issues?</h2>
      <ul>
        <li>
          Our google integration is not verified, so when we try to connect a
          non-rebilly.com gmail account, we're shown a security warning saying
          that the app is not verified.
          <br />
          <img src="./google.png" />
        </li>
        <li>
          It's a bit confusing that with a rebilly account we are no given the
          choice of what permissions to give. With a non-rebilly gmail account
          we are given the choice to select. We're not sure if this really an
          issues.
        </li>
        <li>
          The integration asks for "Create, edit, view etc" sheets files, but
          ALSO <strong>See and download ALL google drive files</strong>. This is
          a red flag, why do we need these extra permissions?
          <br />
          <img src="./permissions.png" />
        </li>
        <li>
          Minor UX annoyance: the google sheet must exist, it doesnt create one
          for you. Thats probably okay if we add validaiton. But right now you
          can enter any ID in the id box.
        </li>
        <li>
          We feel that the ID field has confusing UX: when you paste the URL it
          strips all the google sheet URL and leaves just the ID. This confused
          us because below it says to paste the whole URL. Generally I think
          modifying the clipboard output is confusing.
        </li>
        <li>
          The test integration dialog is very technical and confusing. It has
          many low level details about webhooks and webhook headers. As
          non-technical people we just want the dialog to say test google sheet
          integration and it adds a new row with the test data. Even specifying
          the test data is not required. Something like test row, test customer
          id etc would be all we want to see.
        </li>
      </ul>
    </li>
    <li>
      <h2>Bugs</h2>
      <ul>
        <li>
          <a href="https://github.com/Rebilly/rebilly/issues/10068"
            >Connecting google sheets without all permission doesnt show an
            error message</a
          >
        </li>
        <li>
          <a href="https://github.com/Rebilly/rebilly/issues/10069"
            >No validation on google sheets ID field</a
          >
        </li>
        <li>
          <a href="https://github.com/Rebilly/rebilly/issues/10070"
            >Google sheets test integration dialog does not work</a
          >
        </li>
        <li>
          <a href="https://github.com/Rebilly/rebilly/issues/10071"
            >Order of fields in google sheets integration is not saved</a
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
