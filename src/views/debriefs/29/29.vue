<template>
  <h3>Project 29</h3>
  <ul>
    <li>
      <h2>Which teammates executed the project?</h2>
      <p>Ikram, Junyong</p>
    </li>
    <li>
      <h2>What made you smile?</h2>
      <ul>
        <li>We can copy the old codes</li>
      </ul>
    </li>
    <li>
      <h2>What did you find confusing? Did you encounter any issues?</h2>
      <ul>
        <li>
          In payment gateway form, when the value for "Merchant origin" starts
          with
          <pre style="display: inline-block">https://</pre>
          , it will trigger a BE validation error "Invalid FQDN.".
          <br />
          This is confusing because we don't see the field highlighted and the
          error message is not meaningful.
          <div style="margin-top: 15px">
            <img src="./5.png" />
            <br />
            <img src="./6.png" />
          </div>
        </li>
        <li>
          We could select the amount for $5, but not manually enter it.
          <div style="margin-top: 15px">
            <video controls style="max-width: 800px; width: 100%;">
              <source src="./9.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </li>
        <li>
          Cardholder name should be pre-filled with customer name?
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
          Validation error in the deposit form when the amount input is "10.03".
          Only this specific amount causing this validation error.
          <div style="margin-top: 15px">
            <img src="./7.png" />
          </div>
        </li>
        <li>
          The code sample in the Advanced theming sample code does not work.
          <div style="margin-top: 15px">
            <img src="./1.png" />
          </div>
        </li>
        <li>
          <pre style="display: inline-block">--r-input-text-color</pre>
          is shown in the diagram, but not listed in the css variables table.
          <div style="margin-top: 15px">
            <img src="./2.png" />
          </div>
        </li>
        <li>
          No frontend validation for non-card-payment (example skrill and
          interac) even though the "name" field is required in the backend.
        </li>
        <li>
          Multiple Ready To Pay requests are made when the deposit form is first
          loaded to the page.
          <div style="margin-top: 15px">
            <img src="./3.png" />
          </div>
        </li>
        <li>
          When searching for "deposit" in website's search, the first few
          results are all storefront APIs.
          <br />
          The results for core APIs should be prioritized.
          <div style="margin-top: 15px">
            <img src="./4.png" />
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
  margin: 12px 0;
}

img {
  max-width: 40%;
}
</style>

<script setup lang="ts"></script>
