<template>
  <main class="container mx-auto pcp-grid">
    <div class="flow" style="--flow-space: 2rem">
      <div class="sticky">
        <ProductsFilter
          title="Categories"
          v-model="selectedCategories"
          :options="categories"
        />
        <ProductsFilter
          title="Sub-Categories"
          v-model="selectedSubCategories"
          :options="subCategories"
        />
      </div>
    </div>

    <div>
      <ul v-if="filteredProducts.length" class="products-grid">
        <ProductsItem
          v-for="(product, i) in filteredProducts"
          :key="product.entity_id + '-' + i"
          :product="product"
        />
      </ul>
      <div v-else class="text-center">No products found.</div>
    </div>
  </main>
</template>

<script>
import { capitalize, mockApi } from "../helpers";
import ProductsFilter from "./ProductsFilter.vue";
import ProductsItem from "./ProductsItem.vue";

export default {
  name: "ProductsList",

  components: {
    ProductsFilter,
    ProductsItem,
  },

  data() {
    return {
      products: [],
      selectedCategories: [],
      selectedSubCategories: [],
    };
  },

  computed: {
    categories() {
      return this.products
        .map((i) => capitalize(i.category))
        .filter((v, i, arr) => arr.indexOf(v) === i) // filter out uniques
        .sort((a, b) => a > b); // sort alphabetically
    },

    subCategories() {
      return this.products
        .map((i) => capitalize(i.sub_category))
        .filter((v, i, arr) => arr.indexOf(v) === i)
        .sort((a, b) => a > b);
    },

    hasSelectedCategories() {
      return !!this.selectedCategories.length;
    },

    filteredProducts() {
      return this.products.filter((i) => {
        return (
          (this.selectedCategories.length
            ? this.selectedCategories
                .map((i) => i.toLowerCase())
                .includes(i.category.toLowerCase())
            : i) &&
          (this.selectedSubCategories.length
            ? this.selectedSubCategories
                .map((i) => i.toLowerCase())
                .includes(i.sub_category.toLowerCase())
            : true)
        );
      });
    },
  },

  async mounted() {
    const response = await mockApi.get();

    this.products = response;
  },
};
</script>

<style>
.pcp-grid {
  display: grid;
  grid-template-columns: minmax(250px, 25%) 1fr;
  grid-gap: 2rem;
}

.products-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  grid-gap: 2rem;
}
</style>
