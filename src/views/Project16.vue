<script setup>
import RebillyInstruments from '@rebilly/instruments';
import {ref} from "vue";

const amount = ref();
const currency = ref('USD');

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
  const {token, payoutRequestId} = await createPayoutRequest(currency.value, amount);

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
  <div class="banner-container">
    <img class="banner-image" src="https://funkytravel.ro/wp-content/uploads/2023/12/casino.jpeg" alt="Casino banner">
  </div>
  <div class="form-wrapper">
    <section id="payout-request">
      <div class="input-group">
        <div class="currency-buttons">
          <button :class="{'active': currency==='USD'}" @click="currency='USD'">USD</button>
          <button :class="{'active': currency==='CAD'}" @click="currency='CAD'">CAD</button>
        </div>
        <input v-model.number="amount" placeholder="Enter amount">
      </div>
      <button class="confirm-button" @click="requestPayout({amount:amount})">confirm</button>
    </section>
    <section id="rebilly-instruments">
      <div class="rebilly-instruments-summary"></div>
      <div class="rebilly-instruments"></div>
    </section>
  </div>
</template>

<style scoped>
.active {
  background: #7b79b4 !important;
  font-weight: bold;
}

#rebilly-instruments {
  padding-bottom: 40px;
}

.input-group {
  display: flex;
  gap: 10px;
  align-items: center;
  justify-content: center;
  margin-bottom: 20px;
}

.currency-buttons {
  display: flex;
  gap: 5px;
}

.currency-buttons button {
  padding: 8px 16px;
  border: 1px solid rgba(255, 255, 255, 0.25);
  background: transparent;
  color: white;
  border-radius: 4px;
  cursor: pointer;
  transition: all 0.2s;
}

.currency-buttons button:hover {
  background: rgba(80, 76, 202, 0.5);
}

input {
  padding: 8px 16px;
  background: transparent;
  border: 1px solid rgba(255, 255, 255, 0.25);
  border-radius: 4px;
  color: white;
  font-size: 16px;
  width: 200px;
}

input::placeholder {
  color: rgba(255, 255, 255, 0.5);
}

.confirm-button {
  padding: 8px 24px;
  background: #504CCA;
  border: none;
  color: white;
  border-radius: 4px;
  cursor: pointer;
  font-size: 16px;
  transition: all 0.2s;
}

.confirm-button:hover {
  background: #605dee;
}

.banner-container {
  width: 100%;
  height: 200px;
  overflow: hidden;
  margin-bottom: 20px;
}

.banner-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
}
</style>
