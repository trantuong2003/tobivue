<template>
    <div class="login">
        <Header></Header>
        <login></login>

        <Footer></Footer>
    </div>


</template>

<script scoped>
import Header from '../components/Header.vue'
import Footer from '../components/Footer.vue'
import login from '../components/Login/login.vue'
export default{
    components: {
      Header,
      Footer,
      login

    }
}
</script>