import Navbar from '../../components/Navbar/Navbar.vue';

import { shoppingList } from '../../shopping_list.json';

export default {
  name: 'Home',
  components: {
    Navbar
  },
  data() {
    return {
      shoppingList,
      totalPrice: 0
    }
  },
  created: function () {
    this.calculateTotalPrice();
  },
  methods: {
    calculateTotalPrice() {
      for (const item of shoppingList) {
        this.totalPrice += +item.latestPrice
      }
    }
  },
}
