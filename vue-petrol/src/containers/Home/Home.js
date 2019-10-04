import Navbar from '../../components/Navbar/Navbar.vue';
import MeterBar from '../../components/MeterBar/MeterBar.vue';
import Chart from '../../components/Chart/Chart.js';
import Price from '../../components/Price/Price.vue';
import Discount from '../../components/Discount/Discount.vue';

import { petrolStations } from '../../petrol.json';
import { shoppingList } from '../../shopping_list.json';
import { todaySpecial } from '../../specials.json';

export default {
  name: 'Home',
  components: {
    Navbar,
    MeterBar,
    Chart,
    Price,
    Discount
  },
  data() {
    return {
      datacollection: null,
      petrolStations,
      shoppingList,
      todaySpecial,
      totalPrice: 0
    }
  },
  created: function () {
    console.log(petrolStations)
    this.calculateTotalPrice();
    this.fillData()
  },
  methods: {
    fillData() {
      this.datacollection = {
        labels: [this.getRandomInt(), this.getRandomInt()],
        datasets: [
          {
            label: 'Data One',
            backgroundColor: '#f87979',
            data: [this.getRandomInt(), this.getRandomInt()]
          }, {
            label: 'Data One',
            backgroundColor: '#f87979',
            data: [this.getRandomInt(), this.getRandomInt()]
          }
        ]
      }
    },
    getRandomInt() {
      return Math.floor(Math.random() * (50 - 5 + 1)) + 5
    },
    calculateTotalPrice() {
      for (const item of shoppingList) {
        this.totalPrice += +item.latestPrice
      }
    }
  },
}
