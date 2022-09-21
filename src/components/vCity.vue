<template>
 <div>
   <h1>{{ products.title }}</h1>
 </div>
</template>

<script>
import axios from "axios";

export default {
  name: "vCity",
  data() {
    return {
      id: this.$route.params['title'],
      products: []
    }
  },
  mounted() {
    axios
        .get('http://localhost:3000/prodcut/' + this.id)
        .then(response => (this.products = response.data))
        .catch((err) => {
          console.log(err)
        })
  }
}
</script>

<style scoped>

</style>