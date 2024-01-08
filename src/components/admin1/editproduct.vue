<template>
  <div class="bg-gray-100">
    <div class="container mx-auto my-8 p-8 bg-white rounded shadow-md">
      <h2 class="text-2xl font-bold mb-6">Edit Product</h2>
      <form @submit.prevent="updateProduct" class="space-y-4">
        <div class="flex flex-col">
          <label for="productName" class="mb-2 text-sm font-medium">Product Name:</label>
          <input v-model="product.name" required class="px-4 py-2 border rounded">
        </div>

        <div class="flex flex-col">
          <label for="productSize" class="mb-2 text-sm font-medium">Size:</label>
          <input v-model="product.size" class="px-4 py-2 border rounded">
        </div>

        <div class="flex flex-col">
          <label for="productDescription" class="mb-2 text-sm font-medium">Description:</label>
          <textarea v-model="product.description" required rows="4" cols="50" class="px-4 py-2 border rounded"></textarea>
        </div>

        <!-- <div class="flex flex-col">
          <label for="categoryId" class="mb-2 text-sm font-medium">Category:</label>
          <select v-model="product.categoryId"  required class="px-4 py-2 border rounded">
            <option v-for="category in categories" :key="category.id" :value="category.id">{{ category.name }}</option>
          </select>
        </div> -->


        <!-- <div class="flex flex-col">
          <label for="productImage" class="mb-2 text-sm font-medium">Image:</label>
          <input type="file" @change="handleFileUpload" class="px-4 py-2 border rounded">
        </div> -->

        <div class="flex flex-col">
          <label for="productQuantity" class="mb-2 text-sm font-medium">Quantity:</label>
          <input type="number" v-model="product.quantity" required class="px-4 py-2 border rounded">
        </div>

        <div class="flex flex-col">
          <label for="productPrice" class="mb-2 text-sm font-medium">Price:</label>
          <input type="number" v-model="product.price" required class="px-4 py-2 border rounded">
        </div>

        <button  @click="updateProduct" class="bg-green-500 text-white px-6 py-2 rounded hover:bg-green-600">Update Product</button>
        

        <router-link :to="'/adminProduct/'" class="bg-blue-500 text-white py-2 px-3 ml-2 rounded">Quay Lại</router-link>
      </form>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      product: {
        id: null,
        name: '',
        size: '',
        description: '',
        quantity: 0,
        price: 0,
      },
      categories: [],
    };
  },
  methods: {

    async updateProduct() {
      if (!this.isValidProduct()) {
        alert('Vui lòng nhập đầy đủ thông tin sản phẩm.');
        return;
      }

      try {
        const formData = new FormData();
        formData.append('id', this.product.id);
        formData.append('name', this.product.name);
        formData.append('size', this.product.size);
        formData.append('description', this.product.description);
        formData.append('quantity', this.product.quantity);
        formData.append('price', this.product.price);

        const response = await axios.post(`https://tobilaravel-production.up.railway.app/api/update-product/${this.product.id}`, formData, {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        });

        console.log('Phản hồi từ server:', response.data);

this.$router.push('/adminProduct');
} catch (error) {
console.error('Lỗi khi cập nhật sản phẩm:', error);
}
},

    isValidProduct() {
      return (
        this.product.name &&
        this.product.size &&
        this.product.description &&
        this.product.quantity !== null &&
        this.product.price !== null
      );
    },

    async fetchProductDetails() {
      const productId = this.$route.params.id;

      try {
        const response = await axios.get(`https://tobilaravel-production.up.railway.app/api/edit-product/${productId}`);

        this.product = response.data.product;
        this.categories = response.data.categories;
      } catch (error) {
        console.error('Lỗi khi lấy thông tin sản phẩm:', error);
      }
    },

    async fetchCategory() {
      try {
        const response = await axios.get('https://tobilaravel-production.up.railway.app/api/category');
        this.categories = response.data;
      } catch (error) {
        console.error('Lỗi khi lấy danh mục:', error);
      }
    },
  },
  created() {
    this.fetchProductDetails();
    this.fetchCategory();
  },
};
</script>

<style scoped>
</style>
