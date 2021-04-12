<template>
  <div class="modal" role="dialog">
    <div class="w-full max-w-sm bg-white p-8 text-center">
      <h1 class="text-2xl font-bold">Are you over 21?</h1>
      <div class="flex justify-center mt-8">
        <label
          for="over-21"
          class="block w-24 bg-green-500 p-4 uppercase rounded font-bold"
        >
          <input
            id="over-21"
            v-model="value"
            type="radio"
            :value="true"
            class="hidden"
          />
          Yes
        </label>
        <label
          for="under-21"
          class="block w-24 bg-red-500 p-4 uppercase rounded font-bold ml-8"
        >
          <input
            id="under-21"
            v-model="value"
            type="radio"
            :value="false"
            class="hidden"
          />
          No
        </label>
      </div>
    </div>
  </div>
</template>

<script>
import { isLocalStorageSupported } from "../helpers";

export default {
  name: "ModalAgeGate",

  props: {
    show: Boolean,
  },

  data() {
    return {
      value: null,
    };
  },

  watch: {
    value: "checkOver21",
  },

  mounted() {
    document.body.style.setProperty("height", "100vh");
    document.body.style.setProperty("overflow", "hidden");
  },

  beforeDestroy() {
    document.body.style.removeProperty("height");
    document.body.style.removeProperty("overflow");
  },

  methods: {
    checkOver21(isOver21) {
      if (isOver21) {
        console.log("test");
        isLocalStorageSupported() && localStorage.setItem("hideAgeGate", "1");

        this.$emit("close");
      } else {
        window.location.href = "https://www.google.com";
      }
    },
  },
};
</script>

<style lang="postcss">
.modal {
  @apply fixed inset-0 bg-gray-900 bg-opacity-80;

  display: grid;
  place-items: center;
}
</style>
