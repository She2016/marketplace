<template>
    <v-card style="border-radius: 30px; border: 5px solid green" class="mx-auto" max-width="344"  >
          <v-img :src="product.imgUrl" height="200" ></v-img>

          <div class="text-center">
            <h2 class="pb-5">{{ product.name }}
              <v-icon v-if="product.quantity > 0" color="green">mdi-checkbox-marked</v-icon>
              <v-icon v-else color="red">mdi-close-box</v-icon>
            </h2>
            <p>Quntité: {{ product.quantity}} </p>
            <h2> {{product.price }} $ </h2>
          </div>

          <v-card-actions class="justify-end">
            <v-btn class="mx-2" outlined color="pink" @click="removeFromBasket(product.id)">
              Remove
            </v-btn>
          </v-card-actions>
      </v-card>
</template>

<script>
export default {
    props: {
        product: {
            type: Object
        }
    },
    methods: {
        removeFromBasket(id) {
            this.$store.dispatch('removeFromBasket', id)
        }
    }
}
</script>