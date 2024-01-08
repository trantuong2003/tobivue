<template>
    <div>
        <Header></Header>
      <cart></cart>
      <Footer></Footer>
    </div>
  </template>
  
  <script>
  import cart from "../components/giohang.vue";
  import Header from '../components/Header.vue';
import Footer from '../components/Footer.vue';
  
  export default {
    components: {
      cart,
      Header,
      Footer
    },
  };
  </script>