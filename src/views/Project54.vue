<script setup>
import {onMounted, ref} from "vue";

const currency = ref('USD');

async function createCashierToken(currency) {
  const response = await fetch(`${import.meta.env.VITE_API_URL}/rebilly/create-cashier-project-54`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify({currency}),
  });
  const {cashierToken} = await response.json();
  return {cashierToken};
}

async function switchCurrency(cur) {
  currency.value = cur;

  const {cashierToken} = await createCashierToken(cur);

  const mountElement = document.querySelector('#deposit');

  RebillyCashier.renderDeposit({
    mountElement,
    cashierToken,
  });
}

onMounted(async () => {
  await switchCurrency('USD');
})
</script>

<template>
  <h1>Project 54: Deposits (third time)</h1>
  <div style="padding: 40px 0 20px 0">
    <button :class="{'active': currency==='USD'}" style="margin-right: 20px;" @click="switchCurrency('USD')">USD
    </button>
    <button :class="{'active': currency==='CAD'}" @click="switchCurrency('CAD')">CAD</button>
  </div>
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
.active {
  background: greenyellow;
  font-weight: bold;
}
</style>
