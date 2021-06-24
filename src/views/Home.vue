<template>
  <v-container>

    <v-row> 
      <v-col cols="12" sm="4" md="4" v-for="product in products" :key="product.id">
        <Product :product="product" />
      </v-col>
    </v-row>


    
  </v-container>

</template>

<script>
import Product from '../components/Product.vue'
  export default {
    name: 'Home',
    data() {
      return {
        rounded: true
      }
    },
    computed: {
      products() {
        return this.$store.state.products
      }
    },
    components: {
      Product
    }
  }
</script>

<style>

</style>
