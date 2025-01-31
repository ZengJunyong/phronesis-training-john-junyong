<template>
  <h3>Project 24</h3>
  <ul>
    <li>
      <h2>Which teammates executed the project?</h2>
      <p>Junyong, John</p>
    </li>
    <li>
      <h2>What made you smile?</h2>
      <ul>
        <li>-</li>
      </ul>
    </li>
    <li>
      <h2>What did you find confusing? Did you encounter any issues?</h2>
      <ul>
        <li>
          We once again found the 3ds settings hard to configure. I think
          disconnect in the docs between setting up the 3ds gateway, and the
          other page for testing 3ds transactions. It would be good if we could
          automatically populate those in recomm.
        </li>
        <li>
          The gateway account ID cannot be changed once created, even if the
          gateway is unused. This is annoying as there is no other identifier
          for the gateway.
        </li>
        <li>
          We had a customer from a previous training with a sticky gateway. We
          disabled all the sticky gateway settings, and even removed the
          customers payment method. But the sticky gateway was still being used.
          This caused us some headaches. How can we remove sticky gateways from
          customers?
        </li>
        <li>
            There's no easy way to priorise gateway seletion in a normal linear way, that doesnt involve round robin or randomness
            in the next selection. We want to go from top to bottom, and select the first one that works. Originally we set up the filters
            in the gateway settings themselves, thinking we could order the selection like in payment methods. But this was not possible, as 
            the pick gateway account action does not allow that type of ordering.
        </li>
      </ul>
    </li>
    <li>
      <h2>Bugs</h2>
      <ul>
        <li>
          Gateway settings errors do not highlight in the UI. (Here website is
          misisng).<br />
          <a href="https://github.com/Rebilly/rebilly/issues/9859">https://github.com/Rebilly/rebilly/issues/9859</a>
          <br />
        </li>
        <li>
            Recomm: edit customer dialog validation never ends<br /> 
            <a href="https://github.com/Rebilly/rebilly/issues/9858">https://github.com/Rebilly/rebilly/issues/9858</a>
        </li>
        <li>
            Address auto complete not working in deposit form.<br />
            <a href="https://github.com/Rebilly/rebilly/issues/9503">https://github.com/Rebilly/rebilly/issues/9503</a>
        </li>
        <li>
            Deposit form: Challege flow doesnt cover scrolled screen <br />
            <a href="https://github.com/Rebilly/rebilly/issues/9860">https://github.com/Rebilly/rebilly/issues/9860</a>
        </li>
        <li>
            Recomm: filters in pick gateway shows too many items <br />
            <a href="https://github.com/Rebilly/rebilly/issues/9861">https://github.com/Rebilly/rebilly/issues/9861</a>
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
