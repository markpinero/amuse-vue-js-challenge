<template>
  <div id="app">
    <ProductsList />

    <ModalAgeGate
      v-if="showAgeGate"
      :show="showAgeGate"
      @close="showAgeGate = false"
    />
  </div>
</template>

<script>
import { isLocalStorageSupported } from "./helpers";
import ModalAgeGate from "./components/ModalAgeGate.vue";
import ProductsList from "./components/ProductsList.vue";

export default {
  name: "Products",

  components: {
    ModalAgeGate,
    ProductsList,
  },

  data() {
    return {
      showAgeGate: false,
    };
  },

  mounted() {
    if (isLocalStorageSupported()) {
      this.showAgeGate = localStorage.getItem("hideAgeGate") !== "1";
    }
  },
};
</script>

<style lang="postcss">
@import "./css/styles.css";
</style>
