<template>
  <h1>Project 37: Quickbooks integration</h1>

  <h2>Which teammates executed the project?</h2>
  <ul>
    <li>Ikram Patah</li>
    <li>Junyong Zeng</li>
  </ul>

  <h2>What made you smile?</h2>
  <ul>
    <li>
      We already knew what to do right off the bat since we are both familiar
      with recomm.
    </li>
    <li>
      We checked for documentation and our first search for quickbooks got the
      page we wanted.
    </li>
  </ul>

  <h2>Confusion</h2>
  <ul>
    <li>
      In the
      <a
        href="https://www.rebilly.com/docs/app-store/quickbooks-online-integration#2.1-configure-customers"
        target="_blank"
        >documentation</a
      >, it mentions the "External identifiers" section, but this section is not
      found in the Quickbooks integration page.
      <br />
      We later found it in the customer details page (by checking the code).
      This is confusing because the documentation does not mention this and
      should be updated.
      <a href="https://github.com/Rebilly/rebilly/issues/11542" target="_blank"
        >Github issue</a
      >
    </li>
  </ul>

  <h2>Bugs</h2>
  <ul>
    <li>
      Incorrect capitalization in the Quickbooks integration page.
      <br />
      <a href="https://github.com/Rebilly/rebilly/issues/11545" target="_blank"
        >Github issue</a
      >
    </li>
    <li>
      Empty dropdown lists in the Quickbooks integration page.
      <br />
      They should be hidden or disabled if they are not relevant.
      <br />
      <a href="https://github.com/Rebilly/rebilly/issues/11540" target="_blank"
        >Github issue</a
      >
      <div style="margin-top: 15px">
        <img src="./1-1.png" />
      </div>
      <div style="margin-top: 15px">
        <img src="./1-2.png" />
      </div>
      <div style="margin-top: 15px">
        <img src="./1-3.png" />
      </div>
    </li>
    <li>
      There are 2 fields in the Quickbooks integration page that has the same
      name, "Item name".
      <br />
      <a href="https://github.com/Rebilly/rebilly/issues/11539" target="_blank"
        >Github issue</a
      >
      <div style="margin-top: 15px">
        <img src="./2.png" />
      </div>
    </li>
    <li>
      The sections in the Quickbooks integration page are missing the divider
      and spacings.
      <br />
      <a href="https://github.com/Rebilly/rebilly/issues/11538" target="_blank"
        >Github issue</a
      >
      <div style="margin-top: 15px">
        <img src="./3.png" />
      </div>
    </li>
    <li>
      Opening the Quickbooks integration page triggers an error toast.
      <br />
      No error in console or network tab. The page seems to be working as
      intended despite this.
      <br />
      <a href="https://github.com/Rebilly/rebilly/issues/11537" target="_blank"
        >Github issue</a
      >
      <div style="margin-top: 15px">
        <video controls style="max-width: 800px; width: 100%">
          <source src="./4.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
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
