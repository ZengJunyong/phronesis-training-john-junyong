<template>
  <h3>Project 19</h3>
  <ul>
    <li>
      <h2>Which teammates executed the project?</h2>
      <p>John, Junyong</p>
    </li>
    <li>
      <h2>What made you smile?</h2>
      <ul>
        <li>
          We were able to complete it without looking at the docs, as we knew
          the basic strategy already.
        </li>
      </ul>
    </li>
    <li>
      <h2>What did you find confusing? Did you encounter any issues?</h2>
      <ul>
        <li>
          Cant easily create a tag from the automated tagging page. Our first
          step was to go in there and try to configure an automation, but there
          were no existing tags. Tags are so simple, I want a link or inline
          creation.
        </li>
        <li>
          We found the "average value" label confusing. Average of what?
          Transaction value?
          <br />
          <img src="./avg-amount.png" />
        </li>
        <li>
          Additionally, we found the general "amount" and "amount USD"
          confusing. We were not sure what to use.
        </li>
        <li>
          The filters UI was confusing, as it doesnt mention if the filters are
          AND'd or OR'd together:
          <br />
          <img src="./condition-ui.png" />
        </li>
        <li>
          Once we have the tag setup, what happens if we want to change the VIP
          amount to $5000? How can we run it on all the customers again so the
          tags are current??
        </li>
        <li>
          The customer timeline says the tag was added by the customer. But it
          would be better to say it was added by an automation, even better if
          the automation was identified.
          <br />
          <img src="./timeline.png" />
        </li>
        <li>
          In filters, there are no options for less, or greater. Only less &
          equal etc:
          <br />
          <img src="./filters.png" />
        </li>
        <li>
          When using the "Transaction processed" event for the tag automation,
          the customer revenue is the value before the transaction is applied.
          This is confusing, as the event name is transaction processed. We had
          to switch to the customer updated event.
        </li>
      </ul>
    </li>
    <li>
      <h2>Bugs</h2>
      <ul>
        <li>
          Customer details not updated in recomm after transaction:
          <a href="https://github.com/Rebilly/rebilly/issues/9186"
            >GitHub Issue</a
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
