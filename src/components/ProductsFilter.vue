<template>
  <div class="bg-gray-200 p-4">
    <h2 class="text-xl font-bold">{{ title }}</h2>
    <div class="overflow-y-scroll h-36 mt-4">
      <ul>
        <li v-for="option in options" :key="option">
          <input
            v-model="selected"
            type="checkbox"
            :id="'option-' + option.toLowerCase()"
            :value="option"
          />
          <label :for="'option-' + option.toLowerCase()">
            {{ option }}
          </label>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "ProductsFilter",

  props: {
    title: String,
    options: Array,
    value: Array,
  },

  computed: {
    selected: {
      get() {
        return this.value;
      },

      set(newValue) {
        console.log(newValue);
        this.$emit("input", newValue);
      },
    },
  },
};
</script>

<style></style>
