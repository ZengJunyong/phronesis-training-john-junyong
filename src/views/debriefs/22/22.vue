<template>
  <h3>Project 22</h3>
  <ul>
    <li>
      <h2>Which teammates executed the project?</h2>
      <p>John, Junyong</p>
    </li>
    <li>
      <h2>What made you smile?</h2>
      <ul>
        <li>The doc was very easy to find</li>
        <li>The Try-IT redocly interface was useful to see usage limits</li>
      </ul>
    </li>
    <li>
      <h2>What did you find confusing? Did you encounter any issues?</h2>
      <ul>
        <li>
          Search in filters could be improved, there are so many values but it
          does not fuzzy search
          <br />
          <img src="./fuzzy.png" />
        </li>
        <li>
          Volume limits being on a different page to the other gateway settings
          is kind of confusing. But its related to downtime scheduling so maybe
          it makes sense.
        </li>
        <li>You cannot see the current usage amounts in the recomm UI.</li>
        <li>
          The redocly AI chat was hallucinating a bit, implying that we could
          see the current usage amounts in the recomm UI.
          <br />
          <img src="./redocly.png" />
        </li>
        <li>
          The word limit implies we can’t go over it, but the initial
          transaction that triggers the limit can be way over. For example, we
          could spend 10,000 and the transaction went through even though the
          volume limit is 5000.
        </li>
        <li>
          When a limit is hit and the downtime is scheduled, it might be nice to
          be able to see that the current downtime was triggered due to the
          limits. Right now its hard to say if it was manual or automatic
          downtime.
          <br />
          <img src="./downtime.png" />
        </li>
        <li>
          Daily limits can only be set in USD, even if your gateway only accepts
          another currency. That’s quite confusing. Its also not clear in the UI
          while you're setting up the limit, only after its enable you can see
          its USD.
          <strong
            >The docs do not mention that the limits are only in USD.</strong
          >
        </li>
        <li>
          The limit usages are slow to update. It took 2-3 minutes for the
          usages to update. In that time we were able to make subsequent
          transactions which surpassed the limits.
        </li>
      </ul>
    </li>
    <li>
      <h2>Bugs</h2>
      <ul>
        <li>
          Weird back button behavior after creating a customer. You land on the
          newly created customer page, but if you press back it takes you to the
          create new customer page. Id expect to be taken to the list.
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
