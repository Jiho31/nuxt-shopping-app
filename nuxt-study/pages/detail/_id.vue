<template>
  <div>
    <div class="container">
      <div class="main-panel">
        <img
          class="product-image"
          :src="product.imageUrl"
          :alt="product.name"
        />
      </div>
      <div class="side-panel">
        <p class="name">{{ product.name }}</p>
        <p class="price">{{ product.price }}</p>
        <button type="button" @click="addToCart">Add to Cart</button>
      </div>
    </div>
  </div>
  <!-- <div>
    <h1>상세 페이지</h1>
    <div>
      <img :src="product.imageUrl" :alt="product.name">
      <p>name: {{ product.name }}</p>
      <p>price: {{ product.price }}</p>
    </div>
  </div> -->
</template>

<script>
import { fetchProductById, createCartItem } from '@/api/index'
export default {
  head: {
    title: 'Shopping Item Details',
    meta: [
      {
        hid: 'description',
        name: 'description',
        content: '이 상품은 ~~입니다.',
      },
    ],
    link: [
      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css?family=Roboto&display=swap'
      }
    ]
  },

  async asyncData({ params }) {
    const response = await fetchProductById(params.id);
    const product = response.data;
    return { product }
  },
  created() {
    // console.log(this.$route.params.id);
    fetchProductById(this.$route.params.id);
  },
  methods: {
    async addToCart() {
      // console.log(this.product);
      // alert(this.product);
      const response = await createCartItem(this.product);
      console.log(response);
      this.$store.commit('addCartItem', this.product);
      this.$router.push('/cart');
    },
  },
}
</script>

<style scoped>
.container {
  display: flex;
  justify-content: center;
  margin: 2rem 0;
}
.product-image {
  width: 500px;
  height: 375px;
}
.side-panel {
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 220px;
  text-align: center;
  padding: 0 1rem;
}
</style>
