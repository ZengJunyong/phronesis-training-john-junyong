<template>
  <div style="text-align: left; padding: 0 25px">
    <h3>Project 35: Shipping rates</h3>
  </div>
  <ul>
    <li>
      <h2>Which teammates executed the project?</h2>
      <p>Ikram, Junyong</p>
    </li>
    <li>
      <h2>What made you smile?</h2>
      <ul>
        <li>We set up the product/plan/shipping rate quickly</li>
      </ul>
    </li>
    <li>
      <h2>What did you find confusing? Did you encounter any issues?</h2>
      <ul>
        <li> ❌
          When creating an order in Recomm, set <span>Shipping calculation</span> as <span>Rebilly</span>, got 422.
          <br><span>deliveryAddress</span> is sent in the payload, response message is
          <span>Shipping is not available</span>
          <div style="margin-top: 15px">
            <img src="./1.png" height="876" width="1008"/>
          </div>
        </li>
        <li>🤔 We also tried to use the instruments lib, it's confusing that the <span>Shipping</span> is still 0, <span>deliveryAddress</span>
          is sent in the <span>preview-purchase POST</span> api, it seems the backend ignored it, didn't calculate the
          shipping.
          <div style="margin-top: 15px">
            <img src="./2.png" height="1081" width="870"/></div>
        </li>
        <li>
          ❌ The same with Recomm, although we switched to use instrument lib, after clicking the <span>Confirm</span> button, <span>storefront/organizations/org_01JNN4CS8FMV6ZPFYD439YPMFW/purchase POST</span>got 422.
          We couldn't complete this training
          <div style="margin-top: 15px"><img src="./3.png" height="777" width="1102"/>
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


span {
  color: yellow;
}
</style>

<script setup lang="ts">
</script>
