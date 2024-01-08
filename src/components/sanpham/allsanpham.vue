<template>
    <div class="tuong">
      <div class="my-7 py-7">
        <p class="text-xl font-bold text-center pb-5">SHOP ALL</p>
        <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 cursor-pointer">
          <div v-for="(product, index) in products" :key="product.id" class="text-center product-item ">
            <router-link :to="'/productdetail/' + product.id" class="flex flex-col items-center ">
              <img :src="'http://localhost:8000/storage/images/' + product.image" alt="Product Image"
                class="w-[268px] h-[335px] object-cover mb-2 no-underline" />
              <p class="mb-1 text-[#1c1d1d] text-sm ">{{ product.name }}</p>
              <p class="text-[#1c1d1d] text-sm">{{ product.price }}đ</p>
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </template>

<script>
import axios from "axios";

export default {
    data() {
        return {
            products: [],
        };
    },
    methods: {
        async fetchProducts() {
            try {
                const response = await axios.get("https://tobilaravel-production.up.railway.app/api/product");
                this.products = response.data;
            } catch (error) {
                console.error("Error fetching products:", error);
                alert("Error fetching products. Please check the console for details.");
            }
        },
    },
    mounted() {
        this.fetchProducts();
    },
};
</script>

<style scoped>
.product-item {
    margin: 10px;
}

.product-item img {
    max-width: 100%;
    height: auto;
}
</style>