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
    const token = data.token;
    if (window.RebillyCashier) {
        RebillyCashier.renderDeposit({
            mountElement,
            token,
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

  <div id="deposit">
    <!-- Any HTMLElement may contain the Rebilly Cashier JavaScript library. -->
  </div>
</template>

<style scoped></style>
