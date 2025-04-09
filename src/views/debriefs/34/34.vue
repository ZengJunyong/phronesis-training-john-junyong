<template>
  <div style="text-align: left; padding: 0 25px">
    <h3>Project 34: AML</h3>
  </div>
  <ul>
    <li>
      <h2>Which teammates executed the project?</h2>
      <p>Ikram, Junyong, Samuel</p>
    </li>
    <li>
      <h2>What made you smile?</h2>
      <ul>
        <li>Samuel joining us this week</li>
        <li>The fact that we couldn't join the meetup this year</li>
        <li>No coding this week, again</li>
        <li>webhook.site works right off the bat</li>
        <li>Jenniffer Shah being a criminal</li>
      </ul>
    </li>
    <li>
      <h2>Bugs</h2>
      <ul>
        <li>
          The "Customer" and "Customer ID" columns in the AML segments show very similar information.
          <br>
          Having just one of them is sufficient.
          <div style="margin-top: 15px">
            <img src="./1.png" />
          </div>
        </li>
        <li>
          In the webhook form's event filter field, the "Aml List Possibly Matched" has the wrong casing.
          <br>
          It should be "AML list possibly matched" instead.
          <div style="margin-top: 15px">
            <img src="./2.png" />
          </div>
        </li>
        <li>
          The "Confirm match" action in the AML check form triggers a validation error.
          <br>
          We were not able to proceed with the AML review because of this.
          <br>
          In the payload, {tag: "aml-match-confirmed"} was sent.
          <br>
          According to the <a href="https://www.rebilly.com/catalog/all/aml/postamlcheckreview">API doc</a>, this is the correct payload.
          <br>
          However, we still got the 422 "tag is invalid" error and unable to proceed.
          <div style="margin-top: 15px">
            <video controls style="max-width: 800px; width: 100%;">
              <source src="./3.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
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
