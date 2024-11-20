<script setup>
import RebillyInstruments from '@rebilly/instruments';
import {ref} from "vue";

const amount = ref();
async function createPayoutRequest(currency, amount) {
  const response = await fetch(`${import.meta.env.VITE_API_URL}/rebilly/payout-request`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify({currency, amount}),
  });
  const {token, payoutRequestId} = await response.json();
  return {token, payoutRequestId};
}

async function requestPayout({amount}) {
  const {token, payoutRequestId} = await createPayoutRequest('USD', amount);

  RebillyInstruments.mount({
    apiMode: "sandbox",
    jwt: token,
    payout: {
      payoutRequestId,
    },
    theme: {
      colorPrimary: '#504CCA',
      colorText: '#ffffff',
      colorDanger: '#cd5c5c',
      colorBackground: '#201F55',
      buttonColorText: '#ffffff',
      fontFamily: 'Trebuchet MS, sans-serif',
    }
  });
}

</script>

<template>
  <h1>Payout page</h1>
  <img src="https://funkytravel.ro/wp-content/uploads/2023/12/casino.jpeg" alt="">
  <section id="payout-request">
    <input v-model.number="amount">
    <button @click="requestPayout({amount:amount})">confirm</button>
  </section>
  <section id="rebilly-instruments">
    <div class="rebilly-instruments-summary"></div>
    <div class="rebilly-instruments"></div>
  </section>
</template>

<style scoped>
.active {
  background: greenyellow;
  font-weight: bold;
}


</style>
