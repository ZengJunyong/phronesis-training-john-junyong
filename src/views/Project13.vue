<script setup>
import RebillyInstruments from '@rebilly/instruments';
import RebillyAPI from 'rebilly-js-sdk';
import {onMounted, ref} from "vue";

const strategyUsdId = 'dep_str_01JBE9BEKPM03V64BDKP6PBWGP'
const strategyCadId = 'dep_str_01JBE9J2MPAZ1DZVWR590BZ14S'
const currency = ref('USD');
const REBILLY_API_SECRET_KEY = import.meta.env.VITE_API_KEY;
const REBILLY_WEBSITE_ID = "casino-deposit-form";
const REBILLY_ORGANIZATION_ID = 'phoronesis-john-junyong';
const api = RebillyAPI({
  sandbox: true,
  organizationId: REBILLY_ORGANIZATION_ID,
  apiKey: REBILLY_API_SECRET_KEY,
});

async function createDepositWithStrategy(currency, strategyId) {
  const customerId = 'cus_01JBEA7J0YR58WCC06R0TAPCE5';
  const {fields: {token: exchangeToken}} = await api.customerAuthentication.login({
    data: {
      mode: "passwordless",
      customerId,
    },
  });
  const {fields: {token}} = await api.customerAuthentication.exchangeToken({
    token: exchangeToken,
    data: {
      acl: [
        {
          scope: {
            organizationId: [REBILLY_ORGANIZATION_ID],
          },
          permissions: [
            "PostToken",
            "PostDigitalWalletValidation",
            "StorefrontGetAccount",
            "StorefrontPatchAccount",
            "StorefrontPostPayment",
            "StorefrontGetTransactionCollection",
            "StorefrontGetTransaction",
            "StorefrontGetPaymentInstrumentCollection",
            "StorefrontPostPaymentInstrument",
            "StorefrontGetPaymentInstrument",
            "StorefrontPatchPaymentInstrument",
            "StorefrontPostPaymentInstrumentDeactivation",
            "StorefrontGetWebsite",
            "StorefrontGetInvoiceCollection",
            "StorefrontGetInvoice",
            "StorefrontGetProductCollection",
            "StorefrontGetProduct",
            "StorefrontPostReadyToPay",
            "StorefrontGetPaymentInstrumentSetup",
            "StorefrontPostPaymentInstrumentSetup",
            "StorefrontGetDepositRequest",
            "StorefrontGetDepositStrategy",
            "StorefrontPostDeposit",
          ],
        },
      ],
      customClaims: {
        websiteId: REBILLY_WEBSITE_ID,
      },
    },
  });
  const {fields: {id: depositRequestId}} = await api.depositRequests.create({
    data: {
      websiteId: REBILLY_WEBSITE_ID,
      customerId,
      currency,
      strategyId,
    },
  });
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
