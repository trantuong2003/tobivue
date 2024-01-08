<script>
import { RouterLink, RouterView } from 'vue-router'

import Home from './views/Home.vue'

export default{ 
  components: {
    Home
  }
}
</script>

<template>
  <div class="id">
    <header>
      <div>
        
      </div>
    </header>
  </div>


<RouterView />



</template>

<style>
.id{
  display: block;
  place-items: normal;
}


 
</style>
