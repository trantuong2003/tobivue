import { createStore } from 'vuex';

class Store {
  constructor() {
    this.state = {
      cart: [],
    };

    this.mutations = {
      addToCart(state, product) {
        state.cart.push(product);
      },
    };
  }
}

export default createStore(new Store());
