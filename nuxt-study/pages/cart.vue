<template>
  <div class="container">
    <h1 class="list-title">카트 페이지
      <CartList />
      <div class="extra-panel">
        <button>구매하기</button>
      </div>
    </h1>
  </div>
</template>

<script>
import CartList from '../components/CartList.vue'
// import { FETCH_CART_ITEMS } from '@/store'

export default {
  components: { CartList },
  // async asyncData({ store }) {
  //   await store.dispatch(FETCH_CART_ITEMS);
  // }
}
</script>

<style scoped>
.container {
  margin: 2rem 10rem;
}
.list-title {
  font-weight: 700;
  font-size: 1.4rem;
}

</style>