<template>
    <div class="create">
        <Header></Header>
        <create></create>
        <Footer></Footer>
    </div>

</template>

<script scoped>
import Header from '../components/Header.vue'
import Footer from '../components/Footer.vue'
import create from '../components/Login/createaccount.vue'

export default {
    components: {
      Header,
      Footer,
        create,
    }
}
</script>