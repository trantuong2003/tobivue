<template>
  <div class="bg-gray-100">
    <div class="container mx-auto my-8 p-8 bg-white rounded shadow-md">
      <h2 class="text-2xl font-bold mb-6">Add Product</h2>
      <form @submit.prevent="addProduct" class="space-y-4">
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

        <div class="flex flex-col">
          <label for="categoryId" class="mb-2 text-sm font-medium">Category:</label>
          <select v-model="product.categoryId" required class="px-4 py-2 border rounded">
            <option v-for="category in categories" :key="category.id" :value="category.id">{{ category.name }}</option>
          </select>
        </div>

        <div class="flex flex-col">
          <label for="productImage" class="mb-2 text-sm font-medium">Image:</label>
          <input type="file" @change="handleFileUpload" class="px-4 py-2 border rounded">
        </div>

        <div class="flex flex-col">
          <label for="productQuantity" class="mb-2 text-sm font-medium">Quantity:</label>
          <input type="number" v-model="product.quantity" required class="px-4 py-2 border rounded">
        </div>

        <div class="flex flex-col">
          <label for="productPrice" class="mb-2 text-sm font-medium">Price:</label>
          <input type="number" v-model="product.price" required class="px-4 py-2 border rounded">
        </div>

        <button @click="goToAdminProduct" class="bg-blue-500 text-white px-6 py-2 rounded hover:bg-blue-600">Add Products</button>
        <router-link to="/adminProduct" class="bg-blue-500 text-white py-2 px-2 ml-2 rounded">
          Quay Lại
        </router-link>
      </form>
    </div>
  </div>
</template>

<script>
import { ref, onMounted } from 'vue';
import axios from 'axios';
import { useRouter } from 'vue-router';


export default {
  setup() {
    const product = ref({
      name: '',
      size: '',
      description: '',
      categoryId: '',
      image: '',
      quantity: 0,
      price: 0
    });
    const router = useRouter();

    const categories = ref([]);

    const goToAdminProduct = () => {
      router.push({ name: 'admin-products' });
    };

    const addProduct = async () => {
      if (!isValidProduct()) {
        alert('Vui lòng nhập đầy đủ thông tin sản phẩm.');
        return;
      }

      try {
        const formData = new FormData();
        formData.append('name', product.value.name);
        formData.append('size', product.value.size);
        formData.append('description', product.value.description);
        formData.append('categoryId', product.value.categoryId);
        formData.append('image', product.value.image);
        formData.append('quantity', product.value.quantity);
        formData.append('price', product.value.price);

        const response = await axios.post('https://tobilaravel-production.up.railway.app/api/add-product', formData, {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
          
        });

        console.log('Response from server:', response.data);
        goToAdminProduct(); 
      } catch (error) {
        console.error('Error adding product:', error);
      }
    };

    const getCategories = async () => {
      try {
        const response = await axios.get('https://tobilaravel-production.up.railway.app/api/category');
        categories.value = response.data;
      } catch (error) {
        console.error('Error fetching categories:', error);
      }
    };

    const handleFileUpload = (event) => {
      const file = event.target.files[0];
      product.value.image = file;
    };

    const isValidProduct = () => {
      const p = product.value;
      return (
        p.name && p.size && p.description && p.categoryId && p.image && p.quantity && p.price
      );
    };

    onMounted(() => {
      getCategories();
    });

    return {
      product,
      categories,
      addProduct,
      handleFileUpload,
      isValidProduct
    };
  },
};
</script>
