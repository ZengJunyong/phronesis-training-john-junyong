<script setup>
import RebillyInstruments from '@rebilly/instruments';
import {onMounted, ref} from "vue";

const strategyUsdId = 'dep_str_01JFENK4XZX20F45NNGZT4NG82'
const strategyCadId = 'dep_str_01JBE9J2MPAZ1DZVWR590BZ14S'
const currency = ref('USD');

async function createDepositWithStrategy(currency, strategyId) {
  const response = await fetch(`${import.meta.env.VITE_API_URL}/rebilly/deposit-with-strategy`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify({currency, strategyId}),
  });
  const {token, depositRequestId} = await response.json();
  return {token, depositRequestId};
}


async function switchCurrency(cur) {
  currency.value = cur;

  let strategyId = null;
  if (cur === 'USD') {
    strategyId = strategyUsdId;
  }
  if (cur === 'CAD') {
    strategyId = strategyCadId;
  }
  const {token, depositRequestId} = await createDepositWithStrategy(cur, strategyId);

  RebillyInstruments.destroy();
  RebillyInstruments.mount({
    apiMode: "sandbox",
    deposit: {
      depositRequestId,
    },
    jwt: token,
    theme: {
      colorPrimary: '#504CCA',
      colorText: '#ffffff',
      colorDanger: '#cd5c5c',
      colorBackground: '#201F55',
      buttonColorText: '#ffffff',
      fontFamily: 'Trebuchet MS, sans-serif',
    },
  });
}

onMounted(async () => {
  await switchCurrency('USD');
})
</script>

<template>
  <h1>Casino deposit page with strategies (USD and CAD)</h1>
  <img src="https://funkytravel.ro/wp-content/uploads/2023/12/casino.jpeg" alt="">
  <div style="padding: 40px 0 20px 0">
    <button :class="{'active': currency==='USD'}" style="margin-right: 20px;" @click="switchCurrency('USD')">USD
    </button>
    <button :class="{'active': currency==='CAD'}" @click="switchCurrency('CAD')">CAD</button>
  </div>
  <div class="form-wrapper">
    <section class="rebilly-instruments-summary"></section>
    <section class="rebilly-instruments"></section>
  </div>
</template>

<style scoped>
.active {
  background: greenyellow;
  font-weight: bold;
}


</style>
