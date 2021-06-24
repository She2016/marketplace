<template>
  <v-app>
    
    <Banner />
  
    <v-main>
      <router-view/>
    </v-main>
  </v-app>
</template>

<script>
import Banner from './components/Banner.vue'
export default {
  name: 'App',

  data: () => ({
    //
  }),
  components: {
    Banner
  }
};
</script>
