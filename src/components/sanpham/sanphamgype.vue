
<template>
    <div class="tuong">
      <div class="my-7 py-7">
        <p class="text-xl font-bold text-center pb-5">SẢN PHẨM HYPE</p>
        <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-4 cursor-pointer">
          <div v-for="(product, index) in products.slice(0, 4)" :key="product.id" class="text-center product-item">
            <router-link :to="'/productdetail/' + product.id" class="flex flex-col items-center">
            <img :src="'http://localhost:8000/storage/images/' + product.image" alt="Product Image"
              class="w-full h-40 object-cover mb-2" />
            <p class="mb-1 text-[#1c1d1d] text-sm">{{ product.name }}</p>
            <p class="text-[#1c1d1d] text-sm">{{ product.price }}đ</p>
          </router-link>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  


  
  
  
  <script>
  import axios from 'axios';
  
  export default {
    data() {
      return {
        products: [], // Danh sách sản phẩm
      };
    },
    methods: {
      async fetchProducts() {
        try {
          // Gọi API để lấy danh sách sản phẩm
          const response = await axios.get('https://tobilaravel-production.up.railway.app/api/product');
          this.products = response.data;
        } catch (error) {
          console.error('Error fetching products:', error);
          alert('Error fetching products. Please check the console for details.');
        }
      },
    },
    mounted() {
      // Gọi hàm fetchProducts khi component được tạo
      this.fetchProducts();
    },
  };
  </script>

<style scoped>

      /* Thêm CSS để giữ nguyên cấu trúc và giao diện của ô sản phẩm */
  .product-item {
    margin: 10px;
  }
  .product-item img {
    max-width: 100%;
    height: auto;
  }


</style>