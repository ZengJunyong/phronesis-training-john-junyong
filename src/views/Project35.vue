<script setup>
import RebillyInstruments from "@rebilly/instruments";
import { onMounted, ref } from "vue";

onMounted(() => {
  RebillyInstruments.mount({
    organizationId: "org_01JNN4CS8FMV6ZPFYD439YPMFW",
    publishableKey: "pk_sandbox_45JTZXDoFloX7Yg8yrXaQCNvlw0YBhQHGwhmVZW",
    websiteId: "test.com",
    apiMode: "sandbox",
    items: [
      {
        planId: "book-blackjack",
        quantity: 1,
      },
    ],
  });

  RebillyInstruments.on("instrument-ready", (instrument) => {
    console.info("instrument-ready", instrument);
  });
  RebillyInstruments.on("purchase-completed", (purchase) => {
    console.info("purchase-completed", purchase);
  });
});
</script>

<template>
  <div class="form-wrapper">
    <section class="rebilly-instruments-summary"></section>
    <section class="rebilly-instruments"></section>
  </div>
</template>
