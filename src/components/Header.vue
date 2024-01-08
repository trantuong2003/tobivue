<template>
  <div>
    <p class="flex justify-center text-white py-2 bg-black w-full m-0">
      7 Ngày Đổi Trả Sản Phẩm <span class="text-xs pt-1">Miễn Phí 2 Chiều</span>
    </p>

    <div class="flex justify-around items-center py-2 lg:px-8 bg-[#F1F0EC] sticky top-0 z-10 border">
      <div class="text-white text-xl cursor-pointer ml-5">
        <svg class="" xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512">
          <!-- Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com -->
          <!-- License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. -->
          <path
            d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z" />
        </svg>
      </div>

      <div class="hidden lg:flex">
        <div class="relative group">
          <p class="px-3 cursor-pointer  group-hover:underline font-bold text-sm pt-2 ">SHOP</p>
          <div class="hidden group-hover:block absolute bg-[#F1F0EC] shadow-md py-2 ">
            <!-- <p
              class="px-4 py-2 cursor-pointer transition-transform duration-500 transform -translate-y-2 opacity-0 group-hover:opacity-100 group-hover:translate-y-0"
            >
              All
            </p> -->
            <router-link to="/product"
              class="text-black hover:no-underline px-4 py-2 cursor-pointer transition-transform duration-500 transform -translate-y-2 opacity-0 group-hover:opacity-100 group-hover:translate-y-0 border">
              All Products
            </router-link>

          </div>
        </div>

        <div>
          <p class="px-3 font-bold text-sm pt-2">LOOKBOOK</p>
        </div>
        <p class="px-3 font-bold text-sm pt-2">COLLECTION</p>
      </div>

      <div class="px-4 ml-14">
        <router-link :to="'/tuong/'" class="flex flex-col items-center">
          <img src="https://www.tobiclo.com/cdn/shop/files/logo_110x.png?v=1695203315" alt="" />
        </router-link>
      </div>

      <div class="hidden lg:flex">
        <p class="px-3 font-bold text-sm pt-2">STYLE & VIBE</p>
        <p class="px-3 font-bold text-sm pt-2">BLOG</p>
        <p class="px-3 font-bold text-sm pt-2">ABOUT US</p>
      </div>

      <div class="flex text-xl cursor-pointer mr-5">
        <router-link :to="'/login/'" class="flex flex-col items-center text-black mx-3">
          <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512">
            <!-- Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com -->
            <!-- License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. -->
            <path
              d="M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512H418.3c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304H178.3z" />
          </svg>
        </router-link>
        <router-link :to="'/cart/'" class="flex flex-col items-center text-black">
          <svg class="px-3" xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 576 512">
            <!-- Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com -->
            <!-- License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. -->
            <path
              d="M0 24C0 10.7 10.7 0 24 0H69.5c22 0 41.5 12.8 50.6 32h411c26.3 0 45.5 25 38.6 50.4l-41 152.3c-8.5 31.4-37 53.3-69.5 53.3H170.7l5.4 28.5c2.2 11.3 12.1 19.5 23.6 19.5H488c13.3 0 24 10.7 24 24s-10.7 24-24 24H199.7c-34.6 0-64.3-24.6-70.7-58.5L77.4 54.5c-.7-3.8-4-6.5-7.9-6.5H24C10.7 48 0 37.3 0 24zM128 464a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm336-48a48 48 0 1 1 0 96 48 48 0 1 1 0-96z" />
          </svg>
        </router-link>
        <div id="logoutButton" @click="logout" class="mx-3">
          <svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 512 512" onclick="logout()">
            <path
              d="M377.9 105.9L500.7 228.7c7.2 7.2 11.3 17.1 11.3 27.3s-4.1 20.1-11.3 27.3L377.9 406.1c-6.4 6.4-15 9.9-24 9.9c-18.7 0-33.9-15.2-33.9-33.9l0-62.1-128 0c-17.7 0-32-14.3-32-32l0-64c0-17.7 14.3-32 32-32l128 0 0-62.1c0-18.7 15.2-33.9 33.9-33.9c9 0 17.6 3.6 24 9.9zM160 96L96 96c-17.7 0-32 14.3-32 32l0 256c0 17.7 14.3 32 32 32l64 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-64 0c-53 0-96-43-96-96L0 128C0 75 43 32 96 32l64 0c17.7 0 32 14.3 32 32s-14.3 32-32 32z" />
          </svg>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import { useRouter } from 'vue-router';

export default {
  name: "Header",
  setup() {
    const router = useRouter();

    const logout = async () => {
      try {
        await axios.post('https://tobilaravel-production.up.railway.app/api/logout');
        localStorage.removeItem('token');
        router.push({ name: 'login' });
      } catch (error) {
        console.error('Error logging out:', error);
      }
    };

    return { logout };
  },
};
</script>
