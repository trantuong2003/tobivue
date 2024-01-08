<!-- <template>
    <div class="tuong">
        <div class="my-7 py-7">
            <p class=" text-xl font-bold text-center pb-5">SẢN PHẨM MỚI</p>
            <div class="grid grid-flow-col cursor-pointer">
                <a href="productdetail">
                    <div class="text-center "
                    @mouseover="showAltImage"
                        @mouseleave="showMainImage">
                        
                        <div class="relative">
                            <img :src="imageSrc">
                            <button v-if="isHover" class="text-white bg-black w-full p-2 absolute">Quick View</button>
                        </div>
                        <p class="pt-2">TOBI Lord Of The Sky T-shirt</p>
                        
                        <p>550.0000đ</p>
                    </div>                    
                </a>

                <div class="text-center" @mouseover="showAltImage1"
                        @mouseleave="showMainImage1">

                        <div class="relative">
                            <img :src="imageSrc1">
                            <button v-if="isHover1" class="text-white bg-black w-full p-2 absolute">Quick View</button>
                        </div>
                    
                    <p class="pt-6">TOBI paneled Boxy Hoodie-Dark Grey</p>
                    <P>680.000đ</P>
                </div>
                <div class="text-center">
                    <img src="https://www.tobiclo.com/cdn/shop/products/flame-on-overprinted-boxy-t-shirt-black-160546_360x.jpg?v=1697562990" alt="">
                    <p class="">Flame On Overprinted Boxy T-shirt</p>
                    <P>450.000đ</P>
                </div>
                <div class="text-center">
                    <img src="https://www.tobiclo.com/cdn/shop/products/multi-technique-boxy-t-shirt-off-white-654075_360x.jpg?v=1695491554" alt="">
                    <p class="pt-4">Multi Technique Boxy T-shirt - Off White</p>
                    <P>680.000đ</P>
                </div>
                <div class="text-center">
                    <img src="https://www.tobiclo.com/cdn/shop/products/multi-technique-boxy-t-shirt-black-352192_360x.jpg?v=1695491552" alt="">
                    <p class="pt-4">TMulti Technique Boxy T-shirt - Black</p>
                    <P>680.000đ</P>
                </div>
            </div>
        </div>
    </div>

</template>

<script>
// import axios from 'axios';
// import ProductForm from '@/components/admin1/addproduct.vue';
// import { defineComponent } from 'vue';
// export default{
//     data() {
//         return {
//             imageSrc:'https://www.tobiclo.com/cdn/shop/products/tobi-lord-of-the-sky-t-shirt-330888_360x.jpg?v=1699220220',
//             mainImage: 'https://www.tobiclo.com/cdn/shop/products/tobi-lord-of-the-sky-t-shirt-330888_360x.jpg?v=1699220220',
//             altImage: 'https://www.tobiclo.com/cdn/shop/products/tobi-lord-of-the-sky-t-shirt-201466_720x.jpg?v=1699220220',
//             isHover: false,
//             imageSrc1: 'https://www.tobiclo.com/cdn/shop/products/tobi-paneled-boxy-hoodie-dark-grey-477923_360x.jpg?v=1697728864',
//             mainImage1: 'https://www.tobiclo.com/cdn/shop/products/tobi-paneled-boxy-hoodie-dark-grey-477923_360x.jpg?v=1697728864',
//             altImage1: 'https://www.tobiclo.com/cdn/shop/products/tobi-paneled-boxy-hoodie-dark-grey-568041_360x.jpg?v=1697728864',
//             isHover1: false,
//         }
//     },
//     methods:{
//         showAltImage(){
//             this.imageSrc = this.altImage,

//             this.isHover = true
//         },
//         showMainImage(){
//             this.imageSrc = this.mainImage,

//             this.isHover = false

//         },
//         showAltImage1(){
//             this.imageSrc1 = this.altImage1,
//             this.isHover1 = true

//         },
//         showMainImage1(){
//             this.imageSrc1 = this.mainImage1,
//             this.isHover1 = false

//         }
//     }
// }
import axios from 'axios';
import ProductForm from '@/components/admin1/addproduct.vue';
import { defineComponent } from 'vue';

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
    async fetchProducts() {
      try {
        const response = await axios.get('http://127.0.0.1:8000/api/product');
        this.products = response.data;
      } catch (error) {
        console.error('Error fetching products:', error);
        alert('Error fetching products. Please check the console for details.');
      }
    },

    async fetchCategories() {
      try {
        const response = await axios.get('http://127.0.0.1:8000/api/category');
        this.categories = response.data;
      } catch (error) {
        console.error('Error fetching categories:', error);
        alert('Error fetching categories. Please check the console for details.');
      }
    },

    async deleteProduct(productId) {
      try {
        const response = await axios.delete(`http://127.0.0.1:8000/api/delete-product/${productId}`);

        if (response.status === 204) {
          console.log('Product deleted successfully.');
          this.fetchProducts();
        } else {
          console.error('Unexpected status:', response.status);
          alert(`Error deleting product. Unexpected status: ${response.status}`);
        }
      } catch (error) {
        console.error('Error deleting product:', error);
        alert('Error deleting product. Please check the console for details.');
      }
    },
  },
});
</script>

<style scoped>

.absolute {
    left:  0;
    bottom: 0;
}

</style> -->
<template>
  <div class="tuong">
    <div class="my-7 py-7">
      <p class="text-xl font-bold text-center pb-5">SẢN PHẨM MỚI</p>
      <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 cursor-pointer">

  <div v-for="(product, index) in products.slice(0, 5)" :key="product.id" class="text-center product-item ">
    <router-link :to="'/productdetail/' + product.id" class="flex flex-col items-center">
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
}</style>
