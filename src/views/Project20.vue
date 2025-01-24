<script setup>
import {onMounted} from "vue";

async function setup() {
    // Call the server endpoint to create a deposit request
    const response = await fetch(`${import.meta.env.VITE_API_URL}/rebilly/deposit-enhanced`, {
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
  <h1>Casino deposit (enhanced!)</h1>

  <div id="deposit" class="deposit-container">
    <!-- Any HTMLElement may contain the Rebilly Cashier JavaScript library. -->
  </div>
</template>

<style>
:root {
  --r-primary: orange;
  --r-background: #201f55;
  --r-text: white;
  --r-button-text-color: #333;
  --r-payment-method-item-label-color:  #333;
  --r-input-text-color: #333;
  --r-text-muted: #888;
  --r-button-border-radius: 0px;
  --r-border-radius: 0px;
  --r-font-family: 'Inter', sans-serif;
  --r-payment-method-item-border-color: green;
  --r-payment-method-item-border-width: 4px;
}

