<template>
  <h1>{{ product}}</h1>
</template>

<script>
export default {
    computed: {
        product() {
            const products = this.$store.state.products

            for (const pro of products) {
                if (pro.id.toString() === this.$route.params.id) {
                    return pro
                } else {
                    return 'Heloo'
                }
            }
        }
    }
}
</script>