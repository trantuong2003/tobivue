<template>
  <div class="container ml-[-1000px]">
    <h1 class="text-3xl font-semibold mb-4">Quản lý sản phẩm</h1>

    <button
      @click="goToAddProduct"
      class="bg-blue-500 text-white px-6 py-2 rounded hover:bg-blue-600"
    >
      Add Products
    </button>
    <ProductForm @submit="addProduct" :categories="categories" />

    <!-- danh sách sản phẩm -->
    <table class="min-w-full bg-white border border-gray-300">
      <thead>
        <tr>
          <th class="py-2 px-4 border-b">Tên</th>
          <th class="py-2 px-4 border-b">Giá</th>
          <th class="py-2 px-4 border-b">Size</th>
          <th class="py-2 px-4 border-b">Danh mục</th>
          <th class="py-2 px-4 border-b">Ảnh</th>
          <th class="py-2 px-4 border-b">Mô tả</th>
          <th class="py-2 px-4 border-b">Số Lượng</th>
          <th class="py-2 px-4 border-b">Thao tác</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="product in products" :key="product.id">
          <td class="py-2 px-4 border-b">{{ product.name }}</td>
          <td class="py-2 px-4 border-b">{{ product.price }}</td>
          <td class="py-2 px-4 border-b">{{ product.size }}</td>
          <!-- <td class="py-2 px-4 border-b">{{ product.category_id }}</td> -->
          <td class="py-2 px-4 border-b">
            <template v-if="product.category_id">
              {{
                categories.find(
                  (category) => category.id === product.category_id
                )?.name || "N/A"
              }}
            </template>
            <template v-else> N/A </template>
          </td>
          <!-- <td class="py-2 px-4 border-b">
            <span v-for="category in categories" :key="category.id">
              <span v-if="product.category_id && category.id">
                {{ category.name }}
              </span>
              <span v-else>N/A</span>
            </span>
          </td> -->

          <td class="py-2 px-4 border-b">
            <img
              :src="'http://localhost:8000/storage/images/' + product.image"
              alt="Product Image"
              class="w-10 h-10"
            />
          </td>
          <td class="py-2 px-4 border-b">{{ product.description }}</td>
          <td class="py-2 px-4 border-b">{{ product.quantity }}</td>
          <td class="py-2 px-4 border-b">
            <router-link
              :to="'/editProduct/' + product.id"
              class="bg-blue-500 text-white py-2 px-3 ml-2 rounded"
              >Edit
            </router-link>

            <button
              @click="deleteProduct(product.id)"
              class="bg-red-500 text-white py-1 px-2 rounded ml-2"
            >
              Delete
            </button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import axios from "axios";
import ProductForm from "@/components/admin1/addproduct.vue";
import { defineComponent } from "vue";

export default defineComponent({
  data() {
    return {
      products: [],
      categories: [],
    };
  },

  mounted() {
    this.fetchProducts();
    this.fetchCategories();
  },

  methods: {
    goToAddProduct() {
      this.$router.push({ name: "addproduct" });
    },
    async fetchProducts() {
      try {
        const response = await axios.get("https://tobilaravel-production.up.railway.app/api/product");
        this.products = response.data;
      } catch (error) {
        console.error("Error fetching products:", error);
        alert("Error fetching products. Please check the console for details.");
      }
    },

    async fetchCategories() {
      try {
        const response = await axios.get("https://tobilaravel-production.up.railway.app/api/category");
        this.categories = response.data;
      } catch (error) {
        console.error("Error fetching categories:", error);
        alert(
          "Error fetching categories. Please check the console for details."
        );
      }
    },

    async deleteProduct(productId) {
      try {
        const response = await axios.delete(
          `https://tobilaravel-production.up.railway.app/api/delete-product/${productId}`
        );

        if (response.status === 204) {
          console.log("Product deleted successfully.");
          this.fetchProducts();
        } else {
          console.error("Unexpected status:", response.status);
          alert(
            `Error deleting product. Unexpected status: ${response.status}`
          );
        }
      } catch (error) {
        console.error("Error deleting product:", error);
        alert("Error deleting product. Please check the console for details.");
      } finally {
        this.products = this.products.filter(
          (product) => product.id !== productId
        );
      }
    },
  },
});
</script>
