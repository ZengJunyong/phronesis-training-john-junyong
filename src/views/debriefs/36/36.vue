<template>
  <div style="text-align: left; padding: 0 25px">
    <h3>Project 36: Custom domains</h3>
  </div>
  <ul>
    <li>
      <h2>Which teammates executed the project?</h2>
      <p>Ikram, Junyong</p>
    </li>
    <li>
      <h2>What made you smile?</h2>
      <ul>
        <li>When we finally figured out the correct DDNS settings and the custom domain name worked.</li>
        <li>Custom domain documentation very easily found.</li>
      </ul>
    </li>
    <li>
      <h2>Bugs</h2>
      <ul>
        <li>
          The generated URL does not reflect the custom domain.
          <br>
          However, once clicked, the URL will then change / redirected into a new URL that has the custom domain.
          <br>
          This can be confusing as to which URL is to be shared with the customer.
          <br>
          Whether its the generated URL or the subsequent URL that has the custom domain?
          <div style="margin-top: 15px">
            <img src="./1.png" />
          </div>
        </li>
        <li>
          Entering nested subdomains / sub-subdomains will trigger the validation error.
          <br>
          We actually had to go back and change our domain.
          <br>
          Nested subdomains should be supported.
          <div style="margin-top: 15px">
            <img src="./2.png" />
          </div>
        </li>
        <li>
          For unverified custom domain, the UI should say "Unverified" instead of "Pending".
          <br>
          It seems that when the custom domain cannot be verified, the UI will always show pending.
          <br>
          This is misleading as it seems like the custom domain is still being verified.
          <div style="margin-top: 15px">
            <img src="./3.png" />
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
