export default {
  name: 'Price',
  props: ['amount'],
  data() {
    return {
      priceAmount: this.amount
    }
  },
  created: function () {
    console.log(typeof this.amount)
  }
}
