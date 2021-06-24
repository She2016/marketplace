<template>
  <v-container>

    <v-row> 
      <v-col cols="12" sm="4" md="4" v-for="product in basket" :key="product.id">
        <BasketProduct :product="product" />
      </v-col>
    </v-row>


    
  </v-container>

</template>
<script>
import BasketProduct from '../components/BasketProduct.vue'
  export default {
    computed: {
      basket() {
        return this.$store.state.basket
      }
    },
    components: {
        BasketProduct
    }
  }
</script>