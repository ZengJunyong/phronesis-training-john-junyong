<script setup>
import {onMounted} from "vue";

async function setup() {
  // Call the server endpoint to create a deposit request
  const response = await fetch(`${import.meta.env.VITE_API_URL}/rebilly/create-deposit-request-project-29`, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({currency: 'USD'}),
  });
  const data = await response.json();
  const mountElement = document.querySelector('#deposit');
  const cashierToken = data.token;
  if (window.RebillyCashier) {
    RebillyCashier.renderDeposit({
      mountElement,
      cashierToken,
    });
  } else {
    console.error('RebillyCashier library not loaded');
  }
}

onMounted(async () => {
  await setup();
})
</script>

<template>
  <h1>Project 29: Casino deposit (again!) <br>Project 30: Collect KYC documents before deposit</h1>

  <div id="deposit" class="deposit-container">
    <!-- Any HTMLElement may contain the Rebilly Cashier JavaScript library. -->
  </div>
</template>

<style>
.deposit-container {
  display: flex;
  justify-content: center;
  margin: 0 auto;
  max-width: 800px;
  width: 100%;
  margin-bottom: 200px;
}
</style>
