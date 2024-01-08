<template>
  <div class="tuong">
    <div>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-4 justify-center">
        <img :src="'http://localhost:8000/storage/images/' + product.image" alt="Product Image"
          class="w-full h-[1000px] object-cover mb-2 md:mb-0" />

        <div class="md:pl-8">
          <h1 class="font-bold text-xl py-4">{{ product.name }}</h1>
          <p>{{ product.price }}đ</p>
          <p class="text-xs pb-4">
            Phí vận chuyển được tính tại bước thanh toán
          </p>
          <label for="size">S I Z E:</label>
          <select class="text-lg px-3 mx-4" id="size">
            <option value="">{{ product.size }}</option>
          </select>
          <div class="my-3">
            <button class="mt-5 font-bold border-black border-2 border-solid text-center p-3" @click="addToCart">
              Thêm vào giỏ hàng
            </button>
          </div>
          <div class="my-3">
            <button class="mt-5 font-bold border-black border-2 border-solid text-center p-3 bg-black text-white"
              type="submit">
              Mua Ngay
            </button>
          </div>

          <p class="font-bold mt-4">Form Dáng: <span>Boxy Fit.</span></p>
          <p class="font-bold pt-4">Chất Liệu:</p>
          <div class="my-4">
            <li class="text-sm">Định Lượng: 250GSM</li>
            <li class="text-sm">Thành Phần: 100% Preshurk Cotton - 2 Chiều.</li>
          </div>
          <p class="font-bold my-4">Chi tiết sản phẩm</p>
          <p class="text-sm">{{ product.description }}</p>

          <div class="grid grid-flow-row my-5 py-3">
            <div class="flex justify-between font-bold border-black border-2 border-solid p-3 border-b-0">
              <p>H Ư Ớ N G Đ Ẫ N B Ả O Q U Ả N S Ả N P H Ẩ M</p>
              <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512">
                <path
                  d="M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z" />
              </svg>
            </div>
            <div class="flex justify-between font-bold border-black border-2 border-solid p-3">
              <p>C H Í N H S Á C H Đ Ổ I T R Ả V À H O À N T I Ề N</p>
              <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512">
                <path
                  d="M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script scoped>
import axios from "axios";

export default {
  data() {
    return {
      product: {},
    };
  },
  methods: {
    async fetchProductDetail() {
      try {
        const productId = this.$route.params.id;
        const response = await axios.get(
          `https://tobilaravel-production.up.railway.app/api/products/${productId}`
        );
        this.product = response.data;
      } catch (error) {
        console.error("Error fetching product detail:", error);
        alert(
          "Error fetching product detail. Please check the console for details."
        );
      }
    },
    addToCart() {
      try {
        const { id, name, price, image } = this.product;

        const cartItem = {
          id,
          name,
          price,
          image,
          quantity: 1,
        };

        this.addToCartAction(cartItem);

        document.getElementById("thongbao").classList.remove("d-none");
      } catch (error) {
        console.error("Error adding product to cart:", error);
        alert("Add success.");
      }
    },
    addToCartAction(cartItem) {
      const cart = JSON.parse(sessionStorage.getItem("cart")) || [];
      const existingProductIndex = cart.findIndex(
        (item) => item.id === cartItem.id
      );

      if (existingProductIndex !== -1) {
        cart[existingProductIndex].quantity += cartItem.quantity;
      } else {
        cart.push(cartItem);
      }

      sessionStorage.setItem("cart", JSON.stringify(cart));
    },
  },
  created() {
    this.fetchProductDetail();
  },
};
</script>
