<template>
    <v-app-bar
      app
      color="indigo darken-4"
      dark
    >
    <v-btn icon>
      <v-img :src="logo" width="50" alt="Vue logo" />
    </v-btn>

    <v-spacer></v-spacer>
    <router-link to="/" class="white--text" style="text-decoration: none">
      <v-icon>mdi-home</v-icon>
      Home
    </router-link>

    <v-spacer></v-spacer>
    <router-link to="/basketProducts" class="white--text" style="text-decoration: none">
      <v-icon>mdi-cart</v-icon>
      Panier {{ basket.length }}
    </router-link>
    </v-app-bar>
</template>

<script>
  export default {
    computed: {
      basket() {
        return this.$store.state.basket
      }
    },
    props: {
        logo: {
            type: String
        }
    }
  }
</script>