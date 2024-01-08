<template>
  <div>
    <h1 class="text-3xl font-bold mb-4">Thêm danh mục</h1>

    <div class="max-w-screen-xl mx-auto p-4">
      <!-- thêm danh mục -->
      <form @submit.prevent="addCategory">
        <div class="mb-4">
          <label for="categoryName" class="block text-sm font-medium text-gray-600">Tên danh mục</label>
          <input v-model="newCategoryName" type="text" id="categoryName" name="categoryName" class="mt-1 p-2 border rounded-md w-full" required>
        </div>

        <div class="flex items-center my-4">
          <button type="submit" class="bg-green-500 text-white py-2 px-4 rounded">Thêm danh mục</button>
        </div>
        <router-link to="/admincategory" id="customer_register_link" class="bg-blue-500 text-white py-2 px-2 ml-2 my-3 rounded">
          Quay Lại
        </router-link>
      </form>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import { useRouter } from 'vue-router';
import { ref } from 'vue';

export default {
  setup() {
    const newCategoryName = ref('');
    const router = useRouter();

    const goToAdminCategory = () => {
      router.push('/admincategory');
    };

    const addCategory = async () => {
      try {
        const response = await axios.post('https://tobilaravel-production.up.railway.app/api/addcategory', {
          name: newCategoryName.value,
        });

        console.log('Category added:', response.data);

        goToAdminCategory();
      } catch (error) {
        console.error('Error:', error);
      }
    };

    return {
      newCategoryName,
      addCategory,
    };
  },
};
</script>

<style scoped>
</style>
