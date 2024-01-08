<template>
    <div class="container mt-4">
      <div id="thongbao" class="alert alert-danger d-none face" role="alert">
        <button type="button" class="close" data-dismiss="alert" aria-label="Close">
          <span aria-hidden="true">×</span>
        </button>
      </div>
  
      <h1 class="text-center mb-7">Giỏ hàng</h1>
      <div class="row my-4">
        <div class="col col-md-12 my-4">
          <table class="table table-bordered">
            <thead>
              <tr>
                <th>STT</th>
                <th>Ảnh đại diện</th>
                <th>Tên sản phẩm</th>
                <th>Số lượng</th>
                <th>Đơn giá</th>
                <th>Thành tiền</th>
                <th>Hành động</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(item, index) in cartItems" :key="index">
                <td>{{ index + 1 }}</td>
                <td>
                  <img :src="'http://localhost:8000/storage/images/' + item.image" alt="Product Image" class="w-full object-cover mb-2">
                </td>
                <td>{{ item.name }}</td>
                <td class="text-right">{{ item.quantity }}</td>
                <td class="text-right">{{ item.price }}</td>
                <td class="text-right">{{ item.quantity * item.price }}</td>
                <td>
                  <button @click="removeFromCart(index)" class="btn btn-danger btn-delete-sanpham">
                    <i class="fa fa-trash" aria-hidden="true"></i> Xóa
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
  
          <div class="text-right font-bold my-10">Tổng tiền: {{ totalAmount }}</div>
  
          <div class="my-8">
            <button @click="clearCart" class="btn btn-danger btn-md">
              Xóa Giỏ Hàng
            </button>
    
            <button class="btn btn-primary btn-md">
              <router-link :to="'/tuong/'" class="flex flex-col items-center text-black">Trang Home</router-link>
            </button>            
          </div>

        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    computed: {
      cartItems() {
        return JSON.parse(sessionStorage.getItem('cart')) || [];
      },
      totalAmount() {
        return this.cartItems.reduce((total, item) => total + item.quantity * item.price, 0);
      },
    },
    methods: {
      
      addToCart(product) {
        const cart = JSON.parse(sessionStorage.getItem('cart')) || [];
        const existingProduct = cart.find(item => item.id === product.id);
  
        if (existingProduct) {
          existingProduct.quantity += product.quantity;
          existingProduct.price += product.price * product.quantity;
        } else {
          cart.push({
            ...product,
            quantity: product.quantity,
            price: product.price * product.quantity
          });
        }
  
        sessionStorage.setItem('cart', JSON.stringify(cart));
      },
  
      removeFromCart(index) {
        const cart = JSON.parse(sessionStorage.getItem('cart')) || [];
        cart.splice(index, 1);
        sessionStorage.setItem('cart', JSON.stringify(cart));
        this.reloadPage();
      },
  
      clearCart() {
        sessionStorage.removeItem('cart');
        this.reloadPage();
        
      },
  
      reloadPage() {
        window.location.reload();
      },
    },
  };
  </script>
  
