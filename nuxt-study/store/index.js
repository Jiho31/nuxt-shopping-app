import { fetchCartItems } from '~/api'

// constants
export const FETCH_CART_ITEMS = 'FETCH_CART_ITEMS'

export const state = () => ({
  cartItems: [],
})

export const mutations = {
  addCartItem(state, cartItem) {
    const newCartItem = {
      ...cartItem,
      imageUrl: `${cartItem.imageUrl}?random=${Math.random()}`,
    }
    // console.log(cartItem)
    state.cartItems.push(newCartItem)
  },
  setCartItems(state, cartItems) {
    state.cartItems = cartItems
  },
}

export const actions = {
  async [FETCH_CART_ITEMS]({ commit }) {
    const { data } = await fetchCartItems()
    commit(
      'setCartItems',
      data.map((item) => ({
        ...item,
        imageUrl: `${item.imageUrl}?random=${Math.random()}`,
      }))
    )
    // console.log(response)
  },
  async nuxtServerInit(storeContext, nuxtContext) {
    const { data } = await fetchCartItems()
    storeContext.commit(
      'setCartItems',
      data.map((item) => ({
        ...item,
        imageUrl: `${item.imageUrl}?random=${Math.random()}`,
      }))
    )
  },
}
