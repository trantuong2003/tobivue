<template>
    <div class="home">
      <Header></Header>
      <anh></anh>
      <sanphammoi></sanphammoi>
      <sanphamhype></sanphamhype>
      <blog></blog>
      <stylevibe></stylevibe>
      <danhgia></danhgia>
      <Footer></Footer>
  </div>
</template>

<script scoped>
import Header from '../components/Header.vue'
import Footer from '../components/Footer.vue'
import sanphammoi from '../components/sanpham/sanphammoi.vue'
import sanphamhype from '../components/sanpham/sanphamgype.vue'
import blog from '../components/sanpham/blog.vue'
import stylevibe from '../components/sanpham/style&vibe.vue'
import danhgia from '../components/sanpham/danhgia.vue'
import anh from '../components/sanpham/anh.vue'

export default {
  name:"home",
    components: {
      Header,
      Footer,
      sanphammoi,
      sanphamhype,
      blog,
      stylevibe,
      danhgia,
      anh
    }
}
</script>