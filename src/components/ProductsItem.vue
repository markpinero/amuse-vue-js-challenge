<template>
  <li v-if="product">
    <a :href="productUrl" class="block flow">
      <img :src="productImage" alt="" loading="lazy" class="w-full" />
      <div>
        <small class="uppercase">{{ product.manufacturer }}</small>
        <div class="flex">
          <div class="flex-auto">
            <h3 class="text-lg">{{ product.name }}</h3>
          </div>
          <div class="text-lg ml-4">{{ productPrice }}</div>
        </div>
      </div>
    </a>
  </li>
</template>

<script>
const BASE_URL = "https://www.amuse.com";
const ASSET_URL =
  "https://res.cloudinary.com/amusenow/w_400,h_400,c_scale,q_60,f_auto,dpr_auto/";

const REQUIRED_KEYS = [
  "entity_id",
  "name",
  "image_url",
  "url",
  "manufacturer",
  "price",
];

export default {
  name: "ProductsItem",

  props: {
    product: {
      type: Object,
      required: true,
      validator: (obj) => REQUIRED_KEYS.every((key) => obj[key]),
    },
  },

  computed: {
    productUrl() {
      return BASE_URL + this.product.url;
    },

    productImage() {
      return this.product.image_url
        ? ASSET_URL + this.product.image_url
        : "https://via.placeholder.com/400";
    },

    productPrice() {
      return "$" + Number(this.product.price).toFixed(2);
    },
  },
};
</script>
