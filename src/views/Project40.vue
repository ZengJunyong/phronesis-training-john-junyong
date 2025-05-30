<script setup>
import RebillyInstruments from "@rebilly/instruments";
import { onMounted, ref } from "vue";

onMounted(() => {
  RebillyInstruments.mount({
    organizationId: "phronesis---summitvilla",
    publishableKey: "pk_sandbox_qB59oAh9XShdwFBwIr9xEfUFgAhsnDkvCgA8M5_",
    websiteId: "google.com",
    apiMode: "sandbox",
    items: [
      {
        planId: "beginner-roulette-training-series",
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
