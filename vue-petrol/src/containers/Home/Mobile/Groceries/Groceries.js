import { shoppingList } from '../../../../shopping_list.json';
import { todaySpecial } from '../../../../specials.json';

import Price from '../../../../components/Price/Price.vue';

export default {
  name: 'Groceries',
  components: {
    Price
  },
  data() {
    return {
      shoppingList,
      todaySpecial
    }
  },
  created: function () {
    console.log(shoppingList)
  },
  methods: {
    totalPrice() {
      let result = 0;
      for (const item of shoppingList) {
        result += +item.latestPrice
      }
      return result;
    }
  }
}
