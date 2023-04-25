<template>
  <div>
    <NuxtLogo />
    <h1>메인 페이지</h1>
    <div>{{ products }}</div>
    <ProductList></ProductList>
  </div>
</template>

<script> 
// import axios from 'axios';
import NuxtLogo from '../components/NuxtLogo.vue'
import ProductList from '../components/ProductList.vue';
export default {
  data(){
    return {
      products: [],
    }
  },
  // async asyncData() {
  //   const response = await axios.get('http://localhost:3000/products')
  //   console.log(response);
  //   const products = response.data;
  //   return { products }
  // },
  async created() {
    // const response = await axios.get('http://localhost:3000/products')
    // console.log(response);
    // this.products = response.data;
  },
  components: {
    NuxtLogo,
    ProductList,
  }
}
</script>

<style>

</style>