<template>
    <div>
        <Header></Header>
      <allsanpham></allsanpham>
      <Footer></Footer>
    </div>
  </template>
  
  <script>
  import allsanpham from "../components/sanpham/allsanpham.vue";
  import Header from '../components/Header.vue';
import Footer from '../components/Footer.vue';
  
  export default {
    components: {
      allsanpham,
      Header,
      Footer
    },
  };
  </script>