<template>
  <div>
    <h1 class="text-3xl font-bold mb-4 ml-[200px]">Data quản trị danh mục</h1>
 
    <div class="max-w-screen-xl mx-auto p-4">
   <router-link to="/addcategory" id="customer_register_link" class="bg-blue-500 text-white py-2 px-2 ml-2 my-3 rounded">
            Add category
          </router-link>
      <table class="w-full bg-white shadow-md rounded-lg overflow-hidden">
        <thead class="bg-gray-50">
          <tr>
            <th
              scope="col"
              class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase"
            >
              STT
            </th>
            <th
              scope="col"
              class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase"
            >
              Name
            </th>
            <th
              scope="col"
              class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase"
            >
              Thao Tác
            </th>
          </tr>
        </thead>
        <tbody class="divide-y divide-gray-200">
          <tr v-for="category in categories" :key="category.id">
            <td class="px-6 py-4">{{ category.id }}</td>
            <td class="px-6 py-4">{{ category.name }}</td>
            <td class="px-6 py-4">
              <button
                @click="confirmDeleteCategory(category.id)"
                class="bg-red-500 text-white py-1 px-2 rounded ml-2"
              >
                Delete
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      categories: [],
    };
  },
  mounted() {
    this.fetchCategory();
  },
  methods: {
    async fetchCategory() {
      try {
        const response = await axios.get("https://tobilaravel-production.up.railway.app/api/category");
        this.categories = response.data;
      } catch (error) {
        console.error("Error fetching categories:", error.message);
      }
    },

    async deleteCategory(categoryId) {
      try {
        const response = await axios.delete(`https://tobilaravel-production.up.railway.app/api/deletecategory/${categoryId}`);

        if (response.status === 200) {
          this.categories = this.categories.filter(
            (category) => category.id !== categoryId
          );
          console.log("Category deleted:", categoryId);
        } else {
          throw new Error("Delete failed");
        }
      } catch (error) {
        console.error("Error deleting category:", error.message);
      }
    },

    confirmDeleteCategory(categoryId) {
      if (confirm("Bạn có chắc chắn muốn xóa danh mục này không?")) {
        this.deleteCategory(categoryId);
      }
    },
  },
};
</script>
