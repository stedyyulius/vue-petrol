import HomeMobile from './Mobile/Home-Mobile.vue';


import Navbar from '../../components/Navbar/Navbar.vue';
import MeterBar from '../../components/MeterBar/MeterBar.vue';
import Chart from '../../components/Chart/Chart.js';
import Price from '../../components/Price/Price.vue';
import Discount from '../../components/Discount/Discount.vue';
import PoinIcon from '../../assets/pointChart.png';

import { petrolStations } from '../../petrol.json';
import { shoppingList } from '../../shopping_list.json';
import { todaySpecial } from '../../specials.json';

var PoinStyle = new Image();
PoinStyle.src = PoinIcon;
const CHART_STYLE = {
  pointRadius: '7',
  pointBackgroundColor: '#ffa000',
  pointStyle: PoinStyle,
  fill: false,
  lineTension: 0,
  borderColor: '#ffa000',
  borderWidth: '1'
}


export default {
  name: 'Home',
  components: {
    HomeMobile,
    Navbar,
    MeterBar,
    Chart,
    Price,
    Discount
  },
  data() {
    return {
      window: {
        width: 0
      },
      datacollection: null,
      petrolStations,
      shoppingList,
      todaySpecial,
      totalPrice: 0,
      datascore: null
    }
  },
  created: function () {
    window.addEventListener('resize', this.handleResize);
    this.calculateTotalPrice();
    this.fillData();
    this.handleResize();
  },
  methods: {
    handleResize() {
      this.window.width = window.innerWidth;
    },
    fillData() {
      this.datacollection = {
        labels: ['JAN 19', 'FEB 19', 'MAR 19'],
        datasets: [
          {
            label: 'Data One',
            ...CHART_STYLE,
            data: [this.getRandomInt(), this.getRandomInt(), this.getRandomInt()]
          }, {
            label: 'Data One',
            ...CHART_STYLE,
            data: [this.getRandomInt(), this.getRandomInt(), this.getRandomInt()]
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
