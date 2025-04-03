<template>
  <div style="text-align: left; padding: 0 25px">
    <h3>Project 33: Coupons</h3>
  </div>
  <ul>
    <li>
      <h2>Which teammates executed the project?</h2>
      <p>Ikram, Junyong</p>
    </li>
    <li>
      <h2>What made you smile?</h2>
      <ul>
        <li>No coding this week again 😄</li>
      </ul>
    </li>
    <li>
      <h2>What did you find confusing? Did you encounter any issues?</h2>
      <ul>
        <li>
          🤔 We created a coupon for <span>$5 off the yearly Premium membership</span>, and
          <span>Redemptions per customer</span> is <span>1</span>, we think it only can be used once by a customer, but
          for the same customer, we created 2 subscriptions and could use this coupon twice
          <br>
          <img src="./1.png" height="922" width="730"/>
        </li>
        <li>
          🤔 We created a coupon for <span>10% off during April</span>, and
          set <span>Restrict to exclusive application</span> is <span>true</span>, we used another smaller coupon with
          this one, according to the document, another coupon is removed. In fact, the price is right but another coupon
          is in use from the segment table:
          <br><img src="./2.png" height="509" width="1059"/>
        </li>
        <li>
          🤔 We created a coupon for <span>10% off the first 3 months of the Premium monthly membership</span>, and
          and <span>Total redemptions</span> is <span>3</span>, we only can use this coupon for the first 2 customers,
          for the 3nd customer, the price is not changed. Here is what we saw in the timeline.
          <br><img src="./4.png" height="514" width="771"/>
          <br><br> Since this coupon was used 3 times then it should not be in the coupons option list?
          <br>
          <br>
          <img src="./5.png" height="723" width="1080"/></li>
        <li>
          🤔 We created a coupon for
          <span>Buy a Premium yearly membership, get 1 free month of a partner membership</span>, and
          set <span>Restrict to bxgy</span> correctly, but we don't know how to set <span>Discount</span> in this case, so
          we set <span>Discount amount</span> as <span>0.01</span> or else we can't save this coupon.
          <br>
          <br>However, when we use this coupon, the price is <span>519.99</span>(it should be <span>500</span>)
          <br><img src="./7.png" height="368" width="715"/>
          <br><img src="./8.png" height="623" width="697"/>
          <br><img src="./9.png" height="651" width="807"/>
        </li>

        <li>
          🤔 We have used a coupon to paid for an invoice successfully, and still can click the <span>Cancel</span>
          button to cancel it? we didn't search any document to explain it well.
          <br><img src="./3.png" height="657" width="1062"/>
        </li>
      </ul>
    </li>
    <li>
      <h2>Bugs</h2>
      <ul>
        <li>
          ❌ The <span>quantity</span> is right, but with red border, we can save it successfully anyway. Too bad I don't
          know how to reproduce it when I'm writing the debrief.
          <br><img src="./6.png" height="429" width="593"/>
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
