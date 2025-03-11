<template>
  <h3>Project 30</h3>
  <h4>Collect KYC documents</h4>
  <ul>
    <li>
      <h2>Which teammates executed the project?</h2>
      <p>Ikram, Junyong</p>
    </li>
    <li>
      <h2>What made you smile?</h2>
      <ul>
        <li>Initially we thought that some coding was required, but after checking the documentation, it is possible to
          complete the task solely using the rules engine event: <span style="font-weight: bold; color: yellow;">Gateway account request</span>
        </li>
      </ul>
    </li>
    <li>
      <h2>What did you find confusing? Did you encounter any issues?</h2>
      <ul>
        <li>
          🤔 confusing, "request selfie" is not for address proof, so it should be hidden?<br>
          <img src="./request-selfie-for-address-proof.png"/>
        </li>
        <li>
          🤔 confusing, we have request identity-proof, and we still can add identity-proof for the 2nd time?
          <br>
          <img src="./twice.png" style="width: 60%"/></li>
        <li> 💡 improvement,
          Disable `For optional KYC requests` if `KYC requests are Mandatory`
          <br><img src="./disable.png"/>
        </li>
        <li>
          🤔 confusing, city is supposed to be passed <br><img src="./city%20is%20supposed%20to%20be%20passed.png"
                                                              style="width: 90%"/>
        </li>
        <li>
          💡 improvement, If the KYC flow fails (it's not approved in the backend automatically), 5 minutes is usually impossible,
          so maybe we can change that sentence to something like <span style="font-weight: bold; color: yellow;">`We will attempt to verify your document manually
          ASAP. Once it's approved, we'll send you an email to continue finishing the deposit.`</span> Also, remove the
          <span style="font-weight: bold; color: yellow;">`Continue`</span> button; it's almost useless. <br>
          ❌ Because we got stuck on this step, we didn't finish this task: <span style="font-weight: bold; color: yellow;">If the KYC documents are rejected, the transaction should be declined</span>. <span style="font-weight: bold; color: red;">Even though we rejected the KYC files in Recomm, and clicked the `Continue` button again, we can't get a declined transaction.</span><br>
          <img src="./continue.png"
                                                              style="width: 90%"/>
        </li>
        <li>
          💡 improvement, A customer has `Unknown` transaction but it's not shown in timeline <br><img src="./timeline.png"
                                                              style="width: 90%"/>
        </li>
      </ul>
    </li>
    <li>
      <h2>Bugs</h2>
      <ul>
        <li>
          🐛 bug, address is shown on the top of KYC flow <br>
          <img src="./address-z-index.png" alt="" style="width: 90%">
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
  width: 40%;
  max-width: 100%;
}
</style>

<script setup lang="ts">
</script>
