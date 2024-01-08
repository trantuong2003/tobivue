<template>
    <div class="detail">
        <Header></Header>
        <detail></detail>
        <sanphamtuongtu></sanphamtuongtu>
        <recently></recently>
        <Footer></Footer>
  </div>
</template>

<script scoped>
import Header from '../components/Header.vue'
import Footer from '../components/Footer.vue'
import detail from '../components/productdetail/detail.vue'
import sanphamtuongtu from '../components/productdetail/sanphamtuongtu.vue'
import recently from '../components/productdetail/recentlyviewed.vue'
export default {
    components: {
      Header,
      Footer,
      detail,
      sanphamtuongtu,
      recently,
    }
}
</script>